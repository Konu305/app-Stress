import React, { useState, useEffect } from 'react';
import { ChevronLeft, Brain, Target, BarChart3, TrendingUp, Heart, CheckCircle, Info, AlertTriangle, Calendar, Award, Thermometer, Activity, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Constants
const dass21Questions = [
  {
    id: 'dass_1',
    category: 'depression',
    question: 'Ich konnte überhaupt keine positiven Gefühle mehr empfinden',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_2',
    category: 'anxiety',
    question: 'Ich spürte meinen Herzschlag ohne körperliche Belastung',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_3',
    category: 'depression',
    question: 'Ich fühlte mich niedergeschlagen und traurig',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_4',
    category: 'anxiety',
    question: 'Ich hatte Schwierigkeiten zu atmen',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_5',
    category: 'depression',
    question: 'Ich fand es schwierig, mich zu etwas aufzuraffen',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_6',
    category: 'stress',
    question: 'Ich tendierte dazu, auf Situationen überzureagieren',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_7',
    category: 'anxiety',
    question: 'Ich zitterte (z.B. an den Händen)',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_8',
    category: 'stress',
    question: 'Ich fand es schwierig, mich zu entspannen',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_9',
    category: 'anxiety',
    question: 'Ich machte mir Sorgen über Situationen, in denen ich in Panik geraten könnte',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
    },
    {
    id: 'dass_10',
    category: 'depression',
    question: 'Ich hatte das Gefühl, nichts mehr zu erwarten',
      options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_11',
    category: 'stress',
    question: 'Ich fand mich leicht aufgeregt',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_12',
    category: 'stress',
    question: 'Ich fand es schwierig, mich zu beruhigen',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_13',
    category: 'depression',
    question: 'Ich fühlte mich niedergeschlagen und traurig',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_14',
    category: 'stress',
    question: 'Ich reagierte ungehalten auf alles, was mich davon abhielt, meine momentane Tätigkeit fortzuführen',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_15',
    category: 'anxiety',
    question: 'Ich fühlte mich einer Panik nahe',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_16',
    category: 'depression',
    question: 'Ich war nicht in der Lage, mich für irgendetwas zu begeistern',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_17',
    category: 'depression',
    question: 'Ich fühlte mich als Person nicht viel wert',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_18',
    category: 'stress',
    question: 'Ich fand mich ziemlich empfindlich',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_19',
    category: 'anxiety',
    question: 'Ich schwitzte spürbar (z.B. Hände) ohne körperliche Anstrengung',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  },
  {
    id: 'dass_20',
    category: 'anxiety',
    question: 'Ich fühlte mich grundlos ängstlich',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
      ]
  },
  {
    id: 'dass_21',
    category: 'depression',
    question: 'Ich empfand das Leben als sinnlos',
    options: [
      { value: 0, label: 'Traf gar nicht auf mich zu' },
      { value: 1, label: 'Traf manchmal auf mich zu' },
      { value: 2, label: 'Traf häufig auf mich zu' },
      { value: 3, label: 'Traf sehr häufig auf mich zu' }
    ]
  }
] as const;

// Types
type Category = 'depression' | 'anxiety' | 'stress';
type Severity = 'normal' | 'mild' | 'moderate' | 'severe' | 'extremely severe';

interface CategoryScore {
  name: string;
  score: number;
  icon: string;
  description: string;
  severity: Severity;
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

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#F6D98A] shadow-lg text-center">
            <AlertTriangle className="w-12 h-12 text-[#E86F3A] mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[#23412C] mb-2">Ein Fehler ist aufgetreten</h2>
            <p className="text-[#23412C]/70 mb-6">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#4D5922] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3D4819] transition-colors"
            >
              Seite neu laden
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main Component
const PersonalStressAnalysis: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'results' | 'recommendations'>('intro');
  const [currentQuestionGroup, setCurrentQuestionGroup] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // Initialize component
      setIsLoading(false);
    } catch (err) {
      console.error('Error initializing component:', err);
      setError('Error loading the questionnaire');
    }
  }, []);

  console.log('Current step:', currentStep);
  console.log('Current question group:', currentQuestionGroup);
  console.log('Answers:', answers);

  // Split questions into groups of 5
  const questionGroups = React.useMemo(() => {
    try {
      return Array.from({ length: Math.ceil(dass21Questions.length / 5) }, (_, i) =>
        dass21Questions.slice(i * 5, (i + 1) * 5)
      );
    } catch (err) {
      console.error('Error splitting questions:', err);
      setError('Error loading questions');
      return [];
    }
  }, [dass21Questions]);

  const handleAnswer = (questionId: string, value: number) => {
    try {
      setAnswers(prev => ({ ...prev, [questionId]: value }));
    } catch (err) {
      console.error('Error saving answer:', err);
      setError('Error saving your answer');
    }
  };

  const moveToNextGroup = () => {
    try {
      const currentQuestions = questionGroups[currentQuestionGroup];
      const allAnswered = currentQuestions.every(q => answers[q.id] !== undefined);
      
      if (allAnswered) {
        if (currentQuestionGroup < questionGroups.length - 1) {
          setCurrentQuestionGroup(prev => prev + 1);
        } else {
          setCurrentStep('results');
        }
      }
    } catch (err) {
      console.error('Error moving to next group:', err);
      setError('Error navigating to next questions');
    }
  };

  const moveToPreviousGroup = () => {
    try {
      if (currentQuestionGroup > 0) {
        setCurrentQuestionGroup(prev => prev - 1);
      } else {
        setCurrentStep('intro');
      }
    } catch (err) {
      console.error('Error moving to previous group:', err);
      setError('Error navigating to previous questions');
    }
  };

  const calculateCategoryScores = (): CategoryScore[] => {
    const scores: Record<Category, number> = {
      depression: 0,
      anxiety: 0,
      stress: 0
    };

    questionGroups.forEach(group => {
      group.forEach(question => {
        const answer = answers[question.id] || 0;
        scores[question.category as Category] += answer;
      });
    });

    return [
      {
        name: 'Depression',
        score: scores.depression,
        icon: 'Brain',
        description: 'Bewertung der depressiven Symptome',
        severity: getSeverityLevel(scores.depression, 'depression'),
        color: 'text-blue-500'
      },
      {
        name: 'Angst',
        score: scores.anxiety,
        icon: 'Heart',
        description: 'Bewertung der Angstsymptome',
        severity: getSeverityLevel(scores.anxiety, 'anxiety'),
        color: 'text-red-500'
      },
      {
        name: 'Stress',
        score: scores.stress,
        icon: 'Activity',
        description: 'Bewertung der Stresssymptome',
        severity: getSeverityLevel(scores.stress, 'stress'),
        color: 'text-green-500'
      }
    ];
  };

  const getSeverityLevel = (score: number, category: Category): Severity => {
    const ranges: Record<Category, Record<Severity, [number, number]>> = {
      depression: {
        normal: [0, 9],
        mild: [10, 13],
        moderate: [14, 20],
        severe: [21, 27],
        'extremely severe': [28, 42]
      },
      anxiety: {
        normal: [0, 7],
        mild: [8, 9],
        moderate: [10, 14],
        severe: [15, 19],
        'extremely severe': [20, 42]
      },
      stress: {
        normal: [0, 14],
        mild: [15, 18],
        moderate: [19, 25],
        severe: [26, 33],
        'extremely severe': [34, 42]
      }
    };

    const categoryRanges = ranges[category];
    
    if (score <= categoryRanges.normal[1]) return 'normal';
    if (score <= categoryRanges.mild[1]) return 'mild';
    if (score <= categoryRanges.moderate[1]) return 'moderate';
    if (score <= categoryRanges.severe[1]) return 'severe';
    return 'extremely severe';
  };

  const generateRecommendations = (categoryScores: CategoryScore[]): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    categoryScores.forEach(category => {
      if (category.severity === 'normal') return;

      const baseRecommendation: Recommendation = {
        category: category.name,
        title: '',
        description: '',
        actions: [],
        icon: category.icon,
        priority: getPriorityFromSeverity(category.severity)
      };

        switch (category.name) {
        case 'Depression':
          baseRecommendation.title = 'Umgang mit depressiven Symptomen';
          baseRecommendation.description = 'Ihre Antworten deuten auf depressive Symptome hin.';
          baseRecommendation.actions = [
            'Suchen Sie professionelle Unterstützung',
            'Etablieren Sie eine Tagesstruktur',
            'Bleiben Sie körperlich aktiv',
            'Pflegen Sie soziale Kontakte'
          ];
            break;
        case 'Angst':
          baseRecommendation.title = 'Umgang mit Angstsymptomen';
          baseRecommendation.description = 'Ihre Antworten deuten auf erhöhte Angstsymptome hin.';
          baseRecommendation.actions = [
            'Praktizieren Sie Entspannungsübungen',
            'Lernen Sie Atemtechniken',
            'Suchen Sie professionelle Unterstützung',
            'Führen Sie ein Angsttagebuch'
          ];
            break;
        case 'Stress':
          baseRecommendation.title = 'Stressmanagement';
          baseRecommendation.description = 'Ihre Antworten deuten auf ein erhöhtes Stressniveau hin.';
          baseRecommendation.actions = [
            'Praktizieren Sie Stressmanagement-Techniken',
            'Planen Sie regelmäßige Pausen ein',
            'Üben Sie Achtsamkeit',
            'Optimieren Sie Ihren Schlaf'
          ];
            break;
        }

      recommendations.push(baseRecommendation);
    });

    return recommendations;
  };

  const getPriorityFromSeverity = (severity: Severity): 'high' | 'medium' | 'low' => {
    switch (severity) {
      case 'extremely severe':
      case 'severe':
        return 'high';
      case 'moderate':
        return 'medium';
      default:
        return 'low';
    }
  };

  const getSeverityColor = (severity: Severity): string => {
    switch (severity) {
      case 'normal':
        return '#22C55E';
      case 'mild':
        return '#84CC16';
      case 'moderate':
        return '#F59E0B';
      case 'severe':
        return '#DC2626';
      case 'extremely severe':
        return '#991B1B';
    }
  };

  const getSeverityText = (severity: Severity): string => {
    switch (severity) {
      case 'normal':
        return 'Normal';
      case 'mild':
        return 'Leicht';
      case 'moderate':
        return 'Moderat';
      case 'severe':
        return 'Schwer';
      case 'extremely severe':
        return 'Sehr schwer';
    }
  };

  const renderIntro = () => (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
          <button
          onClick={() => navigate(-1)}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
        <h2 className="text-xl font-bold text-[#23412C]">DASS-21 Fragebogen</h2>
          <div className="w-12" />
        </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F6D98A] shadow-lg mb-8">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#4D5922] to-[#3D4819] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Target className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-[#23412C] mb-4">
            Persönliche Stressanalyse
          </h1>
          <p className="text-lg text-[#23412C]/80 max-w-2xl mx-auto">
            Der DASS-21 ist ein wissenschaftlich validierter Fragebogen zur Erfassung von Depression, Angst und Stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
            <div className="w-12 h-12 bg-[#4D5922] rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#23412C] mb-2">Depression</h3>
            <p className="text-sm text-[#23412C]/70">
              Erfasst Symptome wie Niedergeschlagenheit, Antriebslosigkeit und Interessenverlust.
              </p>
            </div>
          <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
            <div className="w-12 h-12 bg-[#4D5922] rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#23412C] mb-2">Angst</h3>
            <p className="text-sm text-[#23412C]/70">
              Misst körperliche Anspannung, Beunruhigung und situative Ängste.
              </p>
            </div>
          <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
            <div className="w-12 h-12 bg-[#4D5922] rounded-full flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#23412C] mb-2">Stress</h3>
            <p className="text-sm text-[#23412C]/70">
              Bewertet Nervosität, Anspannung und Schwierigkeiten zu entspannen.
            </p>
          </div>
        </div>

        <div className="bg-[#4D5922] rounded-xl p-4 text-white mb-8">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Wichtige Information
          </h4>
          <p className="text-sm text-white/90">
            Dieser Fragebogen ersetzt keine professionelle Diagnose. Bei anhaltenden Beschwerden wenden Sie sich bitte an einen Arzt oder Therapeuten.
          </p>
        </div>

        <div className="space-y-4 text-sm text-[#23412C]/70 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#4D5922] mt-0.5 flex-shrink-0" />
            <span>21 kurze Fragen zu Ihrem Befinden in der letzten Woche</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#4D5922] mt-0.5 flex-shrink-0" />
            <span>Detaillierte Auswertung in den Bereichen Depression, Angst und Stress</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#4D5922] mt-0.5 flex-shrink-0" />
            <span>Personalisierte Empfehlungen basierend auf Ihren Ergebnissen</span>
          </div>
        </div>

          <button
            onClick={() => setCurrentStep('assessment')}
          className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-3"
          >
          <Target className="w-6 h-6" />
          Fragebogen starten
          </button>
      </div>
    </div>
  );

  const renderAssessment = () => {
    const currentQuestions = questionGroups[currentQuestionGroup];
    const progress = ((currentQuestionGroup + 1) / questionGroups.length) * 100;
    const allQuestionsAnswered = currentQuestions.every(q => answers[q.id] !== undefined);

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
          {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <button
            onClick={() => currentQuestionGroup === 0 ? setCurrentStep('intro') : moveToPreviousGroup()}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
            >
              <ChevronLeft className="w-6 h-6 text-[#23412C]" />
            </button>
          <h2 className="text-xl font-bold text-[#23412C]">DASS-21 Fragebogen</h2>
          <div className="w-12" />
        </div>

        {/* Progress Bar */}
        <div className="bg-white/50 rounded-full h-2 mb-6">
                <div 
            className="bg-[#4D5922] h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
          </div>

        {/* Questions */}
        <div className="space-y-6">
          {currentQuestions.map((question, index) => (
            <div
              key={question.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#F6D98A] shadow-lg"
            >
              <h3 className="text-lg font-medium text-[#23412C] mb-4">
                {currentQuestionGroup * 5 + index + 1}. {question.question}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {question.options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => handleAnswer(question.id, option.value)}
                    className={`p-4 rounded-lg text-left transition-all ${
                      answers[question.id] === option.value
                        ? 'bg-[#4D5922] text-white'
                        : 'bg-white/50 hover:bg-white/80 text-[#23412C]'
                    }`}
                  >
                      {option.label}
                </button>
              ))}
            </div>
          </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={moveToPreviousGroup}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${
              currentQuestionGroup === 0
                ? 'opacity-0'
                : 'bg-white/80 text-[#23412C] hover:bg-white'
            }`}
            disabled={currentQuestionGroup === 0}
          >
            Zurück
          </button>
          <div className="text-[#23412C] font-medium">
            Fragen {currentQuestionGroup * 5 + 1}-{Math.min((currentQuestionGroup + 1) * 5, dass21Questions.length)} von {dass21Questions.length}
          </div>
          <button
            onClick={moveToNextGroup}
            disabled={!allQuestionsAnswered}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${
              allQuestionsAnswered
                ? 'bg-[#4D5922] text-white hover:bg-[#3D4819]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestionGroup === questionGroups.length - 1 ? 'Auswertung' : 'Weiter'}
          </button>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const categoryScores = calculateCategoryScores();

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrentStep('assessment')}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
            >
              <ChevronLeft className="w-6 h-6 text-[#23412C]" />
            </button>
          <h1 className="text-2xl font-bold text-[#23412C]">
            DASS-21 Fragebogen
          </h1>
            <div className="w-12" />
          </div>

        {/* Category Scores */}
        <div className="space-y-6">
          {categoryScores.map((category) => {
            const severity = category.severity;
            const percentage = (category.score / 42) * 100;

            return (
              <div key={category.name} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#F6D98A] shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                    {category.name === 'Depression' && <Brain className="w-8 h-8 text-blue-500" />}
                    {category.name === 'Angst' && <Heart className="w-8 h-8 text-red-500" />}
                    {category.name === 'Stress' && <Activity className="w-8 h-8 text-green-500" />}
                      <div>
                        <h4 className="font-semibold text-[#23412C] text-lg">{category.name}</h4>
                      <p className="text-[#23412C]/60 text-sm">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                    <div className="text-2xl font-bold text-[#23412C] mb-1">
                      {category.score}
                      </div>
                    <div className="text-sm font-medium px-3 py-1 rounded-full text-white" 
                         style={{ backgroundColor: getSeverityColor(severity) }}>
                      {getSeverityText(severity)}
                      </div>
                    </div>
                  </div>
                  
                <div className="bg-white/50 rounded-full h-3 overflow-hidden mb-3">
                    <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${Math.min(percentage, 100)}%`,
                      backgroundColor: getSeverityColor(severity)
                    }}
                    />
                  </div>
                  
                <div className="flex items-center gap-2 text-sm">
                  {severity === 'normal' ? (
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                  ) : severity === 'mild' ? (
                    <Info className="w-4 h-4 text-[#84CC16]" />
                    ) : (
                    <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                    )}
                  <span className="text-[#23412C]/70">
                    {severity === 'normal' ? 'Dieser Bereich zeigt keine signifikante Belastung.' :
                    severity === 'mild' ? 'Leichte Belastung - präventive Maßnahmen empfohlen.' :
                    'Erhöhte Belastung - professionelle Unterstützung kann hilfreich sein.'}
                    </span>
                  </div>
                </div>
            );
          })}
        </div>

        {/* DASS-21 Reference Scale */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-[#F6D98A] shadow-lg">
          <h4 className="font-semibold text-[#23412C] mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#E86F3A]" />
            DASS-21 Bewertungsskala
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-[#23412C] mb-2">Depression</h5>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span>Normal:</span><span>0-9</span></div>
                <div className="flex justify-between"><span>Mild:</span><span>10-13</span></div>
                <div className="flex justify-between"><span>Moderat:</span><span>14-20</span></div>
                <div className="flex justify-between"><span>Schwer:</span><span>21-27</span></div>
                <div className="flex justify-between"><span>Extrem:</span><span>28+</span></div>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-[#23412C] mb-2">Angst</h5>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span>Normal:</span><span>0-7</span></div>
                <div className="flex justify-between"><span>Mild:</span><span>8-9</span></div>
                <div className="flex justify-between"><span>Moderat:</span><span>10-14</span></div>
                <div className="flex justify-between"><span>Schwer:</span><span>15-19</span></div>
                <div className="flex justify-between"><span>Extrem:</span><span>20+</span></div>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-[#23412C] mb-2">Stress</h5>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span>Normal:</span><span>0-14</span></div>
                <div className="flex justify-between"><span>Mild:</span><span>15-18</span></div>
                <div className="flex justify-between"><span>Moderat:</span><span>19-25</span></div>
                <div className="flex justify-between"><span>Schwer:</span><span>26-33</span></div>
                <div className="flex justify-between"><span>Extrem:</span><span>34+</span></div>
              </div>
            </div>
            </div>
          </div>

          {/* Action Button */}
        <div className="text-center mt-8">
            <button
              onClick={() => setCurrentStep('recommendations')}
              className="bg-[#E86F3A] text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-3 mx-auto"
            >
              <Target className="w-6 h-6" />
              Persönliche Empfehlungen anzeigen
            </button>
        </div>
      </div>
    );
  };

  const renderRecommendations = () => {
    const categoryScores = calculateCategoryScores();
    const recommendations = generateRecommendations(categoryScores);

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
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
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F6D98A] shadow-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E86F3A] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  {rec.category === 'Depression' && <Brain className="w-8 h-8 text-white" />}
                  {rec.category === 'Angst' && <Heart className="w-8 h-8 text-white" />}
                  {rec.category === 'Stress' && <Activity className="w-8 h-8 text-white" />}
                  </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#23412C]">{rec.title}</h3>
                    <p className="text-[#23412C]/70">{rec.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    rec.priority === 'high' ? 'bg-[#E86F3A] text-white' :
                    rec.priority === 'medium' ? 'bg-[#F2C75B] text-[#23412C]' :
                    'bg-[#F6E3B6] text-[#23412C]'
                  }`}>
                  {rec.priority === 'high' ? 'Hohe' : rec.priority === 'medium' ? 'Mittlere' : 'Niedrige'} Priorität
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
        <div className="bg-[#4D5922] rounded-2xl p-6 sm:p-8 mt-8 text-white">
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
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#F6D98A] shadow-lg text-center">
          <div className="w-12 h-12 border-4 border-[#4D5922] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#23412C]/70">Laden...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#F6D98A] shadow-lg text-center">
          <AlertTriangle className="w-12 h-12 text-[#E86F3A] mx-auto mb-4" />
          <h2 className="text-xl font-bold text-[#23412C] mb-2">Ein Fehler ist aufgetreten</h2>
          <p className="text-[#23412C]/70 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#4D5922] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3D4819] transition-colors"
          >
            Seite neu laden
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30">
        {currentStep === 'intro' && renderIntro()}
        {currentStep === 'assessment' && renderAssessment()}
        {currentStep === 'results' && renderResults()}
        {currentStep === 'recommendations' && renderRecommendations()}
      </div>
    </ErrorBoundary>
  );
};

export default PersonalStressAnalysis; 