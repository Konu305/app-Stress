import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Play, Pause, X, PieChart, CheckCircle, Brain, TrendingUp } from 'lucide-react';

interface StressReflectionProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StressCategory {
  title: string;
  icon: string;
  items: string[];
  color: string;
  bgColor: string;
  key: string;
}

const StressReflection: React.FC<StressReflectionProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [selectedStressors, setSelectedStressors] = useState<Record<string, string[]>>({
    work: [],
    personal: [],
    daily: []
  });
  const [customStressor, setCustomStressor] = useState('');

  const categories: StressCategory[] = [
    {
      title: "Beruflicher Stress",
      icon: "💼",
      color: "text-[#23412C]",
      bgColor: "bg-[#F2C75B]",
      key: "work",
      items: [
        "Arbeit",
        "Zeitdruck",
        "Konflikte",
        "Termine",
        "Lange Arbeitszeiten",
        "Mangelnde Anerkennung",
        "Hohe Verantwortung",
        "Unsichere Jobsituation"
      ]
    },
    {
      title: "Privater Stress",
      icon: "🏠",
      color: "text-[#23412C]",
      bgColor: "bg-[#F6D98A]",
      key: "personal",
      items: [
        "Familie",
        "Beziehung",
        "Erziehung",
        "Finanzielle Sorgen",
        "Haushalt",
        "Pflegeverantwortung",
        "Gesundheit",
        "Krankheit in der Familie"
      ]
    },
    {
      title: "Alltäglicher Stress",
      icon: "🔁",
      color: "text-[#23412C]",
      bgColor: "bg-[#E86F3A]",
      key: "daily",
      items: [
        "Lärm",
        "Verkehr",
        "Soziale Medien",
        "Informationsflut",
        "Soziale Verpflichtungen",
        "Reizüberflutung",
        "Wenig Zeit für mich",
        "Schlafmangel",
        "Bewegungsmangel"
      ]
    }
  ];

  const toggleStressor = (category: string, item: string) => {
    setSelectedStressors(prev => {
      const current = prev[category] || [];
      const updated = current.includes(item)
        ? current.filter(i => i !== item)
        : [...current, item];
      return { ...prev, [category]: updated };
    });
  };

  const calculateStressDistribution = () => {
    const total = Object.values(selectedStressors).reduce((acc, curr) => acc + curr.length, 0);
    if (total === 0) return { work: 0, personal: 0, daily: 0 };
    return {
      work: (selectedStressors.work.length / total) * 100,
      personal: (selectedStressors.personal.length / total) * 100,
      daily: (selectedStressors.daily.length / total) * 100
    };
  };

  const getTotalStressors = () => {
    return Object.values(selectedStressors).reduce((acc, curr) => acc + curr.length, 0);
  };

  if (!isOpen) return null;

  const renderIntro = () => (
    <div className="text-center px-6">
      <div className="w-20 h-20 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <Brain className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-3xl font-bold text-[#23412C] mb-6">Was stresst Sie aktuell?</h1>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 relative border border-[#F6D98A] shadow-lg">
        <button
          onClick={() => setAudioPlaying(!audioPlaying)}
          className="absolute top-4 right-4 w-12 h-12 bg-[#F2C75B] rounded-full shadow-md flex items-center justify-center hover:bg-[#E6B84F] transition-colors"
        >
          {audioPlaying ? (
            <Pause className="w-6 h-6 text-[#23412C]" />
          ) : (
            <Play className="w-6 h-6 text-[#23412C]" />
          )}
        </button>
        <Volume2 className="w-8 h-8 text-[#E86F3A] mb-4" />
        <p className="text-[#23412C] leading-relaxed">
          "Stress entsteht oft durch viele kleine Auslöser im Alltag. Diese Übung hilft Ihnen, Ihre persönlichen Stressquellen zu erkennen und besser zu verstehen. Wählen Sie alle Punkte aus, die aktuell auf Sie zutreffen - auch kleine Stressoren sind wichtig."
        </p>
      </div>
    </div>
  );

  const renderStressors = () => (
    <div className="px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#23412C] mb-2">Ihre Stressquellen</h2>
        <p className="text-[#23412C]/70">Wählen Sie alle zutreffenden Stressoren aus</p>
      </div>

      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center shadow-md`}>
              <span className="text-2xl">{category.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#23412C]">{category.title}</h3>
              <p className="text-sm text-[#23412C]/60">
                {selectedStressors[category.key]?.length || 0} ausgewählt
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {category.items.map((item, itemIndex) => {
              const isSelected = selectedStressors[category.key]?.includes(item);
              return (
                <button
                  key={itemIndex}
                  onClick={() => toggleStressor(category.key, item)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border-2 shadow-md hover:shadow-lg transform hover:scale-[1.02] ${
                    isSelected
                      ? `${category.bgColor} border-[#E86F3A] ${category.color} shadow-lg`
                      : 'bg-white/60 border-white/60 hover:bg-white/80 text-[#23412C]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item}</span>
                    {isSelected && (
                      <CheckCircle className="w-5 h-5 text-[#E86F3A]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
      
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#4D5922] rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl">✏️</span>
          </div>
          <h3 className="text-xl font-bold text-[#23412C]">Individueller Stress</h3>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-[#F6D98A] shadow-lg">
          <textarea
            value={customStressor}
            onChange={(e) => setCustomStressor(e.target.value)}
            placeholder="Gibt es weitere Stressoren, die Sie belasten?"
            className="w-full p-4 border-2 border-white/60 rounded-xl focus:ring-2 focus:ring-[#E86F3A] focus:border-[#E86F3A] bg-white/60 text-[#23412C] placeholder-[#23412C]/50 resize-none"
            rows={4}
          />
        </div>
      </div>
    </div>
  );

  const renderAnalysis = () => {
    const distribution = calculateStressDistribution();
    const totalStressors = getTotalStressors();
    
    return (
      <div className="px-6">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#4D5922] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#23412C] mb-2">Ihr Stressprofil</h2>
          <p className="text-[#23412C]/70">Analyse Ihrer {totalStressors} identifizierten Stressoren</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#F6D98A] p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <PieChart className="w-32 h-32 text-[#E86F3A]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#23412C]">{totalStressors}</p>
                  <p className="text-xs text-[#23412C]/60">Stressoren</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#F2C75B]/30 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-xl">💼</span>
                <span className="font-medium text-[#23412C]">Beruflicher Stress</span>
              </div>
              <span className="font-bold text-[#23412C]">{Math.round(distribution.work)}%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F6D98A]/30 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-xl">🏠</span>
                <span className="font-medium text-[#23412C]">Privater Stress</span>
              </div>
              <span className="font-bold text-[#23412C]">{Math.round(distribution.personal)}%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#E86F3A]/30 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="text-xl">🔁</span>
                <span className="font-medium text-[#23412C]">Alltäglicher Stress</span>
              </div>
              <span className="font-bold text-[#23412C]">{Math.round(distribution.daily)}%</span>
            </div>
          </div>
        </div>

        <div className="bg-[#4D5922] rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-[#F6D98A]" />
            <h3 className="text-lg font-semibold text-white">Glückwunsch!</h3>
          </div>
          <p className="text-white/90 leading-relaxed">
            Sie haben den ersten wichtigen Schritt zur besseren Stressbewältigung gemacht. Das Bewusstsein für Ihre Stressquellen ist der Grundstein für effektive Veränderungen.
          </p>
        </div>

        {totalStressors > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-3">Nächste Schritte</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E86F3A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-sm text-[#23412C] leading-relaxed">
                  Beginnen Sie mit den Achtsamkeitsübungen im nächsten Modul
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F2C75B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#23412C] text-sm font-bold">2</span>
                </div>
                <p className="text-sm text-[#23412C] leading-relaxed">
                  Führen Sie regelmäßig ein Stresstagebuch
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#4D5922] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-sm text-[#23412C] leading-relaxed">
                  Üben Sie täglich die erlernten Entspannungstechniken
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-[#F6E3B6] z-50 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-[#F6E3B6] p-6 flex items-center justify-between">
        <button
          onClick={onClose}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
        >
          <ChevronLeft className="w-6 h-6 text-[#23412C]" />
        </button>
        <div className="flex gap-2">
          {[0, 1, 2].map(step => (
            <div
              key={step}
              className={`w-3 h-3 rounded-full transition-colors ${
                step <= currentStep ? 'bg-[#E86F3A]' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
        <div className="w-12" />
      </div>

      {/* Content - Scrollable area */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-8">
          {currentStep === 0 && renderIntro()}
          {currentStep === 1 && renderStressors()}
          {currentStep === 2 && renderAnalysis()}
        </div>
      </div>

      {/* Footer - Fixed at bottom */}
      <div className="flex-shrink-0 bg-[#F6E3B6] p-6">
        <div className="flex gap-4 max-w-md mx-auto">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="flex-1 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#F6D98A] rounded-2xl font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-md text-[#23412C]"
            >
              <ChevronLeft className="w-5 h-5" />
              Zurück
            </button>
          )}
          {currentStep < 2 ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="flex-1 bg-[#E86F3A] text-white py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors flex items-center justify-center gap-2 shadow-lg border border-[#F6D98A]"
            >
              Weiter
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex-1 bg-[#4D5922] text-white py-4 rounded-2xl font-semibold hover:bg-[#3A4219] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Abschließen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StressReflection;