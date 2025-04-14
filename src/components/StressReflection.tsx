import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, Play, Pause, X, PieChart } from 'lucide-react';

interface StressReflectionProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StressCategory {
  title: string;
  icon: string;
  items: string[];
  color: string;
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
      color: "bg-blue-100 text-blue-900",
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
      color: "bg-green-100 text-green-900",
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
      color: "bg-orange-100 text-orange-900",
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

  if (!isOpen) return null;

  const renderIntro = () => (
    <div className="text-center px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Was stresst dich aktuell?</h1>
      <div className="bg-blue-50 rounded-xl p-6 mb-8 relative">
        <button
          onClick={() => setAudioPlaying(!audioPlaying)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md"
        >
          {audioPlaying ? (
            <Pause className="w-6 h-6 text-blue-600" />
          ) : (
            <Play className="w-6 h-6 text-blue-600" />
          )}
        </button>
        <Volume2 className="w-8 h-8 text-blue-600 mb-4" />
        <p className="text-blue-800">
          "Stress entsteht oft durch viele kleine Auslöser im Alltag. Diese Übung hilft dir, deine persönlichen Stressquellen zu erkennen und besser zu verstehen. Wähle alle Punkte aus, die aktuell auf dich zutreffen - auch kleine Stressoren sind wichtig."
        </p>
      </div>
    </div>
  );

  const renderStressors = () => (
    <div className="px-6">
      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{category.icon}</span>
            <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {category.items.map((item, itemIndex) => {
              const isSelected = selectedStressors[category.title.toLowerCase().split(' ')[0]]?.includes(item);
              return (
                <button
                  key={itemIndex}
                  onClick={() => toggleStressor(
                    category.title.toLowerCase().split(' ')[0],
                    item
                  )}
                  className={`p-4 rounded-xl text-left transition-all ${
                    isSelected
                      ? `${category.color} ring-2 ring-offset-2 ring-blue-500`
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Individueller Stress</h2>
        <textarea
          value={customStressor}
          onChange={(e) => setCustomStressor(e.target.value)}
          placeholder="Gibt es weitere Stressoren, die dich belasten?"
          className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4}
        />
      </div>
    </div>
  );

  const renderAnalysis = () => {
    const distribution = calculateStressDistribution();
    return (
      <div className="px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dein Stressprofil</h2>
        <div className="bg-white rounded-xl border p-6 mb-8">
          <div className="flex items-center justify-center mb-8">
            <PieChart className="w-32 h-32 text-blue-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Beruflicher Stress</span>
              <span className="font-medium">{Math.round(distribution.work)}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Privater Stress</span>
              <span className="font-medium">{Math.round(distribution.personal)}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Alltäglicher Stress</span>
              <span className="font-medium">{Math.round(distribution.daily)}%</span>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <p className="text-green-800 font-medium text-center">
            Gut gemacht! Du hast den ersten Schritt zur besseren Stressbewältigung gemacht.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-white p-4 border-b flex items-center justify-between">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex gap-2">
          {[0, 1, 2].map(step => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full ${
                step <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <div className="w-10" /> {/* Spacer for alignment */}
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
      <div className="flex-shrink-0 bg-white p-6 border-t">
        <div className="flex gap-4 max-w-md mx-auto">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="flex-1 py-4 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Zurück
            </button>
          )}
          {currentStep < 2 ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Weiter
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Abschließen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StressReflection;