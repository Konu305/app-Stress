import React, { useState } from 'react';
import { X, Clock, Activity, Heart, Play, ChevronRight, ChevronDown } from 'lucide-react';
import { 
  ExerciseRecommendationEngine, 
  LocationType, 
  ActivityMode,
  MoodType,
  MotivationLevel,
  StresscopingStyle,
  type UserAnswers as DatabaseUserAnswers,
  type Exercise as DatabaseExercise,
  type ExerciseConstraints
} from '../data/exerciseDatabase';
import EXERCISE_DATABASE from '../data/exerciseDatabase';
import { MoodTrackingService } from '../services/MoodTrackingService';

// Hilfsfunktionen für Kategorie-Anzeige
const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    'breathing': '🌬️',
    'meditation': '🧘',
    'movement': '🤸',
    'mindfulness': '🎯',
    'cognitive': '🧠',
    'relaxation': '😌',
    'emergency': '🚨',
    'sleep': '😴',
    'energy': '⚡',
    'social': '👥',
    'visualization': '🎨',
    'physical': '💪'
  };
  return icons[category] || '🔹';
};

const getCategoryName = (category: string): string => {
  const names: Record<string, string> = {
    'breathing': 'Atemübungen',
    'meditation': 'Meditation',
    'movement': 'Bewegung',
    'mindfulness': 'Achtsamkeit',
    'cognitive': 'Kognitive Techniken',
    'relaxation': 'Entspannung',
    'emergency': 'Notfall-Techniken',
    'sleep': 'Schlaf & Ruhe',
    'energy': 'Energie & Aktivierung',
    'social': 'Soziale Übungen',
    'visualization': 'Visualisierung',
    'physical': 'Körperliche Übungen'
  };
  return names[category] || category;
};

// Local types for the component
type UserAnswers = {
  stressLevel: number;
  timeAvailable: number;
  location: string;
  // Psychologische Faktoren als Hauptfragen
  mood: MoodType;
  motivation: MotivationLevel;
  mentalCapacity: number;
  physicalComfort: number;
  socialPreference: 'alone' | 'guided' | 'group';
  // Optional
  mode?: string;
};

// NEW Questions Configuration - Psychologische Faktoren als Hauptfragen
const QUESTIONS = [
  {
    id: 'stressLevel',
    title: 'Wie gestresst fühlst du dich gerade?',
    options: [
      { id: 1, label: 'Ruhig', emoji: '😌', value: 1 },
      { id: 2, label: 'Leicht gestresst', emoji: '😐', value: 3 },
      { id: 3, label: 'Angespannt', emoji: '😣', value: 6 },
      { id: 4, label: 'Überwältigt', emoji: '😱', value: 9 }
    ]
  },
  {
    id: 'timeAvailable',
    title: 'Wie viel Zeit hast du jetzt?',
    options: [
      { id: 1, label: '1-2 Min', emoji: '⏱️', value: 2 },
      { id: 2, label: '3-5 Min', emoji: '⏰', value: 5 },
      { id: 3, label: '5-10 Min', emoji: '🕐', value: 10 },
      { id: 4, label: '10+ Min', emoji: '⏳', value: 15 }
    ]
  },
  {
    id: 'location',
    title: 'Wo befindest du dich?',
    options: [
      { id: 'desk', label: 'Am Schreibtisch', emoji: '🪑', value: LocationType.DESK },
      { id: 'home', label: 'Zu Hause', emoji: '🛋️', value: LocationType.HOME },
      { id: 'outdoor', label: 'Draußen', emoji: '🚶', value: LocationType.OUTDOOR },
      { id: 'bed', label: 'Im Bett', emoji: '🛌', value: LocationType.BED }
    ]
  },
  {
    id: 'mood',
    title: 'Wie ist deine aktuelle Stimmung?',
    options: [
      { id: 'very_bad', label: 'Sehr schlecht', emoji: '😢', value: MoodType.VERY_BAD },
      { id: 'bad', label: 'Schlecht', emoji: '😟', value: MoodType.BAD },
      { id: 'neutral', label: 'Neutral', emoji: '😐', value: MoodType.NEUTRAL },
      { id: 'good', label: 'Gut', emoji: '🙂', value: MoodType.GOOD },
      { id: 'very_good', label: 'Sehr gut', emoji: '😊', value: MoodType.VERY_GOOD }
    ]
  },
  {
    id: 'motivation',
    title: 'Wie motiviert fühlst du dich für eine Übung?',
    options: [
      { id: 1, label: 'Sehr niedrig', emoji: '😴', value: MotivationLevel.VERY_LOW },
      { id: 2, label: 'Niedrig', emoji: '😑', value: MotivationLevel.LOW },
      { id: 3, label: 'Mittel', emoji: '😊', value: MotivationLevel.MEDIUM },
      { id: 4, label: 'Hoch', emoji: '💪', value: MotivationLevel.HIGH },
      { id: 5, label: 'Sehr hoch', emoji: '🔥', value: MotivationLevel.VERY_HIGH }
    ]
  },
  {
    id: 'mentalCapacity',
    title: 'Wie ist deine geistige Kapazität gerade?',
    isSlider: true,
    min: 1,
    max: 10,
    labels: ['Sehr müde', 'Sehr fokussiert'],
    description: 'Bewerte deine Konzentrationsfähigkeit'
  },
  {
    id: 'physicalComfort',
    title: 'Wie ist dein körperliches Wohlbefinden?',
    isSlider: true,
    min: 1,
    max: 10,
    labels: ['Unwohl', 'Sehr wohl'],
    description: 'Bewerte dein körperliches Komfort-Level'
  },
  {
    id: 'socialPreference',
    title: 'Wie möchtest du die Übung durchführen?',
    options: [
      { id: 'alone', label: 'Alleine', emoji: '🧘‍♀️', value: 'alone' },
      { id: 'guided', label: 'Geführt', emoji: '🎧', value: 'guided' },
      { id: 'group', label: 'In Gruppe', emoji: '👥', value: 'group' }
    ]
  }
];

interface ExerciseFinderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExerciseFinder({ isOpen, onClose }: ExerciseFinderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<UserAnswers>>({});
  const [suggestedExercise, setSuggestedExercise] = useState<DatabaseExercise | null>(null);
  const [matchReasons, setMatchReasons] = useState<string[]>([]);
  const [alternativeCount, setAlternativeCount] = useState(0);
  const [showAllExercises, setShowAllExercises] = useState(false);
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  
  // Optional activity mode preference
  const [showActivityPreference, setShowActivityPreference] = useState(false);
  const [activityMode, setActivityMode] = useState<ActivityMode | undefined>(undefined);

  // Load previous exercises from localStorage
  const getPreviousExercises = (): string[] => {
    try {
      const stored = localStorage.getItem('previousExercises');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  // Save exercise to localStorage 
  const saveExerciseToHistory = (exerciseId: string) => {
    const previous = getPreviousExercises();
    const updated = [exerciseId, ...previous.filter(id => id !== exerciseId)].slice(0, 10); // Keep last 10
    localStorage.setItem('previousExercises', JSON.stringify(updated));
  };

  const handleAnswer = (questionId: string, value: any) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    console.log('📝 Question answered:', {
      questionId,
      value,
      currentStep,
      totalQuestions: QUESTIONS.length,
      newAnswers,
      isLastQuestion: currentStep >= QUESTIONS.length - 1
    });

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('🎯 Finding matching exercise...');
      // Find matching exercise using the intelligent engine
      const exercise = findMatchingExercise(newAnswers as UserAnswers);
      console.log('✅ Exercise found:', exercise);
      setSuggestedExercise(exercise.exercise);
      setMatchReasons(exercise.reasons);
      setCurrentStep(QUESTIONS.length);
      console.log('🔄 State updated - moving to results screen');
    }
  };

  const handleSliderAnswer = (questionId: string, value: number) => {
    handleAnswer(questionId, value);
  };

  const findMatchingExercise = (userAnswers: UserAnswers) => {
    // Convert local UserAnswers to database UserAnswers format
    const databaseAnswers: DatabaseUserAnswers = {
      stressLevel: userAnswers.stressLevel,
      timeAvailable: userAnswers.timeAvailable,
      location: userAnswers.location as LocationType,
      mode: (activityMode || ActivityMode.ANY) as ActivityMode, // Fallback to ANY if not selected
      previousExercises: getPreviousExercises(),
      
      // Psychologische Faktoren als Hauptfaktoren
      mood: userAnswers.mood,
      motivation: userAnswers.motivation,
      mentalCapacity: userAnswers.mentalCapacity,
      physicalComfort: userAnswers.physicalComfort,
      socialPreference: userAnswers.socialPreference
    };

    // Get MORE matches for better variety (erhöht von 3 auf 8)
    const matches = ExerciseRecommendationEngine.findBestMatches(databaseAnswers, 8);
    
    console.log('🔍 Exercise matching debug:', {
      userAnswers: databaseAnswers,
      totalExercisesFound: matches.length,
      topMatches: matches.map(m => ({
        name: m.exercise.name,
        score: m.score.toFixed(2),
        reasons: m.reasons
      })),
      previousExercises: databaseAnswers.previousExercises
    });
    
    if (matches.length > 0) {
      // VERBESSERTE Variety-Logik: Größerer Score-Bereich für Randomisierung
      const topScore = matches[0].score;
      const similarMatches = matches.filter(match => match.score >= topScore - 0.25); // Erweitert von 0.1 auf 0.25
      
      // Zusätzliche Variety-Filterung: Vermeide kürzlich verwendete Kategorien
      const previousExercises = databaseAnswers.previousExercises || [];
      const recentCategories = previousExercises.slice(0, 3).map(id => {
        const exercise = matches.find(m => m.exercise.id === id);
        return exercise?.exercise.category;
      }).filter(Boolean);
      
      // NEUER: Variety-Score-Boost für unbenutzte Übungen
      const varietyBoostedMatches = similarMatches.map(match => {
        let varietyBoost = 0;
        
        // Große Strafe für kürzlich verwendete Übungen
        if (previousExercises.includes(match.exercise.id)) {
          const position = previousExercises.indexOf(match.exercise.id);
          varietyBoost = position === 0 ? -0.5 : -0.2; // Letzte Übung = große Strafe
        } else {
          varietyBoost = 0.3; // Bonus für nicht verwendete Übungen
        }
        
        // Bonus für neue Kategorien
        if (!recentCategories.includes(match.exercise.category)) {
          varietyBoost += 0.2;
        }
        
        return {
          ...match,
          adjustedScore: match.score + varietyBoost
        };
      });
      
      // Sortiere nach adjustedScore
      varietyBoostedMatches.sort((a, b) => b.adjustedScore - a.adjustedScore);
      
      // Bevorzuge Übungen aus neuen Kategorien
      const newCategoryMatches = varietyBoostedMatches.filter(match => 
        !recentCategories.includes(match.exercise.category)
      );
      
      let selectedMatch;
      if (newCategoryMatches.length > 0) {
        // Wähle aus neuen Kategorien
        const randomIndex = Math.floor(Math.random() * Math.min(3, newCategoryMatches.length)); // Top 3
        selectedMatch = newCategoryMatches[randomIndex];
        console.log(`🎲 New category selection: ${newCategoryMatches.length} new category matches, selected #${randomIndex + 1} (${selectedMatch.exercise.name})`);
      } else if (varietyBoostedMatches.length > 1) {
        // Fallback: Zufällige Auswahl aus variety-boosted matches
        const randomIndex = Math.floor(Math.random() * Math.min(3, varietyBoostedMatches.length)); // Top 3
        selectedMatch = varietyBoostedMatches[randomIndex];
        console.log(`🎲 Variety selection: ${varietyBoostedMatches.length} variety matches, selected #${randomIndex + 1} (${selectedMatch.exercise.name})`);
      } else {
        selectedMatch = matches[0];
        console.log(`🎯 Clear winner: ${selectedMatch.exercise.name} with score ${selectedMatch.score.toFixed(2)}`);
      }
      
      // Save to history for future variety
      saveExerciseToHistory(selectedMatch.exercise.id);
      
      return selectedMatch;
    }
    
    // Fallback shouldn't happen with the new system, but just in case
    return {
      exercise: {
        id: 'fallback',
        name: 'Einfache Atemübung',
        icon: '🌬️',
        description: 'Eine einfache Atemübung für jede Situation',
        instructions: [
          'Atme langsam und tief',
          'Konzentriere dich auf deinen Atem',
          'Wiederhole für ein paar Minuten'
        ],
        benefits: ['Beruhigt das Nervensystem']
      } as DatabaseExercise,
      reasons: ['Universell einsetzbar'],
      score: 0.5,
      matchFactors: {
        timeMatch: 0.5,
        locationMatch: 0.5,
        modeMatch: 0.5,
        stressMatch: 0.5,
        emotionMatch: 0.5,
        popularityBonus: 0,
        varietyBonus: 0,
        motivationMatch: 0.5,
        moodMatch: 0.5,
        capacityMatch: 0.5,
        copingStyleMatch: 0.5,
        socialMatch: 0.5
      }
    };
  };

  const findAlternativeExercise = () => {
    setAlternativeCount(prev => prev + 1);
    
    // Temporär die aktuelle Übung zur Historie hinzufügen für echte Alternativen
    const currentExerciseId = suggestedExercise?.id;
    const originalPreviousExercises = getPreviousExercises();
    
    if (currentExerciseId) {
      // Füge aktuelle Übung temporär zur Historie hinzu
      const tempHistory = [currentExerciseId, ...originalPreviousExercises];
      localStorage.setItem('previousExercises', JSON.stringify(tempHistory));
    }
    
    const exercise = findMatchingExercise(answers as UserAnswers);
    setSuggestedExercise(exercise.exercise);
    setMatchReasons(exercise.reasons);
    
    // Stelle die ursprüngliche Historie wieder her
    localStorage.setItem('previousExercises', JSON.stringify(originalPreviousExercises));
  };

  const resetFinder = () => {
    setCurrentStep(0);
    setAnswers({});
    setSuggestedExercise(null);
    setMatchReasons([]);
    setAlternativeCount(0);
    setShowActivityPreference(false);
    setActivityMode(undefined);
    setShowAllExercises(false);
    setExpandedExercise(null);
  };

  const completeExercise = (exerciseId: string, completed: boolean, rating?: number) => {
    // Save mood entry with all psychological factors
    MoodTrackingService.saveEntry({
      date: new Date().toISOString().split('T')[0],
      stressLevel: answers.stressLevel || 5,
      mood: answers.mood,
      motivation: answers.motivation,
      mentalCapacity: answers.mentalCapacity,
      physicalComfort: answers.physicalComfort,
      socialPreference: answers.socialPreference,
      exerciseId,
      exerciseCompleted: completed,
      exerciseRating: rating
    });
    
    // Close the finder
    onClose();
  };

  const handleClose = () => {
    resetFinder();
    onClose();
  };

  if (!isOpen) return null;

  const currentQuestion = QUESTIONS[currentStep];
  const isCompleted = currentStep >= QUESTIONS.length;

  console.log('🖥️ Render state:', {
    currentStep,
    totalQuestions: QUESTIONS.length,
    isCompleted,
    suggestedExercise: suggestedExercise ? suggestedExercise.name : 'null',
    answersCount: Object.keys(answers).length
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold">Übungsfinder</h2>
            <span className="text-sm text-blue-600 font-medium">Beta Phase</span>
          </div>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {!isCompleted ? (
            <>
              {/* Progress indicator */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Schritt {currentStep + 1} von {QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">{currentQuestion.title}</h3>
                
                {currentQuestion.isSlider ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {answers[currentQuestion.id as keyof UserAnswers] || 5}
                      </span>
                      <span className="text-gray-500">/10</span>
                    </div>
                    <input
                      type="range"
                      min={currentQuestion.min}
                      max={currentQuestion.max}
                      value={answers[currentQuestion.id as keyof UserAnswers] as number || 5}
                      onChange={(e) => setAnswers({...answers, [currentQuestion.id]: Number(e.target.value)})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{currentQuestion.labels?.[0]}</span>
                      <span>{currentQuestion.labels?.[1]}</span>
                    </div>
                    {currentQuestion.description && (
                      <p className="text-sm text-gray-600 text-center">{currentQuestion.description}</p>
                    )}
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => handleSliderAnswer(currentQuestion.id, answers[currentQuestion.id as keyof UserAnswers] as number || 5)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        Weiter <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(currentQuestion.id, option.value)}
                        className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{option.emoji}</span>
                          <span className="font-medium">{option.label}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Results */}
              {suggestedExercise ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{suggestedExercise.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{suggestedExercise.name}</h3>
                    <p className="text-gray-600 mb-4">{suggestedExercise.shortDescription || suggestedExercise.description}</p>
                  </div>

                  {/* NEUE: Schritt-für-Schritt Anleitung */}
                  {suggestedExercise.instructions && suggestedExercise.instructions.length > 0 && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-3 flex items-center gap-2">
                        <span className="text-lg">📋</span>
                        So geht's:
                      </h4>
                      <ol className="text-sm text-green-700 space-y-2">
                        {suggestedExercise.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Why this exercise */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Warum diese Übung?</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {matchReasons.map((reason, index) => (
                        <li key={index}>• {reason}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => completeExercise(suggestedExercise.id, true)}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Play className="h-4 w-4" />
                      Übung starten
                    </button>
                    <button
                      onClick={findAlternativeExercise}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Alternative
                    </button>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => completeExercise(suggestedExercise.id, false)}
                      className="flex-1 text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors"
                    >
                      Nicht jetzt
                    </button>
                    <button
                      onClick={resetFinder}
                      className="flex-1 text-blue-600 py-2 text-sm hover:text-blue-800 transition-colors"
                    >
                      Neu starten
                    </button>
                  </div>

                  {/* NEUER: Alle Übungen anzeigen Button */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setShowAllExercises(true)}
                      className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      📚 Alle {EXERCISE_DATABASE.length} Übungen anzeigen
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-4xl">⚠️</div>
                  <h3 className="text-xl font-semibold">Keine Übung gefunden</h3>
                  <p className="text-gray-600">
                    Es konnte keine passende Übung gefunden werden. Das sollte nicht passieren.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg text-left">
                    <h4 className="font-medium text-yellow-800 mb-2">Debug-Informationen:</h4>
                    <pre className="text-xs text-yellow-700 overflow-auto">
                      {JSON.stringify({ 
                        currentStep,
                        totalQuestions: QUESTIONS.length,
                        answers,
                        isCompleted 
                      }, null, 2)}
                    </pre>
                  </div>
                  <button
                    onClick={resetFinder}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Neu starten
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* NEUE: Alle Übungen Modal */}
      {showAllExercises && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold">Alle {EXERCISE_DATABASE.length} Übungen</h2>
              <button 
                onClick={() => setShowAllExercises(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {/* Kategorien gruppiert anzeigen */}
              {Object.entries(
                EXERCISE_DATABASE.reduce((groups, exercise) => {
                  const category = exercise.category;
                  if (!groups[category]) groups[category] = [];
                  groups[category].push(exercise);
                  return groups;
                }, {} as Record<string, DatabaseExercise[]>)
              ).map(([category, exercises]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 capitalize flex items-center gap-2">
                    {getCategoryIcon(category)} {getCategoryName(category)} 
                    <span className="text-sm text-gray-500 font-normal">({exercises.length})</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {exercises.map((exercise) => (
                      <div key={exercise.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{exercise.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm mb-1 line-clamp-2">{exercise.name}</h4>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">{exercise.shortDescription || exercise.description}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              <span>{exercise.minTime}-{exercise.maxTime} Min</span>
                              <span className="text-blue-600">●</span>
                              <span>{exercise.effectiveness}% Wirksamkeit</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {exercise.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                                  {tag}
                                </span>
                              ))}
                              {exercise.tags.length > 2 && (
                                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                                  +{exercise.tags.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => setExpandedExercise(expandedExercise === exercise.id ? null : exercise.id)}
                            className="text-gray-400 hover:text-gray-600 p-1"
                            title="Anleitung anzeigen"
                          >
                            {expandedExercise === exercise.id ? 
                              <ChevronDown className="h-4 w-4" /> : 
                              <ChevronRight className="h-4 w-4" />
                            }
                          </button>
                        </div>
                        
                        {/* Erweiterte Anleitung */}
                        {expandedExercise === exercise.id && exercise.instructions && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <h5 className="font-medium text-xs text-gray-800 mb-2 flex items-center gap-1">
                              <span>📋</span>
                              Anleitung:
                            </h5>
                            <ol className="text-xs text-gray-600 space-y-1">
                              {exercise.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="bg-gray-200 text-gray-700 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span className="text-xs leading-relaxed">{instruction}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}
                        
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => {
                              setSuggestedExercise(exercise);
                              setMatchReasons(['Manuell ausgewählt']);
                              setShowAllExercises(false);
                            }}
                            className="flex-1 bg-blue-50 text-blue-700 py-2 px-3 rounded text-sm hover:bg-blue-100 transition-colors"
                          >
                            Diese Übung wählen
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 