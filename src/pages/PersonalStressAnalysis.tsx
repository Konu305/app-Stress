import React, { useState, useEffect } from 'react';
import { ChevronLeft, Brain, Target, BarChart3, TrendingUp, Heart, CheckCircle, Info, AlertTriangle, Calendar, Award, Thermometer, Activity, Play, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AssessmentAnswer {
  questionId: string;
  answer: number;
  category: 'cognitive' | 'physical' | 'emotional' | 'social';
}

interface CategoryScore {
  name: string;
  score: number;
  icon: string;
  areas: string[];
  color: string;
}

interface Recommendation {
  category: string;
  title: string;
  description: string;
  actions: string[];
  icon: string;
  priority: 'high' | 'medium' | 'low';
}

const PersonalStressAnalysis: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'results' | 'recommendations'>('intro');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const assessmentQuestions = [
    {
      id: 'sleep_quality',
      category: 'physical' as const,
      question: 'Wie bewerten Sie Ihre Schlafqualität in den letzten 2 Wochen?',
      options: [
        { value: 1, label: 'Sehr schlecht - ständig müde und unausgeruht' },
        { value: 2, label: 'Schlecht - oft müde, schlechter Schlaf' },
        { value: 3, label: 'Mittelmäßig - manchmal gut, manchmal schlecht' },
        { value: 4, label: 'Gut - meist erholsamer Schlaf' },
        { value: 5, label: 'Sehr gut - erholsamer, tiefer Schlaf' }
      ]
    },
    {
      id: 'concentration',
      category: 'cognitive' as const,
      question: 'Wie gut können Sie sich bei wichtigen Aufgaben konzentrieren?',
      options: [
        { value: 1, label: 'Sehr schwer - ständig abgelenkt' },
        { value: 2, label: 'Schwer - häufige Konzentrationsprobleme' },
        { value: 3, label: 'Mittelmäßig - mal besser, mal schlechter' },
        { value: 4, label: 'Gut - meist fokussiert' },
        { value: 5, label: 'Sehr gut - sehr fokussiert und aufmerksam' }
      ]
    },
    {
      id: 'emotional_balance',
      category: 'emotional' as const,
      question: 'Wie ausgeglichen fühlen Sie sich emotional in letzter Zeit?',
      options: [
        { value: 1, label: 'Sehr unausgeglichen - starke Schwankungen' },
        { value: 2, label: 'Unausgeglichen - häufige emotionale Höhen/Tiefen' },
        { value: 3, label: 'Mittelmäßig - normale Schwankungen' },
        { value: 4, label: 'Ausgeglichen - meist stabile Stimmung' },
        { value: 5, label: 'Sehr ausgeglichen - sehr stabile, positive Stimmung' }
      ]
    },
    {
      id: 'social_connections',
      category: 'social' as const,
      question: 'Wie zufrieden sind Sie mit Ihren sozialen Beziehungen?',
      options: [
        { value: 1, label: 'Sehr unzufrieden - fühle mich isoliert' },
        { value: 2, label: 'Unzufrieden - wenig befriedigende Kontakte' },
        { value: 3, label: 'Mittelmäßig - einige gute Beziehungen' },
        { value: 4, label: 'Zufrieden - gute, unterstützende Beziehungen' },
        { value: 5, label: 'Sehr zufrieden - erfüllende, starke Beziehungen' }
      ]
    },
    {
      id: 'energy_level',
      category: 'physical' as const,
      question: 'Wie ist Ihr allgemeines Energielevel im Alltag?',
      options: [
        { value: 1, label: 'Sehr niedrig - ständig erschöpft' },
        { value: 2, label: 'Niedrig - oft müde und schwach' },
        { value: 3, label: 'Mittelmäßig - ausreichend für den Alltag' },
        { value: 4, label: 'Hoch - energiegeladen und aktiv' },
        { value: 5, label: 'Sehr hoch - voller Energie und Motivation' }
      ]
    },
    {
      id: 'stress_handling',
      category: 'emotional' as const,
      question: 'Wie gut können Sie mit Stress umgehen?',
      options: [
        { value: 1, label: 'Sehr schlecht - fühle mich schnell überwältigt' },
        { value: 2, label: 'Schlecht - Stress belastet mich stark' },
        { value: 3, label: 'Mittelmäßig - manchmal gut, manchmal nicht' },
        { value: 4, label: 'Gut - bewältige Stress meist erfolgreich' },
        { value: 5, label: 'Sehr gut - bleibe auch unter Druck gelassen' }
      ]
    },
    {
      id: 'decision_making',
      category: 'cognitive' as const,
      question: 'Wie leicht fallen Ihnen Entscheidungen im Alltag?',
      options: [
        { value: 1, label: 'Sehr schwer - grüble ewig und bin unsicher' },
        { value: 2, label: 'Schwer - bin oft unentschlossen' },
        { value: 3, label: 'Mittelmäßig - je nach Situation' },
        { value: 4, label: 'Leicht - entscheide meist zügig und sicher' },
        { value: 5, label: 'Sehr leicht - entscheide schnell und selbstbewusst' }
      ]
    },
    {
      id: 'work_life_balance',
      category: 'social' as const,
      question: 'Wie zufrieden sind Sie mit Ihrer Work-Life-Balance?',
      options: [
        { value: 1, label: 'Sehr unzufrieden - keine Balance' },
        { value: 2, label: 'Unzufrieden - zu viel Arbeit, zu wenig Freizeit' },
        { value: 3, label: 'Mittelmäßig - mal besser, mal schlechter' },
        { value: 4, label: 'Zufrieden - gute Balance zwischen Arbeit und Freizeit' },
        { value: 5, label: 'Sehr zufrieden - perfekte Balance' }
      ]
    },
    {
      id: 'physical_symptoms',
      category: 'physical' as const,
      question: 'Wie häufig haben Sie körperliche Stress-Symptome (Kopfschmerzen, Verspannungen, etc.)?',
      options: [
        { value: 5, label: 'Nie - keine körperlichen Beschwerden' },
        { value: 4, label: 'Selten - nur bei starkem Stress' },
        { value: 3, label: 'Manchmal - gelegentliche Beschwerden' },
        { value: 2, label: 'Oft - regelmäßige Beschwerden' },
        { value: 1, label: 'Sehr oft - ständige körperliche Probleme' }
      ]
    },
    {
      id: 'optimism',
      category: 'emotional' as const,
      question: 'Wie optimistisch blicken Sie in die Zukunft?',
      options: [
        { value: 1, label: 'Sehr pessimistisch - sehe meist das Negative' },
        { value: 2, label: 'Pessimistisch - mache mir oft Sorgen' },
        { value: 3, label: 'Neutral - weder besonders optimistisch noch pessimistisch' },
        { value: 4, label: 'Optimistisch - blicke meist positiv in die Zukunft' },
        { value: 5, label: 'Sehr optimistisch - bin voller Hoffnung und Zuversicht' }
      ]
    }
  ];

  const calculateCategoryScores = (): CategoryScore[] => {
    const categories = {
      cognitive: { sum: 0, count: 0 },
      physical: { sum: 0, count: 0 },
      emotional: { sum: 0, count: 0 },
      social: { sum: 0, count: 0 }
    };

    // Calculate sums for each category
    assessmentQuestions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        categories[question.category].sum += answer;
        categories[question.category].count += 1;
      }
    });

    return [
      {
        name: 'Kognitiv',
        score: categories.cognitive.count > 0 ? categories.cognitive.sum / categories.cognitive.count : 0,
        icon: '🧠',
        areas: ['Konzentration', 'Entscheidungsfindung', 'Klarheit'],
        color: '#4D5922'
      },
      {
        name: 'Körperlich',
        score: categories.physical.count > 0 ? categories.physical.sum / categories.physical.count : 0,
        icon: '💪',
        areas: ['Schlaf', 'Energie', 'Körperliche Symptome'],
        color: '#E86F3A'
      },
      {
        name: 'Emotional',
        score: categories.emotional.count > 0 ? categories.emotional.sum / categories.emotional.count : 0,
        icon: '❤️',
        areas: ['Ausgeglichenheit', 'Stressbewältigung', 'Optimismus'],
        color: '#F2C75B'
      },
      {
        name: 'Sozial',
        score: categories.social.count > 0 ? categories.social.sum / categories.social.count : 0,
        icon: '👥',
        areas: ['Beziehungen', 'Work-Life-Balance'],
        color: '#F6D98A'
      }
    ];
  };

  const generateRecommendations = (categoryScores: CategoryScore[]): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    categoryScores.forEach(category => {
      if (category.score < 3) {
        switch (category.name) {
          case 'Kognitiv':
            recommendations.push({
              category: 'Kognitiv',
              title: 'Mentale Klarheit stärken',
              description: 'Verbessern Sie Ihre Konzentration und Entscheidungsfähigkeit',
              actions: [
                'Täglich 10-15 Minuten Meditation praktizieren',
                'Pausen alle 90 Minuten bei konzentrierter Arbeit',
                'Brain-Food wie Nüsse, Beeren und Fisch konsumieren',
                'Komplexe Aufgaben am Morgen erledigen (höchste Leistungsfähigkeit)'
              ],
              icon: '🧠',
              priority: 'high' as const
            });
            break;
          case 'Körperlich':
            recommendations.push({
              category: 'Körperlich',
              title: 'Körperliche Balance wiederherstellen',
              description: 'Stärken Sie Ihre körperliche Widerstandsfähigkeit',
              actions: [
                'Feste Schlafzeiten einhalten (7-9 Stunden pro Nacht)',
                'Täglich 20-30 Minuten moderate Bewegung',
                'Progressive Muskelentspannung lernen und anwenden',
                'Regelmäßige, ausgewogene Mahlzeiten zu sich nehmen'
              ],
              icon: '💪',
              priority: 'high' as const
            });
            break;
          case 'Emotional':
            recommendations.push({
              category: 'Emotional',
              title: 'Emotionale Stabilität fördern',
              description: 'Entwickeln Sie Ihre emotionale Resilienz',
              actions: [
                'Atemübungen (4-7-8 Technik) bei Stress anwenden',
                'Gefühle-Tagebuch führen zur Selbstreflexion',
                'Stressoren identifizieren und Bewältigungsstrategien entwickeln',
                'Bei anhaltenden Problemen professionelle Unterstützung suchen'
              ],
              icon: '❤️',
              priority: 'high' as const
            });
            break;
          case 'Sozial':
            recommendations.push({
              category: 'Sozial',
              title: 'Soziale Verbindungen stärken',
              description: 'Verbessern Sie Ihre sozialen Beziehungen und Work-Life-Balance',
              actions: [
                'Klare Grenzen zwischen Arbeit und Freizeit setzen',
                'Aktiv Unterstützung von Familie und Freunden suchen',
                'Regelmäßige soziale Aktivitäten planen',
                'Offene Kommunikation bei Konflikten praktizieren'
              ],
              icon: '👥',
              priority: 'medium' as const
            });
            break;
        }
      }
    });

    // Add positive reinforcement for strong areas
    const strongestCategory = categoryScores.reduce((prev, current) => 
      (prev.score > current.score) ? prev : current
    );

    if (strongestCategory.score >= 4) {
      recommendations.unshift({
        category: 'Stärken',
        title: `Ihre Stärke: ${strongestCategory.name} Bereich`,
        description: `Sie zeigen hervorragende Fähigkeiten im ${strongestCategory.name.toLowerCase()}en Bereich`,
        actions: [
          `Nutzen Sie Ihre Stärken in ${strongestCategory.areas.join(' und ')} als Ressource`,
          'Übertragen Sie diese Fähigkeiten auf andere Lebensbereiche',
          'Teilen Sie Ihre Erfolgsstrategien mit anderen',
          'Feiern Sie bewusst Ihre Fortschritte und Erfolge'
        ],
        icon: '⭐',
        priority: 'medium' as const
      });
    }

    return recommendations;
  };

  const renderIntro = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/exercises')}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h1 className="text-2xl font-bold text-[#23412C]">Persönliche Stressanalyse</h1>
          <div className="w-12" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-[#E86F3A] to-[#D85A2A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Brain className="w-16 h-16 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-[#23412C] mb-6">
            Entdecken Sie Ihr persönliches Stressprofil
          </h2>
          
          <p className="text-lg text-[#23412C]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Eine umfassende Analyse Ihrer aktuellen Stressbelastung und personalisierten Empfehlungen 
            für besseres Wohlbefinden in allen Lebensbereichen.
          </p>
        </div>

        {/* What to Expect */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-[#F6D98A] shadow-lg">
          <h3 className="text-2xl font-bold text-[#23412C] mb-6 text-center">
            Was Sie erwartet
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F6E3B6]/50 rounded-xl p-6">
              <div className="text-3xl mb-4">📋</div>
              <h4 className="font-semibold text-[#23412C] mb-2">10 gezielte Fragen</h4>
              <p className="text-[#23412C]/70 text-sm">
                Wissenschaftlich fundierte Bewertung Ihrer kognitiven, körperlichen, 
                emotionalen und sozialen Belastung.
              </p>
            </div>
            
            <div className="bg-[#F2C75B]/30 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h4 className="font-semibold text-[#23412C] mb-2">Detaillierte Auswertung</h4>
              <p className="text-[#23412C]/70 text-sm">
                Visualisierte Ergebnisse mit Stärken-Schwächen-Analyse 
                und individueller Bewertung.
              </p>
            </div>
            
            <div className="bg-[#E86F3A]/20 rounded-xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-semibold text-[#23412C] mb-2">Maßgeschneiderte Empfehlungen</h4>
              <p className="text-[#23412C]/70 text-sm">
                Konkrete, umsetzbare Strategien basierend auf Ihren 
                spezifischen Herausforderungen.
              </p>
            </div>
            
            <div className="bg-[#4D5922]/20 rounded-xl p-6">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="font-semibold text-[#23412C] mb-2">Langfristige Entwicklung</h4>
              <p className="text-[#23412C]/70 text-sm">
                Verfolgung Ihres Fortschritts und Anpassung der 
                Strategien über Zeit.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="bg-[#4D5922] rounded-2xl p-6 mb-8 text-white">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Datenschutz & Vertraulichkeit
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Alle Ihre Antworten werden vertraulich behandelt und nur zur Generierung 
            Ihrer persönlichen Empfehlungen verwendet. Die Daten werden lokal gespeichert 
            und nicht an Dritte weitergegeben.
          </p>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={() => setCurrentStep('assessment')}
            className="bg-[#E86F3A] text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-3 mx-auto"
          >
            <Play className="w-6 h-6" />
            Analyse jetzt starten
          </button>
          <p className="text-[#23412C]/60 mt-3 text-sm">
            Dauer: ca. 5-7 Minuten
          </p>
        </div>
      </div>
    </div>
  );

  const renderAssessment = () => {
    const currentQuestionIndex = Object.keys(answers).length;
    const currentQuestion = assessmentQuestions[currentQuestionIndex];
    const progress = (currentQuestionIndex / assessmentQuestions.length) * 100;

    if (currentQuestionIndex >= assessmentQuestions.length) {
      setCurrentStep('results');
      return null;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 p-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentStep('intro')}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
            >
              <ChevronLeft className="w-6 h-6 text-[#23412C]" />
            </button>
            <div className="text-center">
              <h2 className="text-xl font-bold text-[#23412C]">Frage {currentQuestionIndex + 1} von {assessmentQuestions.length}</h2>
              <div className="w-64 bg-white/60 rounded-full h-2 mt-2">
                <div 
                  className="bg-[#E86F3A] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="w-12" />
          </div>

          {/* Question */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#F6D98A] shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#23412C] mb-4">
                {currentQuestion.question}
              </h3>
              
              <p className="text-[#23412C]/70 text-sm">
                Wählen Sie die Antwort, die am besten auf Sie zutrifft
              </p>
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAnswers(prev => ({ ...prev, [currentQuestion.id]: option.value }));
                  }}
                  className="w-full p-6 rounded-xl text-left transition-all duration-200 border-2 bg-[#F6E3B6]/30 border-[#F6E3B6] hover:bg-[#F2C75B]/40 hover:border-[#E86F3A] hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-[#E86F3A] flex items-center justify-center bg-white">
                      <span className="text-[#E86F3A] font-bold">{option.value}</span>
                    </div>
                    <p className="text-[#23412C] font-medium leading-relaxed">
                      {option.label}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const categoryScores = calculateCategoryScores();
    const overallScore = categoryScores.reduce((sum, cat) => sum + cat.score, 0) / categoryScores.length;
    const recommendations = generateRecommendations(categoryScores);

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentStep('assessment')}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
            >
              <ChevronLeft className="w-6 h-6 text-[#23412C]" />
            </button>
            <h1 className="text-2xl font-bold text-[#23412C]">Ihre Ergebnisse</h1>
            <div className="w-12" />
          </div>

          {/* Overall Score */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-[#E86F3A] to-[#D85A2A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{(overallScore * 20).toFixed(0)}%</div>
                <div className="text-white/80 text-sm">Wohlbefinden</div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-[#23412C] mb-4">
              Ihre persönliche Stressanalyse
            </h2>
            
            <p className="text-lg text-[#23412C]/80 max-w-2xl mx-auto">
              {overallScore >= 4 ? 
                "Gratulation! Sie zeigen eine sehr gute Stressresilienz und Wohlbefinden in den meisten Bereichen." :
                overallScore >= 3 ?
                "Sie haben eine solide Basis, aber es gibt einige Bereiche mit Verbesserungspotential." :
                "Ihre Analyse zeigt mehrere Bereiche, die Aufmerksamkeit benötigen. Die folgenden Empfehlungen können Ihnen helfen."
              }
            </p>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-[#F6D98A] shadow-lg">
            <h3 className="text-2xl font-bold text-[#23412C] mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#E86F3A]" />
              Detaillierte Bereichsanalyse
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryScores.map((category, index) => (
                <div key={index} className="bg-[#F6E3B6]/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>
                      <div>
                        <h4 className="font-semibold text-[#23412C] text-lg">{category.name}</h4>
                        <p className="text-[#23412C]/60 text-sm">{category.areas.join(', ')}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#23412C]">
                        {(category.score * 20).toFixed(0)}%
                      </div>
                      <div className="text-xs text-[#23412C]/60">
                        {category.score >= 4 ? 'Sehr gut' : 
                         category.score >= 3 ? 'Gut' :
                         category.score >= 2 ? 'Verbesserung' : 'Aufmerksamkeit'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-white/60 rounded-full h-4 mb-4">
                    <div 
                      className={`h-4 rounded-full transition-all duration-1000 ${
                        category.score >= 4 ? 'bg-[#4D5922]' :
                        category.score >= 3 ? 'bg-[#F2C75B]' : 'bg-[#E86F3A]'
                      }`}
                      style={{ width: `${category.score * 20}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {category.score >= 4 ? (
                      <CheckCircle className="w-4 h-4 text-[#4D5922]" />
                    ) : category.score >= 3 ? (
                      <Info className="w-4 h-4 text-[#F2C75B]" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-[#E86F3A]" />
                    )}
                    <span className="text-sm text-[#23412C]/70">
                      {category.score >= 4 ? 'Dieser Bereich ist eine Stärke für Sie' :
                       category.score >= 3 ? 'Solide Basis mit Potenzial' :
                       'Hier können Sie sich verbessern'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentStep('recommendations')}
              className="bg-[#E86F3A] text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-3 mx-auto"
            >
              <Target className="w-6 h-6" />
              Persönliche Empfehlungen anzeigen
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderRecommendations = () => {
    const categoryScores = calculateCategoryScores();
    const recommendations = generateRecommendations(categoryScores);

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentStep('results')}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
            >
              <ChevronLeft className="w-6 h-6 text-[#23412C]" />
            </button>
            <h1 className="text-2xl font-bold text-[#23412C]">Ihre Empfehlungen</h1>
            <div className="w-12" />
          </div>

          {/* Intro */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#4D5922] to-[#3D4819] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#23412C] mb-4">
              Ihr maßgeschneiderter Aktionsplan
            </h2>
            <p className="text-lg text-[#23412C]/80 max-w-2xl mx-auto">
              Basierend auf Ihrer Analyse haben wir konkrete, umsetzbare Strategien für Sie zusammengestellt.
            </p>
          </div>

          {/* Recommendations */}
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#F6D98A] shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#E86F3A] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">{rec.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#23412C]">{rec.title}</h3>
                    <p className="text-[#23412C]/70">{rec.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    rec.priority === 'high' ? 'bg-[#E86F3A] text-white' :
                    rec.priority === 'medium' ? 'bg-[#F2C75B] text-[#23412C]' :
                    'bg-[#F6E3B6] text-[#23412C]'
                  }`}>
                    {rec.priority === 'high' ? 'Hoch' : rec.priority === 'medium' ? 'Mittel' : 'Niedrig'} Priorität
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {rec.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start gap-3 p-4 bg-[#F6E3B6]/50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-[#4D5922] mt-0.5 flex-shrink-0" />
                      <span className="text-[#23412C] text-sm font-medium leading-relaxed">
                        {action}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Next Steps */}
          <div className="bg-[#4D5922] rounded-2xl p-8 mt-8 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Nächste Schritte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-xl p-4">
                <h4 className="font-semibold mb-2">📋 Diese Woche</h4>
                <p className="text-white/90 text-sm">
                  Wählen Sie 1-2 Empfehlungen aus und beginnen Sie mit der Umsetzung.
                </p>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <h4 className="font-semibold mb-2">📈 Nächsten Monat</h4>
                <p className="text-white/90 text-sm">
                  Wiederholen Sie die Analyse um Ihren Fortschritt zu messen.
                </p>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <h4 className="font-semibold mb-2">🎯 Langfristig</h4>
                <p className="text-white/90 text-sm">
                  Entwickeln Sie kontinuierlich Ihre Stressresilienz weiter.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => setCurrentStep('intro')}
              className="flex-1 bg-[#F2C75B] text-[#23412C] px-8 py-4 rounded-2xl font-semibold hover:bg-[#E6B84F] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Analyse wiederholen
            </button>
            <button
              onClick={() => navigate('/exercises')}
              className="flex-1 bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Zu den Übungen
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Main render
  switch (currentStep) {
    case 'intro':
      return renderIntro();
    case 'assessment':
      return renderAssessment();
    case 'results':
      return renderResults();
    case 'recommendations':
      return renderRecommendations();
    default:
      return renderIntro();
  }
};

export default PersonalStressAnalysis; 