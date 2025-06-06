import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Play, Pause, RotateCcw, Settings, Volume2, VolumeX, Heart, Calendar, Trophy, CheckCircle, Info } from 'lucide-react';

interface BreathingExerciseProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BreathingTechnique {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  inhale: number;
  hold: number;
  exhale: number;
  holdEmpty?: number;
  icon: string;
  color: string;
  bgColor: string;
  difficulty: 'Anfänger' | 'Mittel' | 'Fortgeschritten';
}

const techniques: BreathingTechnique[] = [
  {
    id: '478',
    name: '4-7-8 Technik',
    description: 'Die beruhigende Atem-Technik für besseren Schlaf',
    benefits: [
      'Reduziert Stress und Angst',
      'Verbessert die Schlafqualität',
      'Senkt den Blutdruck',
      'Aktiviert das parasympathische Nervensystem'
    ],
    inhale: 4,
    hold: 7,
    exhale: 8,
    icon: '🌙',
    color: 'text-[#4D5922]',
    bgColor: 'bg-[#4D5922]',
    difficulty: 'Anfänger'
  },
  {
    id: 'box',
    name: 'Box Breathing',
    description: 'Gleichmäßige Atmung für mentale Klarheit',
    benefits: [
      'Verbessert Konzentration',
      'Reduziert Stress',
      'Reguliert das Nervensystem',
      'Steigert mentale Klarheit'
    ],
    inhale: 4,
    hold: 4,
    exhale: 4,
    holdEmpty: 4,
    icon: '📦',
    color: 'text-[#E86F3A]',
    bgColor: 'bg-[#E86F3A]',
    difficulty: 'Mittel'
  },
  {
    id: 'calm',
    name: 'Entspannungsatmung',
    description: 'Sanfte Technik für tiefe Entspannung',
    benefits: [
      'Fördert tiefe Entspannung',
      'Löst Muskelverspannungen',
      'Beruhigt das Nervensystem',
      'Ideal für Meditation'
    ],
    inhale: 6,
    hold: 2,
    exhale: 8,
    icon: '🍃',
    color: 'text-[#F2C75B]',
    bgColor: 'bg-[#F2C75B]',
    difficulty: 'Anfänger'
  }
];

const BreathingExercise: React.FC<BreathingExerciseProps> = ({ isOpen, onClose }) => {
  const [selectedTechnique, setSelectedTechnique] = useState<BreathingTechnique>(techniques[0]);
  const [currentScreen, setCurrentScreen] = useState<'intro' | 'technique-select' | 'explanation' | 'exercise' | 'completed'>('intro');
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'inhale' | 'hold' | 'exhale' | 'holdEmpty'>('inhale');
  const [timeLeft, setTimeLeft] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(300); // 5 minutes in seconds
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [sessionStreak, setSessionStreak] = useState(0);
  const [completedToday, setCompletedToday] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  // Load saved data on component mount
  useEffect(() => {
    const savedStreak = localStorage.getItem('breathingStreak');
    const lastSession = localStorage.getItem('lastBreathingSession');
    const today = new Date().toDateString();
    
    if (savedStreak) {
      setSessionStreak(parseInt(savedStreak));
    }
    
    if (lastSession === today) {
      setCompletedToday(true);
    }
  }, []);

  const getPhaseText = () => {
    switch (currentPhase) {
      case 'inhale': return 'Einatmen';
      case 'hold': return 'Halten';
      case 'exhale': return 'Ausatmen';
      case 'holdEmpty': return 'Pause';
      default: return '';
    }
  };

  const getPhaseInstruction = () => {
    switch (currentPhase) {
      case 'inhale': return 'Atmen Sie langsam durch die Nase ein';
      case 'hold': return 'Halten Sie den Atem sanft an';
      case 'exhale': return 'Atmen Sie langsam durch den Mund aus';
      case 'holdEmpty': return 'Kurze Pause vor dem nächsten Atemzug';
      default: return '';
    }
  };

  const getCircleScale = () => {
    const technique = selectedTechnique;
    const totalPhaseTime = technique[currentPhase] || 0;
    const progress = (totalPhaseTime - timeLeft) / totalPhaseTime;
    
    switch (currentPhase) {
      case 'inhale':
        return 0.5 + (progress * 0.5); // Von 50% auf 100%
      case 'exhale':
        return 1 - (progress * 0.5); // Von 100% auf 50%
      default:
        return currentPhase === 'hold' ? 1 : 0.5;
    }
  };

  const nextPhase = () => {
    const technique = selectedTechnique;
    
    switch (currentPhase) {
      case 'inhale':
        setCurrentPhase('hold');
        setTimeLeft(technique.hold);
        break;
      case 'hold':
        setCurrentPhase('exhale');
        setTimeLeft(technique.exhale);
        break;
      case 'exhale':
        if (technique.holdEmpty) {
          setCurrentPhase('holdEmpty');
          setTimeLeft(technique.holdEmpty);
        } else {
          setCurrentPhase('inhale');
          setTimeLeft(technique.inhale);
          setCycleCount(prev => prev + 1);
        }
        break;
      case 'holdEmpty':
        setCurrentPhase('inhale');
        setTimeLeft(technique.inhale);
        setCycleCount(prev => prev + 1);
        break;
    }
  };

  const startExercise = () => {
    setIsActive(true);
    setCurrentPhase('inhale');
    setTimeLeft(selectedTechnique.inhale);
    setCycleCount(0);
    setRemainingTime(300);
    startTimeRef.current = Date.now();
    setCurrentScreen('exercise');
  };

  const pauseExercise = () => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetExercise = () => {
    setIsActive(false);
    setCurrentPhase('inhale');
    setTimeLeft(0);
    setCycleCount(0);
    setTotalTime(0);
    setRemainingTime(300);
    setCurrentScreen('explanation');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const completeSession = () => {
    const today = new Date().toDateString();
    const lastSession = localStorage.getItem('lastBreathingSession');
    
    if (lastSession !== today) {
      const newStreak = lastSession === new Date(Date.now() - 86400000).toDateString() 
        ? sessionStreak + 1 
        : 1;
      setSessionStreak(newStreak);
      localStorage.setItem('breathingStreak', newStreak.toString());
    }
    
    localStorage.setItem('lastBreathingSession', today);
    setCompletedToday(true);
    setCurrentScreen('completed');
  };

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            nextPhase();
            return 0;
          }
          return prev - 1;
        });
        setTotalTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
        setRemainingTime(prev => {
          if (prev <= 1) {
            completeSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, timeLeft, currentPhase, selectedTechnique]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return ((300 - remainingTime) / 300) * 100;
  };

  if (!isOpen) return null;

  // Intro Screen
  if (currentScreen === 'intro') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Atemübungen</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <span className="text-5xl">🧘‍♀️</span>
            </div>
            
            <h1 className="text-3xl font-bold text-[#23412C] mb-4">Willkommen zu deiner Atemübung</h1>
            <p className="text-[#23412C]/80 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Nimm dir 5 Minuten Zeit für dich und entdecke die transformative Kraft des bewussten Atmens. 
              Diese einfache, aber mächtige Technik ist dein Schlüssel zu innerer Ruhe und Stressabbau.
            </p>
          </div>

          {/* Detailed Explanation */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-xl font-bold text-[#23412C] mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-[#E86F3A]" />
              Warum Atemübungen gegen Stress helfen
            </h3>
            
            <div className="space-y-4 text-sm text-[#23412C]/80 leading-relaxed">
              <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">🧠 Das Nervensystem verstehen</h4>
                <p>
                  Unser Nervensystem besteht aus zwei Hauptteilen: dem Sympathikus (Kampf-oder-Flucht-Modus) und dem 
                  Parasympathikus (Ruhe-und-Verdauung-Modus). Bei Stress dominiert der Sympathikus - Herzschlag beschleunigt sich, 
                  Muskeln spannen sich an, und Stresshormone wie Cortisol werden ausgeschüttet.
                </p>
              </div>

              <div className="bg-[#F2C75B]/30 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">💨 Die Macht des bewussten Atmens</h4>
                <p>
                  Kontrollierte Atemtechniken aktivieren gezielt den Vagusnerv - den wichtigsten Nerv des parasympathischen 
                  Systems. Durch langsames, tiefes Atmen signalisierst du deinem Gehirn: "Alles ist in Ordnung, ich bin sicher." 
                  Dein Körper wechselt automatisch in den Entspannungsmodus.
                </p>
              </div>

              <div className="bg-[#E86F3A]/20 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">🔬 Wissenschaftlich bewiesene Effekte</h4>
                <p>
                  Studien zeigen, dass bereits 5 Minuten bewussten Atmens den Cortisolspiegel senken, den Blutdruck reduzieren 
                  und die Herzfrequenzvariabilität verbessern. Diese physiologischen Veränderungen führen zu einem messbaren 
                  Rückgang von Angst und Stress sowie zu verbesserter Konzentrationsfähigkeit.
                </p>
              </div>

              <div className="bg-[#4D5922]/20 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">⚡ Sofortige und langfristige Wirkung</h4>
                <p>
                  Atemübungen wirken sofort: Bereits nach wenigen bewussten Atemzügen spürst du Entspannung. 
                  Bei regelmäßiger Praxis entwickelst du eine erhöhte Stressresilienz, verbesserst deine emotionale 
                  Regulation und stärkst deine allgemeine mentale Gesundheit.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#F6E3B6] to-[#F2C75B] rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">🌟 Warum gerade jetzt?</h4>
                <p>
                  In unserer hektischen Zeit ist Stress allgegenwärtig. Atemübungen sind dein persönliches "Reset-Tool" - 
                  immer verfügbar, ohne Hilfsmittel, überall einsetzbar. Du lernst, dein Nervensystem selbst zu regulieren 
                  und entwickelst eine wertvolle Lebenskompetenz für mehr Gelassenheit im Alltag.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#E86F3A]" />
              Was passiert in deinem Körper?
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                <span className="text-[#23412C]/80">Herzfrequenz sinkt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                <span className="text-[#23412C]/80">Blutdruck normalisiert sich</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                <span className="text-[#23412C]/80">Cortisol wird reduziert</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                <span className="text-[#23412C]/80">Muskeln entspannen sich</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                <span className="text-[#23412C]/80">Sauerstoffversorgung verbessert</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                <span className="text-[#23412C]/80">Gedanken werden klarer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                <span className="text-[#23412C]/80">Immunsystem wird gestärkt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                <span className="text-[#23412C]/80">Schlafqualität steigt</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <div className="text-2xl font-bold text-[#E86F3A]">{sessionStreak}</div>
              <div className="text-xs text-[#23412C]/60">Tage Streak</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <div className="text-2xl font-bold text-[#4D5922]">5</div>
              <div className="text-xs text-[#23412C]/60">Minuten</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <div className="text-2xl font-bold text-[#F2C75B]">{completedToday ? '✓' : '○'}</div>
              <div className="text-xs text-[#23412C]/60">Heute</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#E86F3A] to-[#F2C75B] rounded-2xl p-6 mb-6 text-white text-center shadow-lg">
            <h3 className="text-lg font-bold mb-2">Bereit für deine Transformation?</h3>
            <p className="text-white/90 text-sm mb-4">
              Gib deinem Nervensystem die Chance zur Regeneration. Bereits eine 5-Minuten-Session kann 
              dein Stresslevel spürbar senken und dein Wohlbefinden nachhaltig verbessern.
            </p>
          </div>

          <button
            onClick={() => setCurrentScreen('technique-select')}
            className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Jetzt Atemtechnik wählen
          </button>
        </div>
      </div>
    );
  }

  // Technique Selection Screen
  if (currentScreen === 'technique-select') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentScreen('intro')}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Technik wählen</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            {techniques.map((technique) => (
              <button
                key={technique.id}
                onClick={() => {
                  setSelectedTechnique(technique);
                  setCurrentScreen('explanation');
                }}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  selectedTechnique.id === technique.id
                    ? `${technique.bgColor} border-[#E86F3A] text-white shadow-lg`
                    : 'bg-white/80 border-white/60 hover:bg-white/90 text-[#23412C]'
                } backdrop-blur-sm shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{technique.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold">{technique.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedTechnique.id === technique.id 
                          ? 'bg-white/20 text-white' 
                          : 'bg-[#F2C75B] text-[#23412C]'
                      }`}>
                        {technique.difficulty}
                      </span>
                    </div>
                    <p className={`text-sm mb-3 ${
                      selectedTechnique.id === technique.id ? 'text-white/90' : 'text-[#23412C]/70'
                    }`}>
                      {technique.description}
                    </p>
                    <div className={`text-xs ${
                      selectedTechnique.id === technique.id ? 'text-white/80' : 'text-[#23412C]/60'
                    }`}>
                      Rhythmus: {technique.inhale}-{technique.hold}-{technique.exhale}
                      {technique.holdEmpty ? `-${technique.holdEmpty}` : ''} Sekunden
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Explanation Screen
  if (currentScreen === 'explanation') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentScreen('technique-select')}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">{selectedTechnique.name}</h2>
          <button
            onClick={() => setShowSettings(true)}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <Settings className="w-6 h-6 text-[#23412C]" />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {/* Technique Overview */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-4xl">{selectedTechnique.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#23412C] mb-2">{selectedTechnique.name}</h3>
            <p className="text-[#23412C]/70 mb-4">{selectedTechnique.description}</p>
            <div className="inline-block bg-[#F2C75B] text-[#23412C] px-3 py-1 rounded-full text-sm font-medium">
              {selectedTechnique.difficulty}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h4 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#E86F3A]" />
              So funktioniert's
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#4D5922] text-white flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h5 className="font-medium text-[#23412C]">Einatmen</h5>
                  <p className="text-sm text-[#23412C]/70">{selectedTechnique.inhale} Sekunden lang durch die Nase</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E86F3A] text-white flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h5 className="font-medium text-[#23412C]">Halten</h5>
                  <p className="text-sm text-[#23412C]/70">{selectedTechnique.hold} Sekunden lang den Atem anhalten</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#F2C75B] text-white flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h5 className="font-medium text-[#23412C]">Ausatmen</h5>
                  <p className="text-sm text-[#23412C]/70">{selectedTechnique.exhale} Sekunden lang durch den Mund</p>
                </div>
              </div>
              {selectedTechnique.holdEmpty && (
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#F6D98A] text-[#23412C] flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h5 className="font-medium text-[#23412C]">Pause</h5>
                    <p className="text-sm text-[#23412C]/70">{selectedTechnique.holdEmpty} Sekunden lang warten</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-[#F6D98A] shadow-lg">
            <h4 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#E86F3A]" />
              Vorteile dieser Technik
            </h4>
            <ul className="space-y-2">
              {selectedTechnique.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-[#23412C]/80">
                  <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={startExercise}
            className="w-full bg-[#E86F3A] text-white py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            5-Minuten Session starten
          </button>
        </div>
      </div>
    );
  }

  // Exercise Screen
  if (currentScreen === 'exercise') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={resetExercise}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <div className="text-center">
            <h2 className="text-lg font-bold text-[#23412C]">{selectedTechnique.name}</h2>
            <div className="text-sm text-[#23412C]/70">{formatTime(remainingTime)} verbleibend</div>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <Settings className="w-6 h-6 text-[#23412C]" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 mb-4">
          <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#E86F3A] rounded-full transition-all duration-1000"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          {/* Breathing Circle */}
          <div className="relative mb-8">
            <div 
              className="w-72 h-72 rounded-full border-4 border-white/30 flex items-center justify-center transition-all duration-1000 ease-in-out shadow-2xl"
              style={{
                transform: `scale(${getCircleScale()})`,
                background: `radial-gradient(circle, ${
                  currentPhase === 'inhale' ? 'rgba(232, 111, 58, 0.3)' :
                  currentPhase === 'exhale' ? 'rgba(77, 89, 34, 0.3)' :
                  'rgba(242, 199, 91, 0.3)'
                }, rgba(255, 255, 255, 0.1))`,
                boxShadow: `0 0 ${getCircleScale() * 60}px rgba(232, 111, 58, 0.3)`
              }}
            >
              <div className="text-center">
                <div className="text-7xl font-bold text-[#23412C] mb-2">{timeLeft}</div>
                <div className="text-2xl font-semibold text-[#23412C]">{getPhaseText()}</div>
              </div>
            </div>
            
            {/* Pulse rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className="absolute w-72 h-72 rounded-full border border-white/20"
                  style={{
                    transform: `scale(${1 + (ring * 0.1)})`,
                    animation: `pulse 3s ease-in-out infinite ${ring * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Phase instruction */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg max-w-sm mx-auto text-center">
            <p className="text-[#23412C] font-medium text-lg">{getPhaseInstruction()}</p>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <div className="text-2xl font-bold text-[#23412C]">{cycleCount}</div>
              <div className="text-xs text-[#23412C]/60">Zyklen</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <div className="text-2xl font-bold text-[#23412C]">{Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}</div>
              <div className="text-xs text-[#23412C]/60">Verstrichene Zeit</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <div className="text-2xl font-bold text-[#23412C]">{Math.round(getProgressPercentage())}%</div>
              <div className="text-xs text-[#23412C]/60">Fortschritt</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={isActive ? pauseExercise : () => setIsActive(true)}
              className="w-16 h-16 bg-[#E86F3A] text-white rounded-full flex items-center justify-center hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A]"
            >
              {isActive ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </button>
            <button
              onClick={resetExercise}
              className="w-16 h-16 bg-white/80 backdrop-blur-sm text-[#23412C] rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
            >
              <RotateCcw className="w-8 h-8" />
            </button>
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.1; transform: scale(1.1); }
          }
        `}</style>
      </div>
    );
  }

  // Completion Screen
  if (currentScreen === 'completed') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Gut gemacht!</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-32 h-32 bg-[#4D5922] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Trophy className="w-16 h-16 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-[#23412C] mb-4">Session abgeschlossen!</h1>
          <p className="text-[#23412C]/80 text-lg mb-8 max-w-sm leading-relaxed">
            Großartig! Du hast deine 5-minütige Atemübung erfolgreich abgeschlossen. 
            Wie fühlst du dich jetzt?
          </p>

          {/* Session Stats */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4">Deine Session</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E86F3A]">{cycleCount}</div>
                <div className="text-xs text-[#23412C]/60">Atemzyklen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4D5922]">5:00</div>
                <div className="text-xs text-[#23412C]/60">Minuten</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F2C75B]">{sessionStreak}</div>
                <div className="text-xs text-[#23412C]/60">Tage Streak</div>
              </div>
            </div>
          </div>

          {/* Achievement */}
          {sessionStreak > 1 && (
            <div className="bg-gradient-to-r from-[#E86F3A] to-[#F2C75B] rounded-2xl p-6 mb-8 text-white shadow-lg">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Streak erreicht!
              </h3>
              <p className="text-white/90">
                Du übst bereits {sessionStreak} Tage in Folge. Weiter so!
              </p>
            </div>
          )}

          <div className="flex gap-4 w-full max-w-sm">
            <button
              onClick={() => setCurrentScreen('technique-select')}
              className="flex-1 bg-white/80 text-[#23412C] py-4 rounded-2xl font-semibold hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
            >
              Nochmal üben
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-[#E86F3A] text-white py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A]"
            >
              Fertig
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Settings Modal
  if (showSettings) {
    return (
      <div className="fixed inset-0 bg-[#F6E3B6] z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={() => setShowSettings(false)}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Einstellungen</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
              <h3 className="text-lg font-semibold text-[#23412C] mb-4">Audio</h3>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 border-2 ${
                  soundEnabled
                    ? 'bg-[#4D5922] border-[#4D5922] text-white'
                    : 'bg-white/60 border-white/60 text-[#23412C]'
                }`}
              >
                <div className="flex items-center gap-3">
                  {soundEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
                  <span className="font-medium">Atemtöne</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 ${soundEnabled ? 'border-white bg-white' : 'border-[#23412C]/30'}`}>
                  {soundEnabled && <div className="w-2 h-2 bg-[#4D5922] rounded-full m-1" />}
                </div>
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
              <h3 className="text-lg font-semibold text-[#23412C] mb-4">Statistiken zurücksetzen</h3>
              <button
                onClick={() => {
                  localStorage.removeItem('breathingStreak');
                  localStorage.removeItem('lastBreathingSession');
                  setSessionStreak(0);
                  setCompletedToday(false);
                }}
                className="w-full p-4 rounded-xl bg-red-100 border-2 border-red-200 text-red-700 hover:bg-red-200 transition-colors"
              >
                Streak zurücksetzen
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default BreathingExercise; 