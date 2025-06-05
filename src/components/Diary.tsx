import React, { useState, useMemo, useRef } from 'react';
import { X, Plus, Save, List, ChevronRight, Mic, FileText } from 'lucide-react';

interface DiaryEntry {
  id: string;
  date: string;
  stressLevel: number;
  mood: number;
  energyLevel: number;
  location: string;
  timeOfDay: string;
  triggers: string[];
  physicalSymptoms: string[];
  emotions: string[];
  thoughts: string[];
  copingStrategies: string[];
  strategyEffectiveness: number;
  satisfactionLevel: number;
  gratitude: string;
  notes: string;
}

interface QuickEntry {
  id: string;
  date: string;
  text: string;
}

interface DiaryProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRIGGERS = [
  'Arbeit +', 'Familie +', 'Zeitdruck +', 'Lärm +', 'Konflikte +', 
  'Gesundheit +', 'Finanzen +', 'Verkehr +', 'Termine +', 'Andere +'
];

const PHYSICAL_SYMPTOMS = [
  'Herzklopfen +', 'Verspannter Nacken +', 'Flacher Atem +', 'Schwitzen +',
  'Kopfschmerzen +', 'Müdigkeit +', 'Magenschmerzen +', 'Schwindel +'
];

const EMOTIONS = [
  'Ängstlich +', 'Ärgerlich +', 'Überfordert +', 'Frustriert +',
  'Traurig +', 'Hoffnungsvoll +', 'Ruhig +', 'Zuversichtlich +'
];

const COPING_STRATEGIES = [
  'Progressive Muskelentspannung +',
  'Stressbarometer +',
  'Stresstagebuch +',
  'Persönliche Stressanalyse +',
  'Gedankenstopp-Technik +',
  'Positive Selbstgespräche +',
  'Atemtechniken +',
  'Body-Scan Meditation +'
];

const LOCATIONS = [
  'Büro +', 'Zuhause +', 'Unterwegs +', 'Bei Familie/Freunden +'
];

const TIMES_OF_DAY = [
  'Morgens +', 'Vormittags +', 'Mittags +', 'Nachmittags +', 'Abends +', 'Nachts +'
];

export default function Diary({ isOpen, onClose }: DiaryProps) {
  const [showEntries, setShowEntries] = useState(false);
  const [showDetailedEditor, setShowDetailedEditor] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [newEntry, setNewEntry] = useState<Partial<DiaryEntry>>({
    notes: ''
  });
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [showTextModal, setShowTextModal] = useState(false);
  const [textDiary, setTextDiary] = useState('');
  const recognitionRef = useRef<any>(null);

  if (!isOpen) return null;

  // Sprachaufnahme-Logik (Web Speech API)
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
    const entry: DiaryEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      stressLevel: 5,
      mood: 50,
      energyLevel: 50,
      location: '',
      timeOfDay: '',
      triggers: [],
      physicalSymptoms: [],
      emotions: [],
      thoughts: [],
      copingStrategies: [],
      strategyEffectiveness: 3,
      satisfactionLevel: 3,
      gratitude: '',
      notes: voiceTranscript
    };
    setEntries(prev => [entry, ...prev]);
    setShowVoiceModal(false);
    setVoiceTranscript('');
  };

  const handleSaveEntry = () => {
    const entry: DiaryEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      stressLevel: 5,
      mood: 50,
      energyLevel: 50,
      location: '',
      timeOfDay: '',
      triggers: [],
      physicalSymptoms: [],
      emotions: [],
      thoughts: [],
      copingStrategies: [],
      strategyEffectiveness: 3,
      satisfactionLevel: 3,
      gratitude: '',
      notes: newEntry.notes || ''
    };
    setEntries(prev => [entry, ...prev]);
    setShowDetailedEditor(false);
    setNewEntry({ notes: '' });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-background rounded-2xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent">
          <X className="w-6 h-6 text-text" />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-text text-center">Neues mentales Tagebuch</h2>
        {!showDetailedEditor ? (
          <>
            <div className="flex flex-col gap-6 mb-8">
              <button
                className="flex items-center rounded-2xl p-6 bg-journalgreen relative overflow-hidden min-h-[110px]"
                onClick={() => setShowVoiceModal(true)}
              >
                <Mic className="w-20 h-20 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
                <div className="flex-1 flex flex-col items-center justify-center z-10">
                  <span className="text-white font-bold text-lg mb-2 drop-shadow">Sprach-Tagebuch</span>
                  <span className="border-2 border-white text-white rounded-full px-6 py-1 font-semibold">Jetzt starten</span>
                </div>
              </button>
              <button
                className="flex items-center rounded-2xl p-6 bg-yellow-300/80 relative overflow-hidden min-h-[110px]"
                onClick={() => setShowTextModal(true)}
              >
                <FileText className="w-20 h-20 text-yellow-400/40 absolute left-4 top-1/2 -translate-y-1/2" />
                <div className="flex-1 flex flex-col items-center justify-center z-10">
                  <span className="text-white font-bold text-lg mb-2 drop-shadow">Text-Tagebuch</span>
                  <span className="border-2 border-white text-white rounded-full px-6 py-1 font-semibold">Jetzt starten</span>
                </div>
              </button>
              <button
                className="flex items-center rounded-2xl p-6 bg-red-400/80 relative overflow-hidden min-h-[110px]"
                onClick={() => setShowDetailedEditor(true)}
              >
                <List className="w-20 h-20 text-red-200/40 absolute left-4 top-1/2 -translate-y-1/2" />
                <div className="flex-1 flex flex-col items-center justify-center z-10">
                  <span className="text-white font-bold text-lg mb-2 drop-shadow">Detaillierter Eintrag</span>
                  <span className="border-2 border-white text-white rounded-full px-6 py-1 font-semibold">Jetzt starten</span>
                </div>
              </button>
            </div>
            <button
              className="w-full bg-secondary text-text rounded-3xl p-4 font-medium border-2 border-transparent hover:border-primary transition-all mb-2"
              onClick={() => setShowEntries(true)}
            >
              Meine Einträge
            </button>
          </>
        ) : (
          <div className="bg-card rounded-3xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-text">Detaillierter Eintrag</h3>
            <textarea
              value={newEntry.notes}
              onChange={e => setNewEntry(prev => ({ ...prev, notes: e.target.value }))}
              placeholder="Wie war dein Tag? Schreibe hier deine Gedanken, Gefühle oder Erlebnisse auf..."
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary min-h-[120px] bg-background text-text"
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setShowDetailedEditor(false)}
                className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all"
              >
                Abbrechen
              </button>
              <button
                onClick={handleSaveEntry}
                className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all"
              >
                <Save className="w-5 h-5" />
                Speichern
              </button>
            </div>
          </div>
        )}
        {/* Modal für Einträge */}
        {showEntries && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto">
              <button onClick={() => setShowEntries(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent">
                <X className="w-6 h-6 text-text" />
              </button>
              <h3 className="text-xl font-bold mb-4 text-text">Meine Einträge</h3>
              {entries.length === 0 && <p className="text-text/70">Noch keine Einträge.</p>}
              {entries.map(entry => (
                <div key={entry.id} className="bg-card rounded-xl p-4 mb-4">
                  <div className="text-xs text-text/70 mb-2">{new Date(entry.date).toLocaleString()}</div>
                  <div className="text-text whitespace-pre-line">{entry.notes}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Voice Modal */}
        {showVoiceModal && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto">
              <button onClick={() => { setShowVoiceModal(false); setIsRecording(false); setVoiceTranscript(''); }} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent">
                <X className="w-6 h-6 text-text" />
              </button>
              <h3 className="text-xl font-bold mb-4 text-text">Sprachaufnahme</h3>
              <div className="mb-4">
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all mb-4 ${isRecording ? 'bg-red-500 text-white' : 'bg-primary text-white hover:bg-primary/90'}`}
                >
                  {isRecording ? 'Stopp' : 'Aufnahme starten'}
                </button>
                <div className="bg-muted/30 rounded-xl p-4 min-h-[80px] text-text">
                  {voiceTranscript ? voiceTranscript : 'Sprich jetzt, um Text zu transkribieren...'}
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => { setShowVoiceModal(false); setIsRecording(false); setVoiceTranscript(''); }}
                  className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all"
                >
                  Abbrechen
                </button>
                <button
                  onClick={saveVoiceEntry}
                  className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all"
                  disabled={!voiceTranscript}
                >
                  <Save className="w-5 h-5" />
                  Speichern
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Text-Tagebuch Modal */}
        {showTextModal && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-background rounded-2xl w-full max-w-md p-6 relative max-h-[80vh] overflow-y-auto">
              <button onClick={() => { setShowTextModal(false); setTextDiary(''); }} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent">
                <X className="w-6 h-6 text-text" />
              </button>
              <h3 className="text-xl font-bold mb-4 text-text">Text-Tagebuch</h3>
              <textarea
                value={textDiary}
                onChange={e => setTextDiary(e.target.value)}
                placeholder="Schreibe hier deinen Eintrag..."
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary min-h-[120px] bg-background text-text mb-4"
              />
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => { setShowTextModal(false); setTextDiary(''); }}
                  className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-muted text-text hover:bg-muted/80 transition-all"
                >
                  Abbrechen
                </button>
                <button
                  onClick={() => {
                    const entry = {
                      id: Date.now().toString(),
                      date: new Date().toISOString(),
                      stressLevel: 5,
                      mood: 50,
                      energyLevel: 50,
                      location: '',
                      timeOfDay: '',
                      triggers: [],
                      physicalSymptoms: [],
                      emotions: [],
                      thoughts: [],
                      copingStrategies: [],
                      strategyEffectiveness: 3,
                      satisfactionLevel: 3,
                      gratitude: '',
                      notes: textDiary
                    };
                    setEntries(prev => [entry, ...prev]);
                    setShowTextModal(false);
                    setTextDiary('');
                  }}
                  className="w-1/2 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all"
                  disabled={!textDiary.trim()}
                >
                  <Save className="w-5 h-5" />
                  Speichern
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}