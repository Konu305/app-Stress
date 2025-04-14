import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Menu, Clock, Play, ChevronLeft, MoreVertical, Video, Book, Brain, Heart, X, Lightbulb } from 'lucide-react';
import PSSQuestionnaire from '../components/PSSQuestionnaire';
import StressReflection from '../components/StressReflection';

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
  
  const startTime = useRef(0);

  const modules = [
    {
      title: 'Einführung: Was ist Stress?',
      subtitle: 'Woche 1',
      description: 'Grundlagen & persönliche Analyse',
      duration: '45 min',
      color: 'bg-blue-100',
      textColor: 'text-blue-900',
      progress: 0
    },
    {
      title: 'Achtsamkeit & Selbstwahrnehmung',
      subtitle: 'Woche 2',
      description: 'Gedanken und Stressreaktionen erkennen',
      duration: '50 min',
      color: 'bg-purple-100',
      textColor: 'text-purple-900',
      progress: 0
    },
    {
      title: 'Denkfallen aufdecken',
      subtitle: 'Woche 3',
      description: 'Kognitive Verzerrungen bei Stress',
      duration: '40 min',
      color: 'bg-green-100',
      textColor: 'text-green-900',
      progress: 0
    },
    {
      title: 'Kognitive Umstrukturierung I',
      subtitle: 'Woche 4',
      description: 'Negative Gedanken hinterfragen',
      duration: '45 min',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-900',
      progress: 0
    },
    {
      title: 'Kognitive Umstrukturierung II',
      subtitle: 'Woche 5',
      description: 'Neue Perspektiven üben (Anwendung)',
      duration: '45 min',
      color: 'bg-red-100',
      textColor: 'text-red-900',
      progress: 0
    },
    {
      title: 'Emotionsregulation',
      subtitle: 'Woche 6',
      description: 'Umgang mit stressbedingten Gefühlen',
      duration: '50 min',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-900',
      progress: 0
    },
    {
      title: 'Ressourcen & Selbstwirksamkeit',
      subtitle: 'Woche 7',
      description: 'Eigene Stärken nutzen',
      duration: '45 min',
      color: 'bg-pink-100',
      textColor: 'text-pink-900',
      progress: 0
    },
    {
      title: 'Abschluss & Transfer',
      subtitle: 'Woche 8',
      description: 'Rückblick, Festigung und Zukunftsplan',
      duration: '40 min',
      color: 'bg-teal-100',
      textColor: 'text-teal-900',
      progress: 0
    }
  ];

  const moduleContents = {
    'Einführung: Was ist Stress?': {
      theorie: [
        {
          title: 'Einleitung',
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
          title: 'Persönliche Stressanalyse',
          type: 'Lektion',
          duration: '15 min',
          description: 'Identifikation persönlicher Stressoren',
          onClick: () => setShowStressReflection(true)
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
          description: 'Einschätzung des persönlichen Stresslevels'
        }
      ],
      reflexion: [
        {
          title: 'Stresstagebuch',
          type: 'Journal',
          duration: '10 min',
          description: 'Dokumentation von Stresssituationen'
        },
        {
          title: 'Persönliche Stressanalyse',
          type: 'Fragebogen',
          duration: '10 min',
          description: 'Erfassung individueller Stressmuster'
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

  const introSlides = [
    {
      title: "Bewusstes Atmen",
      description: "Entdecken Sie die Kraft der Atemtechnik für mehr Ruhe und Gelassenheit im Alltag.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "4-7-8 Atemtechnik",
      description: "Eine wissenschaftlich fundierte Methode zur Stressreduktion und Entspannung.",
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Bereit für die Übung?",
      description: "Nehmen Sie sich einen ruhigen Moment und finden Sie eine bequeme Position.",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  useEffect(() => {
    if (isVideoPlaying) {
      const interval = setInterval(() => {
        const currentTime = Math.floor(Date.now() / 1000) - startTime.current;
        const currentModule = moduleContents[currentExercise?.title] || moduleContents['Einführung: Was ist Stress?'];
        const videoContent = currentModule.theorie.find(item => item.type === 'Video');
        const keyFacts = videoContent?.keyFacts || [];
        const videoTimepoints = Array.from({length: keyFacts.length}, (_, i) => i * 5);
        const newFacts = keyFacts.filter((_, index) => videoTimepoints[index] <= currentTime);
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

  const moduleContent = moduleContents[currentExercise?.title] || moduleContents['Einführung: Was ist Stress?'];

  const getIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return Video;
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
    <div className="fixed inset-0 bg-white z-50">
      <div className="relative h-screen flex flex-col">
        <div className="p-6 flex justify-between items-start border-b">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowStressFactors(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Stressoren im Alltag</h1>
              <p className="text-gray-600">Identifizieren Sie Ihre persönlichen Stressauslöser</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-yellow-50 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <p className="text-sm text-yellow-800">
                Nehmen Sie sich einen Moment Zeit, um über Ihre persönlichen Stressauslöser nachzudenken. 
                Das Erkennen dieser Faktoren ist der erste Schritt zu einem besseren Stressmanagement.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {stressFactors.map((category, index) => (
              <div key={index} className="bg-white rounded-xl border p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h2>
                <div className="space-y-4">
                  {category.factors.map((factor, factorIndex) => (
                    <div 
                      key={factorIndex}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm text-blue-600 font-medium">{factorIndex + 1}</span>
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
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBreathingExercise = () => (
    <div className="fixed inset-0 bg-white z-50">
      {currentSlide < introSlides.length ? (
        <div className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: `url(${introSlides[currentSlide].image})`
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative h-full flex flex-col">
            <div className="p-6 flex justify-between items-start">
              <button
                onClick={() => {
                  setCurrentSlide(0);
                  setShowBreathingExercise(false);
                }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-end p-8">
              <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
                {introSlides[currentSlide].title}
              </h1>
              <p className="text-white/90 text-lg mb-8 animate-fade-in">
                {introSlides[currentSlide].description}
              </p>
              <button
                onClick={() => setCurrentSlide(prev => prev + 1)}
                className="w-full bg-white text-gray-900 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors animate-fade-in"
              >
                Weiter
              </button>
            </div>

            <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2">
              {introSlides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=2000")'
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative h-full flex flex-col">
            <div className="p-6 flex justify-between items-start">
              <button
                onClick={() => {
                  setCurrentSlide(0);
                  setShowBreathingExercise(false);
                }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <MoreVertical className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Atemübungen</h1>
              <p className="text-white/90 text-lg mb-8">
                Finden Sie innere Ruhe durch bewusstes Atmen
              </p>
              <div className="w-32 h-32 rounded-full border-4 border-white/30 flex items-center justify-center mb-8">
                <Play className="w-12 h-12 text-white" />
              </div>
              <p className="text-white/80">10 Minuten • Anfänger</p>
            </div>

            <div className="bg-white rounded-t-3xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Übungsablauf</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Einatmen</h3>
                    <p className="text-gray-600">4 Sekunden lang tief durch die Nase einatmen</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Halten</h3>
                    <p className="text-gray-600">7 Sekunden lang den Atem anhalten</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Ausatmen</h3>
                    <p className="text-gray-600">8 Sekunden lang durch den Mund ausatmen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderVideoModal = () => (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
      <div className="flex-1 relative flex items-center justify-center">
        <button 
          onClick={handleVideoClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button 
              onClick={handleVideoStart}
              className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-8 h-8 text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-t-3xl p-6 max-h-[40vh] overflow-y-auto z-10">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Wichtige Erkenntnisse</h3>
        <div className="space-y-3">
          {visibleKeyFacts.map((fact, index) => (
            <div
              key={index}
              className="flex items-start gap-3 animate-fade-in"
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm text-blue-600 font-medium">{index + 1}</span>
              </div>
              <p className="text-gray-700">{fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderModuleContent = () => (
    <div className="fixed inset-0 bg-white z-40 overflow-y-auto">
      <div className="min-h-screen">
        <div 
          className="relative h-96 bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000")',
          }}
          onClick={handleVideoStart}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button 
              onClick={handleVideoStart}
              className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-8 h-8 text-gray-900" />
            </button>
          </div>
          
          <div 
            onClick={(e) => {
              e.stopPropagation();
              handleBackClick();
            }}
            className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg z-50"
          >
            <ChevronLeft className="w-8 h-8 text-gray-900" />
          </div>
          
          <button 
            onClick={(e)=> e.stopPropagation()}
            className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {currentExercise?.title}
            </h1>
            <p className="text-gray-600 mb-2">{currentExercise?.description}</p>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">{currentExercise?.duration}</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Theorie</h2>
            <div className="space-y-4">
              {moduleContent.theorie.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={index} className="bg-gray-100 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-xl">
                        <Icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-600">{item.duration}</span>
                        </div>
                      </div>
                      <button 
                        className="bg-white p-2 rounded-full"
                        onClick={item.onClick}
                      >
                        <Play className="w-5 h-5 text-gray-900" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Praxis</h2>
            <div className="space-y-4">
              {moduleContent.praxis.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={index} className="bg-blue-50 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-xl">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-600">{item.duration}</span>
                        </div>
                      </div>
                      <button 
                        className="bg-white p-2 rounded-full"
                        onClick={item.onClick}
                      >
                        <Play className="w-5 h-5 text-blue-600" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reflexion</h2>
            <div className="space-y-4">
              {moduleContent.reflexion.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                  <div key={index} className="bg-green-50 rounded-2xl p-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-xl">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-600">{item.duration}</span>
                        </div>
                      </div>
                      <button className="bg-white p-2 rounded-full">
                        <Play className="w-5 h-5 text-green-600" />
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
    <div className="max-w-md mx-auto px-4 pt-6 pb-24">
      {!showModuleContent && (
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Übungen</h1>
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      )}

      {!showModuleContent && (
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Suche nach Übungen"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {!showModuleContent && (
        <div className="space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`${module.color} rounded-3xl p-6 relative transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
              onClick={() => handleModuleClick(module)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className={`text-2xl font-bold ${module.textColor} mb-1`}>
                    {module.title}
                  </h2>
                  <p className={`${module.textColor} opacity-75 text-sm`}>
                    {module.subtitle}
                  </p>
                </div>
                <button className="p-1">
                  <MoreVertical className={`w-5 h-5 ${module.textColor}`} />
                </button>
              </div>
              <p className={`${module.textColor} opacity-75 mb-4`}>
                {module.description}
              </p>
              <div className="flex items-center gap-2">
                <Clock className={`w-5 h-5 ${module.textColor} opacity-75`} />
                <span className={`${module.textColor} opacity-75`}>
                  {module.duration}
                </span>
              </div>
              <button className={`absolute bottom-6 right-6 bg-white rounded-full p-3 ${module.textColor}`}>
                <Play className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      )}

      {showModuleContent && renderModuleContent()}
      {showVideoModal && renderVideoModal()}
      {showQuestionnaire && <PSSQuestionnaire onClose={() => setShowQuestionnaire(false)} />}
      {showStressReflection && <StressReflection isOpen={showStressReflection} onClose={() => setShowStressReflection(false)} />}
      {showBreathingExercise && renderBreathingExercise()}
      {showStressFactors && renderStressFactors()}
    </div>
  );
};

export default Exercises;