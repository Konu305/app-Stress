import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, CheckCircle, Clock } from 'lucide-react';

interface AudioIntroductionProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const AudioIntroduction: React.FC<AudioIntroductionProps> = ({ isOpen, onClose, onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [canContinue, setCanContinue] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      setCurrentTime(currentTime);
      
      // Check if 95% completed
      if (duration > 0 && (currentTime / duration) >= 0.95) {
        setCanContinue(true);
      }
    };
    
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setHasCompleted(true);
      setCanContinue(true);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audio.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleContinue = () => {
    setHasCompleted(true);
    onComplete();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#F6E3B6] z-50 flex flex-col overflow-hidden">
      <audio
        ref={audioRef}
        src="https://clarigen.de/wp-content/uploads/2025/06/ElevenLabs_2025-06-20T13_40_49_HL-Professional_pvc_sp100_s70_sb75_v3.mp3"
        preload="metadata"
      />

      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-[#F6D98A] flex-shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="w-12 h-12 bg-[#F2C75B] rounded-full flex items-center justify-center shadow-md border border-[#F6D98A] hover:bg-[#E6B84F] transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-[#23412C]">Willkommen</h1>
            <p className="text-[#23412C]/70">Einführung in das Stressbewältigungsprogramm</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Progress Indicator */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 relative">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#F6D98A"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#E86F3A"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - (duration > 0 ? currentTime / duration : 0))}`}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-[#23412C]">
                  {Math.round((duration > 0 ? currentTime / duration : 0) * 100)}%
                </span>
              </div>
            </div>
            <span className="text-xs text-[#23412C]/70 mt-1">Fortschritt</span>
          </div>
          
          {canContinue && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Bereit</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center justify-center min-h-full p-6">
          {/* Audio Player Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#F6D98A] max-w-md w-full">
            {/* Title */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Volume2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#23412C] mb-2">Begrüßung</h2>
              <p className="text-[#23412C]/70 leading-relaxed">
                Hören Sie sich die Einführung an, bevor Sie mit dem Fragebogen beginnen.
              </p>
            </div>

            {/* Audio Controls */}
            <div className="space-y-6">
              {/* Play/Pause Button */}
              <div className="flex justify-center">
                <button
                  onClick={togglePlayPause}
                  className="w-16 h-16 bg-[#E86F3A] hover:bg-[#D85A2A] rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </button>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-2 bg-[#F6D98A] rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #E86F3A 0%, #E86F3A ${(duration > 0 ? (currentTime / duration) * 100 : 0)}%, #F6D98A ${(duration > 0 ? (currentTime / duration) * 100 : 0)}%, #F6D98A 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-[#23412C]/70">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-[#F6D98A] rounded-full transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-[#23412C]" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-[#23412C]" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-[#F6D98A] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-[#4D5922] rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#F6D98A] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#23412C] text-sm font-bold">💡</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  {canContinue ? "Bereit zum Fortfahren!" : "Hören Sie aufmerksam zu"}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {canContinue 
                    ? "Sie haben die Einführung erfolgreich angehört und können nun mit dem Fragebogen fortfahren."
                    : "Diese Einführung bereitet Sie optimal auf das Stressbewältigungsprogramm vor. Hören Sie bis zum Ende zu, um fortzufahren."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons - Fixed at bottom */}
      <div className="p-6 border-t border-[#F6D98A] flex-shrink-0">
        <div className="flex gap-3 max-w-md mx-auto">
          <button
            onClick={onClose}
            className="flex-1 bg-[#F6D98A] hover:bg-[#F0D384] text-[#23412C] py-4 rounded-2xl font-semibold transition-colors border border-[#F6D98A] shadow-md"
          >
            Zurück
          </button>
          
          {canContinue ? (
            <button
              onClick={handleContinue}
              className="flex-1 bg-[#E86F3A] hover:bg-[#D85A2A] text-white py-4 rounded-2xl font-semibold transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Weiter zum Fragebogen</span>
            </button>
          ) : (
            <div className="flex-1 bg-gray-300 text-gray-500 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 cursor-not-allowed">
              <Clock className="w-5 h-5" />
              <span>Bitte anhören</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #E86F3A;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #E86F3A;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default AudioIntroduction; 