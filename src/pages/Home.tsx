import React, { useState, useEffect, useRef } from 'react';
import { Menu as MenuIcon, Clock, Play, MoreVertical, Sun, Moon, CloudRain, CloudLightning, BookOpen, Lightbulb, UserPlus, Check, ChevronLeft, ChevronRight, Heart, X, Brain, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import Diary from '../components/Diary';
import KeyFacts from '../components/KeyFacts';
import ZPPRegistration from '../components/ZPPRegistration';
import BreathingExercise from '../components/BreathingExercise';
import ExerciseFinder from '../components/ExerciseFinder';

const Home = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [stressLevel, setStressLevel] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDiaryOpen, setIsDiaryOpen] = useState(false);
  const [isKeyFactsOpen, setIsKeyFactsOpen] = useState(false);
  const [isZPPRegistrationOpen, setIsZPPRegistrationOpen] = useState(false);
  const [isBreathingExerciseOpen, setIsBreathingExerciseOpen] = useState(false);
  const [isExerciseFinderOpen, setIsExerciseFinderOpen] = useState(false);
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
      image: "custom-meditation",
      category: "Meditation"
    },
    {
      title: "Finding Inner Peace",
      duration: "25 min", 
      image: "custom-mindfulness",
      category: "Achtsamkeit"
    },
    {
      title: "Stress Relief Breathing",
      duration: "15 min",
      image: "custom-breathing",
      category: "Atemübungen"
    },
    {
      title: "Progressive Muscle Relaxation",
      duration: "30 min",
      image: "custom-relaxation",
      category: "Entspannung"
    }
  ];

  const expertInterviews = [
    {
      title: "Stress verstehen",
      expert: "Dr. Sarah Meyer",
      duration: "35 min",
      image: "custom-expert-1"
    },
    {
      title: "Resilienz aufbauen",
      expert: "Prof. Michael Schmidt",
      duration: "28 min",
      image: "custom-expert-2"
    },
    {
      title: "Moderne Therapie",
      expert: "Dr. Lisa Wagner",
      duration: "42 min",
      image: "custom-expert-3"
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
    // Check if this is the breathing exercise
    if (recommendedExercises[index].category === 'Atemübungen') {
      setIsBreathingExerciseOpen(true);
      return;
    }

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

  const CustomVideoIllustration = ({ type, className }: { type: string; className?: string }) => {
    const getIllustration = () => {
      switch (type) {
        case 'custom-meditation':
          return (
            <div className={`relative w-full h-full ${className}`} style={{ background: 'linear-gradient(135deg, #F6E3B6 0%, #F2C75B 50%, #F6D98A 100%)' }}>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full" style={{ backgroundColor: '#E86F3A' }} />
              
              {/* Person silhouette */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Head */}
                <div className="w-8 h-8 rounded-full bg-white mx-auto mb-1 relative">
                  {/* Peaceful face */}
                  <div className="absolute top-2.5 left-2 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-2.5 right-2 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-[#23412C] rounded-full" />
                </div>
                
                {/* Body in meditation pose */}
                <div className="w-10 h-12 bg-[#4D5922] rounded-t-full relative">
                  {/* Arms in meditation position */}
                  <div className="absolute -left-1 top-2 w-4 h-1.5 bg-[#4D5922] rounded-full transform rotate-45" />
                  <div className="absolute -right-1 top-2 w-4 h-1.5 bg-[#4D5922] rounded-full transform -rotate-45" />
                  
                  {/* Hands in OK gesture */}
                  <div className="absolute -left-0.5 top-4 w-1.5 h-1.5 rounded-full bg-white border border-[#4D5922]" />
                  <div className="absolute -right-0.5 top-4 w-1.5 h-1.5 rounded-full bg-white border border-[#4D5922]" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full opacity-60" />
              <div className="absolute top-6 right-4 w-0.5 h-0.5 bg-white rounded-full opacity-80" />
              <div className="absolute bottom-4 left-6 w-1 h-1 bg-white rounded-full opacity-70" />
            </div>
          );
          
        case 'custom-mindfulness':
          return (
            <div className={`relative w-full h-full ${className}`} style={{ background: 'linear-gradient(135deg, #F2C75B 0%, #F6D98A 50%, #F6E3B6 100%)' }}>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full" style={{ backgroundColor: '#4D5922' }} />
              
              {/* Person with raised arms */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Head */}
                <div className="w-7 h-7 rounded-full bg-white mx-auto mb-1 relative">
                  <div className="absolute top-2 left-1.5 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-2 right-1.5 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-[#23412C] rounded-full" />
                </div>
                
                {/* Body */}
                <div className="w-8 h-10 bg-[#E86F3A] rounded-t-full relative">
                  {/* Raised arms */}
                  <div className="absolute -left-2 top-1 w-4 h-1 bg-[#E86F3A] rounded-full transform -rotate-45" />
                  <div className="absolute -right-2 top-1 w-4 h-1 bg-[#E86F3A] rounded-full transform rotate-45" />
                  
                  {/* Hands */}
                  <div className="absolute -left-2.5 top-0 w-1 h-1 rounded-full bg-white" />
                  <div className="absolute -right-2.5 top-0 w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
              
              {/* Sparkles */}
              <div className="absolute top-4 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
              <div className="absolute top-8 right-3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-6 left-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          );
          
        case 'custom-breathing':
          return (
            <div className={`relative w-full h-full ${className}`} style={{ background: 'linear-gradient(135deg, #F6D98A 0%, #E86F3A 50%, #F2C75B 100%)' }}>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-26 h-26 rounded-full" style={{ backgroundColor: '#4D5922', opacity: 0.8 }} />
              
              {/* Person breathing */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Head */}
                <div className="w-8 h-8 rounded-full bg-white mx-auto mb-1 relative">
                  <div className="absolute top-2.5 left-2 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-2.5 right-2 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#23412C] rounded-full" />
                </div>
                
                {/* Body */}
                <div className="w-10 h-12 bg-white rounded-t-full relative">
                  {/* Arms at sides */}
                  <div className="absolute -left-1 top-3 w-4 h-1 bg-white rounded-full" />
                  <div className="absolute -right-1 top-3 w-4 h-1 bg-white rounded-full" />
                  
                  {/* Hands */}
                  <div className="absolute -left-2 top-4 w-1 h-1 rounded-full bg-[#F2C75B]" />
                  <div className="absolute -right-2 top-4 w-1 h-1 rounded-full bg-[#F2C75B]" />
                </div>
              </div>
              
              {/* Breathing circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-white rounded-full opacity-30 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          );
          
        case 'custom-relaxation':
          return (
            <div className={`relative w-full h-full ${className}`} style={{ background: 'linear-gradient(135deg, #4D5922 0%, #F6E3B6 50%, #F2C75B 100%)' }}>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full" style={{ backgroundColor: '#E86F3A', opacity: 0.9 }} />
              
              {/* Person lying down relaxed */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Head */}
                <div className="w-7 h-7 rounded-full bg-white mb-1 relative">
                  <div className="absolute top-2 left-1.5 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-2 right-1.5 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-[#23412C] rounded-full" />
                </div>
                
                {/* Body lying down */}
                <div className="w-12 h-6 bg-white rounded-full relative">
                  {/* Arms relaxed */}
                  <div className="absolute -left-0.5 top-1 w-3 h-1 bg-white rounded-full transform rotate-12" />
                  <div className="absolute -right-0.5 top-1 w-3 h-1 bg-white rounded-full transform -rotate-12" />
                  
                  {/* Legs */}
                  <div className="absolute left-1.5 -bottom-1 w-1 h-4 bg-white rounded-full" />
                  <div className="absolute right-1.5 -bottom-1 w-1 h-4 bg-white rounded-full" />
                </div>
              </div>
              
              {/* Zen elements */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-full opacity-50" />
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-white rounded-full opacity-60" />
              <div className="absolute top-6 left-6 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
            </div>
          );

        case 'custom-expert-1':
          return (
            <div className={`relative w-full h-full ${className}`} style={{ background: 'linear-gradient(135deg, #E86F3A 0%, #F2C75B 50%, #F6D98A 100%)' }}>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full" style={{ backgroundColor: '#4D5922' }} />
              
              {/* Expert figure */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Head with glasses */}
                <div className="w-7 h-7 rounded-full bg-white mx-auto mb-1 relative">
                  <div className="absolute top-1.5 left-1 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-1.5 right-1 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  {/* Glasses */}
                  <div className="absolute top-1.5 left-0.5 w-2 h-1.5 border border-[#23412C] rounded-full" />
                  <div className="absolute top-1.5 right-0.5 w-2 h-1.5 border border-[#23412C] rounded-full" />
                  <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-[#23412C] rounded-full" />
                </div>
                
                {/* Professional attire */}
                <div className="w-8 h-10 bg-white rounded-t-full relative">
                  {/* Arms */}
                  <div className="absolute -left-1 top-2 w-4 h-1 bg-white rounded-full" />
                  <div className="absolute -right-1 top-2 w-4 h-1 bg-white rounded-full" />
                  
                  {/* Hands */}
                  <div className="absolute -left-2 top-3 w-1 h-1 rounded-full bg-[#F2C75B]" />
                  <div className="absolute -right-2 top-3 w-1 h-1 rounded-full bg-[#F2C75B]" />
                </div>
              </div>
              
              {/* Knowledge symbols */}
              <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full opacity-60" />
              <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full opacity-80" />
              <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
            </div>
          );

        case 'custom-expert-2':
          return (
            <div className={`relative w-full h-full ${className}`} style={{ background: 'linear-gradient(135deg, #4D5922 0%, #F6E3B6 50%, #E86F3A 100%)' }}>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-22 h-22 rounded-full" style={{ backgroundColor: '#F2C75B' }} />
              
              {/* Expert figure */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Head */}
                <div className="w-8 h-8 rounded-full bg-white mx-auto mb-1 relative">
                  <div className="absolute top-2.5 left-2 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-2.5 right-2 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-[#23412C] rounded-full" />
                </div>
                
                {/* Professional attire */}
                <div className="w-9 h-11 bg-[#4D5922] rounded-t-full relative">
                  {/* Arms */}
                  <div className="absolute -left-1 top-2 w-4 h-1 bg-[#4D5922] rounded-full" />
                  <div className="absolute -right-1 top-2 w-4 h-1 bg-[#4D5922] rounded-full" />
                  
                  {/* Hands */}
                  <div className="absolute -left-2 top-3 w-1 h-1 rounded-full bg-white" />
                  <div className="absolute -right-2 top-3 w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
              
              {/* Academic symbols */}
              <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full opacity-60" />
              <div className="absolute top-6 right-3 w-1 h-1 bg-white rounded-full opacity-80" />
              <div className="absolute bottom-3 left-6 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
            </div>
          );

        case 'custom-expert-3':
          return (
            <div className={`relative w-full h-full ${className}`} style={{ background: 'linear-gradient(135deg, #F6D98A 0%, #4D5922 50%, #F2C75B 100%)' }}>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full" style={{ backgroundColor: '#E86F3A', opacity: 0.8 }} />
              
              {/* Expert figure */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Head */}
                <div className="w-7 h-7 rounded-full bg-white mx-auto mb-1 relative">
                  <div className="absolute top-2 left-1.5 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-2 right-1.5 w-0.5 h-0.5 bg-[#23412C] rounded-full" />
                  <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-[#23412C] rounded-full" />
                </div>
                
                {/* Professional attire */}
                <div className="w-8 h-10 bg-white rounded-t-full relative">
                  {/* Arms */}
                  <div className="absolute -left-1 top-2 w-4 h-1 bg-white rounded-full" />
                  <div className="absolute -right-1 top-2 w-4 h-1 bg-white rounded-full" />
                  
                  {/* Hands */}
                  <div className="absolute -left-2 top-3 w-1 h-1 rounded-full bg-[#4D5922]" />
                  <div className="absolute -right-2 top-3 w-1 h-1 rounded-full bg-[#4D5922]" />
                </div>
              </div>
              
              {/* Modern therapy symbols */}
              <div className="absolute top-3 left-4 w-1 h-1 bg-white rounded-full opacity-60" />
              <div className="absolute top-7 right-3 w-1 h-1 bg-white rounded-full opacity-80" />
              <div className="absolute bottom-4 left-3 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
            </div>
          );
          
        default:
          return (
            <div className={`relative w-full h-full ${className}`} style={{ background: 'linear-gradient(135deg, #F6E3B6 0%, #F2C75B 100%)' }}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                🧘‍♀️
              </div>
            </div>
          );
      }
    };

    return getIllustration();
  };

  const renderRecommendedExercises = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Empfohlene Übungen</h2>
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
              <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-lg border-2 border-[#F6D98A]">
                {exercise.image.startsWith('custom-') ? (
                  <CustomVideoIllustration type={exercise.image} />
                ) : (
                  <>
                    <img
                      src={exercise.image}
                      alt={exercise.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </>
                )}
                
                <div className="absolute top-3 left-3 bg-[#4D5922] backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#F6D98A]">
                  <span className="text-white text-sm font-medium">{exercise.duration}</span>
                </div>

                <button 
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#F2C75B] backdrop-blur-sm rounded-full text-[#23412C] hover:bg-[#E6B84F] transition-colors border border-[#F6D98A]"
                  onClick={e => e.stopPropagation()}
                >
                  <Heart className="w-4 h-4" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#23412C]/90 to-transparent">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-[#F6D98A] bg-[#4D5922] px-2 py-1 rounded-full">
                      {exercise.category}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-3 text-sm line-clamp-2 leading-tight">
                    {exercise.title}
                  </h3>
                  <button 
                    className="bg-[#E86F3A] hover:bg-[#D85A2A] text-white px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-colors shadow-md"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (exercise.category === 'Atemübungen') {
                        setIsBreathingExerciseOpen(true);
                      }
                    }}
                  >
                    <Play className="w-3 h-3" />
                    Jetzt starten
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-[#F6E3B6] to-transparent" />
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

      {/* Exercise Finder Card */}
      <div className="bg-gradient-to-br from-journalgreen to-journalgreen/80 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 rounded-full p-2">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Finde deine perfekte Übung</h3>
            <p className="text-white/90 text-sm">Personalisierte Empfehlungen in 4 einfachen Schritten</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="bg-white/20 rounded-full px-2 py-1">🧠</span>
              <span>Basierend auf deinem Stress-Level</span>
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setIsExerciseFinderOpen(true)}
          className="w-full bg-white text-journalgreen py-3 px-6 rounded-xl font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
        >
          <Target className="w-5 h-5" />
          Übung finden
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tagesübung</h2>
      <div 
        className="relative rounded-3xl p-6 mb-8 h-48 overflow-hidden shadow-lg border-2 border-[#F6D98A] cursor-pointer hover:scale-[1.02] transition-all duration-300"
      >
        <CustomVideoIllustration type="custom-meditation" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute top-3 left-3 bg-[#4D5922] backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#F6D98A]">
          <span className="text-white text-sm font-medium">{dailyExercise.duration}</span>
        </div>

        <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#F2C75B] backdrop-blur-sm rounded-full text-[#23412C] hover:bg-[#E6B84F] transition-colors border border-[#F6D98A]">
          <Heart className="w-4 h-4" />
        </button>

        <div className="relative h-full flex flex-col justify-end">
          <div className="mb-2">
            <span className="text-xs font-medium text-[#F6D98A] bg-[#4D5922] px-2 py-1 rounded-full">
              Tagesübung
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{dailyExercise.title}</h3>
          <p className="text-white/90 mb-4 text-sm leading-tight">{dailyExercise.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/90" />
              <span className="text-white/90 text-sm">{dailyExercise.duration}</span>
            </div>
            <button className="bg-[#E86F3A] hover:bg-[#D85A2A] text-white px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors shadow-md">
              <Play className="w-4 h-4" />
              Jetzt starten
            </button>
          </div>
        </div>
      </div>

      {renderRecommendedExercises()}

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Experteninterviews</h2>
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
                <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-lg border-2 border-[#F6D98A]">
                  {interview.image.startsWith('custom-') ? (
                    <CustomVideoIllustration type={interview.image} />
                  ) : (
                    <>
                      <img
                        src={interview.image}
                        alt={interview.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </>
                  )}
                  
                  <div className="absolute top-3 left-3 bg-[#4D5922] backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#F6D98A]">
                    <span className="text-white text-sm font-medium">{interview.duration}</span>
                  </div>

                  <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#F2C75B] backdrop-blur-sm rounded-full text-[#23412C] hover:bg-[#E6B84F] transition-colors border border-[#F6D98A]">
                    <Heart className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#23412C]/90 to-transparent">
                    <h3 className="text-white font-semibold mb-2 text-sm leading-tight">{interview.title}</h3>
                    <p className="text-[#F6D98A] text-xs mb-3 bg-[#4D5922] px-2 py-1 rounded-full inline-block">{interview.expert}</p>
                    <button className="bg-[#E86F3A] hover:bg-[#D85A2A] text-white px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-colors shadow-md">
                      <Play className="w-3 h-3" />
                      Ansehen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-[#F6E3B6] to-transparent" />
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
      <BreathingExercise 
        isOpen={isBreathingExerciseOpen} 
        onClose={() => setIsBreathingExerciseOpen(false)} 
      />
      <ExerciseFinder 
        isOpen={isExerciseFinderOpen} 
        onClose={() => setIsExerciseFinderOpen(false)} 
      />
    </div>
  );
};

export default Home;