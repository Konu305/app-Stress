import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Menu, Clock, Play, ChevronLeft, MoreVertical, Video, Book, Brain, Heart, X, Lightbulb, Volume2, VolumeX, ChevronRight, Pause, ArrowLeft, CheckCircle, BarChart3, Target, TrendingUp, Users, Calendar, MessageSquare, Star, Award, Sparkles, Info } from 'lucide-react';
import PSSQuestionnaire from '../components/PSSQuestionnaire';
import StressReflection from '../components/StressReflection';
import BreathingExercise from '../components/BreathingExercise';
import StressBarometer from '../components/StressBarometer';
import Stresstagebuch from '../components/Stresstagebuch';
import AudioIntroduction from '../components/AudioIntroduction';
import GHQ12Questionnaire from '../components/GHQ12Questionnaire';

// Type definitions
interface ModuleItem {
  title: string;
  type: string;
  duration: string;
  description: string;
  onClick?: () => void;
  keyFacts?: string[];
}

interface ModuleContent {
  theorie: ModuleItem[];
  praxis: ModuleItem[];
  reflexion: ModuleItem[];
}

interface ModuleContents {
  [key: string]: ModuleContent;
}

const Exercises = () => {
  const navigate = useNavigate();
  const [showExercise, setShowExercise] = useState(false);
  const [currentExercise, setCurrentExercise] = useState<any>(null);
  const [showModuleContent, setShowModuleContent] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showStressReflection, setShowStressReflection] = useState(false);
  const [visibleKeyFacts, setVisibleKeyFacts] = useState<string[]>([]);
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStressFactors, setShowStressFactors] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'theorie' | 'praxis' | 'reflexion' | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [showStressBarometer, setShowStressBarometer] = useState(false);
  const [showStresstagebuch, setShowStresstagebuch] = useState(false);
  const [showAudioIntroduction, setShowAudioIntroduction] = useState(false);
  const [showGHQ12, setShowGHQ12] = useState(false);
  
  const startTime = useRef(0);

  const modules = [
    {
      title: 'Einführung: Was ist Stress?',
      subtitle: 'Woche 1',
      description: 'Grundlagen & persönliche Analyse',
      duration: '45 min',
      color: 'bg-card',
      textColor: 'text-text',
      progress: 0,
      illustration: 'stress-intro'
    },
    {
      title: 'Achtsamkeit & Selbstwahrnehmung',
      subtitle: 'Woche 2',
      description: 'Gedanken und Stressreaktionen erkennen',
      duration: '50 min',
      color: 'bg-accent',
      textColor: 'text-text',
      progress: 0,
      illustration: 'mindfulness'
    },
    {
      title: 'Denkfallen aufdecken',
      subtitle: 'Woche 3',
      description: 'Kognitive Verzerrungen bei Stress',
      duration: '40 min',
      color: 'bg-stressed',
      textColor: 'text-text',
      progress: 0,
      illustration: 'thinking-traps'
    },
    {
      title: 'Kognitive Umstrukturierung I',
      subtitle: 'Woche 4',
      description: 'Negative Gedanken hinterfragen',
      duration: '45 min',
      color: 'bg-secondary',
      textColor: 'text-text',
      progress: 0,
      illustration: 'cognitive-restructuring'
    },
    {
      title: 'Kognitive Umstrukturierung II',
      subtitle: 'Woche 5',
      description: 'Neue Perspektiven üben (Anwendung)',
      duration: '45 min',
      color: 'bg-secondary',
      textColor: 'text-text',
      progress: 0,
      illustration: 'perspective-change'
    },
    {
      title: 'Emotionsregulation',
      subtitle: 'Woche 6',
      description: 'Umgang mit stressbedingten Gefühlen',
      duration: '50 min',
      color: 'bg-depressed',
      textColor: 'text-text',
      progress: 0,
      illustration: 'emotion-regulation'
    },
    {
      title: 'Ressourcen & Selbstwirksamkeit',
      subtitle: 'Woche 7',
      description: 'Eigene Stärken nutzen',
      duration: '45 min',
      color: 'bg-depressed',
      textColor: 'text-text',
      progress: 0,
      illustration: 'resources'
    },
    {
      title: 'Abschluss & Transfer',
      subtitle: 'Woche 8',
      description: 'Rückblick, Festigung und Zukunftsplan',
      duration: '40 min',
      color: 'bg-muted',
      textColor: 'text-text',
      progress: 0,
      illustration: 'completion'
    }
  ];

  const moduleContents: ModuleContents = {
    'Einführung: Was ist Stress?': {
      theorie: [
        {
          title: 'Einleitung',
          type: 'Audio',
          duration: '5 min',
          description: 'Willkommen - Einführung in das Programm',
          onClick: () => setShowAudioIntroduction(true)
        },
        {
          title: 'Fragebogen',
          type: 'Fragebogen',
          duration: '10 min',
          description: 'PSS-10 Fragebogen zur Stresseinschätzung',
          onClick: () => setShowQuestionnaire(true)
        },
        {
          title: 'Was ist Stress?',
          type: 'Video',
          duration: '10 min',
          description: 'Definition und Grundlagen von Stress',
          onClick: () => {
            setShowVideoModal(true);
            setVisibleKeyFacts([]);
            startTime.current = Math.floor(Date.now() / 1000);
            setIsVideoPlaying(true);
          },
          keyFacts: [
            "Stress ist eine natürliche körperliche Reaktion auf Herausforderungen",
            "Das Stresshormon Cortisol spielt eine wichtige Rolle",
            "Es gibt positiven (Eustress) und negativen Stress (Disstress)",
            "Stressreaktionen aktivieren das sympathische Nervensystem",
            "Chronischer Stress kann gesundheitliche Folgen haben",
            "Jeder Mensch reagiert unterschiedlich auf Stressoren"
          ]
        },
        {
          title: 'Persönliches Wohlbefinden',
          type: 'Lektion',
          duration: '15 min',
          description: 'Erfassung des allgemeinen Gesundheitszustands',
          onClick: () => setShowGHQ12(true)
        }
      ],
      praxis: [
        {
          title: 'Atemübungen',
          type: 'Übung',
          duration: '15 min',
          description: 'Grundlegende Entspannungstechnik',
          onClick: () => setShowBreathingExercise(true)
        },
        {
          title: 'Stressbarometer',
          type: 'Übung',
          duration: '10 min',
          description: 'Einschätzung des persönlichen Stresslevels',
          onClick: () => setShowStressBarometer(true)
        }
      ],
      reflexion: [
        {
          title: 'Persönliche Stressanalyse',
          type: 'Fragebogen',
          duration: '10 min',
          description: 'Erfassung individueller Stressmuster',
          onClick: () => navigate('/personal-stress-analysis')
        },
        {
          title: 'Stresstagebuch',
          type: 'Journal',
          duration: '10 min',
          description: 'Dokumentation von Stresssituationen',
          onClick: () => setShowStresstagebuch(true)
        }
      ]
    },
    'Achtsamkeit & Selbstwahrnehmung': {
      theorie: [
        {
          title: 'Grundlagen der Achtsamkeit',
          type: 'Video',
          duration: '12 min',
          description: 'Einführung in achtsame Wahrnehmung'
        },
        {
          title: 'Stressreaktionen erkennen',
          type: 'Lektion',
          duration: '15 min',
          description: 'Körperliche und mentale Anzeichen'
        }
      ],
      praxis: [
        {
          title: 'Body Scan',
          type: 'Übung',
          duration: '10 min',
          description: 'Körperwahrnehmungsübung'
        },
        {
          title: 'Achtsames Atmen',
          type: 'Meditation',
          duration: '15 min',
          description: 'Fokussierte Atembeobachtung'
        }
      ],
      reflexion: [
        {
          title: 'Achtsamkeitstagebuch',
          type: 'Journal',
          duration: '10 min',
          description: 'Dokumentation der Wahrnehmungen'
        }
      ]
    },
    'Denkfallen aufdecken': {
      theorie: [
        {
          title: 'Kognitive Verzerrungen',
          type: 'Video',
          duration: '15 min',
          description: 'Typische Denkmuster bei Stress'
        },
        {
          title: 'Denkfallen erkennen',
          type: 'Lektion',
          duration: '12 min',
          description: 'Analyse von Gedankenmustern'
        }
      ],
      praxis: [
        {
          title: 'Gedankenprotokoll',
          type: 'Übung',
          duration: '15 min',
          description: 'Dokumentation von Denkfallen'
        }
      ],
      reflexion: [
        {
          title: 'Selbstreflexion',
          type: 'Journal',
          duration: '10 min',
          description: 'Analyse eigener Denkmuster'
        }
      ]
    },
    'Kognitive Umstrukturierung I': {
      theorie: [
        {
          title: 'Gedanken hinterfragen',
          type: 'Video',
          duration: '12 min',
          description: 'Methoden der Gedankenanalyse'
        }
      ],
      praxis: [
        {
          title: 'Realitätscheck',
          type: 'Übung',
          duration: '15 min',
          description: 'Überprüfung von Gedanken'
        }
      ],
      reflexion: [
        {
          title: 'Gedankentagebuch',
          type: 'Journal',
          duration: '10 min',
          description: 'Dokumentation der Analyse'
        }
      ]
    },
    'Kognitive Umstrukturierung II': {
      theorie: [
        {
          title: 'Neue Perspektiven',
          type: 'Video',
          duration: '15 min',
          description: 'Alternative Sichtweisen entwickeln'
        }
      ],
      praxis: [
        {
          title: 'Perspektivwechsel',
          type: 'Übung',
          duration: '20 min',
          description: 'Übungen zur Neuinterpretation'
        }
      ],
      reflexion: [
        {
          title: 'Erfolgsjournal',
          type: 'Journal',
          duration: '10 min',
          description: 'Dokumentation positiver Veränderungen'
        }
      ]
    },
    'Emotionsregulation': {
      theorie: [
        {
          title: 'Emotionen verstehen',
          type: 'Video',
          duration: '12 min',
          description: 'Grundlagen der Emotionsregulation'
        }
      ],
      praxis: [
        {
          title: 'Gefühlskompass',
          type: 'Übung',
          duration: '15 min',
          description: 'Emotionen erkennen und steuern'
        }
      ],
      reflexion: [
        {
          title: 'Emotionstagebuch',
          type: 'Journal',
          duration: '10 min',
          description: 'Dokumentation emotionaler Erfahrungen'
        }
      ]
    },
    'Ressourcen & Selbstwirksamkeit': {
      theorie: [
        {
          title: 'Stärken erkennen',
          type: 'Video',
          duration: '12 min',
          description: 'Identifikation persönlicher Ressourcen'
        }
      ],
      praxis: [
        {
          title: 'Ressourcenaktivierung',
          type: 'Übung',
          duration: '15 min',
          description: 'Stärkung vorhandener Ressourcen'
        }
      ],
      reflexion: [
        {
          title: 'Erfolgsjournal',
          type: 'Journal',
          duration: '10 min',
          description: 'Dokumentation von Erfolgserlebnissen'
        }
      ]
    },
    'Abschluss & Transfer': {
      theorie: [
        {
          title: 'Rückblick',
          type: 'Video',
          duration: '15 min',
          description: 'Zusammenfassung der Kernkonzepte'
        }
      ],
      praxis: [
        {
          title: 'Zukunftsplan',
          type: 'Übung',
          duration: '20 min',
          description: 'Entwicklung nachhaltiger Strategien'
        }
      ],
      reflexion: [
        {
          title: 'Abschlussreflexion',
          type: 'Journal',
          duration: '15 min',
          description: 'Gesamtreflexion und Ausblick'
        }
      ]
    }
  };

  const stressFactors = [
    {
      category: "Beruflich",
      factors: [
        "Hohe Arbeitsbelastung und Termindruck",
        "Konflikte mit Kollegen oder Vorgesetzten",
        "Unsichere Jobsituation",
        "Lange Arbeitszeiten",
        "Mangelnde Anerkennung"
      ]
    },
    {
      category: "Privat",
      factors: [
        "Finanzielle Sorgen",
        "Familiäre Konflikte",
        "Zeitmangel für Hobbys",
        "Beziehungsprobleme",
        "Gesundheitliche Probleme"
      ]
    },
    {
      category: "Alltäglich",
      factors: [
        "Verkehr und Pendeln",
        "Haushaltspflichten",
        "Soziale Verpflichtungen",
        "Informationsüberflutung",
        "Schlafmangel"
      ]
    }
  ];

  useEffect(() => {
    if (isVideoPlaying) {
      const interval = setInterval(() => {
        const currentTime = Math.floor(Date.now() / 1000) - startTime.current;
        const currentModule = moduleContents[currentExercise?.title] || moduleContents['Einführung: Was ist Stress?'];
        const videoContent = currentModule.theorie.find((item: ModuleItem) => item.type === 'Video');
        const keyFacts = videoContent?.keyFacts || [];
        const videoTimepoints = Array.from({length: keyFacts.length}, (_, i) => i * 5);
        const newFacts = keyFacts.filter((_: string, index: number) => videoTimepoints[index] <= currentTime);
        setVisibleKeyFacts(newFacts);
        
        if (newFacts.length === keyFacts.length) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isVideoPlaying, currentExercise]);

  const handleVideoStart = () => {
    setShowVideoModal(true);
    setIsVideoPlaying(true);
    startTime.current = Math.floor(Date.now() / 1000);
  };

  const handleVideoClose = () => {
    setShowVideoModal(false);
    setIsVideoPlaying(false);
    setVisibleKeyFacts([]);
  };

  const handleBackClick = () => {
    setShowModuleContent(false);
    setCurrentExercise(null);
  };

  const CustomModuleIllustration = ({ type, className }: { type: string; className?: string }) => {
    const getIllustration = () => {
      switch (type) {
        case 'stress-intro':
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <img 
                src="https://clarigen.de/wp-content/uploads/2025/06/ChatGPT-Image-11.-Juni-2025-12_11_21.png"
                alt="Stress Intro"
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-accent"
              />
            </div>
          );

        case 'mindfulness':
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <img 
                src="https://clarigen.de/wp-content/uploads/2025/06/ChatGPT-Image-11.-Juni-2025-12_07_00.png"
                alt="Mindfulness"
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-accent"
              />
            </div>
          );

        case 'thinking-traps':
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <img 
                src="https://clarigen.de/wp-content/uploads/2025/06/ChatGPT-Image-11.-Juni-2025-12_03_11-1.png"
                alt="Thinking Traps"
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-accent"
              />
            </div>
          );

        case 'cognitive-restructuring':
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <img 
                src="https://clarigen.de/wp-content/uploads/2025/06/ChatGPT-Image-11.-Juni-2025-12_03_08-1.png"
                alt="Cognitive Restructuring"
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-accent"
              />
            </div>
          );

        case 'perspective-change':
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <img 
                src="https://clarigen.de/wp-content/uploads/2025/06/ChatGPT-Image-22.-Juni-2025-13_58_27.png"
                alt="Perspective Change"
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-accent"
              />
            </div>
          );

        case 'emotion-regulation':
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <img 
                src="https://clarigen.de/wp-content/uploads/2025/06/ChatGPT-Image-22.-Juni-2025-14_02_56.png"
                alt="Emotion Regulation"
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-accent"
              />
            </div>
          );

        case 'resources':
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <img 
                src="https://clarigen.de/wp-content/uploads/2025/06/ChatGPT-Image-22.-Juni-2025-14_04_56.png"
                alt="Resources"
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-accent"
              />
            </div>
          );

        case 'completion':
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <img 
                src="https://clarigen.de/wp-content/uploads/2025/06/ChatGPT-Image-22.-Juni-2025-14_06_11.png"
                alt="Completion"
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-accent"
              />
            </div>
          );

        default:
          return (
            <div className={`absolute top-4 right-4 w-16 h-16 ${className}`}>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#F6E3B6] to-[#F2C75B]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                  🧠
                </div>
              </div>
            </div>
          );
      }
    };

    return getIllustration();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return Video;
      case 'Audio':
        return Volume2;
      case 'Lektion':
        return Book;
      case 'Übung':
        return Brain;
      case 'Meditation':
      case 'Journal':
      case 'Fragebogen':
        return Heart;
      default:
        return Book;
    }
  };

  const handleModuleClick = (module: any) => {
    setCurrentExercise(module);
    setShowModuleContent(true);
  };

  const renderStressFactors = () => (
    <div className="fixed inset-0 bg-background z-50">
      <div className="relative h-screen flex flex-col">
        <div className="p-6 flex justify-between items-start border-b">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowStressFactors(false)}
              className="p-2 hover:bg-accent rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-text" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Stressoren im Alltag</h1>
              <p className="text-gray-600">Identifizieren Sie Ihre persönlichen Stressauslöser</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-card rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-text">
                Nehmen Sie sich einen Moment Zeit, um über Ihre persönlichen Stressauslöser nachzudenken. 
                Das Erkennen dieser Faktoren ist der erste Schritt zu einem besseren Stressmanagement.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {stressFactors.map((category, index) => (
              <div key={index} className="bg-card rounded-xl border-none p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h2>
                <div className="space-y-4">
                  {category.factors.map((factor, factorIndex) => (
                    <div 
                      key={factorIndex}
                      className="flex items-start gap-3 p-4 bg-accent rounded-xl hover:bg-card transition-colors cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm text-primary font-medium">{factorIndex + 1}</span>
                      </div>
                      <div>
                        <p className="text-gray-900">{factor}</p>
                        <textarea
                          placeholder="Notieren Sie hier Ihre persönlichen Erfahrungen..."
                          className="mt-2 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBreathingExercise = () => (
    <BreathingExercise 
      isOpen={showBreathingExercise} 
      onClose={() => setShowBreathingExercise(false)} 
    />
  );

  const renderVideoModal = () => (
    <div className="fixed inset-0 bg-[#F6E3B6] z-50 flex flex-col">
      {/* Video Player Section */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* Header Controls */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center justify-between">
              <button
              onClick={handleVideoClose}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
              >
              <ChevronLeft className="w-6 h-6 text-[#23412C]" />
              </button>
            
            <div className="text-center">
              <h2 className="text-xl font-bold text-white drop-shadow-lg">
                Was ist Stress?
              </h2>
              <p className="text-white/80 text-sm">Video 1 von 3</p>
            </div>

            <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]">
              <MoreVertical className="w-6 h-6 text-[#23412C]" />
              </button>
          </div>
            </div>

        {/* Video Container */}
        <div className="absolute inset-0 m-6 mt-20 mb-32 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#F6D98A]">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handleVideoStart}
                className="w-20 h-20 bg-[#E86F3A]/90 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-xl border-2 border-white"
              >
                <Play className="w-10 h-10 text-white ml-1" />
              </button>
            </div>

            {/* Video Controls Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E86F3A] rounded-full transition-all duration-300" style={{ width: '35%' }} />
              </div>
                <div className="flex justify-between mt-2 text-white/90 text-sm">
                  <span>3:30</span>
                  <span>10:00</span>
                </div>
            </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button className="w-16 h-16 bg-[#E86F3A] rounded-full flex items-center justify-center hover:bg-[#D85A2A] transition-colors shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <ChevronLeft className="w-6 h-6 text-white transform rotate-180" />
                </button>
                  </div>
                  </div>
                </div>
                  </div>
                  </div>

      {/* Key Facts & Navigation Section */}
      <div className="bg-white/95 backdrop-blur-sm rounded-t-3xl p-6 max-h-[45vh] overflow-y-auto z-10 m-4 mt-0 shadow-xl border-t-2 border-[#F6D98A]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E86F3A] rounded-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
                </div>
            <h3 className="text-xl font-bold text-[#23412C]">Wichtige Erkenntnisse</h3>
                  </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#E86F3A] rounded-full" />
            <div className="w-2 h-2 bg-[#F6D98A] rounded-full" />
            <div className="w-2 h-2 bg-[#F6D98A] rounded-full" />
                  </div>
                </div>
        
        {/* Key Facts */}
        <div className="space-y-4 mb-6">
          {visibleKeyFacts.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#F2C75B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-[#23412C]" />
              </div>
              <p className="text-[#23412C]/70 text-lg">
                Starten Sie das Video, um wichtige Erkenntnisse zu sammeln
              </p>
            </div>
          ) : (
            visibleKeyFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-[#F6E3B6]/50 rounded-2xl border border-[#F6D98A] animate-fade-in hover:bg-[#F6E3B6]/70 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#E86F3A] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                  <span className="text-sm text-white font-bold">{index + 1}</span>
          </div>
                <p className="text-[#23412C] leading-relaxed font-medium">{fact}</p>
        </div>
            ))
      )}
    </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
        <button 
          onClick={handleVideoClose}
            className="flex-1 bg-[#F6D98A] hover:bg-[#F0D384] text-[#23412C] py-4 rounded-2xl font-semibold transition-colors border border-[#F6D98A] shadow-md"
        >
            Zurück zur Übersicht
        </button>
          <button className="flex-1 bg-[#E86F3A] hover:bg-[#D85A2A] text-white py-4 rounded-2xl font-semibold transition-colors shadow-md flex items-center justify-center gap-2">
            <span>Weiter</span>
            <ChevronLeft className="w-5 h-5 transform rotate-180" />
            </button>
      </div>

        {/* Tip Section */}
        {visibleKeyFacts.length > 0 && (
          <div className="mt-6 p-4 bg-[#4D5922] rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 bg-[#F6D98A] rounded-full flex items-center justify-center">
                <span className="text-[#23412C] text-sm font-bold">💡</span>
              </div>
              <h4 className="text-white font-semibold">Tipp für den Alltag</h4>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Notieren Sie sich die wichtigsten Punkte in Ihrem Stresstagebuch, um sie später zu reflektieren.
            </p>
        </div>
        )}
      </div>
    </div>
  );

  const renderModuleContent = () => (
    <div className="fixed inset-0 bg-[#F6E3B6] z-40 overflow-y-auto">
      <div className="min-h-screen">
        <div 
          className="relative h-96 bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000")',
          }}
          onClick={handleVideoStart}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <button 
              onClick={handleVideoStart}
              className="w-20 h-20 bg-[#E86F3A]/90 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-white"
            >
              <Play className="w-10 h-10 text-white ml-1" />
            </button>
          </div>
          
          <div 
            onClick={(e) => {
              e.stopPropagation();
              handleBackClick();
            }}
            className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-lg z-50 border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </div>
          
          <button 
            onClick={(e)=> e.stopPropagation()}
            className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <Menu className="w-6 h-6 text-[#23412C]" />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#F6E3B6] via-[#F6E3B6]/95 to-transparent rounded-t-3xl p-6 z-10">
            <h1 className="text-3xl font-bold text-[#23412C] mb-2 leading-tight">
              {currentExercise?.title}
            </h1>
            <p className="text-[#23412C]/80 mb-3 text-lg">{currentExercise?.description}</p>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E86F3A]" />
              <span className="text-[#23412C]/80 font-medium">{currentExercise?.duration}</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#23412C] mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F2C75B] rounded-full flex items-center justify-center">
                <Book className="w-4 h-4 text-[#23412C]" />
              </div>
              Theorie
            </h2>
            <div className="space-y-4">
              {moduleContents[currentExercise?.title]?.theorie.map((item: ModuleItem, index: number) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-[#F6D98A] hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F2C75B] p-3 rounded-xl shadow-sm">
                        <Icon className="w-6 h-6 text-[#23412C]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#23412C] text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-[#23412C]/70 mb-3 leading-relaxed">{item.description}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#E86F3A]" />
                          <span className="text-sm text-[#23412C]/70 font-medium">{item.duration}</span>
                        </div>
                      </div>
                      <button 
                        className="bg-background rounded-full p-3 shadow-lg border-2 border-accent hover:bg-white hover:scale-105 transition-all duration-200 text-text"
                        onClick={item.onClick}
                      >
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#23412C] mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4D5922] rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              Praxis
            </h2>
            <div className="space-y-4">
              {moduleContents[currentExercise?.title]?.praxis.map((item: ModuleItem, index: number) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-[#F6D98A] hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#4D5922] p-3 rounded-xl shadow-sm">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#23412C] text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-[#23412C]/70 mb-3 leading-relaxed">{item.description}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#E86F3A]" />
                          <span className="text-sm text-[#23412C]/70 font-medium">{item.duration}</span>
                        </div>
                      </div>
                      <button 
                        className="bg-background rounded-full p-3 shadow-lg border-2 border-accent hover:bg-white hover:scale-105 transition-all duration-200 text-text"
                        onClick={item.onClick}
                      >
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#23412C] mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#E86F3A] rounded-full flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white" />
              </div>
              Reflexion
            </h2>
            <div className="space-y-4">
              {moduleContents[currentExercise?.title]?.reflexion.map((item: ModuleItem, index: number) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-[#F6D98A] hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#E86F3A] p-3 rounded-xl shadow-sm">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#23412C] text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-[#23412C]/70 mb-3 leading-relaxed">{item.description}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#E86F3A]" />
                          <span className="text-sm text-[#23412C]/70 font-medium">{item.duration}</span>
                        </div>
                      </div>
                      <button 
                        className="bg-background rounded-full p-3 shadow-lg border-2 border-accent hover:bg-white hover:scale-105 transition-all duration-200 text-text"
                        onClick={item.onClick}
                      >
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24 bg-[#F6E3B6] min-h-screen">
      {!showModuleContent && (
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="w-10 h-10 bg-[#F2C75B] rounded-full flex items-center justify-center shadow-md border border-[#F6D98A] hover:bg-[#E6B84F] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#23412C]" />
            </button>
            <h1 className="text-2xl font-bold text-[#23412C]">Übungen</h1>
          </div>
          <button className="p-2 hover:bg-[#F2C75B] rounded-full transition-colors">
            <Menu className="w-6 h-6 text-[#23412C]" />
          </button>
        </div>
      )}

      {!showModuleContent && (
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#23412C]/60" />
          <input
            type="text"
            placeholder="Suche nach Übungen"
            className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl text-[#23412C] placeholder-[#23412C]/60 focus:outline-none focus:ring-2 focus:ring-[#E86F3A] border border-[#F6D98A] shadow-md"
          />
        </div>
      )}

      {!showModuleContent && (
        <div className="space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`${module.color} rounded-3xl p-6 relative transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg border-2 border-[#F6D98A] overflow-hidden`}
              onClick={() => handleModuleClick(module)}
            >
              <CustomModuleIllustration type={module.illustration} />
              
              <div className="flex justify-between items-start mb-4 pr-20">
                <div>
                  <h2 className={`text-2xl font-bold ${module.textColor} mb-1 leading-tight`}>
                    {module.title}
                  </h2>
                  <p className={`${module.textColor} opacity-75 text-sm font-medium`}>
                    {module.subtitle}
                  </p>
                </div>
              </div>
              <p className={`${module.textColor} opacity-80 mb-4 text-sm leading-relaxed`}>
                {module.description}
              </p>
              <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${module.textColor} opacity-75`} />
                  <span className={`${module.textColor} opacity-75 text-sm font-medium`}>
                  {module.duration}
                </span>
              </div>
                <button className={`bg-background rounded-full p-3 shadow-lg border-2 border-accent hover:bg-white hover:scale-105 transition-all duration-200 ${module.textColor}`}>
                  <Play className="w-5 h-5" />
              </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModuleContent && renderModuleContent()}
      {showVideoModal && renderVideoModal()}
      {showQuestionnaire && <PSSQuestionnaire onClose={() => setShowQuestionnaire(false)} />}
      {showStressReflection && <StressReflection isOpen={showStressReflection} onClose={() => setShowStressReflection(false)} />}
      {showBreathingExercise && renderBreathingExercise()}
      
      <StressBarometer
        isOpen={showStressBarometer}
        onClose={() => setShowStressBarometer(false)}
      />
      
      <Stresstagebuch
        isOpen={showStresstagebuch}
        onClose={() => setShowStresstagebuch(false)}
      />
      
      <AudioIntroduction
        isOpen={showAudioIntroduction}
        onClose={() => setShowAudioIntroduction(false)}
        onComplete={() => {
          setShowAudioIntroduction(false);
          setShowQuestionnaire(true);
        }}
      />
      
      <GHQ12Questionnaire
        isOpen={showGHQ12}
        onClose={() => setShowGHQ12(false)}
      />
    </div>
  );
};

export default Exercises;