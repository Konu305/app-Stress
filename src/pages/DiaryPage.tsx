import React, { useState, useRef, useEffect } from 'react';
import { X, Save, List, Mic, FileText, ChevronLeft, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DiaryEntry {
  id: string;
  date: string;
  notes: string;
  stressLevel?: number;
  situation?: string;
  trigger?: string[];
  triggerOther?: string;
  physical?: string[];
  physicalOther?: string;
  emotional?: string[];
  emotionalOther?: string;
  thoughts?: string;
  retrospectiveRating?: number;
  reflectionHelpful?: string;
  reflectionText?: string;
  whatWouldHelp?: string[];
  whatWouldHelpOther?: string;
  wishBehavior?: string;
  practiceOpportunity?: string;
  mood?: string;
}

const TRIGGERS = [
  'Arbeit', 'Familie', 'Verkehr', 'Gesundheit', 'Soziale Medien', 'Sonstiges'
];
const PHYSICAL = [
  'Herzrasen', 'Schwitzen', 'Magenbeschwerden', 'Zittern', 'Anspannung', 'Müdigkeit'
];
const EMOTIONAL = [
  'Wut', 'Angst', 'Überforderung', 'Traurigkeit', 'Hilflosigkeit', 'Schuld'
];
const WHAT_HELP = [
  'Ruhe bewahren', 'Atmen', 'Gedanken umlenken', 'Unterstützung holen', 'Pause machen'
];

// Mood-Icons und Labels für Schritt 1
const MOODS = [
  { id: 'warm', label: 'Warm', emoji: '🥰', color: 'bg-[#F6D98A]' },
  { id: 'depressed', label: 'Depressed', emoji: '😔', color: 'bg-[#E6E2D1]' },
  { id: 'sad', label: 'Sad', emoji: '😢', color: 'bg-[#EBAE8C]' },
  { id: 'neutral', label: 'Neutral', emoji: '😐', color: 'bg-[#D9D9C2]' },
  { id: 'happy', label: 'Happy', emoji: '😊', color: 'bg-[#F2C75B]' },
  { id: 'overjoyed', label: 'Overjoyed', emoji: '😄', color: 'bg-journalgreen/80' },
];

// Neue Emotionen mit Emoji und Text
const EMOTIONS = [
  { id: 'anger', label: 'Wut', emoji: '😠' },
  { id: 'fear', label: 'Angst', emoji: '😰' },
  { id: 'sadness', label: 'Traurigkeit', emoji: '😢' },
  { id: 'overwhelm', label: 'Überforderung', emoji: '😩' },
  { id: 'helpless', label: 'Hilflosigkeit', emoji: '😞' },
  { id: 'neutral', label: 'Neutral', emoji: '😐' },
  { id: 'satisfied', label: 'Zufriedenheit', emoji: '🙂' },
  { id: 'joy', label: 'Freude', emoji: '😄' },
];

// Auslöser mit Icons
const TRIGGERS_ICONS = [
  { id: 'work', label: 'Arbeit', emoji: '⏰' },
  { id: 'family', label: 'Familie', emoji: '👪' },
  { id: 'health', label: 'Gesundheit', emoji: '💊' },
  { id: 'social', label: 'Soziale Kontakte', emoji: '💬' },
  { id: 'time', label: 'Zeitdruck', emoji: '⏳' },
  { id: 'money', label: 'Finanzen', emoji: '💸' },
  { id: 'other', label: 'Sonstiges', emoji: '➕' },
];

// Körperliche Reaktionen
const PHYSICAL_REACTIONS = [
  { id: 'tremble', label: 'Zittern' },
  { id: 'heartbeat', label: 'Herzklopfen' },
  { id: 'sweat', label: 'Schwitzen' },
  { id: 'breath', label: 'Atemprobleme' },
  { id: 'stomach', label: 'Magenbeschwerden' },
  { id: 'muscle', label: 'Muskelanspannung' },
  { id: 'tired', label: 'Müdigkeit' },
  { id: 'none', label: 'Keine' },
  { id: 'other', label: 'Sonstiges' },
];

export default function DiaryPage() {
  const navigate = useNavigate();
  const [showVoice, setShowVoice] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showDetailed, setShowDetailed] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [textDiary, setTextDiary] = useState('');
  const [detailedDiary, setDetailedDiary] = useState('');
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const recognitionRef = useRef<any>(null);
  
  // States für Text- und Audio-Tagebuch Emotionen
  const [voiceMood, setVoiceMood] = useState<string>('');
  const [textMood, setTextMood] = useState<string>('');
  
  const [detailedForm, setDetailedForm] = useState({
    date: new Date().toISOString().slice(0,16),
    stressLevel: 5,
    situation: '',
    trigger: [] as string[],
    triggerOther: '',
    physical: [] as string[],
    physicalOther: '',
    emotional: [] as string[],
    emotionalOther: '',
    thoughts: '',
    retrospectiveRating: 5,
    reflectionHelpful: '',
    reflectionText: '',
    whatWouldHelp: [] as string[],
    whatWouldHelpOther: '',
    wishBehavior: '',
    practiceOpportunity: ''
  });
  const [detailedStep, setDetailedStep] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);
  // Mood-Auswahl-State
  const [selectedMood, setSelectedMood] = useState<string>('');
  // Multi-Select für Emotionen
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  // Auslöser
  const [selectedTrigger, setSelectedTrigger] = useState<string>('');
  const [triggerOtherText, setTriggerOtherText] = useState('');
  // Körperliche Reaktionen
  const [selectedPhysical, setSelectedPhysical] = useState<string[]>([]);
  const [physicalOtherText, setPhysicalOtherText] = useState('');

  // Lade Einträge aus localStorage
  useEffect(() => {
    const savedEntries = localStorage.getItem('diaryEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Speichere Einträge in localStorage
  const saveEntriesToStorage = (newEntries: DiaryEntry[]) => {
    localStorage.setItem('diaryEntries', JSON.stringify(newEntries));
    setEntries(newEntries);
  };

  // Sprachaufnahme-Logik
  const startRecording = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Spracherkennung wird von deinem Browser nicht unterstützt.');
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'de-DE';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (event: any) => {
      let interim = '';
      let final = '';
      for (let i = 0; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      setVoiceTranscript(final + interim);
    };
    recognition.onend = () => setIsRecording(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  };
  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsRecording(false);
  };
  const saveVoiceEntry = () => {
    const newEntry = { 
      id: Date.now().toString(), 
      date: new Date().toISOString(), 
      notes: voiceTranscript,
      mood: voiceMood
    };
    const newEntries = [newEntry, ...entries];
    saveEntriesToStorage(newEntries);
    setShowVoice(false);
    setVoiceTranscript('');
    setVoiceMood('');
    navigate('/diary-overview');
  };
  const saveTextEntry = () => {
    const newEntry = { 
      id: Date.now().toString(), 
      date: new Date().toISOString(), 
      notes: textDiary,
      mood: textMood
    };
    const newEntries = [newEntry, ...entries];
    saveEntriesToStorage(newEntries);
    setShowText(false);
    setTextDiary('');
    setTextMood('');
    navigate('/diary-overview');
  };
  const saveDetailedEntry = () => {
    // Vor dem Speichern die aktuellen Auswahl-States übernehmen
    const formToSave = {
      ...detailedForm,
      emotional: selectedEmotions,
      trigger: selectedTrigger ? [selectedTrigger] : [],
      triggerOther: triggerOtherText,
      physical: selectedPhysical,
      physicalOther: physicalOtherText
    };
    const { date, ...rest } = formToSave;
    const newEntry = {
      id: Date.now().toString(),
      date,
      notes: formToSave.situation,
      ...rest
    };
    const newEntries = [newEntry, ...entries];
    saveEntriesToStorage(newEntries);
    setShowDetailed(false);
    setDetailedDiary('');
    setDetailedForm({
      date: new Date().toISOString().slice(0,16),
      stressLevel: 5,
      situation: '',
      trigger: [],
      triggerOther: '',
      physical: [],
      physicalOther: '',
      emotional: [],
      emotionalOther: '',
      thoughts: '',
      retrospectiveRating: 5,
      reflectionHelpful: '',
      reflectionText: '',
      whatWouldHelp: [],
      whatWouldHelpOther: '',
      wishBehavior: '',
      practiceOpportunity: ''
    });
    setSelectedEmotions([]);
    setSelectedTrigger('');
    setTriggerOtherText('');
    setSelectedPhysical([]);
    setPhysicalOtherText('');
    setDetailedStep(1);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      navigate('/diary-overview');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background animate-slide-in-right overflow-y-auto">
      <div className="max-w-md mx-auto min-h-screen p-6 relative">
        <button onClick={() => navigate(-1)} className="absolute top-4 left-4 p-2 rounded-full hover:bg-accent">
          <ChevronLeft className="w-6 h-6 text-text" />
        </button>
        <h2 className="text-2xl font-bold mb-8 text-text text-center">Neues mentales Tagebuch</h2>
        {/* Auswahlkarten */}
        <div className="flex flex-col gap-6 mb-8">
          <button className="flex items-center rounded-2xl p-6 bg-journalgreen relative overflow-hidden min-h-[110px]" onClick={() => setShowVoice(true)}>
            <Mic className="w-20 h-20 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
            <div className="flex-1 flex flex-col items-center justify-center z-10">
              <span className="text-white font-bold text-lg mb-2 drop-shadow">Sprach-Tagebuch</span>
              <span className="border-2 border-white text-white rounded-full px-6 py-1 font-semibold">Jetzt starten</span>
            </div>
          </button>
          <button className="flex items-center rounded-2xl p-6 bg-yellow-300/80 relative overflow-hidden min-h-[110px]" onClick={() => setShowText(true)}>
            <FileText className="w-20 h-20 text-yellow-400/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <div className="flex-1 flex flex-col items-center justify-center z-10">
              <span className="text-white font-bold text-lg mb-2 drop-shadow">Text-Tagebuch</span>
              <span className="border-2 border-white text-white rounded-full px-6 py-1 font-semibold">Jetzt starten</span>
            </div>
          </button>
          <button className="flex items-center rounded-2xl p-6 bg-red-400/80 relative overflow-hidden min-h-[110px]" onClick={() => setShowDetailed(true)}>
            <List className="w-20 h-20 text-red-200/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <div className="flex-1 flex flex-col items-center justify-center z-10">
              <span className="text-white font-bold text-lg mb-2 drop-shadow">Detaillierter Eintrag</span>
              <span className="border-2 border-white text-white rounded-full px-6 py-1 font-semibold">Jetzt starten</span>
            </div>
          </button>
        </div>

        {/* Voice Modal */}
        {showVoice && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto">
              <button onClick={() => { setShowVoice(false); setIsRecording(false); setVoiceTranscript(''); setVoiceMood(''); }} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent">
                <X className="w-6 h-6 text-text" />
              </button>
              <h3 className="text-xl font-bold mb-4 text-text">Sprachaufnahme</h3>
              
              {/* Emotionale Reaktion für Voice */}
              <div className="mb-4">
                <span className="text-lg font-bold text-text block mb-3">Wie fühlst du dich?</span>
                <div className="grid grid-cols-2 gap-2">
                  {EMOTIONS.map(em => (
                    <button
                      key={em.id}
                      type="button"
                      onClick={() => setVoiceMood(em.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all text-sm font-semibold border-2 ${voiceMood === em.id ? 'bg-journalgreen/20 border-journalgreen' : 'bg-[#F6F6F2] border-transparent'} hover:shadow-md`}
                    >
                      <span className="text-lg">{em.emoji}</span>
                      <span className="text-text font-bold">{em.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <button onClick={isRecording ? stopRecording : startRecording} className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all mb-4 ${isRecording ? 'bg-red-500 text-white' : 'bg-primary text-white hover:bg-primary/90'}`}>{isRecording ? 'Stopp' : 'Aufnahme starten'}</button>
                <div className="bg-muted/30 rounded-xl p-4 min-h-[80px] text-text">{voiceTranscript ? voiceTranscript : 'Sprich jetzt, um Text zu transkribieren...'}</div>
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={() => { setShowVoice(false); setIsRecording(false); setVoiceTranscript(''); setVoiceMood(''); }} className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all">Abbrechen</button>
                <button onClick={saveVoiceEntry} className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all" disabled={!voiceTranscript || !voiceMood}><Save className="w-5 h-5" />Speichern</button>
              </div>
            </div>
          </div>
        )}
        {/* Text Modal */}
        {showText && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto">
              <button onClick={() => { setShowText(false); setTextDiary(''); setTextMood(''); }} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent">
                <X className="w-6 h-6 text-text" />
              </button>
              <h3 className="text-xl font-bold mb-4 text-text">Text-Tagebuch</h3>
              
              {/* Emotionale Reaktion für Text */}
              <div className="mb-4">
                <span className="text-lg font-bold text-text block mb-3">Wie fühlst du dich?</span>
                <div className="grid grid-cols-2 gap-2">
                  {EMOTIONS.map(em => (
                    <button
                      key={em.id}
                      type="button"
                      onClick={() => setTextMood(em.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all text-sm font-semibold border-2 ${textMood === em.id ? 'bg-journalgreen/20 border-journalgreen' : 'bg-[#F6F6F2] border-transparent'} hover:shadow-md`}
                    >
                      <span className="text-lg">{em.emoji}</span>
                      <span className="text-text font-bold">{em.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <textarea value={textDiary} onChange={e => setTextDiary(e.target.value)} placeholder="Schreibe hier deinen Eintrag..." className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary min-h-[120px] bg-background text-text mb-4" />
              <div className="flex gap-2 mt-4">
                <button onClick={() => { setShowText(false); setTextDiary(''); setTextMood(''); }} className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all">Abbrechen</button>
                <button onClick={saveTextEntry} className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all" disabled={!textDiary.trim() || !textMood}><Save className="w-5 h-5" />Speichern</button>
              </div>
            </div>
          </div>
        )}
        {/* Detailliert Modal */}
        {showDetailed && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center overflow-y-auto">
            <div className="bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[95vh] overflow-y-auto">
              <button onClick={() => { setShowDetailed(false); setDetailedStep(1); }} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent">
                <X className="w-6 h-6 text-text" />
              </button>
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary font-medium">Empfohlen: Mit dem detaillierten Eintrag erkennst du Muster und kannst gezielt an deinem Umgang mit Stress arbeiten.</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-text">Detaillierter Eintrag</h3>
              {/* Schritt 1: Was ist passiert? */}
              {detailedStep === 1 && (
                <>
                  {/* Fortschrittsbalken */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-text">Schritt 1 von 2</span>
                      <button className="text-xs text-primary font-bold underline" onClick={() => {/* Quick-Log-Logik */}}>Quick-Log</button>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-journalgreen rounded-full transition-all" style={{ width: '50%' }} />
                    </div>
                  </div>
                  {/* Datum Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Datum & Uhrzeit</span>
                    <input
                      type="datetime-local"
                      value={detailedForm.date}
                      onChange={e => setDetailedForm(f => ({ ...f, date: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  {/* Emotionen Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Emotionale Reaktion <span className="text-xs text-muted">(max. 3)</span></span>
                    <div className="grid grid-cols-2 gap-3">
                      {EMOTIONS.map(em => (
                        <button
                          key={em.id}
                          type="button"
                          onClick={() => {
                            if (selectedEmotions.includes(em.id)) {
                              setSelectedEmotions(selectedEmotions.filter(e => e !== em.id));
                            } else if (selectedEmotions.length < 3) {
                              setSelectedEmotions([...selectedEmotions, em.id]);
                            }
                          }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-lg font-semibold border-2 ${selectedEmotions.includes(em.id) ? 'bg-journalgreen/20 border-journalgreen' : 'bg-[#F6F6F2] border-transparent'} hover:shadow-md`}
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-2xl">{em.emoji}</span>
                            <span className="text-text font-bold">{em.label}</span>
                          </span>
                          <span className={`ml-auto self-center w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedEmotions.includes(em.id) ? 'border-journalgreen bg-journalgreen' : 'border-muted bg-white'}`}>{selectedEmotions.includes(em.id) && <span className="w-2.5 h-2.5 rounded-full bg-white block" />}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Stresslevel Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Stresslevel</span>
                    <input
                      type="range"
                      min={0}
                      max={10}
                      value={detailedForm.stressLevel}
                      onChange={e => setDetailedForm(f => ({ ...f, stressLevel: Number(e.target.value) }))}
                      className="w-full mb-2 accent-journalgreen"
                    />
                    <div className="flex justify-between text-base text-muted mb-1">
                      <span>0</span><span>5</span><span>10</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted">
                      <span>kein Stress</span><span>mittel</span><span>extrem</span>
                    </div>
                  </div>
                  {/* Auslöser Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Was war der Auslöser?</span>
                    <div className="grid grid-cols-2 gap-3 mb-2">
                      {TRIGGERS_ICONS.map(tr => (
                        <button
                          key={tr.id}
                          type="button"
                          onClick={() => setSelectedTrigger(tr.id)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-lg font-semibold border-2 ${selectedTrigger === tr.id ? 'bg-journalgreen/20 border-journalgreen' : 'bg-[#F6F6F2] border-transparent'} hover:shadow-md`}
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-2xl">{tr.emoji}</span>
                            <span className="text-text font-bold">{tr.label}</span>
                          </span>
                          <span className={`ml-auto self-center w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedTrigger === tr.id ? 'border-journalgreen bg-journalgreen' : 'border-muted bg-white'}`}>{selectedTrigger === tr.id && <span className="w-2.5 h-2.5 rounded-full bg-white block" />}</span>
                        </button>
                      ))}
                    </div>
                    {selectedTrigger === 'other' && (
                      <input type="text" value={triggerOtherText} onChange={e => setTriggerOtherText(e.target.value)} placeholder="Beschreibe den Auslöser..." className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                    )}
                  </div>
                  {/* Beschreibung der Situation Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Was ist genau passiert?</span>
                    <textarea
                      value={detailedForm.situation}
                      onChange={e => setDetailedForm(f => ({ ...f, situation: e.target.value }))}
                      placeholder="Beispiel: Im Meeting wurde ich kritisiert. Ich war überrascht und habe mich zurückgezogen."
                      className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[80px]"
                    />
                  </div>
                  {/* Gedanken Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Gedanken in der Situation</span>
                    <textarea
                      value={detailedForm.thoughts}
                      onChange={e => setDetailedForm(f => ({ ...f, thoughts: e.target.value }))}
                      placeholder="Beispiel: 'Ich kann das nicht.' 'Immer ich.' 'Das ist unfair.'"
                      className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[60px]"
                    />
                  </div>
                  {/* Körperliche Reaktionen Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Körperliche Reaktionen</span>
                    <div className="grid grid-cols-2 gap-3">
                      {PHYSICAL_REACTIONS.map(pr => (
                        <button
                          key={pr.id}
                          type="button"
                          onClick={() => {
                            if (selectedPhysical.includes(pr.id)) {
                              setSelectedPhysical(selectedPhysical.filter(p => p !== pr.id));
                            } else {
                              setSelectedPhysical([...selectedPhysical, pr.id]);
                            }
                          }}
                          className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-lg font-semibold border-2 ${selectedPhysical.includes(pr.id) ? 'bg-journalgreen/20 border-journalgreen' : 'bg-[#F6F6F2] border-transparent'} hover:shadow-md`}
                        >
                          <span className="text-text font-bold">{pr.label}</span>
                          <span className={`ml-auto self-center w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPhysical.includes(pr.id) ? 'border-journalgreen bg-journalgreen' : 'border-muted bg-white'}`}>{selectedPhysical.includes(pr.id) && <span className="w-2.5 h-2.5 rounded-full bg-white block" />}</span>
                        </button>
                      ))}
                    </div>
                    {selectedPhysical.includes('other') && (
                      <input type="text" value={physicalOtherText} onChange={e => setPhysicalOtherText(e.target.value)} placeholder="Beschreibe weitere körperliche Reaktionen..." className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary mt-3" />
                    )}
                  </div>
                  {/* Weiter-Button */}
                  <button
                    onClick={() => setDetailedStep(2)}
                    className="w-full bg-journalgreen text-white rounded-3xl py-4 text-lg font-bold mt-2 shadow-md hover:bg-journalgreen/90 transition-all"
                  >
                    Weiter zur Reflexion
                  </button>
                </>
              )}
              {/* Schritt 2: Reflexion */}
              {detailedStep === 2 && (
                <>
                  {/* Bewertung Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Wie bewertest du die Situation im Nachhinein?</span>
                    <input
                      type="range"
                      min={0}
                      max={10}
                      value={detailedForm.retrospectiveRating}
                      onChange={e => setDetailedForm(f => ({ ...f, retrospectiveRating: Number(e.target.value) }))}
                      className="w-full mb-2 accent-journalgreen"
                    />
                    <div className="flex justify-between text-base text-muted">
                      {[0,1,2,3,4,5,6,7,8,9,10].map(n => (
                        <span key={n}>{n}</span>
                      ))}
                    </div>
                  </div>
                  {/* Reaktion hilfreich Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">War meine Reaktion hilfreich?</span>
                    <div className="flex gap-4 mb-2">
                      <label className="flex items-center gap-2 text-lg font-semibold">
                        <input type="radio" name="reflectionHelpful" checked={detailedForm.reflectionHelpful === 'Ja'} onChange={() => setDetailedForm(f => ({ ...f, reflectionHelpful: 'Ja' }))} /> Ja
                      </label>
                      <label className="flex items-center gap-2 text-lg font-semibold">
                        <input type="radio" name="reflectionHelpful" checked={detailedForm.reflectionHelpful === 'Nein'} onChange={() => setDetailedForm(f => ({ ...f, reflectionHelpful: 'Nein' }))} /> Nein
                      </label>
                    </div>
                    {detailedForm.reflectionHelpful === 'Nein' && (
                      <textarea value={detailedForm.reflectionText} onChange={e => setDetailedForm(f => ({ ...f, reflectionText: e.target.value }))} placeholder="Was war nicht hilfreich? (optional)" className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[60px] mt-2" />
                    )}
                  </div>
                  {/* Was hätte geholfen Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Was hätte besser geholfen?</span>
                    <textarea value={detailedForm.whatWouldHelpOther} onChange={e => setDetailedForm(f => ({ ...f, whatWouldHelpOther: e.target.value }))} placeholder="Was hätte dir geholfen?" className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[60px]" />
                  </div>
                  {/* Wunschverhalten Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Wunschverhalten für das nächste Mal</span>
                    <textarea value={detailedForm.wishBehavior} onChange={e => setDetailedForm(f => ({ ...f, wishBehavior: e.target.value }))} placeholder="Wie möchtest du künftig reagieren?" className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary min-h-[60px]" />
                  </div>
                  {/* Erinnerung Card */}
                  <div className="bg-white rounded-3xl shadow-md p-6 mb-6">
                    <span className="text-xl font-bold text-text block mb-4">Erinnerung setzen zum Üben (optional)</span>
                    <input type="date" value={detailedForm.practiceOpportunity} onChange={e => setDetailedForm(f => ({ ...f, practiceOpportunity: e.target.value }))} className="w-full px-4 py-3 rounded-xl border text-text text-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button onClick={() => setDetailedStep(1)} className="w-1/2 py-4 rounded-3xl font-bold flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all text-lg">Zurück</button>
                    <button onClick={saveDetailedEntry} className="w-1/2 py-4 rounded-3xl font-bold flex items-center justify-center gap-2 bg-journalgreen text-white hover:bg-journalgreen/90 transition-all text-lg"><Save className="w-5 h-5" />Eintrag speichern</button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {/* Feedback-Dialog nach Speichern */}
        {showFeedback && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-background rounded-2xl w-full max-w-xs p-6 text-center">
              <div className="text-3xl mb-2">💪</div>
              <div className="text-lg font-bold mb-2 text-primary">Du hast heute achtsam reflektiert – stark!</div>
              <button onClick={() => setShowFeedback(false)} className="mt-4 w-full py-3 rounded-xl font-medium bg-primary text-white hover:bg-primary/90 transition-all">Schließen</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 