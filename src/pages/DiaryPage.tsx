import React, { useState } from 'react';
import { Mic, FileText, ClipboardList, ArrowLeft } from 'lucide-react';
import { DiaryForm } from '../components/DiaryForm';
import { MoodHistory } from '../components/MoodHistory';
import { History } from '../components/History';
import { DetailedDiaryForm } from '../components/DetailedDiaryForm';

const DiaryPage: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<'menu' | 'audio' | 'text' | 'detailed'>('menu');

  const handleModeSelect = (mode: 'audio' | 'text' | 'detailed') => {
    setSelectedMode(mode);
  };

  const handleBackToMenu = () => {
    setSelectedMode('menu');
  };

  const handleBackToMain = () => {
    // Navigate back to main app page
    window.history.back();
  };

  if (selectedMode === 'menu') {
  return (
      <div className="max-w-md mx-auto px-4 pt-6 pb-24 bg-[#F6E3B6] min-h-screen">
        {/* Header with Back Button */}
        <div className="flex items-center mb-6">
          <button
            onClick={handleBackToMain}
            className="flex items-center space-x-2 text-[#23412C] hover:text-[#4D5922] transition-colors bg-[#F2C75B] hover:bg-[#E6B84F] px-4 py-2 rounded-xl border-2 border-[#F6D98A] shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Zurück</span>
        </button>
        </div>

        <h1 className="text-2xl font-bold text-center mb-8 text-[#23412C]">📖 Tagebuch</h1>
        
        <div className="space-y-4">
          {/* Audio Tagebuch */}
          <button
            onClick={() => handleModeSelect('audio')}
            className="w-full bg-[#F2C75B] hover:bg-[#E6B84F] text-[#23412C] p-6 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 border-2 border-[#F6D98A]"
          >
            <div className="flex items-center justify-center space-x-4">
              <Mic className="w-8 h-8" />
              <div className="text-left">
                <h3 className="text-xl font-bold">🎤 Audio Tagebuch</h3>
                <p className="text-sm opacity-80">Spreche deine Gedanken aus</p>
              </div>
            </div>
          </button>

          {/* Text Tagebuch */}
          <button
            onClick={() => handleModeSelect('text')}
            className="w-full bg-[#F2C75B] hover:bg-[#E6B84F] text-[#23412C] p-6 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 border-2 border-[#F6D98A]"
          >
            <div className="flex items-center justify-center space-x-4">
              <FileText className="w-8 h-8" />
              <div className="text-left">
                <h3 className="text-xl font-bold">✍️ Text Tagebuch</h3>
                <p className="text-sm opacity-80">Schreibe deine Erfahrungen auf</p>
              </div>
            </div>
          </button>

          {/* Detaillierter Eintrag */}
          <button
            onClick={() => handleModeSelect('detailed')}
            className="w-full bg-[#F2C75B] hover:bg-[#E6B84F] text-[#23412C] p-6 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 border-2 border-[#F6D98A]"
          >
            <div className="flex items-center justify-center space-x-4">
              <ClipboardList className="w-8 h-8" />
              <div className="text-left">
                <h3 className="text-xl font-bold">📋 Detaillierter Eintrag</h3>
                <p className="text-sm opacity-80">Ausführliche Stressanalyse</p>
              </div>
            </div>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <h3 className="text-lg font-bold text-[#23412C] mb-2">📊 Deine Statistiken</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-[#4D5922]">7</p>
              <p className="text-sm text-[#23412C]">Einträge</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#4D5922]">3</p>
              <p className="text-sm text-[#23412C]">Tage Streak</p>
            </div>
          </div>
                    </div>
                  </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24 bg-[#F6E3B6] min-h-screen">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6">
                        <button
          onClick={handleBackToMenu}
          className="flex items-center space-x-2 text-[#23412C] hover:text-[#4D5922] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Zurück</span>
                        </button>
                    </div>

      {selectedMode === 'audio' && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#23412C] mb-6">🎤 Audio Tagebuch</h2>
          <div className="bg-[#F2C75B] rounded-2xl p-8 border-2 border-[#F6D98A]">
            <Mic className="w-16 h-16 mx-auto mb-4 text-[#4D5922]" />
            <p className="text-[#23412C] mb-6">Audio-Funktion wird bald verfügbar sein!</p>
            <button className="bg-[#E86F3A] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#D85A2A] transition-colors">
              🎙️ Aufnahme starten
                  </button>
                    </div>
                  </div>
      )}

      {selectedMode === 'text' && (
        <div>
          <h2 className="text-2xl font-bold text-[#23412C] mb-6">✍️ Text Tagebuch</h2>
          <DiaryForm />
          </div>
        )}

      {selectedMode === 'detailed' && (
        <div>
          <h2 className="text-2xl font-bold text-[#23412C] mb-6">📋 Detaillierter Eintrag</h2>
          <DetailedDiaryForm />
          </div>
        )}
    </div>
  );
};

export default DiaryPage;