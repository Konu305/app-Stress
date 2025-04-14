import React, { useState, useMemo } from 'react';
import { X, Plus, Save, List, ChevronRight } from 'lucide-react';

interface DiaryEntry {
  id: string;
  date: string;
  stressLevel: number;
  mood: number;
  energyLevel: number;
  location: string;
  timeOfDay: string;
  triggers: string[];
  physicalSymptoms: string[];
  emotions: string[];
  thoughts: string[];
  copingStrategies: string[];
  strategyEffectiveness: number;
  satisfactionLevel: number;
  gratitude: string;
  notes: string;
}

interface QuickEntry {
  id: string;
  date: string;
  text: string;
}

interface DiaryProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRIGGERS = [
  'Arbeit +', 'Familie +', 'Zeitdruck +', 'Lärm +', 'Konflikte +', 
  'Gesundheit +', 'Finanzen +', 'Verkehr +', 'Termine +', 'Andere +'
];

const PHYSICAL_SYMPTOMS = [
  'Herzklopfen +', 'Verspannter Nacken +', 'Flacher Atem +', 'Schwitzen +',
  'Kopfschmerzen +', 'Müdigkeit +', 'Magenschmerzen +', 'Schwindel +'
];

const EMOTIONS = [
  'Ängstlich +', 'Ärgerlich +', 'Überfordert +', 'Frustriert +',
  'Traurig +', 'Hoffnungsvoll +', 'Ruhig +', 'Zuversichtlich +'
];

const COPING_STRATEGIES = [
  'Progressive Muskelentspannung +',
  'Stressbarometer +',
  'Stresstagebuch +',
  'Persönliche Stressanalyse +',
  'Gedankenstopp-Technik +',
  'Positive Selbstgespräche +',
  'Atemtechniken +',
  'Body-Scan Meditation +'
];

const LOCATIONS = [
  'Büro +', 'Zuhause +', 'Unterwegs +', 'Bei Familie/Freunden +'
];

const TIMES_OF_DAY = [
  'Morgens +', 'Vormittags +', 'Mittags +', 'Nachmittags +', 'Abends +', 'Nachts +'
];

export default function Diary({ isOpen, onClose }: DiaryProps) {
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [quickText, setQuickText] = useState('');
  const [entries, setEntries] = useState<(DiaryEntry | QuickEntry)[]>([
    {
      id: '1',
      date: new Date().toISOString(),
      stressLevel: 7,
      mood: 65,
      energyLevel: 60,
      location: 'Büro',
      timeOfDay: 'Vormittags',
      triggers: ['Arbeit', 'Zeitdruck'],
      physicalSymptoms: ['Verspannter Nacken', 'Flacher Atem'],
      emotions: ['Überfordert', 'Ängstlich'],
      thoughts: ['Ich schaffe das alles nicht rechtzeitig', 'Was, wenn ich Fehler mache?'],
      copingStrategies: ['Atemübung', 'Pause machen'],
      strategyEffectiveness: 4,
      satisfactionLevel: 3,
      gratitude: 'Trotz Stress Unterstützung von Kollegen erhalten',
      notes: 'Muss lernen, besser Grenzen zu setzen'
    }
  ]);

  const [newEntry, setNewEntry] = useState<Partial<DiaryEntry>>({
    stressLevel: 5,
    mood: 50,
    energyLevel: 50,
    location: '',
    timeOfDay: '',
    triggers: [],
    physicalSymptoms: [],
    emotions: [],
    thoughts: [],
    copingStrategies: [],
    strategyEffectiveness: 3,
    satisfactionLevel: 3,
    gratitude: '',
    notes: ''
  });

  const entrySummary = useMemo(() => {
    const totalEntries = entries.length;
    const today = new Date().toDateString();
    const todayEntries = entries.filter(entry => 
      new Date(entry.date).toDateString() === today
    ).length;
    
    const detailedEntries = entries.filter(entry => 'stressLevel' in entry).length;
    const quickEntries = entries.filter(entry => 'text' in entry).length;

    return {
      total: totalEntries,
      today: todayEntries,
      detailed: detailedEntries,
      quick: quickEntries
    };
  }, [entries]);

  if (!isOpen) return null;

  const handleSaveEntry = () => {
    const entry: DiaryEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...newEntry as DiaryEntry
    };
    
    setEntries(prev => [entry, ...prev]);
    setShowNewEntry(false);
    setShowDetailedForm(false);
    setNewEntry({
      stressLevel: 5,
      mood: 50,
      energyLevel: 50,
      location: '',
      timeOfDay: '',
      triggers: [],
      physicalSymptoms: [],
      emotions: [],
      thoughts: [],
      copingStrategies: [],
      strategyEffectiveness: 3,
      satisfactionLevel: 3,
      gratitude: '',
      notes: ''
    });
  };

  const handleSaveQuickEntry = () => {
    if (!quickText.trim()) return;

    const entry: QuickEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      text: quickText
    };

    setEntries(prev => [entry, ...prev]);
    setQuickText('');
    setShowNewEntry(false);
  };

  const toggleSelection = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  const renderEntry = (entry: DiaryEntry | QuickEntry) => {
    const date = new Date(entry.date);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    if ('text' in entry) {
      // Quick entry
      return (
        <div key={entry.id} className="bg-white rounded-xl border p-4 mb-4">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm text-gray-500">
              {formattedDate} um {formattedTime}
            </div>
          </div>
          <p className="text-gray-700">{entry.text}</p>
        </div>
      );
    }

    // Detailed entry
    return (
      <div key={entry.id} className="bg-white rounded-xl border p-6 mb-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-gray-500">
                {formattedDate} um {formattedTime}
              </span>
              <span className="text-sm text-gray-500">
                • {entry.location}, {entry.timeOfDay}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <span className="text-sm text-gray-600">Stresslevel:</span>
                <span className="ml-1 font-medium">{entry.stressLevel}/10</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Stimmung:</span>
                <span className="ml-1 font-medium">{entry.mood}%</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Energie:</span>
                <span className="ml-1 font-medium">{entry.energyLevel}%</span>
              </div>
            </div>
          </div>
        </div>

        {entry.triggers.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Auslöser:</h4>
            <div className="flex flex-wrap gap-2">
              {entry.triggers.map(trigger => (
                <span key={trigger} className="px-2 py-1 bg-red-50 text-red-600 rounded-full text-sm">
                  {trigger}
                </span>
              ))}
            </div>
          </div>
        )}

        {entry.physicalSymptoms.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Körperliche Symptome:</h4>
            <div className="flex flex-wrap gap-2">
              {entry.physicalSymptoms.map(symptom => (
                <span key={symptom} className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-sm">
                  {symptom}
                </span>
              ))}
            </div>
          </div>
        )}

        {entry.emotions.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Gefühle:</h4>
            <div className="flex flex-wrap gap-2">
              {entry.emotions.map(emotion => (
                <span key={emotion} className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                  {emotion}
                </span>
              ))}
            </div>
          </div>
        )}

        {entry.thoughts.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Gedanken:</h4>
            <ul className="list-disc list-inside space-y-1">
              {entry.thoughts.map((thought, index) => (
                <li key={index} className="text-gray-600">{thought}</li>
              ))}
            </ul>
          </div>
        )}

        {entry.copingStrategies.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Angewendete Strategien:</h4>
            <div className="flex flex-wrap gap-2">
              {entry.copingStrategies.map(strategy => (
                <span key={strategy} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                  {strategy}
                </span>
              ))}
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Wirksamkeit: {entry.strategyEffectiveness}/5
              <span className="mx-2">•</span>
              Zufriedenheit: {entry.satisfactionLevel}/5
            </div>
          </div>
        )}

        {entry.gratitude && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Dankbarkeit:</h4>
            <p className="text-gray-600">{entry.gratitude}</p>
          </div>
        )}

        {entry.notes && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Notizen:</h4>
            <p className="text-gray-600">{entry.notes}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="fixed inset-y-0 right-0 w-full max-w-2xl bg-white shadow-lg">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Stresstagebuch</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          {!showNewEntry ? (
            <div className="mb-6">
              <button
                onClick={() => setShowNewEntry(true)}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Neuer Eintrag
              </button>
              <button
                className="w-full mt-2 py-2 px-4 text-sm text-gray-600 hover:text-gray-900 flex items-center justify-between transition-colors"
              >
                <div className="flex gap-4">
                  <span>Heute: {entrySummary.today} Einträge</span>
                  <span>•</span>
                  <span>Gesamt: {entrySummary.total} Einträge</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : !showDetailedForm ? (
            <div className="bg-white rounded-xl border p-6 mb-6">
              <div className="mb-6">
                <textarea
                  value={quickText}
                  onChange={(e) => setQuickText(e.target.value)}
                  placeholder="Wie geht es dir? Schreibe deine Gedanken nieder..."
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowDetailedForm(true);
                  }}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <List className="w-5 h-5" />
                  Detaillierter Eintrag
                </button>
                <button
                  onClick={handleSaveQuickEntry}
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Speichern
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border p-6 mb-6">
              <h3 className="text-lg font-semibold mb-6">Detaillierter Tagebucheintrag</h3>
              
              {/* Stress, Mood, and Energy Levels */}
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stresslevel (1-10): {newEntry.stressLevel}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={newEntry.stressLevel}
                    onChange={(e) => setNewEntry(prev => ({ ...prev, stressLevel: Number(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stimmung: {newEntry.mood}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={newEntry.mood}
                    onChange={(e) => setNewEntry(prev => ({ ...prev, mood: Number(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Energielevel: {newEntry.energyLevel}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={newEntry.energyLevel}
                    onChange={(e) => setNewEntry(prev => ({ ...prev, energyLevel: Number(e.target.value) }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Context */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ort
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {LOCATIONS.map(location => (
                      <button
                        key={location}
                        onClick={() => setNewEntry(prev => ({ ...prev, location }))}
                        className={`px-3 py-1 rounded-full text-sm ${
                          newEntry.location === location
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tageszeit
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TIMES_OF_DAY.map(time => (
                      <button
                        key={time}
                        onClick={() => setNewEntry(prev => ({ ...prev, timeOfDay: time }))}
                        className={`px-3 py-1 rounded-full text-sm ${
                          newEntry.timeOfDay === time
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Triggers */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Auslöser (Mehrfachauswahl möglich)
                </label>
                <div className="flex flex-wrap gap-2">
                  {TRIGGERS.map(trigger => (
                    <button
                      key={trigger}
                      onClick={() => setNewEntry(prev => ({
                        ...prev,
                        triggers: toggleSelection(prev.triggers || [], trigger)
                      }))}
                      className={`px-3 py-1 rounded-full text-sm ${
                        newEntry.triggers?.includes(trigger)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {trigger}
                    </button>
                  ))}
                </div>
              </div>

              {/* Physical Symptoms */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Körperliche Symptome (Mehrfachauswahl möglich)
                </label>
                <div className="flex flex-wrap gap-2">
                  {PHYSICAL_SYMPTOMS.map(symptom => (
                    <button
                      key={symptom}
                      onClick={() => setNewEntry(prev => ({
                        ...prev,
                        physicalSymptoms: toggleSelection(prev.physicalSymptoms || [], symptom)
                      }))}
                      className={`px-3 py-1 rounded-full text-sm ${
                        newEntry.physicalSymptoms?.includes(symptom)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              {/* Emotions */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gefühle (Mehrfachauswahl möglich)
                </label>
                <div className="flex flex-wrap gap-2">
                  {EMOTIONS.map(emotion => (
                    <button
                      key={emotion}
                      onClick={() => setNewEntry(prev => ({
                        ...prev,
                        emotions: toggleSelection(prev.emotions || [], emotion)
                      }))}
                      className={`px-3 py-1 rounded-full text-sm ${
                        newEntry.emotions?.includes(emotion)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {emotion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Thoughts */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gedanken
                </label>
                <textarea
                  value={newEntry.thoughts?.join('\n')}
                  onChange={(e) => setNewEntry(prev => ({
                    ...prev,
                    thoughts: e.target.value.split('\n').filter(t => t.trim())
                  }))}
                  placeholder="Welche Gedanken gehen dir durch den Kopf?"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>

              {/* Coping Strategies */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Angewendete Strategien (Mehrfachauswahl möglich)
                </label>
                <div className="flex flex-wrap gap-2">
                  {COPING_STRATEGIES.map(strategy => (
                    <button
                      key={strategy}
                      onClick={() => setNewEntry(prev => ({
                        ...prev,
                        copingStrategies: toggleSelection(prev.copingStrategies || [], strategy)
                      }))}
                      className={`px-3 py-1 rounded-full text-sm ${
                        newEntry.copingStrategies?.includes(strategy)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {strategy}
                    </button>
                  ))}
                </div>
              </div>

              {/* Strategy Effectiveness */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wie hilfreich waren die Strategien? (1-5): {newEntry.strategyEffectiveness}
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={newEntry.strategyEffectiveness}
                  onChange={(e) => setNewEntry(prev => ({ ...prev, strategyEffectiveness: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Satisfaction Level */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zufriedenheit mit dem Umgang (1-5): {newEntry.satisfactionLevel}
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={newEntry.satisfactionLevel}
                  onChange={(e) => setNewEntry(prev => ({ ...prev, satisfactionLevel: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Gratitude */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wofür bist du heute dankbar?
                </label>
                <textarea
                  value={newEntry.gratitude}
                  onChange={(e) => setNewEntry(prev => ({ ...prev, gratitude: e.target.value }))}
                  placeholder="Notiere einen positiven Moment oder etwas, das gut gelaufen ist..."
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={2}
                />
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weitere Notizen
                </label>
                <textarea
                  value={newEntry.notes}
                  onChange={(e) => setNewEntry(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Weitere Gedanken, Beobachtungen oder Erkenntnisse..."
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowNewEntry(false);
                    setShowDetailedForm(false);
                  }}
                  className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  onClick={handleSaveEntry}
                  className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Speichern
                </button>
              </div>
            </div>
          )}

          {/* Display entries */}
          <div className="space-y-6">
            {entries.map((entry) => renderEntry(entry))}
          </div>
        </div>
      </div>
    </div>
  );
}