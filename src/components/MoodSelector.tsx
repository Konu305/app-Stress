import React from 'react';
import { MoodType, MotivationLevel, StresscopingStyle } from '../data/exerciseDatabase';

interface MoodSelectorProps {
  mood?: MoodType;
  motivation?: MotivationLevel;
  mentalCapacity?: number;
  physicalComfort?: number;
  socialPreference?: 'alone' | 'guided' | 'group';
  copingStyle?: StresscopingStyle;
  onMoodChange: (mood: MoodType) => void;
  onMotivationChange: (motivation: MotivationLevel) => void;
  onMentalCapacityChange: (capacity: number) => void;
  onPhysicalComfortChange: (comfort: number) => void;
  onSocialPreferenceChange: (preference: 'alone' | 'guided' | 'group') => void;
  onCopingStyleChange: (style: StresscopingStyle) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({
  mood,
  motivation,
  mentalCapacity,
  physicalComfort,
  socialPreference,
  copingStyle,
  onMoodChange,
  onMotivationChange,
  onMentalCapacityChange,
  onPhysicalComfortChange,
  onSocialPreferenceChange,
  onCopingStyleChange
}) => {
  const moodEmojis = {
    [MoodType.VERY_BAD]: '😢',
    [MoodType.BAD]: '😟',
    [MoodType.NEUTRAL]: '😐',
    [MoodType.GOOD]: '🙂',
    [MoodType.VERY_GOOD]: '😊'
  };

  const moodLabels = {
    [MoodType.VERY_BAD]: 'Sehr schlecht',
    [MoodType.BAD]: 'Schlecht',
    [MoodType.NEUTRAL]: 'Neutral',
    [MoodType.GOOD]: 'Gut',
    [MoodType.VERY_GOOD]: 'Sehr gut'
  };

  const motivationLabels = {
    [MotivationLevel.VERY_LOW]: 'Sehr niedrig (1-2)',
    [MotivationLevel.LOW]: 'Niedrig (3-4)',
    [MotivationLevel.MEDIUM]: 'Mittel (5-6)',
    [MotivationLevel.HIGH]: 'Hoch (7-8)',
    [MotivationLevel.VERY_HIGH]: 'Sehr hoch (9-10)'
  };

  const copingStyleLabels = {
    [StresscopingStyle.ACTIVE]: 'Aktiv lösen',
    [StresscopingStyle.EMOTIONAL]: 'Emotions-fokussiert',
    [StresscopingStyle.AVOIDANT]: 'Vermeiden/Ausweichen',
    [StresscopingStyle.SOCIAL]: 'Sozialer Support',
    [StresscopingStyle.COGNITIVE]: 'Gedanken umstrukturieren'
  };

  return (
    <div className="space-y-6 p-4 bg-white rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Psychologische Faktoren (Optional)
      </h3>
      
      {/* Aktuelle Stimmung */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wie ist deine aktuelle Stimmung?
        </label>
        <div className="grid grid-cols-5 gap-2">
          {Object.values(MoodType).map((moodType) => (
            <button
              key={moodType}
              onClick={() => onMoodChange(moodType)}
              className={`p-3 rounded-lg border text-center transition-all ${
                mood === moodType
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-1">{moodEmojis[moodType]}</div>
              <div className="text-xs font-medium">{moodLabels[moodType]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Motivation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wie motiviert fühlst du dich für eine Übung?
        </label>
        <select
          value={motivation || ''}
          onChange={(e) => onMotivationChange(Number(e.target.value) as MotivationLevel)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Nicht angegeben</option>
          {Object.values(MotivationLevel).filter(v => typeof v === 'number').map((level) => (
            <option key={level} value={level}>
              {motivationLabels[level as MotivationLevel]}
            </option>
          ))}
        </select>
      </div>

      {/* Geistige Kapazität */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Geistige Kapazität (1-10): {mentalCapacity || 'Nicht angegeben'}
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={mentalCapacity || 5}
          onChange={(e) => onMentalCapacityChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Sehr müde</span>
          <span>Sehr fokussiert</span>
        </div>
      </div>

      {/* Körperliches Wohlbefinden */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Körperliches Wohlbefinden (1-10): {physicalComfort || 'Nicht angegeben'}
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={physicalComfort || 5}
          onChange={(e) => onPhysicalComfortChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Unwohl</span>
          <span>Sehr wohl</span>
        </div>
      </div>

      {/* Soziale Präferenz */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wie möchtest du die Übung durchführen?
        </label>
        <div className="grid grid-cols-3 gap-2">
          {['alone', 'guided', 'group'].map((pref) => (
            <button
              key={pref}
              onClick={() => onSocialPreferenceChange(pref as 'alone' | 'guided' | 'group')}
              className={`p-3 rounded-lg border text-center transition-all ${
                socialPreference === pref
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-sm font-medium">
                {pref === 'alone' && '🧘‍♀️ Alleine'}
                {pref === 'guided' && '🎧 Geführt'}
                {pref === 'group' && '👥 Gruppe'}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bewältigungsstil */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wie gehst du normalerweise mit Stress um?
        </label>
        <select
          value={copingStyle || ''}
          onChange={(e) => onCopingStyleChange(e.target.value as StresscopingStyle)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Nicht angegeben</option>
          {Object.values(StresscopingStyle).map((style) => (
            <option key={style} value={style}>
              {copingStyleLabels[style]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MoodSelector; 