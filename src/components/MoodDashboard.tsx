import React from 'react';
import { BarChart3, TrendingUp, Brain, Heart, Users, Zap } from 'lucide-react';

interface MoodEntry {
  date: string;
  mood: number;      // 1-5 Skala
  motivation: number; // 1-10 Skala
  mentalCapacity: number; // 1-10 Skala
  physicalComfort: number; // 1-10 Skala
  stressLevel: number; // 1-10 Skala
  exerciseCompleted: boolean;
}

interface MoodDashboardProps {
  entries?: MoodEntry[];
}

const MoodDashboard: React.FC<MoodDashboardProps> = ({ entries = [] }) => {
  // Beispieldaten falls keine Einträge vorhanden
  const sampleEntries: MoodEntry[] = [
    {
      date: '2024-01-01',
      mood: 3,
      motivation: 6,
      mentalCapacity: 7,
      physicalComfort: 8,
      stressLevel: 5,
      exerciseCompleted: true
    },
    {
      date: '2024-01-02',
      mood: 4,
      motivation: 8,
      mentalCapacity: 9,
      physicalComfort: 7,
      stressLevel: 3,
      exerciseCompleted: true
    },
    {
      date: '2024-01-03',
      mood: 2,
      motivation: 4,
      mentalCapacity: 5,
      physicalComfort: 6,
      stressLevel: 8,
      exerciseCompleted: false
    }
  ];

  const displayEntries = entries.length > 0 ? entries : sampleEntries;

  const calculateAverage = (key: keyof MoodEntry) => {
    const values = displayEntries
      .map(entry => entry[key])
      .filter(val => typeof val === 'number') as number[];
    
    return values.length > 0 
      ? (values.reduce((sum, val) => sum + val, 0) / values.length).toFixed(1)
      : '0';
  };

  const getCompletionRate = () => {
    const completedCount = displayEntries.filter(entry => entry.exerciseCompleted).length;
    return displayEntries.length > 0 
      ? Math.round((completedCount / displayEntries.length) * 100)
      : 0;
  };

  const getScoreColor = (score: number, max: number = 10) => {
    const percentage = (score / max) * 100;
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Psychologisches Dashboard
        </h2>
        <div className="text-sm text-gray-500">
          Letzten {displayEntries.length} Einträge
        </div>
      </div>

      {/* Übersicht Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-800">Ø Stimmung</p>
              <p className={`text-2xl font-bold ${getScoreColor(Number(calculateAverage('mood')), 5)}`}>
                {calculateAverage('mood')}/5
              </p>
            </div>
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800">Ø Motivation</p>
              <p className={`text-2xl font-bold ${getScoreColor(Number(calculateAverage('motivation')))}`}>
                {calculateAverage('motivation')}/10
              </p>
            </div>
            <Zap className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-800">Ø Geistige Kapazität</p>
              <p className={`text-2xl font-bold ${getScoreColor(Number(calculateAverage('mentalCapacity')))}`}>
                {calculateAverage('mentalCapacity')}/10
              </p>
            </div>
            <Brain className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-800">Übungen Rate</p>
              <p className={`text-2xl font-bold ${getScoreColor(getCompletionRate(), 100)}`}>
                {getCompletionRate()}%
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Detaillierte Metriken */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Durchschnittswerte</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Körperliches Wohlbefinden</span>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(Number(calculateAverage('physicalComfort')) / 10) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{calculateAverage('physicalComfort')}/10</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Stress Level</span>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full" 
                    style={{ width: `${(Number(calculateAverage('stressLevel')) / 10) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{calculateAverage('stressLevel')}/10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Verlauf (letzte 7 Tage)</h3>
          
          <div className="space-y-2">
            {displayEntries.slice(-7).map((entry, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600">
                    {new Date(entry.date).toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' })}
                  </span>
                  {entry.exerciseCompleted ? (
                    <span className="text-green-600 text-xs">✓ Übung</span>
                  ) : (
                    <span className="text-gray-400 text-xs">- Keine Übung</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`${getScoreColor(entry.mood, 5)}`}>S:{entry.mood}</span>
                  <span className={`${getScoreColor(entry.motivation)}`}>M:{entry.motivation}</span>
                  <span className={`${getScoreColor(entry.stressLevel)}`}>St:{entry.stressLevel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
          <Brain className="h-4 w-4" />
          Insights
        </h3>
        <div className="text-sm text-blue-700 space-y-1">
          {Number(calculateAverage('motivation')) < 5 && (
            <p>• Deine Motivation ist unterdurchschnittlich - versuche kürzere, einfachere Übungen</p>
          )}
          {Number(calculateAverage('stressLevel')) > 7 && (
            <p>• Hoher Stress-Level erkannt - regelmäßige Entspannungsübungen könnten helfen</p>
          )}
          {getCompletionRate() < 50 && (
            <p>• Niedrige Übungsrate - versuche realistischere Ziele zu setzen</p>
          )}
          {Number(calculateAverage('mood')) >= 4 && (
            <p>• Gute Stimmungswerte - weiter so! 🎉</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodDashboard; 