import React, { useState, useEffect, useRef } from 'react';
import { Menu as MenuIcon, Clock, Play, MoreVertical, Sun, Moon, CloudRain, CloudLightning, BookOpen, Lightbulb, UserPlus, Check, ChevronLeft, ChevronRight, Heart, X, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import Diary from '../components/Diary';
import KeyFacts from '../components/KeyFacts';
import ZPPRegistration from '../components/ZPPRegistration';

const Home = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [stressLevel, setStressLevel] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDiaryOpen, setIsDiaryOpen] = useState(false);
  const [isKeyFactsOpen, setIsKeyFactsOpen] = useState(false);
  const [isZPPRegistrationOpen, setIsZPPRegistrationOpen] = useState(false);
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [isStressLevelConfirmed, setIsStressLevelConfirmed] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const expandedVideoRef = useRef<HTMLDivElement>(null);

  const slogans = [
    "Jeder Schritt zählt auf deinem Weg zur Entspannung",
    "Du bist stärker als dein Stress",
    "Atme tief durch - dieser Moment gehört dir",
    "Heute ist ein neuer Tag voller Möglichkeiten",
    "Deine innere Ruhe ist deine Superkraft",
    "Kleine Fortschritte führen zu großen Veränderungen",
    "Du gestaltest dein Wohlbefinden selbst",
    "Stress ist vorübergehend, deine Stärke bleibt",
    "Jeder Tag ist eine neue Chance zur Veränderung",
    "Vertraue deinem eigenen Tempo"
  ];

  const dailyExercise = {
    title: "Achtsamkeitsübung",
    description: "Präsenz im Moment und Akzeptanz",
    duration: "15 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000"
  };

  const recommendedExercises = [
    {
      title: "Experiencing Genuine Happiness",
      duration: "40 min",
      image: "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?auto=format&fit=crop&q=80&w=2000",
      category: "Meditation"
    },
    {
      title: "Finding Inner Peace",
      duration: "25 min", 
      image: "https://images.unsplash.com/photo-1499810631641-541e76d678a2?auto=format&fit=crop&q=80&w=2000",
      category: "Achtsamkeit"
    }
  ];

  const expertInterviews = [
    {
      title: "Stress verstehen",
      expert: "Dr. Sarah Meyer",
      duration: "35 min",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Resilienz aufbauen",
      expert: "Prof. Michael Schmidt",
      duration: "28 min",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000"
    },
    {
      title: "Moderne Therapie",
      expert: "Dr. Lisa Wagner",
      duration: "42 min",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const moods = [
    { id: 'great', label: 'Großartig', icon: Sun, color: 'bg-card text-text' },
    { id: 'okay', label: 'In Ordnung', icon: Moon, color: 'bg-secondary text-text' },
    { id: 'down', label: 'Niedergeschlagen', icon: CloudRain, color: 'bg-depressed text-text' },
    { id: 'stressed', label: 'Gestresst', icon: CloudLightning, color: 'bg-stressed text-text' },
  ];

  const currentModule = {
    title: 'Grundlagen des Stressmanagements',
    description: 'Einführung in Stress und Stressbewältigung',
    progress: 25,
    duration: '45 min',
    color: 'bg-card',
    textColor: 'text-text'
  };

  const handleModuleClick = () => {
    navigate('/exercises');
  };

  const getStressLevelColor = (level: number) => {
    if (level <= 30) return 'text-green-600';
    if (level <= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStressLevelText = (level: number) => {
    if (level <= 30) return 'Niedrig';
    if (level <= 70) return 'Mittel';
    return 'Hoch';
  };

  const handleConfirmStressLevel = () => {
    setIsStressLevelConfirmed(true);
    setTimeout(() => {
      setIsStressLevelConfirmed(false);
    }, 2000);
  };

  const handleVideoClick = (index: number) => {
    if (selectedVideo === index && isVideoExpanded) {
      const videoElement = videoRefs.current[index];
      const expandedVideo = expandedVideoRef.current;
      
      if (videoElement && expandedVideo) {
        const rect = videoElement.getBoundingClientRect();
        expandedVideo.style.transition = 'all 0.3s ease-out';
        expandedVideo.style.transform = `
          translate(${rect.left}px, ${rect.top}px)
          scale(${rect.width / window.innerWidth})
        `;
        
        setTimeout(() => {
          setIsVideoExpanded(false);
          setSelectedVideo(null);
        }, 300);
      }
    } else {
      setSlideDirection(selectedVideo !== null && index > selectedVideo ? 'left' : 'right');
      setSelectedVideo(index);
      const videoElement = videoRefs.current[index];
      
      if (videoElement) {
        const rect = videoElement.getBoundingClientRect();
        if (expandedVideoRef.current) {
          expandedVideoRef.current.style.transition = 'none';
          expandedVideoRef.current.style.transform = `
            translate(${rect.left}px, ${rect.top}px)
            scale(${rect.width / window.innerWidth})
          `;
        }
        
        requestAnimationFrame(() => {
          setIsVideoExpanded(true);
          if (expandedVideoRef.current) {
            expandedVideoRef.current.style.transition = 'all 0.3s ease-out';
            expandedVideoRef.current.style.transform = 'translate(0, 0) scale(1)';
          }
        });
      }
    }
  };

  const handleNextVideo = () => {
    if (selectedVideo === null) return;
    setSlideDirection('left');
    const nextIndex = (selectedVideo + 1) % recommendedExercises.length;
    setSelectedVideo(nextIndex);
  };

  const handlePrevVideo = () => {
    if (selectedVideo === null) return;
    setSlideDirection('right');
    const prevIndex = selectedVideo === 0 ? recommendedExercises.length - 1 : selectedVideo - 1;
    setSelectedVideo(prevIndex);
  };

  const renderExpandedVideo = () => {
    if (!isVideoExpanded || selectedVideo === null) return null;

    const video = recommendedExercises[selectedVideo];
    
    return (
      <div 
        ref={expandedVideoRef}
        className="fixed inset-0 bg-black z-50 overflow-hidden"
        style={{
          transformOrigin: '0 0'
        }}
      >
        <div className="relative h-full">
          <button
            onClick={handlePrevVideo}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNextVideo}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute inset-0 flex">
            <div 
              className="flex-shrink-0 w-full transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${slideDirection === 'left' ? '-100%' : '100%'})`
              }}
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div 
              className="flex-shrink-0 w-full transition-transform duration-300 ease-out"
              style={{
                transform: 'translateX(0%)'
              }}
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </div>

          <button
            onClick={() => handleVideoClick(selectedVideo)}
            className="absolute top-4 left-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md z-20"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <div className="mb-2">
              <span className="text-sm font-medium text-blue-400">
                {video.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {video.title}
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5" />
                <span>{video.duration}</span>
              </div>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-medium flex items-center gap-2">
                <Play className="w-5 h-5" />
                Jetzt starten
              </button>
            </div>
          </div>

          <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2 z-10">
            {recommendedExercises.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedVideo ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderRecommendedExercises = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">🎬 Empfohlene Übungen</h2>
          <p className="text-sm text-gray-600 mt-1">Basierend auf deinem Stresslevel</p>
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide">
          {recommendedExercises.map((exercise, index) => (
            <div
              key={index}
              ref={el => videoRefs.current[index] = el}
              className="flex-none w-[85vw] max-w-[400px] first:pl-0 last:pr-4 snap-start"
              onClick={() => handleVideoClick(index)}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={exercise.image}
                  alt={exercise.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">{exercise.duration}</span>
                </div>

                <button 
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full text-white/70 hover:text-white transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <Heart className="w-4 h-4" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-blue-400">
                      {exercise.category}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">
                    {exercise.title}
                  </h3>
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                    <Play className="w-4 h-4" />
                    Jetzt starten
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-20 peek-gradient" />
      </div>
    </div>
  );

  const handleOpenLogin = () => {
    console.log("Opening login modal...");
  };

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24 bg-background min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-text">Guten Morgen, Junis</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsZPPRegistrationOpen(true)}
            className="p-2 hover:bg-accent rounded-full"
          >
            <UserPlus className="w-6 h-6 text-text" />
          </button>
          <button 
            onClick={() => setIsKeyFactsOpen(true)}
            className="p-2 hover:bg-accent rounded-full"
          >
            <Lightbulb className="w-6 h-6 text-primary" />
          </button>
          <button 
            onClick={() => navigate('/diary-overview')}
            className="bg-journalgreen text-white rounded-3xl p-6 flex items-center justify-between shadow-lg hover:shadow-xl transition-all"
          >
            <BookOpen className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-accent rounded-full"
          >
            <MenuIcon className="w-6 h-6 text-text" />
          </button>
        </div>
      </div>

      <p 
        key={currentSloganIndex}
        className="text-text/80 text-center text-lg mb-4 animate-fade-in"
      >
        {slogans[currentSloganIndex]}
      </p>

      <button
        onClick={() => navigate('/exercises')}
        className="w-full bg-primary text-white py-4 px-6 rounded-xl font-medium mb-8 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
      >
        <Brain className="w-5 h-5" />
        Zu den Übungen
      </button>

      <div 
        className={`${currentModule.color} rounded-3xl p-6 mb-8 cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
        onClick={handleModuleClick}
      >
        <h2 className={`text-3xl font-bold ${currentModule.textColor} mb-2`}>{currentModule.title}</h2>
        <p className={`${currentModule.textColor} opacity-75 mb-4`}>{currentModule.description}</p>
        <div className="w-full bg-accent rounded-full h-2 mb-4">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${currentModule.progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className={`w-5 h-5 ${currentModule.textColor} opacity-75`} />
            <span className={`${currentModule.textColor} opacity-75`}>{currentModule.duration}</span>
          </div>
          <button className={`bg-background rounded-full p-3 ${currentModule.textColor}`}>
            <Play className="w-6 h-6" />
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-text mb-4">Wie fühlst du dich heute?</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {moods.map(({ id, label, icon: Icon, color }) => (
          <button
            key={id}
            onClick={() => setSelectedMood(id)}
            className={`${color} p-6 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all border-2 ${
              selectedMood === id
                ? 'scale-105 border-primary ring-2 ring-offset-2 ring-primary'
                : 'border-transparent hover:scale-102'
            }`}
          >
            <Icon className="w-8 h-8" />
            <span className="font-medium text-sm">{label}</span>
          </button>
        ))}
      </div>

      <div className="bg-card rounded-xl border-none p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-text">Stressbarometer</h3>
          <span className={`font-medium ${getStressLevelColor(stressLevel)}`}>
            {getStressLevelText(stressLevel)}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={stressLevel}
          onChange={(e) => setStressLevel(parseInt(e.target.value))}
          className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer mb-4"
        />
        <div className="flex justify-between mb-4 text-sm text-text/70">
          <span>Entspannt</span>
          <span>Gestresst</span>
        </div>
        <button
          onClick={handleConfirmStressLevel}
          disabled={isStressLevelConfirmed}
          className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
            isStressLevelConfirmed
              ? 'bg-primary/80 text-white'
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          {isStressLevelConfirmed ? (
            <>
              <Check className="w-5 h-5" />
              Bestätigt
            </>
          ) : (
            'Bestätigen'
          )}
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tagesübung</h2>
      <div 
        className="bg-cover bg-center rounded-3xl p-6 mb-8 relative h-48 overflow-hidden"
        style={{ 
          backgroundImage: `url(${dailyExercise.image})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative h-full flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-2">{dailyExercise.title}</h3>
          <p className="text-white/90 mb-4">{dailyExercise.description}</p>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-white/90" />
            <span className="text-white/90">{dailyExercise.duration}</span>
          </div>
          <button className="absolute bottom-0 right-0 bg-white rounded-full p-3">
            <Play className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>

      {renderRecommendedExercises()}

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">👩‍⚕️ Experteninterviews</h2>
            <p className="text-sm text-gray-600 mt-1">Professionelle Einblicke</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide">
            {expertInterviews.map((interview, index) => (
              <div
                key={index}
                className="flex-none w-[280px] first:pl-0 last:pr-4 snap-start"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  <img
                    src={interview.image}
                    alt={interview.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{interview.duration}</span>
                  </div>

                  <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full text-white/70 hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold mb-2">{interview.title}</h3>
                    <p className="text-white/90 text-sm">{interview.expert}</p>
                    <button className="mt-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                      <Play className="w-4 h-4" />
                      Ansehen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>

      {renderExpandedVideo()}
      
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Diary isOpen={isDiaryOpen} onClose={() => setIsDiaryOpen(false)} />
      <KeyFacts isOpen={isKeyFactsOpen} onClose={() => setIsKeyFactsOpen(false)} />
      <ZPPRegistration 
        isOpen={isZPPRegistrationOpen} 
        onClose={() => setIsZPPRegistrationOpen(false)}
        onLoginClick={() => {
          setIsZPPRegistrationOpen(false);
          handleOpenLogin();
        }}
      />
    </div>
  );
};

export default Home;