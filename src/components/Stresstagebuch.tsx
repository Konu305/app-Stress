import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Brain, 
  Heart, 
  TrendingUp,
  CheckCircle,
  Calendar,
  Clock,
  AlertCircle,
  Target,
  Lightbulb,
  BarChart3,
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface StresstagebuchProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StressDiaryEntry {
  date: string;
  time: string;
  situation: string;
  stressLevel: number;
  physicalSymptoms: string[];
  emotions: string[];
  thoughts: string;
  coping: string;
  effectiveness: number;
}

const Stresstagebuch: React.FC<StresstagebuchProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<Partial<StressDiaryEntry>>({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
    stressLevel: 5,
    physicalSymptoms: [],
    emotions: [],
    effectiveness: 5
  });
  const [savedEntries, setSavedEntries] = useState<StressDiaryEntry[]>([]);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const physicalSymptoms = [
    "Kopfschmerzen", "Verspannungen", "Herzklopfen", "Schwitzen", 
    "Übelkeit", "Zittern", "Müdigkeit", "Schlafprobleme",
    "Appetitlosigkeit", "Verdauungsprobleme", "Schwindel", "Atemnot"
  ];

  const emotions = [
    "Angst", "Wut", "Frustration", "Traurigkeit", "Hilflosigkeit",
    "Überforderung", "Nervosität", "Gereiztheit", "Verzweiflung",
    "Enttäuschung", "Sorge", "Panik"
  ];

  const steps = [
    {
      title: "Willkommen zum geführten Stresstagebuch",
      subtitle: "Verstehen Sie die Macht der Dokumentation",
      icon: <BookOpen className="w-8 h-8" />,
      audioFile: "https://clarigen.de/wp-content/uploads/2025/06/Stresstagebuch-1.mp3",
      audioText: "Herzlich willkommen zu Ihrem persönlichen Stresstagebuch-Training. In den nächsten 15 Minuten werden Sie verstehen, warum ein Stresstagebuch eines der mächtigsten Werkzeuge für Ihre mentale Gesundheit ist. Studien zeigen, dass Menschen, die regelmäßig ihre Stresserfahrungen dokumentieren, 23% weniger Stress empfinden und bessere Bewältigungsstrategien entwickeln.",
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4D5922] rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#23412C]">Warum ein Stresstagebuch?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4D5922] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#23412C]">Muster erkennen</h4>
                  <p className="text-sm text-[#23412C]/70">Verstehen Sie Ihre Stressauslöser</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4D5922] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#23412C]">Bewusstsein schaffen</h4>
                  <p className="text-sm text-[#23412C]/70">Automatische Reaktionen durchbrechen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4D5922] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#23412C]">Erfolge messen</h4>
                  <p className="text-sm text-[#23412C]/70">Fortschritte sichtbar machen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4D5922] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#23412C]">Strategien entwickeln</h4>
                  <p className="text-sm text-[#23412C]/70">Wirksamste Bewältigungsmethoden finden</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#4D5922] rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#F6D98A] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-2">Wissenschaftlicher Hintergrund</h4>
                <p className="text-sm text-white/90">
                  Das Führen eines Stresstagebuchs aktiviert den präfrontalen Kortex - den Teil des Gehirns, 
                  der für rationales Denken zuständig ist. Dies hilft dabei, emotionale Reaktionen zu regulieren 
                  und neue neuronale Verbindungen zu schaffen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Die Wissenschaft hinter dem Stresstagebuch",
      subtitle: "Verstehen Sie, wie Ihr Gehirn funktioniert",
      icon: <Brain className="w-8 h-8" />,
      audioFile: "https://clarigen.de/wp-content/uploads/2025/06/Stresstagebuch-2.mp3",
      audioText: "Lassen Sie mich Ihnen erklären, was in Ihrem Gehirn passiert, wenn Sie Stress dokumentieren. Wenn wir gestresst sind, übernimmt die Amygdala - unser Alarmzentrum - die Kontrolle. Durch das Aufschreiben aktivieren wir jedoch den präfrontalen Kortex, der für rationales Denken zuständig ist. Dieser Prozess wird 'Affect Labeling' genannt - das Benennen von Gefühlen reduziert nachweislich die Aktivität der Amygdala um bis zu 50%.",
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-xl font-semibold text-[#23412C] mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6 text-[#E86F3A]" />
              Neuroplastizität in Aktion
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E86F3A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-4 h-4 text-[#E86F3A]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#23412C]">Amygdala (Alarmzentrum)</h4>
                  <p className="text-sm text-[#23412C]/70">Reagiert automatisch auf Bedrohungen - löst Stress aus</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#4D5922]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-[#4D5922]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#23412C]">Präfrontaler Kortex</h4>
                  <p className="text-sm text-[#23412C]/70">Wird durch Schreiben aktiviert - ermöglicht rationales Denken</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F6D98A]/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#E86F3A]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#23412C]">Neue neuronale Verbindungen</h4>
                  <p className="text-sm text-[#23412C]/70">Entstehen durch regelmäßige Reflexion - verändern Reaktionsmuster</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#4D5922] rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-[#F6D98A] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-2">Studien-Ergebnisse</h4>
                <ul className="text-sm text-white/90 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F6D98A] rounded-full"></span>
                    23% Reduktion des Stresslevels nach 4 Wochen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F6D98A] rounded-full"></span>
                    50% weniger Aktivität in der Amygdala
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F6D98A] rounded-full"></span>
                    Verbesserte Emotionsregulation um 35%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F6D98A] rounded-full"></span>
                    Bessere Problemlösungsfähigkeiten
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ihr erstes Stresstagebuch-Eintrag",
      subtitle: "Gemeinsam dokumentieren wir eine Stresssituation",
      icon: <MessageCircle className="w-8 h-8" />,
      audioFile: "https://clarigen.de/wp-content/uploads/2025/06/Stresstagebuch-3.mp3",
      audioText: "Jetzt werden wir gemeinsam Ihren ersten Stresstagebuch-Eintrag erstellen. Denken Sie an eine Situation aus den letzten Tagen, die Sie gestresst hat. Es muss nichts Dramatisches sein - auch kleine Alltagsstressoren sind wichtig. Während wir die Situation dokumentieren, achten Sie darauf, wie sich bereits das Aufschreiben auf Ihr Gefühl auswirkt.",
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#E86F3A]" />
              <h3 className="font-medium text-[#23412C]">Situation beschreiben</h3>
            </div>
            <textarea
              value={currentEntry.situation || ''}
              onChange={(e) => setCurrentEntry({...currentEntry, situation: e.target.value})}
              placeholder="Beschreiben Sie die stressige Situation... (z.B. 'Wichtige Präsentation vor dem Chef')"
              className="w-full p-4 bg-white/50 border border-[#F6D98A] rounded-xl resize-none h-32 text-sm text-[#23412C] placeholder-[#23412C]/50 focus:outline-none focus:ring-2 focus:ring-[#E86F3A]"
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-[#E86F3A]" />
              <h3 className="font-medium text-[#23412C]">Stresslevel (1-10)</h3>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="10"
                value={currentEntry.stressLevel || 5}
                onChange={(e) => setCurrentEntry({...currentEntry, stressLevel: Number(e.target.value)})}
                className="flex-1 accent-[#E86F3A]"
              />
              <span className="text-2xl font-bold text-[#E86F3A] min-w-[3rem] text-center">
                {currentEntry.stressLevel}
              </span>
            </div>
            <div className="flex justify-between text-xs text-[#23412C]/70 mt-2">
              <span>Sehr entspannt</span>
              <span>Extrem gestresst</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-[#E86F3A]" />
              <h3 className="font-medium text-[#23412C]">Körperliche Symptome</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {physicalSymptoms.map((symptom) => (
                <label key={symptom} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={currentEntry.physicalSymptoms?.includes(symptom) || false}
                    onChange={(e) => {
                      const updatedSymptoms = e.target.checked
                        ? [...(currentEntry.physicalSymptoms || []), symptom]
                        : (currentEntry.physicalSymptoms || []).filter(s => s !== symptom);
                      setCurrentEntry({...currentEntry, physicalSymptoms: updatedSymptoms});
                    }}
                    className="w-4 h-4 rounded border-[#F6D98A] text-[#4D5922] focus:ring-[#4D5922]"
                  />
                  <span className="text-sm text-[#23412C]">{symptom}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-[#E86F3A]" />
              <h3 className="font-medium text-[#23412C]">Emotionen</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {emotions.map((emotion) => (
                <label key={emotion} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={currentEntry.emotions?.includes(emotion) || false}
                    onChange={(e) => {
                      const updatedEmotions = e.target.checked
                        ? [...(currentEntry.emotions || []), emotion]
                        : (currentEntry.emotions || []).filter(e => e !== emotion);
                      setCurrentEntry({...currentEntry, emotions: updatedEmotions});
                    }}
                    className="w-4 h-4 rounded border-[#F6D98A] text-[#4D5922] focus:ring-[#4D5922]"
                  />
                  <span className="text-sm text-[#23412C]">{emotion}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-[#4D5922] rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-[#F6D98A]" />
              <h3 className="font-medium">Tipp</h3>
            </div>
            <p className="text-sm text-white/90">
              Je genauer Sie Ihre Symptome und Gefühle dokumentieren, desto besser können Sie später 
              Muster erkennen und geeignete Bewältigungsstrategien entwickeln.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Gedanken und Bewältigungsstrategien",
      subtitle: "Vervollständigen Sie Ihren Eintrag",
      icon: <Brain className="w-8 h-8" />,
      audioFile: "https://clarigen.de/wp-content/uploads/2025/06/stresstagebuch-4.mp3",
      audioText: "Jetzt kommen wir zu den wichtigsten Teilen Ihres Eintrags: Ihre Gedanken und Bewältigungsstrategien. Die Gedanken, die Sie in stressigen Momenten haben, sind oft automatisch und unbewusst. Durch das Aufschreiben machen wir sie sichtbar. Und die Bewältigungsstrategien helfen uns zu verstehen, was funktioniert und was nicht.",
      content: (
        <div className="space-y-6">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5 text-indigo-600" />
              <h3 className="font-medium text-indigo-800">Ihre Gedanken in der Situation</h3>
            </div>
            <textarea
              value={currentEntry.thoughts || ''}
              onChange={(e) => setCurrentEntry({...currentEntry, thoughts: e.target.value})}
              placeholder="Was ging Ihnen durch den Kopf? (z.B. 'Das schaffe ich nie', 'Alle werden denken, ich bin inkompetent')"
              className="w-full p-3 border border-indigo-200 rounded-lg resize-none h-24 text-sm"
            />
            <p className="text-xs text-indigo-600 mt-2">
              💡 Tipp: Schreiben Sie auch negative Gedanken auf - sie zu erkennen ist der erste Schritt zur Veränderung
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-green-600" />
              <h3 className="font-medium text-green-800">Was haben Sie unternommen?</h3>
            </div>
            <textarea
              value={currentEntry.coping || ''}
              onChange={(e) => setCurrentEntry({...currentEntry, coping: e.target.value})}
              placeholder="Welche Strategien haben Sie angewendet? (z.B. 'Tief durchgeatmet', 'Mit Freundin gesprochen', 'Spaziergang gemacht')"
              className="w-full p-3 border border-green-200 rounded-lg resize-none h-24 text-sm"
            />
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
              <h3 className="font-medium text-yellow-800">Wie effektiv war Ihre Strategie? (1-10)</h3>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="10"
                value={currentEntry.effectiveness || 5}
                onChange={(e) => setCurrentEntry({...currentEntry, effectiveness: Number(e.target.value)})}
                className="flex-1"
              />
              <span className="text-2xl font-bold text-yellow-600 min-w-[3rem] text-center">
                {currentEntry.effectiveness}
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Gar nicht hilfreich</span>
              <span>Sehr hilfreich</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Analyse Ihrer Stressmuster",
      subtitle: "Verstehen Sie Ihre persönlichen Muster",
      icon: <BarChart3 className="w-8 h-8" />,
      audioFile: "https://clarigen.de/wp-content/uploads/2025/06/Stresstagebuch-5.mp3",
      audioText: "Fantastisch! Sie haben Ihren ersten Eintrag erstellt. Jetzt zeige ich Ihnen, wie Sie Ihre Daten analysieren können. Stellen Sie sich vor, Sie hätten bereits mehrere Einträge - dann könnten Sie Muster erkennen: Welche Situationen stressen Sie am meisten? Welche Körpersymptome treten häufig auf? Welche Bewältigungsstrategien funktionieren am besten?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              Ihr Stresstagebuch-Eintrag
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-800">Situation</span>
                </div>
                <p className="text-sm text-gray-600">{currentEntry.situation || 'Noch nicht ausgefüllt'}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-800">Stresslevel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-red-500 h-2 rounded-full" 
                      style={{ width: `${(currentEntry.stressLevel || 5) * 10}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-gray-800">{currentEntry.stressLevel}/10</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Körperliche Symptome</h4>
                <div className="flex flex-wrap gap-2">
                  {(currentEntry.physicalSymptoms || []).map((symptom) => (
                    <span key={symptom} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      {symptom}
                    </span>
                  ))}
                  {(currentEntry.physicalSymptoms || []).length === 0 && (
                    <span className="text-sm text-gray-500">Keine Symptome ausgewählt</span>
                  )}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Emotionen</h4>
                <div className="flex flex-wrap gap-2">
                  {(currentEntry.emotions || []).map((emotion) => (
                    <span key={emotion} className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      {emotion}
                    </span>
                  ))}
                  {(currentEntry.emotions || []).length === 0 && (
                    <span className="text-sm text-gray-500">Keine Emotionen ausgewählt</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-green-800 mb-2">Was Sie bereits erreicht haben</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>✓ Bewusstsein für Ihre Stressreaktion geschaffen</li>
                  <li>✓ Automatische Gedankenmuster sichtbar gemacht</li>
                  <li>✓ Körperliche Signale dokumentiert</li>
                  <li>✓ Bewältigungsstrategien reflektiert</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Langfristige Vorteile & nächste Schritte",
      subtitle: "Ihr Weg zu weniger Stress",
      icon: <TrendingUp className="w-8 h-8" />,
      audioFile: "https://clarigen.de/wp-content/uploads/2025/06/stresstagebuch-6.mp3",
      audioText: "Sie haben den wichtigsten Schritt gemacht - Sie haben angefangen! Regelmäßiges Führen eines Stresstagebuchs wird Ihr Leben verändern. Nach 2-3 Wochen werden Sie erste Muster erkennen. Nach einem Monat werden Sie automatisch bewusster auf Stress reagieren. Und nach 2-3 Monaten werden Sie eine deutliche Verbesserung Ihrer Stressbewältigung feststellen.",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              Ihr Fortschrittsplan
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Woche 1-2: Bewusstsein schaffen</h4>
                  <p className="text-sm text-gray-600">Täglich 5 Minuten für Einträge - Routine entwickeln</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Woche 3-4: Muster erkennen</h4>
                  <p className="text-sm text-gray-600">Erste Analysen - Hauptstressoren identifizieren</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Monat 2-3: Strategien optimieren</h4>
                  <p className="text-sm text-gray-600">Wirksamste Bewältigungsmethoden anwenden</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-yellow-800 mb-2">Tipps für den Erfolg</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Füllen Sie das Tagebuch zeitnah aus (nicht erst am Abend)</li>
                  <li>• Seien Sie ehrlich - auch negative Gedanken sind wichtig</li>
                  <li>• Nutzen Sie Ihr Handy für schnelle Notizen unterwegs</li>
                  <li>• Analysieren Sie Ihre Einträge wöchentlich</li>
                  <li>• Feiern Sie kleine Fortschritte</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium text-blue-800">Ihr nächster Schritt</h4>
            </div>
            <p className="text-sm text-blue-700 mb-3">
              Speichern Sie diesen Eintrag und setzen Sie sich das Ziel, in den nächsten 7 Tagen 
              täglich einen kurzen Eintrag zu machen. Schon nach einer Woche werden Sie erste 
              positive Veränderungen bemerken.
            </p>
            <button
              onClick={() => {
                if (currentEntry.situation && currentEntry.thoughts && currentEntry.coping) {
                  const newEntry = {
                    ...currentEntry,
                    date: currentEntry.date!,
                    time: currentEntry.time!,
                    situation: currentEntry.situation!,
                    stressLevel: currentEntry.stressLevel!,
                    physicalSymptoms: currentEntry.physicalSymptoms!,
                    emotions: currentEntry.emotions!,
                    thoughts: currentEntry.thoughts!,
                    coping: currentEntry.coping!,
                    effectiveness: currentEntry.effectiveness!
                  } as StressDiaryEntry;
                  
                  setSavedEntries([...savedEntries, newEntry]);
                  setShowAnalysis(true);
                } else {
                  alert('Bitte füllen Sie alle wichtigen Felder aus.');
                }
              }}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Eintrag speichern & Analyse anzeigen
            </button>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];

  useEffect(() => {
    // Load saved entries from localStorage
    const saved = localStorage.getItem('stressDiaryEntries');
    if (saved) {
      setSavedEntries(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Save entries to localStorage
    if (savedEntries.length > 0) {
      localStorage.setItem('stressDiaryEntries', JSON.stringify(savedEntries));
    }
  }, [savedEntries]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setAudioPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAudioPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
        setAudioPlaying(false);
      } else {
        audioRef.current.play().catch(console.error);
        setAudioPlaying(true);
      }
    }
  };

  const handleAudioTimeUpdate = () => {
    if (audioRef.current) {
      setAudioCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioLoadedMetadata = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setAudioPlaying(false);
    setAudioCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  if (showAnalysis) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Ihre Stresstagebuch-Analyse</h2>
                <p className="text-gray-600">Verstehen Sie Ihre Stressmuster</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Herzlichen Glückwunsch!</h3>
                  <p className="text-gray-600">Sie haben Ihren ersten Stresstagebuch-Eintrag erstellt</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-blue-600">{savedEntries.length}</div>
                  <div className="text-sm text-gray-600">Einträge gesamt</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {savedEntries.length > 0 ? Math.round(savedEntries.reduce((acc, entry) => acc + entry.stressLevel, 0) / savedEntries.length) : 0}
                  </div>
                  <div className="text-sm text-gray-600">Ø Stresslevel</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {savedEntries.length > 0 ? Math.round(savedEntries.reduce((acc, entry) => acc + entry.effectiveness, 0) / savedEntries.length) : 0}
                  </div>
                  <div className="text-sm text-gray-600">Ø Bewältigungseffektivität</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Ihr Commitment</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Verpflichten Sie sich, in den nächsten 7 Tagen täglich einen kurzen Eintrag zu machen. 
                    Setzen Sie sich eine tägliche Erinnerung und finden Sie eine feste Zeit (z.B. nach dem Abendessen).
                  </p>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="commitment" className="rounded text-blue-600" />
                    <label htmlFor="commitment" className="text-sm text-blue-700 font-medium cursor-pointer">
                      Ja, ich verpflichte mich zu 7 Tagen Stresstagebuch
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Schließen
              </button>
              <button
                onClick={() => {
                  setShowAnalysis(false);
                  setCurrentStep(0);
                  setCurrentEntry({
                    date: new Date().toISOString().split('T')[0],
                    time: new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
                    stressLevel: 5,
                    physicalSymptoms: [],
                    emotions: [],
                    effectiveness: 5
                  });
                }}
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Neuen Eintrag erstellen
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <button
          onClick={onClose}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
        >
          <ChevronLeft className="w-6 h-6 text-[#23412C]" />
        </button>
        <h2 className="text-xl font-bold text-[#23412C]">Stresstagebuch</h2>
        <div className="w-12" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {steps[currentStep].content}
      </div>

      {/* Footer */}
      <div className="p-6 bg-white/80 backdrop-blur-sm border-t border-[#F6D98A]">
        {/* Audio Player */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleAudio}
                className="w-10 h-10 bg-[#4D5922] rounded-full flex items-center justify-center text-white hover:bg-[#3D4819] transition-colors"
              >
                {audioPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <div className="text-sm text-[#23412C]">
                {formatTime(audioCurrentTime)} / {formatTime(audioDuration)}
              </div>
            </div>
            <Volume2 className="w-5 h-5 text-[#23412C]" />
          </div>
          
          <div className="h-1 bg-[#F6D98A]/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4D5922] transition-all duration-100"
              style={{
                width: `${(audioCurrentTime / audioDuration) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="flex-1 bg-white text-[#23412C] px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Zurück
            </button>
          )}
          <button
            onClick={nextStep}
            className="flex-1 bg-[#E86F3A] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#D85A2A] transition-colors border border-[#F6D98A] flex items-center justify-center gap-2"
          >
            {currentStep === steps.length - 1 ? 'Abschließen' : 'Weiter'}
            {currentStep < steps.length - 1 && <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={steps[currentStep].audioFile}
        onTimeUpdate={handleAudioTimeUpdate}
        onLoadedMetadata={handleAudioLoadedMetadata}
        onEnded={handleAudioEnded}
      />
    </div>
  );
};

export default Stresstagebuch; 