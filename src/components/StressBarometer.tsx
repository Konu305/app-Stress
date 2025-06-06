import React, { useState, useEffect } from 'react';
import { ChevronLeft, Info, Brain, Heart, Thermometer, TrendingUp, AlertTriangle, CheckCircle, Target, Calendar, Award, Play, Volume2, BarChart3, Activity } from 'lucide-react';

interface StressBarometerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StressAssessment {
  level: number;
  category: string;
  symptoms: string[];
  recommendations: string[];
  explanation: string;
  color: string;
  bgColor: string;
}

const stressLevels: StressAssessment[] = [
  {
    level: 0,
    category: 'Völlige Entspannung',
    symptoms: ['Ruhiger Geist', 'Entspannte Muskeln', 'Gleichmäßige Atmung', 'Innere Ruhe'],
    recommendations: ['Diesen Zustand bewusst wahrnehmen', 'Entspannungsmomente genießen', 'Achtsamkeit praktizieren'],
    explanation: 'Sie befinden sich in einem Zustand völliger Entspannung. Ihr Nervensystem ist im Ruhemodus und alle Körperfunktionen arbeiten optimal.',
    color: '#10B981',
    bgColor: 'bg-green-100'
  },
  {
    level: 1,
    category: 'Sehr entspannt',
    symptoms: ['Gelassenheit', 'Klare Gedanken', 'Ausgeglichene Stimmung', 'Guter Schlaf'],
    recommendations: ['Regelmäßige Entspannung', 'Achtsamkeitsübungen', 'Positive Aktivitäten'],
    explanation: 'Ein sehr entspannter Zustand. Sie fühlen sich ausgeglichen und können klar denken. Perfekt für kreative Arbeit und Problemlösung.',
    color: '#10B981',
    bgColor: 'bg-green-100'
  },
  {
    level: 2,
    category: 'Entspannt',
    symptoms: ['Wohlfühlen', 'Leichte Aktivierung', 'Positive Energie', 'Konzentrationsfähigkeit'],
    recommendations: ['Aktivitäten beibehalten', 'Präventive Entspannung', 'Work-Life-Balance'],
    explanation: 'Sie sind entspannt und gleichzeitig aktiviert. Optimal für Produktivität und Lernen. Ihr Körper ist bereit für Herausforderungen.',
    color: '#10B981',
    bgColor: 'bg-green-100'
  },
  {
    level: 3,
    category: 'Leicht aktiviert',
    symptoms: ['Erhöhte Aufmerksamkeit', 'Motivation', 'Leichte Anspannung', 'Handlungsbereitschaft'],
    recommendations: ['Strukturierte Pausen', 'Kurze Entspannungsübungen', 'Prioritäten setzen'],
    explanation: 'Gesunde Aktivierung des Körpers. Sie sind wach und bereit für Aufgaben, sollten aber auf erste Anzeichen von Überaktivierung achten.',
    color: '#84CC16',
    bgColor: 'bg-lime-100'
  },
  {
    level: 4,
    category: 'Mäßiger Stress',
    symptoms: ['Unruhe', 'Leichte Nervosität', 'Erhöhter Herzschlag', 'Erste Verspannungen'],
    recommendations: ['Kurze Atemübungen', 'Bewusste Pausen', 'Stressoren identifizieren', 'Zeitmanagement'],
    explanation: 'Beginnender Stress. Ihr Körper zeigt erste Warnsignale. Jetzt ist der ideale Zeitpunkt für präventive Maßnahmen.',
    color: '#F59E0B',
    bgColor: 'bg-yellow-100'
  },
  {
    level: 5,
    category: 'Merklicher Stress',
    symptoms: ['Innere Anspannung', 'Konzentrationsschwierigkeiten', 'Muskuläre Verspannungen', 'Reizbarkeit'],
    recommendations: ['Entspannungsübungen', 'Pausenplanung', 'Stressursachen analysieren', 'Unterstützung suchen'],
    explanation: 'Deutlich spürbarer Stress. Ihre Leistungsfähigkeit kann beeinträchtigt sein. Aktive Stressbewältigung wird wichtig.',
    color: '#F59E0B',
    bgColor: 'bg-yellow-100'
  },
  {
    level: 6,
    category: 'Erhöhter Stress',
    symptoms: ['Nervosität', 'Gedankenkreisen', 'Körperliche Anspannung', 'Unruhiger Schlaf'],
    recommendations: ['Bewusste Entspannungspausen', 'Atemtechniken anwenden', 'Tagesstruktur überprüfen', 'Ausgleichsaktivitäten'],
    explanation: 'Ein anspruchsvoller Tag mit erhöhtem Stresslevel. Das ist völlig normal bei besonderen Herausforderungen. Achten Sie darauf, dass sich dieser Zustand nicht über mehrere Tage hinzieht.',
    color: '#F97316',
    bgColor: 'bg-orange-100'
  },
  {
    level: 7,
    category: 'Deutlicher Stress',
    symptoms: ['Starke Anspannung', 'Müdigkeit', 'Emotionale Schwankungen', 'Verspannungen'],
    recommendations: ['Längere Entspannungsphasen', 'Bewegung an der frischen Luft', 'Prioritäten neu setzen', 'Mit anderen sprechen'],
    explanation: 'Sie erleben einen deutlich stressigen Tag. Das kann bei wichtigen Terminen, Deadlines oder persönlichen Herausforderungen vorkommen. Wichtig ist, dass Sie sich heute Abend bewusst entspannen.',
    color: '#EF4444',
    bgColor: 'bg-red-100'
  },
  {
    level: 8,
    category: 'Hoher Stress',
    symptoms: ['Starke innere Unruhe', 'Konzentrationsprobleme', 'Körperliche Verspannungen', 'Schlafprobleme'],
    recommendations: ['Sofortige Entspannung einplanen', 'Aufgaben delegieren oder verschieben', 'Ruhige Umgebung aufsuchen', 'Atemübungen durchführen'],
    explanation: 'Ein sehr herausfordernder Tag mit hohem Stresslevel. Bei akuten Belastungen (Prüfungen, Präsentationen, Konflikte) ist das normal. Planen Sie bewusst Erholungszeit und achten Sie darauf, dass dies nicht zum Dauerzustand wird.',
    color: '#EF4444',
    bgColor: 'bg-red-100'
  },
  {
    level: 9,
    category: 'Sehr hoher Stress',
    symptoms: ['Überforderungsgefühl', 'Starke körperliche Reaktionen', 'Emotionale Belastung', 'Erschöpfung'],
    recommendations: ['Sofortige Entlastung suchen', 'Alle nicht-essentiellen Aufgaben stoppen', 'Unterstützung aktivieren', 'Professionelle Hilfe erwägen'],
    explanation: 'Ein extrem belastender Tag. Solche Spitzen können bei Krisen, wichtigen Ereignissen oder akuten Problemen auftreten. Wenn dieser Zustand länger als 2-3 Tage anhält, sollten Sie aktiv Hilfe suchen.',
    color: '#DC2626',
    bgColor: 'bg-red-200'
  },
  {
    level: 10,
    category: 'Extremer Stress',
    symptoms: ['Akute Überlastung', 'Starke körperliche Symptome', 'Gefühl der Hilflosigkeit', 'Komplette Erschöpfung'],
    recommendations: ['Alle Aktivitäten unterbrechen', 'Notfallkontakte aktivieren', 'Professionelle Beratung suchen', 'Medizinischen Rat einholen'],
    explanation: 'Sie durchleben gerade eine akute Stresssituation oder Krise. Das kann bei schwerwiegenden Lebensereignissen auftreten. Wichtig: Holen Sie sich Hilfe von Familie, Freunden oder Fachpersonal. Niemand muss das alleine bewältigen.',
    color: '#DC2626',
    bgColor: 'bg-red-200'
  }
];

const StressBarometer: React.FC<StressBarometerProps> = ({ isOpen, onClose }) => {
  const [currentScreen, setCurrentScreen] = useState<'intro' | 'assessment' | 'result' | 'education' | 'tracking'>('intro');
  const [currentStressLevel, setCurrentStressLevel] = useState(5);
  const [assessmentAnswers, setAssessmentAnswers] = useState<{ [key: string]: number }>({});
  const [showDetail, setShowDetail] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  if (!isOpen) return null;

  const getCurrentAssessment = () => stressLevels[currentStressLevel];

  // Personal Stress Analysis Function
  const getPersonalAnalysis = () => {
    const answers = assessmentAnswers;
    const numAnswers = Object.keys(answers).length;
    
    if (numAnswers === 0) return null;

    // Calculate category scores
    const cognitive = ((answers.q0 || 3) + (answers.q5 || 3)) / 2; // Konzentration + Entscheidungen
    const physical = ((answers.q1 || 3) + (answers.q3 || 3) + (answers.q4 || 3) + (answers.q7 || 3)) / 4; // Schlaf + Muskeln + Energie + Appetit
    const emotional = ((answers.q2 || 3) + (answers.q6 || 3) + (answers.q9 || 3)) / 3; // Sorgen + Emotionen + Überforderung
    const social = answers.q8 || 3; // Menschen

    // Invert stress-related scores (higher values = better)
    const cognitiveScore = cognitive;
    const physicalScore = physical;
    const emotionalScore = (5 - (answers.q2 || 3) + (answers.q6 || 3) + 5 - (answers.q9 || 3)) / 3; // Invert sorgen and überforderung
    const socialScore = social;

    // Overall wellness score
    const overallScore = (cognitiveScore + physicalScore + emotionalScore + socialScore) / 4;

    // Identify strengths and challenges
    const categories = [
      { name: 'Kognitiv', score: cognitiveScore, icon: '🧠', areas: ['Konzentration', 'Entscheidungsfähigkeit'] },
      { name: 'Körperlich', score: physicalScore, icon: '💪', areas: ['Schlaf', 'Energie', 'Muskeln', 'Appetit'] },
      { name: 'Emotional', score: emotionalScore, icon: '❤️', areas: ['Sorgen', 'Stimmung', 'Überforderung'] },
      { name: 'Sozial', score: socialScore, icon: '👥', areas: ['Zwischenmenschlich'] }
    ];

    const strengths = categories.filter(cat => cat.score >= 4).sort((a, b) => b.score - a.score);
    const challenges = categories.filter(cat => cat.score <= 2.5).sort((a, b) => a.score - b.score);
    const neutral = categories.filter(cat => cat.score > 2.5 && cat.score < 4);

    // Generate personalized recommendations
    const recommendations = [];
    
    if (cognitiveScore <= 2.5) {
      recommendations.push({
        category: 'Kognitiv',
        title: 'Mentale Klarheit stärken',
        actions: ['15 Min. Meditation täglich', 'Pausen alle 90 Min.', 'Brain-Food (Nüsse, Beeren)', 'Komplexe Aufgaben am Morgen'],
        icon: '🧠'
      });
    }

    if (physicalScore <= 2.5) {
      recommendations.push({
        category: 'Körperlich',
        title: 'Körperliche Balance wiederherstellen',
        actions: ['Feste Schlafzeiten einhalten', '20 Min. Bewegung täglich', 'Progressive Muskelentspannung', 'Regelmäßige Mahlzeiten'],
        icon: '💪'
      });
    }

    if (emotionalScore <= 2.5) {
      recommendations.push({
        category: 'Emotional',
        title: 'Emotionale Stabilität fördern',
        actions: ['Atemübungen (4-7-8)', 'Gefühle-Tagebuch führen', 'Stressoren identifizieren', 'Professionelle Unterstützung'],
        icon: '❤️'
      });
    }

    if (socialScore <= 2.5) {
      recommendations.push({
        category: 'Sozial',
        title: 'Soziale Verbindungen stärken',
        actions: ['Grenzen kommunizieren', 'Unterstützung suchen', 'Soziale Aktivitäten planen', 'Konflikte ansprechen'],
        icon: '👥'
      });
    }

    // Add positive reinforcement for strengths
    if (strengths.length > 0) {
      recommendations.unshift({
        category: 'Stärken',
        title: `Ihre Stärke: ${strengths[0].name} Bereich`,
        actions: [`Nutzen Sie Ihre ${strengths[0].areas.join(' und ')} als Ressource`, 'Diese Fähigkeiten auf andere Bereiche übertragen', 'Erfolge bewusst wahrnehmen'],
        icon: '⭐'
      });
    }

    return {
      overallScore,
      categories,
      strengths,
      challenges,
      neutral,
      recommendations,
      answers
    };
  };

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
          <h2 className="text-xl font-bold text-[#23412C]">Stressbarometer</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Thermometer className="w-16 h-16 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold text-[#23412C] mb-4">Ihr persönliches Stressbarometer</h1>
            <p className="text-[#23412C]/80 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Entdecken Sie Ihr aktuelles Stresslevel und erhalten Sie personalisierte Empfehlungen für besseres Wohlbefinden.
            </p>
          </div>

          {/* Detailed Explanation */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-xl font-bold text-[#23412C] mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-[#E86F3A]" />
              Was ist das Stressbarometer?
            </h3>
            
            <div className="space-y-4 text-sm text-[#23412C]/80 leading-relaxed">
              <div className="bg-[#E86F3A]/20 rounded-xl p-4 border-l-4 border-[#E86F3A]">
                <h4 className="font-semibold text-[#23412C] mb-2">🤔 Warum führen wir diese Umfrage durch?</h4>
                <p>
                  Stress ist oft unsichtbar und wird unterschätzt. Viele Menschen gewöhnen sich an chronischen Stress, 
                  ohne zu merken, wie sehr er ihre Gesundheit und Lebensqualität beeinträchtigt. Unser Stressbarometer 
                  hilft Ihnen dabei, Ihr aktuelles Stresslevel bewusst wahrzunehmen und objektiv zu bewerten.
                </p>
                <p className="mt-2">
                  <strong>Das Ziel:</strong> Durch regelmäßige Selbstreflexion entwickeln Sie ein besseres Gespür für 
                  Ihre Stressreaktionen und können frühzeitig gegensteuern, bevor sich gesundheitliche Probleme entwickeln.
                </p>
              </div>

              <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">🎯 Präzise Messung</h4>
                <p>
                  Das Stressbarometer ist ein wissenschaftlich fundiertes Tool zur Messung Ihres aktuellen Stresslevels. 
                  Es berücksichtigt körperliche, emotionale und mentale Stresssignale für eine ganzheitliche Bewertung.
                </p>
              </div>

              <div className="bg-[#F2C75B]/30 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">📊 11-Punkte-Skala</h4>
                <p>
                  Unser Barometer nutzt eine detaillierte 0-10 Skala, von völliger Entspannung bis hin zu kritischem Stress. 
                  Jeder Level bietet spezifische Erkenntnisse über Ihren aktuellen Zustand.
                </p>
              </div>

              <div className="bg-[#E86F3A]/20 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">💡 Personalisierte Insights</h4>
                <p>
                  Basierend auf Ihrem Stresslevel erhalten Sie maßgeschneiderte Empfehlungen, Bewältigungsstrategien 
                  und konkrete Handlungsschritte für Ihr Wohlbefinden.
                </p>
              </div>

              <div className="bg-[#4D5922]/20 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">📈 Kontinuierliches Tracking</h4>
                <p>
                  Verfolgen Sie Ihre Stressentwicklung über Zeit und erkennen Sie Muster, Trigger und positive Veränderungen 
                  in Ihrem Stressmanagement.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <Brain className="w-8 h-8 text-[#E86F3A] mx-auto mb-2" />
              <div className="text-sm font-medium text-[#23412C]">Wissenschaftlich</div>
              <div className="text-xs text-[#23412C]/60">Fundiert</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <Target className="w-8 h-8 text-[#4D5922] mx-auto mb-2" />
              <div className="text-sm font-medium text-[#23412C]">Präzise</div>
              <div className="text-xs text-[#23412C]/60">Messung</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <Heart className="w-8 h-8 text-[#F2C75B] mx-auto mb-2" />
              <div className="text-sm font-medium text-[#23412C]">Ganzheitlich</div>
              <div className="text-xs text-[#23412C]/60">Bewertung</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-[#F6D98A] shadow-md">
              <TrendingUp className="w-8 h-8 text-[#E86F3A] mx-auto mb-2" />
              <div className="text-sm font-medium text-[#23412C]">Fortschritt</div>
              <div className="text-xs text-[#23412C]/60">Tracking</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <button
              onClick={() => setCurrentScreen('assessment')}
              className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <Thermometer className="w-5 h-5" />
              Stresslevel jetzt messen
            </button>
            
            <button
              onClick={() => setCurrentScreen('education')}
              className="w-full bg-[#4D5922] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#3D4819] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Stress-Wissen entdecken
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Assessment Screen
  if (currentScreen === 'assessment') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentScreen('intro')}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Stress-Assessment</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Activity className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#23412C] mb-2">Wie gestresst fühlen Sie sich?</h3>
            <p className="text-[#23412C]/70 mb-6">Bewerten Sie Ihr aktuelles Stresslevel auf einer Skala von 0-10</p>
          </div>

          {/* Interactive Stress Level Selector */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <div className="relative">
              {/* Stress Level Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-[#23412C]">Völlig entspannt</span>
                  <span className="text-sm font-medium text-[#23412C]">Extremer Stress</span>
                </div>
                
                <div className="relative h-6 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full shadow-inner">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={currentStressLevel}
                    onChange={(e) => setCurrentStressLevel(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div 
                    className="absolute top-1/2 w-8 h-8 bg-white border-4 border-[#23412C] rounded-full shadow-lg transform -translate-y-1/2 transition-all duration-300 cursor-pointer"
                    style={{ left: `calc(${(currentStressLevel / 10) * 100}% - 1rem)` }}
                  >
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#23412C] text-white text-sm font-bold px-2 py-1 rounded">
                      {currentStressLevel}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between text-xs text-[#23412C]/60 mt-2">
                  {Array.from({ length: 11 }, (_, i) => (
                    <span key={i} className={i === currentStressLevel ? 'font-bold text-[#23412C]' : ''}>{i}</span>
                  ))}
                </div>
              </div>

              {/* Current Level Display */}
              <div className={`rounded-xl p-6 ${getCurrentAssessment().bgColor} border-2`} 
                   style={{ borderColor: getCurrentAssessment().color }}>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-[#23412C] mb-2">Level {currentStressLevel}</div>
                  <div className="text-xl font-semibold text-[#23412C]">{getCurrentAssessment().category}</div>
                </div>
                
                <div className="text-sm text-[#23412C]/80 mb-4 leading-relaxed">
                  {getCurrentAssessment().explanation}
                </div>

                {/* Symptoms */}
                <div className="mb-4">
                  <h4 className="font-semibold text-[#23412C] mb-2">Typische Anzeichen:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {getCurrentAssessment().symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getCurrentAssessment().color }} />
                        <span className="text-sm text-[#23412C]">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Recommendations */}
                <div>
                  <h4 className="font-semibold text-[#23412C] mb-2">Sofort-Empfehlungen:</h4>
                  <div className="space-y-1">
                    {getCurrentAssessment().recommendations.slice(0, 2).map((rec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                        <span className="text-sm text-[#23412C]">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Assessment Questions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#E86F3A]" />
              Zusätzliche Einschätzung
            </h3>
            <p className="text-sm text-[#23412C]/70 mb-4">
              Beantworten Sie diese Fragen für eine präzisere Bewertung:
            </p>
            
            <div className="space-y-4">
              {[
                'Wie gut können Sie sich heute konzentrieren?',
                'Wie ist Ihre Schlafqualität in letzter Zeit?',
                'Wie oft denken Sie an Ihre Sorgen?',
                'Wie angespannt fühlen sich Ihre Muskeln an?',
                'Wie ist Ihr Energielevel heute?',
                'Wie gut können Sie Entscheidungen treffen?',
                'Wie fühlen Sie sich emotional im Moment?',
                'Wie ist Ihr Appetit in letzter Zeit?',
                'Wie gehen Sie mit anderen Menschen um?',
                'Wie stark fühlen Sie sich überfordert?'
              ].map((question, index) => (
                <div key={index} className="bg-[#F6E3B6]/50 rounded-xl p-4">
                  <p className="text-sm font-medium text-[#23412C] mb-3">{question}</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => setAssessmentAnswers(prev => ({ ...prev, [`q${index}`]: value }))}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          assessmentAnswers[`q${index}`] === value
                            ? 'bg-[#E86F3A] text-white'
                            : 'bg-white/60 text-[#23412C] hover:bg-white/80'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-[#23412C]/60 mt-1">
                    <span>
                      {index === 0 ? 'Sehr schlecht' :
                       index === 1 ? 'Sehr schlecht' :
                       index === 2 ? 'Ständig' :
                       index === 3 ? 'Sehr angespannt' :
                       index === 4 ? 'Völlig erschöpft' :
                       index === 5 ? 'Gar nicht' :
                       index === 6 ? 'Sehr schlecht' :
                       index === 7 ? 'Gar keinen' :
                       index === 8 ? 'Sehr schwierig' :
                       'Extrem'}
                    </span>
                    <span>
                      {index === 0 ? 'Sehr gut' :
                       index === 1 ? 'Ausgezeichnet' :
                       index === 2 ? 'Nie' :
                       index === 3 ? 'Völlig entspannt' :
                       index === 4 ? 'Sehr energiegeladen' :
                       index === 5 ? 'Sehr leicht' :
                       index === 6 ? 'Ausgezeichnet' :
                       index === 7 ? 'Sehr gut' :
                       index === 8 ? 'Sehr leicht' :
                       'Gar nicht'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => setCurrentScreen('result')}
              className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Detaillierte Auswertung anzeigen
            </button>
            
            <button
              onClick={() => setCurrentScreen('tracking')}
              className="w-full bg-[#4D5922] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#3D4819] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Verlauf verfolgen
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (currentScreen === 'result') {
    const assessment = getCurrentAssessment();
    const personalAnalysis = getPersonalAnalysis();
    
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentScreen('assessment')}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Persönliche Stressanalyse</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {/* Main Result */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative"
                 style={{ backgroundColor: assessment.color }}>
              <Thermometer className="w-16 h-16 text-white" />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full w-12 h-12 flex items-center justify-center border-4 border-[#F6D98A] shadow-lg">
                <span className="text-xl font-bold text-[#23412C]">{currentStressLevel}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-[#23412C] mb-2">{assessment.category}</h1>
            <p className="text-[#23412C]/80 text-lg mb-6 max-w-lg mx-auto leading-relaxed">
              {assessment.explanation}
            </p>
          </div>

          {/* Personal Analysis Dashboard */}
          {personalAnalysis && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
              <h3 className="text-xl font-bold text-[#23412C] mb-6 flex items-center gap-2">
                <Brain className="w-6 h-6 text-[#E86F3A]" />
                Ihre persönliche Stressanalyse
              </h3>
              
              {/* Overall Wellness Score */}
              <div className="bg-gradient-to-r from-[#F6E3B6] to-[#F2C75B]/50 rounded-xl p-6 mb-6">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-[#23412C] mb-2">Gesamtwert Wohlbefinden</h4>
                  <div className="text-4xl font-bold text-[#23412C] mb-2">
                    {(personalAnalysis.overallScore * 20).toFixed(0)}%
                  </div>
                  <p className="text-sm text-[#23412C]/70">
                    Basierend auf Ihren 10 Bewertungen
                  </p>
                </div>
                
                <div className="w-full bg-white/60 rounded-full h-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#E86F3A] to-[#4D5922] rounded-full transition-all duration-1000"
                    style={{ width: `${personalAnalysis.overallScore * 20}%` }}
                  />
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {personalAnalysis.categories.map((category, index) => (
                  <div key={index} className="bg-[#F6E3B6]/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        <h5 className="font-semibold text-[#23412C]">{category.name}</h5>
                      </div>
                      <div className="text-lg font-bold text-[#23412C]">
                        {(category.score * 20).toFixed(0)}%
                      </div>
                    </div>
                    
                    <div className="w-full bg-white/60 rounded-full h-3 mb-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          category.score >= 4 ? 'bg-[#4D5922]' :
                          category.score >= 3 ? 'bg-[#F2C75B]' : 'bg-[#E86F3A]'
                        }`}
                        style={{ width: `${category.score * 20}%` }}
                      />
                    </div>
                    
                    <p className="text-xs text-[#23412C]/60">
                      {category.areas.join(', ')}
                    </p>
                  </div>
                ))}
              </div>

              {/* Strengths and Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Strengths */}
                {personalAnalysis.strengths.length > 0 && (
                  <div className="bg-[#4D5922]/20 rounded-xl p-4">
                    <h5 className="font-semibold text-[#23412C] mb-3 flex items-center gap-2">
                      <span className="text-lg">💪</span>
                      Ihre Stärken
                    </h5>
                    <div className="space-y-2">
                      {personalAnalysis.strengths.map((strength, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span>{strength.icon}</span>
                          <span className="text-sm font-medium text-[#23412C]">
                            {strength.name}
                          </span>
                          <span className="text-xs text-[#4D5922] font-bold">
                            {(strength.score * 20).toFixed(0)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {personalAnalysis.challenges.length > 0 && (
                  <div className="bg-[#E86F3A]/20 rounded-xl p-4">
                    <h5 className="font-semibold text-[#23412C] mb-3 flex items-center gap-2">
                      <span className="text-lg">🎯</span>
                      Verbesserungsbereiche
                    </h5>
                    <div className="space-y-2">
                      {personalAnalysis.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span>{challenge.icon}</span>
                          <span className="text-sm font-medium text-[#23412C]">
                            {challenge.name}
                          </span>
                          <span className="text-xs text-[#E86F3A] font-bold">
                            {(challenge.score * 20).toFixed(0)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Detailed Analysis */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-xl font-bold text-[#23412C] mb-4 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#E86F3A]" />
              Detaillierte Auswertung
            </h3>
            
            {/* Stress Level Visualization */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#23412C]">Ihr Stresslevel</span>
                <span className="text-sm font-medium text-[#23412C]">{currentStressLevel}/10</span>
              </div>
              <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${(currentStressLevel / 10) * 100}%`,
                    backgroundColor: assessment.color 
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#23412C]/60 mt-1">
                <span>Entspannt</span>
                <span>Normal</span>
                <span>Hoch</span>
                <span>Kritisch</span>
              </div>
            </div>

            {/* Symptoms Analysis */}
            <div className="mb-6">
              <h4 className="font-semibold text-[#23412C] mb-3">Ihre aktuellen Stresssignale:</h4>
              <div className="grid grid-cols-1 gap-3">
                {assessment.symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-[#F6E3B6]/50 rounded-xl">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: assessment.color }} />
                    <span className="text-sm text-[#23412C] font-medium">{symptom}</span>
                    <div className="ml-auto">
                      {currentStressLevel >= 7 ? (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      ) : currentStressLevel >= 4 ? (
                        <Info className="w-4 h-4 text-yellow-500" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Impact */}
            <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: `${assessment.color}20` }}>
              <h4 className="font-semibold text-[#23412C] mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5" style={{ color: assessment.color }} />
                Auswirkungen auf Ihre Gesundheit
              </h4>
              <div className="text-sm text-[#23412C]/80 space-y-2">
                {currentStressLevel <= 3 && (
                  <div>
                    <p>✅ <strong>Optimal:</strong> Ihr Körper kann sich regenerieren und Ihre Immunabwehr ist stark.</p>
                    <p>✅ <strong>Mental:</strong> Klare Gedanken und gute Entscheidungsfähigkeit.</p>
                    <p>✅ <strong>Emotional:</strong> Ausgeglichene Stimmung und Widerstandsfähigkeit.</p>
                  </div>
                )}
                {currentStressLevel >= 4 && currentStressLevel <= 6 && (
                  <div>
                    <p>⚠️ <strong>Achtung:</strong> Erste Belastungszeichen - Ihr Körper arbeitet härter als normal.</p>
                    <p>⚠️ <strong>Mental:</strong> Konzentration kann beeinträchtigt sein, Entscheidungen fallen schwerer.</p>
                    <p>⚠️ <strong>Emotional:</strong> Reizbarkeit und emotionale Schwankungen möglich.</p>
                  </div>
                )}
                {currentStressLevel >= 7 && (
                  <div>
                    <p>🚨 <strong>Warnung:</strong> Hohe Belastung - Risiko für gesundheitliche Probleme steigt.</p>
                    <p>🚨 <strong>Mental:</strong> Deutliche Konzentrationsprobleme und Leistungseinbußen.</p>
                    <p>🚨 <strong>Emotional:</strong> Starke emotionale Belastung, Burnout-Gefahr.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Personalized Recommendations */}
          {personalAnalysis && personalAnalysis.recommendations.length > 0 && (
            <div className="bg-[#4D5922] rounded-2xl p-6 mb-6 text-white shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Ihre maßgeschneiderten Empfehlungen
              </h3>
              <div className="space-y-4">
                {personalAnalysis.recommendations.map((rec, index) => (
                  <div key={index} className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{rec.icon}</span>
                      <h4 className="font-semibold text-white">{rec.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {rec.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#F6D98A] mt-0.5 flex-shrink-0" />
                          <span className="text-white/90 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => setCurrentScreen('education')}
              className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Mehr über Stressmanagement lernen
            </button>
            
            <button
              onClick={() => setCurrentScreen('tracking')}
              className="w-full bg-[#F2C75B] text-[#23412C] px-8 py-4 rounded-2xl font-semibold hover:bg-[#E6B84F] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Fortschritt verfolgen
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Education Screen
  if (currentScreen === 'education') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentScreen('intro')}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Stress-Wissen</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-[#4D5922] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#23412C] mb-2">Verstehen Sie Ihren Stress</h3>
            <p className="text-[#23412C]/70 mb-6">Umfassendes Wissen über Stress und seine Bewältigung</p>
          </div>

          {/* Stress Level Guide */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-[#E86F3A]" />
              Die 11 Stress-Level im Detail
            </h3>
            
            <div className="space-y-3">
              {stressLevels.map((level, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedLevel(selectedLevel === index ? null : index);
                    setShowDetail(!showDetail || selectedLevel !== index);
                  }}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                    selectedLevel === index
                      ? `${level.bgColor} border-2`
                      : 'bg-white/60 border-white/60 hover:bg-white/80'
                  }`}
                  style={{ borderColor: selectedLevel === index ? level.color : undefined }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: level.color }}
                      >
                        {level.level}
                      </div>
                      <div>
                        <h4 className="font-medium text-[#23412C]">{level.category}</h4>
                        <p className="text-sm text-[#23412C]/70">{level.symptoms.length} Anzeichen</p>
                      </div>
                    </div>
                    <div className="text-[#23412C]/50">
                      {selectedLevel === index ? '−' : '+'}
                    </div>
                  </div>
                  
                  {selectedLevel === index && (
                    <div className="mt-4 pt-4 border-t border-[#23412C]/20">
                      <p className="text-sm text-[#23412C]/80 mb-3">{level.explanation}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-[#23412C] mb-2">Anzeichen:</h5>
                          <ul className="space-y-1">
                            {level.symptoms.map((symptom, i) => (
                              <li key={i} className="text-sm text-[#23412C]/70 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: level.color }} />
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-[#23412C] mb-2">Empfehlungen:</h5>
                          <ul className="space-y-1">
                            {level.recommendations.map((rec, i) => (
                              <li key={i} className="text-sm text-[#23412C]/70 flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-[#4D5922]" />
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Stress Science */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#E86F3A]" />
              Die Wissenschaft hinter Stress
            </h3>
            
            <div className="space-y-4 text-sm text-[#23412C]/80 leading-relaxed">
              <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">🧠 Neurobiologie</h4>
                <p>
                  Stress aktiviert das limbische System, besonders die Amygdala (Mandelkern). Diese "Alarmanlage" 
                  des Gehirns löst binnen Millisekunden die Stressreaktion aus, lange bevor der Cortex die Situation 
                  rational bewerten kann.
                </p>
              </div>

              <div className="bg-[#F2C75B]/30 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">🏃‍♂️ Kampf-oder-Flucht</h4>
                <p>
                  Die evolutionäre Stressreaktion bereitet den Körper auf körperliche Aktion vor: Herzschlag und 
                  Atmung beschleunigen sich, Muskeln spannen sich an, Blutzucker steigt. In modernen Zeiten sind 
                  diese Reaktionen oft überdimensioniert.
                </p>
              </div>

              <div className="bg-[#E86F3A]/20 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">⚗️ Stresshormone</h4>
                <p>
                  Cortisol, das "Stresshormon", wird in den Nebennieren produziert. Kurzfristig hilft es bei der 
                  Bewältigung von Herausforderungen. Chronisch erhöht schädigt es jedoch Immunsystem, Gedächtnis 
                  und Herz-Kreislauf-System.
                </p>
              </div>

              <div className="bg-[#4D5922]/20 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">🔄 Chronischer Stress</h4>
                <p>
                  Dauerstress überlastet die Anpassungsfähigkeit des Körpers. Die Folgen: Erschöpfung, 
                  Immunschwäche, Konzentrationsprobleme und erhöhtes Risiko für Depression, Herzerkrankungen 
                  und andere Gesundheitsprobleme.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-[#4D5922] rounded-2xl p-6 mb-6 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Sofort-Strategien für den Alltag
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { title: "4-7-8 Atmung", desc: "4 Sek. einatmen, 7 Sek. halten, 8 Sek. ausatmen" },
                { title: "5-4-3-2-1 Technik", desc: "5 Dinge sehen, 4 hören, 3 fühlen, 2 riechen, 1 schmecken" },
                { title: "Progressive Muskelentspannung", desc: "Muskeln 5 Sek. anspannen, dann 10 Sek. entspannen" },
                { title: "Kalt-Warm-Therapie", desc: "Kaltes Wasser über Handgelenke für Sofort-Entspannung" }
              ].map((tip, index) => (
                <div key={index} className="bg-white/20 rounded-xl p-3">
                  <h4 className="font-medium text-white mb-1">{tip.title}</h4>
                  <p className="text-white/80 text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentScreen('assessment')}
            className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
          >
            <Thermometer className="w-5 h-5" />
            Jetzt Stresslevel messen
          </button>
        </div>
      </div>
    );
  }

  // Tracking Screen
  if (currentScreen === 'tracking') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={() => setCurrentScreen('result')}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Stress-Verlauf</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#23412C] mb-2">Verfolgen Sie Ihren Fortschritt</h3>
            <p className="text-[#23412C]/70 mb-6">Erkennen Sie Muster und Verbesserungen in Ihrem Stressmanagement</p>
          </div>

          {/* Weekly Overview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#E86F3A]" />
              Diese Woche
            </h3>
            
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-xs text-[#23412C]/60 mb-2">{day}</div>
                  <div 
                    className="w-10 h-10 rounded-full mx-auto mb-1 flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: index === 2 ? getCurrentAssessment().color : '#E5E7EB' }}
                  >
                    {index === 2 ? currentStressLevel : '?'}
                  </div>
                  <div className="text-xs text-[#23412C]/60">
                    {index === 2 ? 'Heute' : ''}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
              <h4 className="font-medium text-[#23412C] mb-2">Wochenstatistik</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#E86F3A]">{currentStressLevel}</div>
                  <div className="text-xs text-[#23412C]/60">Aktuell</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#4D5922]">{Math.max(0, currentStressLevel - 1)}</div>
                  <div className="text-xs text-[#23412C]/60">Durchschnitt</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F2C75B]">3</div>
                  <div className="text-xs text-[#23412C]/60">Messungen</div>
                </div>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-[#E86F3A]" />
              Ihre Erkenntnisse
            </h3>
            
            <div className="space-y-3">
              <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
                <h4 className="font-medium text-[#23412C] mb-2">📈 Trend</h4>
                <p className="text-sm text-[#23412C]/80">
                  {currentStressLevel <= 3 ? 
                    "Ihr Stresslevel ist niedrig - halten Sie Ihre bewährten Strategien bei!" :
                    currentStressLevel <= 6 ?
                    "Moderater Stress erkannt - achten Sie auf regelmäßige Entspannungspausen." :
                    "Hoher Stress - Zeit für aktive Stressbewältigung und professionelle Unterstützung."
                  }
                </p>
              </div>

              <div className="bg-[#F2C75B]/30 rounded-xl p-4">
                <h4 className="font-medium text-[#23412C] mb-2">🎯 Empfehlung</h4>
                <p className="text-sm text-[#23412C]/80">
                  Basierend auf Ihrem aktuellen Level von {currentStressLevel}/10 empfehlen wir: {getCurrentAssessment().recommendations[0]}
                </p>
              </div>

              <div className="bg-[#E86F3A]/20 rounded-xl p-4">
                <h4 className="font-medium text-[#23412C] mb-2">🔄 Nächste Messung</h4>
                <p className="text-sm text-[#23412C]/80">
                  Für optimales Tracking empfehlen wir tägliche Messungen zur gleichen Tageszeit. 
                  Ihre nächste Messung: Morgen um diese Zeit.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-[#4D5922] rounded-2xl p-6 mb-6 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Ihre Erfolge
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/20 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-sm font-medium">Erste Messung</div>
                <div className="text-xs text-white/80">Abgeschlossen</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center opacity-50">
                <div className="text-2xl mb-1">📊</div>
                <div className="text-sm font-medium">7 Tage Tracking</div>
                <div className="text-xs text-white/80">1/7 Tage</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center opacity-50">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-sm font-medium">Stress reduziert</div>
                <div className="text-xs text-white/80">Bald verfügbar</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center opacity-50">
                <div className="text-2xl mb-1">🌟</div>
                <div className="text-sm font-medium">30 Tage Streak</div>
                <div className="text-xs text-white/80">1/30 Tage</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentScreen('assessment')}
            className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
          >
            <Thermometer className="w-5 h-5" />
            Neue Messung durchführen
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default StressBarometer; 