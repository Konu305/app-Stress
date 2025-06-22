// Exercise Database - Skalierbar für 100+ Übungen
export interface ExerciseConstraints {
  requiresPrivacy: boolean;          // Braucht private Umgebung
  requiresPhysicalSpace: boolean;    // Braucht Platz zum Bewegen
  requiresQuiet: boolean;            // Braucht ruhige Umgebung
  requiresItems: string[];           // Benötigte Gegenstände
  forbiddenInPublic: boolean;        // Nicht in der Öffentlichkeit
  needsHandsFree: boolean;           // Braucht beide Hände frei
  requiresLyingDown: boolean;        // Muss liegen
  requiresStanding: boolean;         // Muss stehen
  makesNoise: boolean;               // Macht Geräusche
  requiresUndressing: boolean;       // Kleidung ausziehen nötig
  requiresEyesClosed: boolean;       // Augen schließen nötig
  requiresWriting: boolean;          // Schreibmaterial nötig
}

export interface Exercise {
  id: string;
  name: string;
  icon: string;
  category: ExerciseCategory;
  subcategory?: string;
  
  // Zeit & Ort
  minTime: number;
  maxTime: number;
  locations: LocationType[];
  
  // Aktivität & Schwierigkeit
  modes: ActivityMode[];
  difficulty: DifficultyLevel;
  energyLevel: EnergyLevel;
  
  // Stress & Emotion
  stressRange: [number, number]; // 1-10 Skala
  targetEmotions: EmotionType[];
  situations: SituationType[];
  
  // NEUE: Physische und soziale Einschränkungen
  constraints: ExerciseConstraints;
  
  // Content
  description: string;
  shortDescription: string;
  instructions: string[];
  benefits: string[];
  tips?: string[];
  
  // Metadata
  tags: string[];
  popularity: number; // 0-100
  effectiveness: number; // 0-100 basierend auf User-Feedback
  lastUpdated: string;
  audioUrl?: string;
  videoUrl?: string;
  duration?: number; // falls abweichend von min/maxTime
}

// Kategorien System
export enum ExerciseCategory {
  BREATHING = 'breathing',
  MEDITATION = 'meditation', 
  MOVEMENT = 'movement',
  MINDFULNESS = 'mindfulness',
  COGNITIVE = 'cognitive',
  RELAXATION = 'relaxation',
  EMERGENCY = 'emergency',
  SLEEP = 'sleep',
  ENERGY = 'energy',
  SOCIAL = 'social',
  VISUALIZATION = 'visualization',
  PHYSICAL = 'physical'
}

export enum LocationType {
  DESK = 'desk',
  HOME = 'home',
  OUTDOOR = 'outdoor',
  BED = 'bed',
  PUBLIC = 'public',
  CAR = 'car',
  ANY = 'any',
  WORK = 'work',
  SOCIAL = 'social'
}

export enum ActivityMode {
  PASSIVE = 'passive',
  ACTIVE = 'active',
  AUDIO = 'audio',
  WRITING = 'writing',
  VISUALIZATION = 'visualization',
  PHYSICAL = 'physical',
  MENTAL = 'mental',
  ANY = 'any'
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced'
}

export enum EnergyLevel {
  LOW = 'low',        // Müde, erschöpft
  MEDIUM = 'medium',  // Normal
  HIGH = 'high',      // Energiegeladen
  MIXED = 'mixed'     // Funktioniert bei allen Levels
}

export enum EmotionType {
  STRESS = 'stress',
  ANXIETY = 'anxiety',
  ANGER = 'anger',
  SADNESS = 'sadness',
  OVERWHELM = 'overwhelm',
  RESTLESSNESS = 'restlessness',
  FRUSTRATION = 'frustration',
  FEAR = 'fear',
  LONELINESS = 'loneliness',
  CALM = 'calm'
}

export enum SituationType {
  WORK = 'work',
  HOME = 'home',
  COMMUTE = 'commute',
  SOCIAL = 'social',
  BEFORE_SLEEP = 'before_sleep',
  MORNING = 'morning',
  BREAK = 'break',
  CRISIS = 'crisis',
  PREVENTION = 'prevention',
  PUBLIC = 'public'
}

// NEUE: Psychologische Faktoren
export enum MoodType {
  VERY_BAD = 'very_bad',      // 1-2: Sehr schlecht
  BAD = 'bad',                // 3-4: Schlecht  
  NEUTRAL = 'neutral',        // 5-6: Neutral
  GOOD = 'good',              // 7-8: Gut
  VERY_GOOD = 'very_good'     // 9-10: Sehr gut
}

export enum MotivationLevel {
  VERY_LOW = 1,    // 1-2: Sehr niedrig
  LOW = 3,         // 3-4: Niedrig
  MEDIUM = 5,      // 5-6: Mittel
  HIGH = 7,        // 7-8: Hoch
  VERY_HIGH = 9    // 9-10: Sehr hoch
}

export enum StresscopingStyle {
  ACTIVE = 'active',           // Aktive Problemlösung
  AVOIDANT = 'avoidant',      // Vermeidung
  EMOTIONAL = 'emotional',     // Emotionsfokussiert
  SOCIAL = 'social',          // Sozialer Support
  COGNITIVE = 'cognitive'      // Kognitive Umstrukturierung
}

// User Preferences Interface
export interface UserAnswers {
  stressLevel: number;
  timeAvailable: number;
  location: LocationType;
  mode: ActivityMode;
  currentEmotion?: EmotionType;
  energyLevel?: EnergyLevel;
  situation?: SituationType;
  
  // NEUE: Psychologische Faktoren
  mood?: MoodType;                    // Allgemeine Stimmungslage
  motivation?: MotivationLevel;       // Motivation 1-10
  mentalCapacity?: number;            // Geistige Kapazität 1-10
  physicalComfort?: number;           // Körperliches Wohlbefinden 1-10
  socialPreference?: 'alone' | 'guided' | 'group';  // Soziale Präferenz
  copingStyle?: StresscopingStyle;    // Bevorzugter Bewältigungsstil
  
  previousExercises?: string[]; // IDs der letzten Übungen
  preferences?: {
    avoidCategories?: ExerciseCategory[];
    favoriteCategories?: ExerciseCategory[];
    maxDifficulty?: DifficultyLevel;
    // NEUE: Erweiterte Präferenzen
    preferredInstructionStyle?: 'detailed' | 'simple' | 'minimal';
    needsEncouragement?: boolean;      // Braucht Ermutigung
    avoidsPhysical?: boolean;          // Vermeidet körperliche Übungen
    prefersStructured?: boolean;       // Bevorzugt strukturierte Anleitung
  };
}

// Scoring System für intelligente Empfehlungen
export interface ExerciseScore {
  exercise: Exercise;
  score: number;
  reasons: string[];
  matchFactors: {
    timeMatch: number;
    locationMatch: number;
    modeMatch: number;
    stressMatch: number;
    emotionMatch: number;
    popularityBonus: number;
    varietyBonus: number;
    // NEUE: Psychologische Matching-Faktoren
    motivationMatch: number;     // Passt zur aktuellen Motivation
    moodMatch: number;           // Passt zur Stimmung
    capacityMatch: number;       // Passt zur geistigen/körperlichen Kapazität
    copingStyleMatch: number;    // Passt zum Bewältigungsstil
    socialMatch: number;         // Passt zur sozialen Präferenz
  };
}

// NEUE COMPREHENSIVE EXERCISE DATABASE - 100 Übungen
export const EXERCISE_DATABASE: Exercise[] = [
  
  // ===== LEVEL 1: NOTFALL-TECHNIKEN (1-2 MIN) - 10 ÜBUNGEN =====
  
  {
    id: 'physiological-sigh',
    name: 'Physiologischer Seufzer',
    icon: '💨',
    category: ExerciseCategory.BREATHING,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [7, 10],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.FEAR, EmotionType.OVERWHELM],
    situations: [SituationType.CRISIS, SituationType.WORK, SituationType.SOCIAL],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Zwei schnelle tiefe Einatemzüge durch die Nase, gefolgt von langsamem Ausatmen. Diese Technik nach Huberman unterbricht das Fight-or-Flight-Signal im Gehirn.',
    shortDescription: 'Soforthilfe gegen akute Angst',
    instructions: [
      'Atme zwei Mal schnell und tief durch die Nase ein',
      'Atme langsam und kontrolliert durch den Mund aus',
      'Wiederhole 2-3 Mal',
      'Spüre die sofortige Beruhigung'
    ],
    benefits: [
      'Unterbricht Fight-or-Flight-Signal',
      'Senkt akute Angst messbar',
      'Funktioniert überall diskret',
      'Wissenschaftlich belegt'
    ],
    tips: ['Besonders effektiv bei Panikattacken', 'Kann auch präventiv genutzt werden'],
    tags: ['huberman', 'notfall', 'angst', 'diskret'],
    popularity: 95,
    effectiveness: 92,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'grounding-5-4-3-2-1',
    name: '5-4-3-2-1 Erdungsübung',
    icon: '🌍',
    category: ExerciseCategory.MINDFULNESS,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.ANY],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [6, 10],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.OVERWHELM, EmotionType.FEAR],
    situations: [SituationType.CRISIS, SituationType.WORK, SituationType.PUBLIC],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Achtsame Sinnesübung: 5 Dinge sehen, 4 fühlen, 3 hören, 2 riechen, 1 schmecken. Aktiviert das parasympathische Nervensystem.',
    shortDescription: 'Erdung durch alle Sinne',
    instructions: [
      'Benenne 5 Dinge, die du siehst',
      'Benenne 4 Dinge, die du fühlst/berührst',
      'Benenne 3 Dinge, die du hörst',
      'Benenne 2 Dinge, die du riechst',
      'Benenne 1 Ding, das du schmeckst'
    ],
    benefits: [
      'Lenkt von innerem Stressor ab',
      'Aktiviert parasympathisches Nervensystem',
      'Bringt ins Hier und Jetzt',
      'Reduziert Panik messbar'
    ],
    tags: ['erdung', 'sinne', 'achtsamkeit', 'panik'],
    popularity: 90,
    effectiveness: 88,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'butterfly-hug',
    name: 'Schmetterlingsumarmung',
    icon: '🦋',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [7, 10],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.OVERWHELM, EmotionType.FEAR],
    situations: [SituationType.CRISIS, SituationType.HOME],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Arme vor der Brust überkreuzen und abwechselnd sanft auf die Schultern klopfen. Bilaterale Stimulation aus der EMDR-Therapie.',
    shortDescription: 'Beruhigung durch bilaterale Stimulation',
    instructions: [
      'Überkreuze die Arme vor der Brust',
      'Lege die Hände auf die gegenüberliegenden Schultern',
      'Klopfe abwechselnd sanft auf beide Schultern',
      'Atme dabei ruhig und tief',
      'Führe 1-2 Minuten durch'
    ],
    benefits: [
      'Beruhigt intensive Stressreaktionen',
      'Bilaterale Stimulation wie EMDR',
      'Reduziert Angst wissenschaftlich belegt',
      'Holt aus Alarmbereitschaft'
    ],
    tags: ['emdr', 'bilaterale-stimulation', 'beruhigung', 'trauma'],
    popularity: 75,
    effectiveness: 85,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'cold-stimulus',
    name: 'Kältereiz',
    icon: '🧊',
    category: ExerciseCategory.PHYSICAL,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.HOME, LocationType.DESK],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [7, 10],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.OVERWHELM, EmotionType.FEAR],
    situations: [SituationType.CRISIS, SituationType.HOME],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Kaltes Wasser'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Kaltes Wasser über das Gesicht oder Handgelenke. Stimuliert den Vagusnerv und dämpft die akute Stressreaktion.',
    shortDescription: 'Sofortige Beruhigung durch Kälte',
    instructions: [
      'Lass kaltes Wasser über dein Gesicht laufen',
      'Oder tauche die Handgelenke in kaltes Wasser',
      'Alternativ: Eiswürfel auf die Handgelenke',
      'Atme dabei tief durch',
      '30-60 Sekunden genügen'
    ],
    benefits: [
      'Stimuliert Vagusnerv',
      'Senkt Herzrate sofort',
      'Unterbricht Fight-or-Flight',
      'Notfalltherapie-Technik'
    ],
    tips: ['Bei Panikattacken besonders wirksam', 'Nicht bei Herzproblemen anwenden'],
    tags: ['vagusnerv', 'kälte', 'herzrate', 'panik'],
    popularity: 70,
    effectiveness: 90,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'tense-release',
    name: 'Anspannen & Loslassen',
    icon: '💪',
    category: ExerciseCategory.RELAXATION,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [6, 10],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY],
    situations: [SituationType.CRISIS, SituationType.WORK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Für einige Sekunden alle Muskeln des Körpers kräftig anspannen und dann abrupt entspannen. Dieses Mini-PMR lässt den Unterschied zwischen Spannung und Entspannung bewusst spüren.',
    shortDescription: 'Spannung und Entspannung bewusst erleben',
    instructions: [
      'Spanne alle Muskeln des Körpers kräftig an',
      'Halte die Spannung für einige Sekunden',
      'Lasse die Spannung abrupt los',
      'Wiederhole 1-2 Mal'
    ],
    benefits: [
      'Reduziert muskuläre Anspannung',
      'Fördert Entspannung',
      'Kann überall durchgeführt werden'
    ],
    tags: ['pmr', 'entspannung', 'notfall'],
    popularity: 85,
    effectiveness: 90,
    lastUpdated: '2024-01-15'
  },

  {
    id: '4-7-8-breathing',
    name: '4-7-8-Atemtechnik',
    icon: '🧘',
    category: ExerciseCategory.BREATHING,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [6, 10],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.CRISIS, SituationType.BEFORE_SLEEP],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: '4 Sekunden durch die Nase einatmen, 7 Sekunden die Luft anhalten, dann 8 Sekunden durch den Mund langsam ausatmen. Diese Technik kann Herzschlag und Blutdruck senken.',
    shortDescription: 'Beruhigende Atemtechnik',
    instructions: [
      'Atme 4 Sekunden durch die Nase ein',
      'Halte die Luft für 7 Sekunden an',
      'Atme 8 Sekunden durch den Mund aus',
      'Wiederhole 4 Atemzüge'
    ],
    benefits: [
      'Senkt Herzschlag und Blutdruck',
      'Mindert akute Anspannung',
      'Ideal vor dem Schlafengehen'
    ],
    tags: ['atemtechnik', 'entspannung', 'notfall'],
    popularity: 88,
    effectiveness: 91,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'calming-self-talk',
    name: 'Beruhigendes Selbstgespräch',
    icon: '💭',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.ANY],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [6, 10],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.FEAR, EmotionType.OVERWHELM],
    situations: [SituationType.CRISIS, SituationType.WORK, SituationType.SOCIAL],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Sich selbst innerlich mit rationalen, tröstenden Worten ansprechen. Durchbricht stressverschärfende Gedankenspiralen.',
    shortDescription: 'Innere Beruhigung durch Worte',
    instructions: [
      'Sprich dich innerlich mit deinem Namen an',
      'Sage dir: "Du schaffst das, es geht vorüber"',
      'Verwende beruhigende Worte wie "Sicherheit", "Ruhe"',
      'Erinnere dich: "Das ist temporär"',
      'Atme dabei ruhig'
    ],
    benefits: [
      'Durchbricht Gedankenspiralen',
      'Senkt gefühlte Bedrohung',
      'Coping-Statements aus CBT',
      'Stärkt Selbstwirksamkeit'
    ],
    tags: ['cbt', 'selbstgespräch', 'coping', 'gedanken'],
    popularity: 82,
    effectiveness: 78,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'quick-stretch-power-pose',
    name: 'Kurzstretching & Power-Pose',
    icon: '🤸',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.HOME, LocationType.DESK],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.WORK, SituationType.BREAK, SituationType.HOME],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Schulterkreisen, Nacken dehnen, Arme nach oben strecken. Körperhaltung beeinflusst die Gefühlslage positiv.',
    shortDescription: 'Körper durchbewegen für mentale Klarheit',
    instructions: [
      'Kreise die Schultern 5 Mal rückwärts',
      'Dehne den Nacken vorsichtig zur Seite',
      'Strecke beide Arme weit nach oben',
      'Nimm eine aufrechte "Power"-Pose ein',
      'Halte 30 Sekunden'
    ],
    benefits: [
      'Löst Muskelspannung',
      'Power-Pose stärkt Selbstvertrauen',
      'Verbessert Körperhaltung',
      'Schnelle Aktivierung'
    ],
    tags: ['power-pose', 'stretching', 'körperhaltung', 'selbstvertrauen'],
    popularity: 78,
    effectiveness: 82,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'sensory-distraction',
    name: 'Sinnes-Ablenkung',
    icon: '👃',
    category: ExerciseCategory.MINDFULNESS,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [5, 9],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.CRISIS, SituationType.WORK, SituationType.COMMUTE],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Pfefferminzbonbon oder Lavendelöl'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Starken sensorischen Reiz setzen: Pfefferminzbonbon lutschen oder Lavendelöl riechen. Aktiviert andere Nervenbahnen.',
    shortDescription: 'Aussteigen durch Sinnesreiz',
    instructions: [
      'Lutsche langsam einen Pfefferminzbonbon',
      'Oder rieche an Lavendelöl',
      'Konzentriere dich voll auf den Sinnesreiz',
      'Lass andere Gedanken ziehen',
      'Genieße die Ablenkung 1-2 Minuten'
    ],
    benefits: [
      'Aktiviert andere Nervenbahnen',
      'Lavendel wirkt anxiolytisch',
      'Stoppt Gedankenkarussell',
      'Senkt Stressintensität'
    ],
    tips: ['Immer ein Pfefferminzbonbon dabei haben', 'Lavendelöl auf Taschentuch träufeln'],
    tags: ['lavendel', 'pfefferminz', 'sinne', 'ablenkung'],
    popularity: 72,
    effectiveness: 75,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'fresh-air-break',
    name: 'Frische-Luft-Pause',
    icon: '🌬️',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Notfall-Techniken',
    minTime: 1,
    maxTime: 2,
    locations: [LocationType.OUTDOOR],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [5, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.WORK, SituationType.BREAK, SituationType.CRISIS],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Sofort Ort wechseln: ans Fenster oder nach draußen, tiefe Atemzüge frischer Luft. Schafft mentale Distanz.',
    shortDescription: 'Tapetenwechsel für mentale Distanz',
    instructions: [
      'Verlasse sofort den aktuellen Ort',
      'Gehe ans offene Fenster oder nach draußen',
      'Atme 5-10 tiefe Atemzüge frischer Luft',
      'Schaue in die Ferne',
      'Spüre den Ortswechsel bewusst'
    ],
    benefits: [
      'Schafft mentale Distanz',
      'Senkt akuten Stresspegel',
      'Frische Luft belebt',
      'Einfacher Tapetenwechsel'
    ],
    tags: ['ortswechsel', 'frische-luft', 'distanz', 'spaziergang'],
    popularity: 85,
    effectiveness: 83,
    lastUpdated: '2024-01-15'
  },

  // ===== LEVEL 2: KURZZEIT-ENTSPANNUNG (3-5 MIN) - 20 ÜBUNGEN =====
  
  {
    id: 'box-breathing',
    name: 'Boxatmung (4-4-4-4)',
    icon: '📦',
    category: ExerciseCategory.BREATHING,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.WORK, SituationType.BREAK, SituationType.CRISIS],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Rhythmische Atemübung aus dem Navy-SEAL-Training: 4 Sekunden ein- und ausatmen, 4 Sekunden Pausen halten.',
    shortDescription: 'Militärische Atemtechnik für Klarheit',
    instructions: [
      'Atme 4 Sekunden aus (Startposition)',
      'Halte 4 Sekunden Atemleere',
      'Atme 4 Sekunden ein',
      'Halte 4 Sekunden Atemfülle',
      'Wiederhole 8-12 Zyklen'
    ],
    benefits: [
      'Reguliert Atmung und Nervensystem',
      'Bringt Kopf zur Ruhe',
      'Navy-SEAL bewährt',
      'Balance in Minuten'
    ],
    tags: ['navy-seal', 'rhythmus', 'klarheit', 'regulation'],
    popularity: 92,
    effectiveness: 91,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'alternate-nostril-breathing',
    name: 'Wechselatmung (Nadi Shodhana)',
    icon: '🧘',
    category: ExerciseCategory.BREATHING,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.HOME, LocationType.DESK],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.BREAK, SituationType.WORK, SituationType.HOME],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Yoga-Atemtechnik: Abwechselnd durch ein Nasenloch ein- und durch das andere ausatmen. Erhöht parasympathische Aktivität.',
    shortDescription: 'Ausgleichende Yoga-Atmung',
    instructions: [
      'Sitze aufrecht und entspannt',
      'Halte das rechte Nasenloch mit dem Daumen zu',
      'Atme durch das linke Nasenloch ein',
      'Wechsle: rechts öffnen, links zuhalten',
      'Atme durch das rechte Nasenloch aus',
      'Wiederhole 5-10 Zyklen'
    ],
    benefits: [
      'Erhöht parasympathische Aktivität',
      'Fördert ausgeglichenen Zustand',
      'Beruhigt das Nervensystem',
      'Yoga-Tradition bewährt'
    ],
    tips: ['Langsam und ohne Anstrengung', 'Bei Erkältung nicht durchführen'],
    tags: ['yoga', 'pranayama', 'ausgleich', 'parasympathisch'],
    popularity: 68,
    effectiveness: 82,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'bee-breath',
    name: 'Summende Bienenatmung',
    icon: '🐝',
    category: ExerciseCategory.BREATHING,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.HOME, LocationType.DESK],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.BREAK, SituationType.WORK],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Pranayama-Technik (Bhramari): Beim Ausatmen einen summenden Ton wie eine Biene erzeugen. Stimuliert den Vagusnerv.',
    shortDescription: 'Beruhigend summen wie eine Biene',
    instructions: [
      'Sitze bequem und schließe die Augen',
      'Atme normal ein',
      'Beim Ausatmen erzeuge einen summenden Ton',
      'Lasse das Summen im Kopf vibrieren',
      'Wiederhole 8-12 Atemzüge',
      'Spüre die Vibration nach'
    ],
    benefits: [
      'Stimuliert Vagusnerv',
      'Löst innere Spannung',
      'Vibration beruhigt',
      'Aus Yoga-Tradition'
    ],
    tags: ['pranayama', 'bhramari', 'vagusnerv', 'vibration'],
    popularity: 62,
    effectiveness: 80,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'short-pmr',
    name: 'Kurze Muskelrelaxation (PMR)',
    icon: '💆',
    category: ExerciseCategory.RELAXATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.DESK, LocationType.HOME],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY],
    situations: [SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Kompakte Progressive Muskelentspannung: Hauptmuskelgruppen nacheinander anspannen und lösen. Senkt nachweislich Kortisol.',
    shortDescription: 'Mini-PMR am Schreibtisch',
    instructions: [
      'Spanne Arme und Fäuste an (5 Sek)',
      'Entspanne und spüre den Unterschied',
      'Spanne Schultern und Nacken an',
      'Entspanne wieder bewusst',
      'Spanne Gesichtsmuskeln an',
      'Löse alle Spannung',
      'Spanne Beine an, dann entspannen'
    ],
    benefits: [
      'Senkt Kortisol messbar',
      'Reduziert Angst und Herzrate',
      'Ideal für Schreibtischpause',
      'Wissenschaftlich belegt'
    ],
    tags: ['pmr', 'muskelentspannung', 'kortisol', 'schreibtisch'],
    popularity: 88,
    effectiveness: 89,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'autogenic-basic',
    name: 'Autogenes Training - Grundstufe',
    icon: '🧠',
    category: ExerciseCategory.RELAXATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.HOME, LocationType.DESK],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY],
    situations: [SituationType.BREAK, SituationType.PREVENTION],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Autogene Entspannungssequenz mit Schwere- und Wärmeübung. Wissenschaftlich anerkannte Präventionsmethode.',
    shortDescription: 'Selbsthypnotische Entspannung',
    instructions: [
      'Sitze oder liege bequem',
      'Sage dir: "Mein rechter Arm ist schwer"',
      'Wiederhole für alle Gliedmaßen',
      'Sage dir: "Mein rechter Arm ist warm"',
      'Wiederhole für alle Gliedmaßen',
      'Spüre Schwere und Wärme nach'
    ],
    benefits: [
      'Wissenschaftlich anerkannt',
      'Signifikante Stressreduktion',
      'Präventive Wirkung',
      'Meta-Analysen bestätigt'
    ],
    tags: ['autogen', 'selbsthypnose', 'prävention', 'wissenschaftlich'],
    popularity: 75,
    effectiveness: 85,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'guided-imagery-short',
    name: 'Geführte Imaginationsübung',
    icon: '🏖️',
    category: ExerciseCategory.VISUALIZATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.HOME, LocationType.DESK],
    modes: [ActivityMode.VISUALIZATION, ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY],
    situations: [SituationType.BREAK, SituationType.PREVENTION],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Kurze Traumreise an einen sicheren Wohlfühlort. Aktiviert positive Sinnesbilder und reduziert Stress messbar.',
    shortDescription: 'Mentale Reise zum Wohlfühlort',
    instructions: [
      'Schließe die Augen und atme tief',
      'Stelle dir einen sicheren, schönen Ort vor',
      'Einen sonnigen Strand oder ruhigen Wald',
      'Nimm alle Sinne wahr: Sehen, Hören, Riechen',
      'Genieße das Gefühl von Sicherheit',
      'Kehre langsam zurück'
    ],
    benefits: [
      'Aktiviert positive Sinnesbilder',
      'Reduziert Stress nachweislich',
      'Vermindert negative Stimmungen',
      'Einfach und effektiv'
    ],
    tips: ['Apps bieten geführte Audios', 'Persönlichen Wohlfühlort wählen'],
    tags: ['imagination', 'traumreise', 'visualisierung', 'wohlfühlort'],
    popularity: 82,
    effectiveness: 84,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'mindful-breathing-observation',
    name: 'Achtsame Atembeobachtung',
    icon: '🌬️',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.BREAK, SituationType.WORK, SituationType.HOME],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Stille Meditation mit Fokus auf natürlichen Atemfluss. Kernübung der MBSR, erhöht nachweislich Stresstoleranz.',
    shortDescription: 'MBSR-Grundübung zur Beruhigung',
    instructions: [
      'Schließe die Augen und sitze bequem',
      'Lass den Atem natürlich fließen',
      'Richte alle Aufmerksamkeit aufs Atmen',
      'Beobachte Ein- und Ausatmen',
      'Kehre bei Gedanken zum Atem zurück',
      'Bleibe 5 Minuten dabei'
    ],
    benefits: [
      'MBSR-Kernübung',
      'Hoch wirksam gegen Stress',
      'Erhöht Stresstoleranz',
      'Wissenschaftlich fundiert'
    ],
    tags: ['mbsr', 'achtsamkeit', 'meditation', 'atembeobachtung'],
    popularity: 90,
    effectiveness: 91,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'breathing-space-3min',
    name: '3-Minuten-Atemraum',
    icon: '⏱️',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 3,
    locations: [LocationType.ANY],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM],
    situations: [SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Strukturierte MBSR-Kurzmeditation: 1) Gegenwart wahrnehmen, 2) Atem fokussieren, 3) Körper scannen.',
    shortDescription: 'Strukturierte 3-Schritte-Meditation',
    instructions: [
      'Minute 1: Registriere Gefühle und Gedanken',
      'Was ist jetzt da? Nur beobachten',
      'Minute 2: Fokussiere voll auf den Atem',
      'Atme bewusst und aufmerksam',
      'Minute 3: Scanne den ganzen Körper',
      'Spüre von Kopf bis Fuß alles'
    ],
    benefits: [
      'Hilft im Alltag zur Ruhe kommen',
      'MBSR-Technik wissenschaftlich belegt',
      'Strukturiert und praktisch',
      'Schnelle Zentrierung'
    ],
    tags: ['mbsr', 'atemraum', 'struktur', 'alltag'],
    popularity: 85,
    effectiveness: 87,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'object-meditation',
    name: 'Objekt-Meditation',
    icon: '🌺',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.DESK, LocationType.HOME],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS],
    situations: [SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Beliebiger Gegenstand'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Achtsamkeitsübung: Einen Alltagsgegenstand wie zum ersten Mal betrachten. Mentaler Urlaub vom Stress.',
    shortDescription: 'Fokussierte Betrachtung für Klarheit',
    instructions: [
      'Wähle einen Gegenstand (Pflanze, Tasse, etc.)',
      'Betrachte ihn, als würdest du ihn zum ersten Mal sehen',
      'Achte auf Farbe, Form, Struktur',
      'Lass alle anderen Gedanken ziehen',
      'Bleibe 3-5 Minuten dabei',
      'Genieße die Ruhe im Kopf'
    ],
    benefits: [
      'Übt Konzentration',
      'Holt weg von stressigen Gedanken',
      'Mentaler Urlaub',
      'Einfach durchführbar'
    ],
    tags: ['achtsamkeit', 'konzentration', 'fokus', 'meditation'],
    popularity: 78,
    effectiveness: 81,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'brain-dump-writing',
    name: 'Freies Schreiben ("Brain-Dump")',
    icon: '✍️',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.DESK, LocationType.HOME],
    modes: [ActivityMode.WRITING],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.ANXIETY],
    situations: [SituationType.WORK, SituationType.BREAK, SituationType.HOME],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Stift und Papier'],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    description: 'Ungefiltert alle Gedanken und Sorgen aufschreiben. Expressives Schreiben nach Pennebaker reduziert Grübeln.',
    shortDescription: 'Gedanken ungefiltert rausschreiben',
    instructions: [
      'Nimm Stift und Papier',
      'Schreibe 5 Minuten alles auf, was dich beschäftigt',
      'Ungefiltert und ohne Anspruch auf Qualität',
      'Lass die Gedanken einfach fließen',
      'Niemand muss es lesen',
      'Danach: Papier wegwerfen oder aufheben'
    ],
    benefits: [
      'Reduziert Grübeln nachweislich',
      'Verbessert psychische Verfassung',
      'Pennebaker-Methode wissenschaftlich belegt',
      'Mentaler Arbeitsspeicher wird geleert'
    ],
    tags: ['pennebaker', 'expressives-schreiben', 'grübeln', 'gedanken'],
    popularity: 84,
    effectiveness: 86,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'belly-breathing',
    name: 'Bauchatmung üben',
    icon: '🫄',
    category: ExerciseCategory.BREATHING,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Bewusst diaphragmal atmen: Hand auf Bauch legen und in den Bauch einatmen. Senkt Herzschlag und Blutdruck.',
    shortDescription: 'Tiefe Bauchatmung lernen',
    instructions: [
      'Lege eine Hand auf den Bauch',
      'Atme langsam in den Bauch ein (Hand hebt sich)',
      'Atme lang und kontrolliert aus',
      'Spüre den Unterschied zur Brustatmung',
      'Übe 5 Minuten kontinuierlich'
    ],
    benefits: [
      'Senkt Herzschlag und Blutdruck',
      'Reduziert Stresshormone',
      'Signifikante Stressreduktion',
      'Grundlage aller Atemtechniken'
    ],
    tags: ['diaphragma', 'grundlagen', 'stresshormone', 'basis'],
    popularity: 90,
    effectiveness: 88,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'guided-app-meditation',
    name: 'Geführte Kurz-Meditation (App)',
    icon: '📱',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.ANY],
    modes: [ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.BREAK, SituationType.COMMUTE, SituationType.HOME],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ['Smartphone, Kopfhörer'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Nutzung einer Meditations-App für 5-minütige Entspannung. Geführte Anleitungen erleichtern den Einstieg.',
    shortDescription: 'Meditation mit App-Unterstützung',
    instructions: [
      'Öffne eine Meditations-App (Calm, Headspace, etc.)',
      'Wähle eine 5-Minuten-Session',
      'Setze Kopfhörer auf',
      'Folge der geführten Anleitung',
      'Lass dich vollständig führen'
    ],
    benefits: [
      'Erleichtert Meditations-Einstieg',
      'Wissenschaftlich fundierte Programme',
      'Verbessert Stressresistenz',
      'Vielfältige Auswahl verfügbar'
    ],
    tips: ['Apps wie Calm oder Headspace nutzen', 'Verschiedene Stile ausprobieren'],
    tags: ['app', 'geführt', 'einstieg', 'vielfalt'],
    popularity: 88,
    effectiveness: 85,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'desk-loosening-break',
    name: 'Lockerungs-Pause am Schreibtisch',
    icon: '💻',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.DESK],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Mikrotraining gegen Verspannungen: Schulterblätter zusammenziehen, Kopf kreisen, Hände ausschütteln.',
    shortDescription: 'Verspannungen am Arbeitsplatz lösen',
    instructions: [
      'Ziehe die Schulterblätter zusammen und löse sie',
      'Kreise den Kopf vorsichtig in beide Richtungen',
      'Schüttle die Hände kräftig aus',
      'Strecke die Arme nach oben',
      'Wiederhole alle 1-2 Stunden'
    ],
    benefits: [
      'Löst Muskelspannung',
      'Entspannt auch mental',
      'Ideal bei Bildschirmarbeit',
      'Beugt Verspannungen vor'
    ],
    tags: ['büro', 'verspannung', 'bildschirm', 'mikrotraining'],
    popularity: 92,
    effectiveness: 83,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'eye-relaxation',
    name: 'Augenentspannung',
    icon: '👀',
    category: ExerciseCategory.RELAXATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.DESK, LocationType.WORK],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [2, 6],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS],
    situations: [SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Handflächen aneinander reiben und warm auf geschlossene Augen legen (Palmieren). Löst verkrampfte Augenmuskeln.',
    shortDescription: 'Augen entspannen bei Bildschirmarbeit',
    instructions: [
      'Reibe deine Handflächen aneinander bis sie warm sind',
      'Lege die warmen Handflächen auf die geschlossenen Augen',
      'Halte sie dort für 1-2 Minuten',
      'Alternativ: 20-20-20-Regel anwenden',
      'Alle 20 Sekunden 20 Sekunden in die Ferne schauen'
    ],
    benefits: [
      'Löst verkrampfte Augenmuskeln',
      'Reduziert Kopfdruck und Unruhe',
      'Entspannte Augen signalisieren Sicherheit',
      'Hilft bei digitalem Stress'
    ],
    tags: ['palmieren', 'bildschirmarbeit', 'augen', 'digital-stress'],
    popularity: 78,
    effectiveness: 75,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'movement-energy-booster',
    name: 'Bewegungssnack ("Energie-Booster")',
    icon: '⚡',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.HOME, LocationType.OUTDOOR],
    modes: [ActivityMode.ACTIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.HIGH,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.BREAK, SituationType.HOME, SituationType.WORK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Kurze körperliche Aktivität: 20 Hampelmänner, Hocke springen oder Treppe laufen. Baut Stresshormone ab.',
    shortDescription: 'Stress durch Bewegung abbauen',
    instructions: [
      'Mache 20 Hampelmänner',
      'Oder springe 10x in die Hocke',
      'Oder laufe flott die Treppe hoch und runter',
      'Bewege dich 3-5 Minuten aktiv',
      'Spüre die Erfrischung danach'
    ],
    benefits: [
      'Baut Adrenalin und Kortisol ab',
      'Schüttet Endorphine aus',
      'Natürliches Ventil für Stress',
      'Macht klarer im Kopf'
    ],
    tags: ['endorphine', 'adrenalin', 'bewegung', 'aktivierung'],
    popularity: 78,
    effectiveness: 86,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'music-break',
    name: 'Musikpause',
    icon: '🎵',
    category: ExerciseCategory.RELAXATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.ANY],
    modes: [ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.SADNESS],
    situations: [SituationType.BREAK, SituationType.HOME, SituationType.COMMUTE],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Kopfhörer, Musik'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Lieblingslied oder ruhige Musik bewusst hören. Musik reduziert messbar Stress und Angst.',
    shortDescription: 'Bewusste Musik-Entspannung',
    instructions: [
      'Wähle ein Lieblingslied oder ruhige Musik',
      'Setze Kopfhörer auf oder höre über Lautsprecher',
      'Konzentriere dich voll auf die Musik',
      'Lass alles andere für diese Zeit los',
      'Genieße 3-5 Minuten nur die Klänge'
    ],
    benefits: [
      'Reduziert Stress und Angst messbar',
      'Senkt physiologische Erregung',
      'Musik übernimmt Stressabbau',
      'Einfach und überall verfügbar'
    ],
    tips: ['Wirklich zuhören, nicht nebenbei', 'Beruhigende Musik wählen'],
    tags: ['musik', 'audio', 'entspannung', 'zugänglich'],
    popularity: 90,
    effectiveness: 84,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'discrete-breathing-public',
    name: 'Diskrete Atemtechnik in Gesellschaft',
    icon: '🤫',
    category: ExerciseCategory.BREATHING,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.PUBLIC, LocationType.WORK, LocationType.SOCIAL],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 9],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.STRESS, EmotionType.OVERWHELM],
    situations: [SituationType.WORK, SituationType.SOCIAL, SituationType.COMMUTE],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Unauffällige Atemübung für öffentliche Situationen: verlängertes Ausatmen durch die Nase.',
    shortDescription: 'Stress regulieren ohne Aufmerksamkeit',
    instructions: [
      'Atme 4 Sekunden durch die Nase ein',
      'Atme 6-8 Sekunden durch die Nase aus',
      'Halte dabei normale Körperhaltung',
      'Niemand wird es bemerken',
      'Wiederhole 10-15 Zyklen'
    ],
    benefits: [
      'Aktiviert Beruhigungsnerv stark',
      'Völlig unauffällig',
      'Funktioniert in Meetings/Bahn',
      'Diskrete Stressregulation'
    ],
    tips: ['Auch Zehen im Schuh curlen und lösen', 'Perfekt für soziale Situationen'],
    tags: ['diskret', 'öffentlich', 'unauffällig', 'sozial'],
    popularity: 87,
    effectiveness: 82,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'social-contact-brief',
    name: 'Kurz mit jemand reden',
    icon: '💬',
    category: ExerciseCategory.SOCIAL,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.WORK, LocationType.HOME],
    modes: [ActivityMode.ACTIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.LONELINESS, EmotionType.OVERWHELM],
    situations: [SituationType.WORK, SituationType.BREAK, SituationType.SOCIAL],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Telefon oder Person in der Nähe'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Sozialen Kontakt nutzen: Kollegen ansprechen, vertraute Person anrufen. Soziale Unterstützung als Stresspuffer.',
    shortDescription: 'Stressabbau durch sozialen Kontakt',
    instructions: [
      'Spreche einen Kollegen oder Freund an',
      'Oder rufe eine vertraute Person an',
      'Teile kurz mit, wie es dir geht',
      'Höre auch dem anderen zu',
      'Auch humorvoller Austausch hilft'
    ],
    benefits: [
      'Soziale Unterstützung als Stresspuffer',
      'Senkt Stressreaktion messbar',
      'Gefühl nicht alleine zu sein',
      'Mindert emotionalen Druck'
    ],
    tips: ['Vertraute Personen auswählen', 'Auch kurzer Austausch hilft'],
    tags: ['sozial', 'unterstützung', 'kontakt', 'humor'],
    popularity: 82,
    effectiveness: 80,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'creative-drawing',
    name: 'Kreatives Malen',
    icon: '🎨',
    category: ExerciseCategory.RELAXATION,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.DESK, LocationType.HOME],
    modes: [ActivityMode.ACTIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.BREAK, SituationType.HOME, SituationType.WORK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Stift und Papier'],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    description: 'Stift und Papier nehmen und kritzeln oder ausmalen. Strukturiertes Ausmalen verringert Angstzustände.',
    shortDescription: 'Entspannung durch kreatives Gestalten',
    instructions: [
      'Nimm Stift und Papier',
      'Zeichne Muster, Mandalas oder kritzle frei',
      'Oder male ein Ausmalbild aus',
      'Konzentriere dich auf die Bewegungen',
      'Genieße das kreative Schaffen 3-5 Minuten'
    ],
    benefits: [
      'Verringert Angstzustände',
      'Meditativer, beruhigender Effekt',
      'Lenkt vom Stress ab ohne zu überfordern',
      'Kunsttherapeutisch wirksam'
    ],
    tips: ['Mandalas sind besonders entspannend', 'Kein Anspruch auf Schönheit'],
    tags: ['kreativ', 'mandala', 'kunsttherapie', 'konzentration'],
    popularity: 70,
    effectiveness: 77,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'mindful-drinking-eating',
    name: 'Achtsames Trinken/Essen',
    icon: '☕',
    category: ExerciseCategory.MINDFULNESS,
    subcategory: 'Kurzzeit-Entspannung',
    minTime: 3,
    maxTime: 5,
    locations: [LocationType.ANY],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [2, 6],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.BREAK, SituationType.WORK, SituationType.HOME],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Getränk oder Snack'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Tee oder Snack langsam und bewusst genießen mit voller Aufmerksamkeit für Geruch, Geschmack, Temperatur.',
    shortDescription: 'Achtsamkeit beim Essen und Trinken',
    instructions: [
      'Nimm eine Tasse Tee oder einen kleinen Snack',
      'Rieche zuerst bewusst daran',
      'Nimm den ersten Schluck/Bissen sehr langsam',
      'Achte auf Geschmack, Temperatur, Textur',
      'Genieße 3-5 Minuten ohne Ablenkung'
    ],
    benefits: [
      'Erdet im Hier-und-Jetzt',
      'Durchbricht Autopiloten',
      'Mindful Eating reduziert Stress',
      'Verbindet Pause mit Genuss'
    ],
    tags: ['mindful-eating', 'achtsamkeit', 'genuss', 'pause'],
    popularity: 88,
    effectiveness: 81,
    lastUpdated: '2024-01-15'
  },

  // ===== LEVEL 3: MITTLERE ÜBUNGEN (5-10 MIN) - 30 ÜBUNGEN =====
  
  {
    id: 'nature-walk',
    name: 'Spaziergang ins Grüne',
    icon: '🌳',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.OUTDOOR],
    modes: [ActivityMode.ACTIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.BREAK, SituationType.HOME, SituationType.PREVENTION],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: '10 Minuten zügig an die frische Luft gehen, ideal in einen Park. Naturkontakt wirkt wie ein Reset fürs Gehirn.',
    shortDescription: 'Naturkontakt für mentales Reset',
    instructions: [
      'Gehe nach draußen, am besten ins Grüne',
      'Laufe 10 Minuten zügig aber entspannt',
      'Achte bewusst auf die Natur um dich',
      'Atme die frische Luft tief ein',
      'Lass den Stress mit jedem Schritt zurück'
    ],
    benefits: [
      'Senkt Kortisol messbar',
      'Verbessert Stimmung',
      'Rhythmische Bewegung baut Adrenalin ab',
      'Naturkontakt als Gehirn-Reset'
    ],
    tags: ['natur', 'kortisol', 'bewegung', 'frischluft'],
    popularity: 95,
    effectiveness: 92,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'walking-meditation',
    name: 'Gehmeditation',
    icon: '🚶',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.OUTDOOR],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.BREAK, SituationType.HOME, SituationType.PREVENTION],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Langsames, achtsames Gehen mit Fokus auf jeden Schritt. Meditation in Bewegung beruhigt Körper und Geist.',
    shortDescription: 'Achtsamkeit in Bewegung',
    instructions: [
      'Gehe sehr langsam, etwa einen Flur auf und ab',
      'Konzentriere dich auf jeden Schritt',
      'Spüre, wie die Füße den Boden berühren',
      'Achte auf den Gleichgewichtswechsel',
      'Bei Gedanken sanft zu den Schritten zurück'
    ],
    benefits: [
      'Beruhigt Körper und Geist gleichzeitig',
      'Meditation in Bewegung',
      'Macht Kopf frei',
      'Kombiniert Achtsamkeit mit Aktivität'
    ],
    tags: ['gehmeditation', 'achtsamkeit', 'bewegung', 'schritte'],
    popularity: 75,
    effectiveness: 88,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'yoga-flow-10min',
    name: 'Yoga-Flow (10 Min)',
    icon: '🧘‍♀️',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Mittlere Übungen',
    minTime: 8,
    maxTime: 12,
    locations: [LocationType.HOME, LocationType.OUTDOOR],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.MORNING],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: ['Yogamatte (optional)'],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Kurze Yoga-Einheit: Sonnengrüße oder sanfte Dehnübungen. Kombiniert Bewegung, Atmung und Achtsamkeit.',
    shortDescription: 'Bewegung, Atmung und Achtsamkeit vereint',
    instructions: [
      'Beginne mit ein paar Atemzügen in der Berghaltung',
      'Führe 3-5 Sonnengrüße durch',
      'Oder wähle sanfte Dehnübungen',
      'Konzentriere dich auf langsame, tiefe Atemzüge',
      'Beende mit kurzer Entspannung'
    ],
    benefits: [
      'Reduziert Stresssymptome nachweislich',
      'Beruhigt Herz und Atmung',
      'Löst Verspannungen',
      'Gibt neue Energie'
    ],
    tags: ['yoga', 'sonnengruß', 'dehnung', 'bewegung-atmung'],
    popularity: 85,
    effectiveness: 91,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'full-pmr-extended',
    name: 'Progressive Muskelentspannung (ausführlich)',
    icon: '🧘‍♀️',
    category: ExerciseCategory.RELAXATION,
    subcategory: 'Mittlere Übungen',
    minTime: 8,
    maxTime: 12,
    locations: [LocationType.HOME, LocationType.BED],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    stressRange: [4, 10],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BEFORE_SLEEP, SituationType.BREAK],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: false,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Jacobson-Training für den ganzen Körper: Alle Muskelgruppen nacheinander anspannen und entspannen.',
    shortDescription: 'Klassische Tiefenentspannung nach Jacobson',
    instructions: [
      'Lege dich bequem hin',
      'Beginne mit den Füßen: 5 Sek anspannen, dann lösen',
      'Arbeite dich durch alle Muskelgruppen hoch',
      'Spüre bewusst den Unterschied',
      'Genieße die Tiefenentspannung am Ende'
    ],
    benefits: [
      'Senkt Angst, Puls und Kortisolspiegel',
      'Körperlich angenehm schwer',
      'Mental ruhig',
      'Wissenschaftlich sehr effektiv'
    ],
    tags: ['pmr', 'jacobson', 'entspannung', 'klassisch'],
    popularity: 88,
    effectiveness: 95,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'autogenic-training-standard',
    name: 'Autogenes Training (Standard)',
    icon: '🌊',
    category: ExerciseCategory.RELAXATION,
    subcategory: 'Mittlere Übungen',
    minTime: 8,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.BED],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.LOW,
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BEFORE_SLEEP, SituationType.PREVENTION],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: false,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Vollständige Autogen-Übungsfolge: Schwere, Wärme, Atem, Herz, Sonnengeflecht, Stirn kühl.',
    shortDescription: 'Selbsthypnotische Entspannung von innen',
    instructions: [
      'Lege dich entspannt hin',
      '1. Schwere: "Mein Arm ist schwer"',
      '2. Wärme: "Mein Arm ist warm"',
      '3. Atmung: "Mein Atem ist ruhig"',
      '4. Herz: "Mein Herz schlägt ruhig"',
      '5. Sonnengeflecht: "Mein Bauch ist warm"',
      '6. Stirn: "Meine Stirn ist kühl"'
    ],
    benefits: [
      'Wissenschaftlich gut untersucht',
      'Deutliche Stressreduktion',
      'Tiefes Ruhegefühl',
      'Hervorragend zur Prävention'
    ],
    tags: ['autogen', 'selbsthypnose', 'entspannung', 'wissenschaft'],
    popularity: 75,
    effectiveness: 89,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'body-scan-short',
    name: 'Body-Scan Meditation (kurz)',
    icon: '🔍',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.BED],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.BEFORE_SLEEP],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Achtsamkeitsübung: Mit der Aufmerksamkeit durch den ganzen Körper wandern von Zehen bis Kopf.',
    shortDescription: 'MBSR-Körperwahrnehmung ohne Bewertung',
    instructions: [
      'Setze oder lege dich bequem hin',
      'Beginne bei den Zehen',
      'Wandere systematisch durch den ganzen Körper',
      'Nimm alle Empfindungen wahr ohne zu bewerten',
      'Bei Gedanken sanft zurück zum Körper'
    ],
    benefits: [
      'MBSR-Bestandteil wissenschaftlich belegt',
      'Psychophysiologische Entspannung',
      'Verbessert Körperwahrnehmung',
      'Wirkungsvoll gegen Stress'
    ],
    tags: ['body-scan', 'mbsr', 'achtsamkeit', 'körper'],
    popularity: 82,
    effectiveness: 88,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'sitting-meditation-breath',
    name: 'Sitzmeditation (Atemfokus)',
    icon: '🧘',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Mittlere Übungen',
    minTime: 8,
    maxTime: 12,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ['Timer'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Klassische Meditation: 10 Minuten still aufrecht sitzen und den Atem beobachten.',
    shortDescription: 'Klassische Atemmeditation mit Timer',
    instructions: [
      'Sitze aufrecht und entspannt',
      'Stelle einen Timer auf 10 Minuten',
      'Schließe die Augen',
      'Beobachte nur den natürlichen Atem',
      'Bei Gedanken sanft zum Atem zurückkehren'
    ],
    benefits: [
      'Baut chronischen Stress ab',
      'Fördert Gelassenheit',
      'Wissenschaftlich belegt',
      'Regelmäßige Praxis sehr wirksam'
    ],
    tags: ['meditation', 'atem', 'sitzen', 'timer'],
    popularity: 78,
    effectiveness: 92,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'thought-stop',
    name: 'Gedanken-Stopp',
    icon: '🛑',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.ANY],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [4, 9],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.OVERWHELM, EmotionType.FRUSTRATION],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'CBT-Technik: Negative Gedankenkreise bewusst unterbrechen durch innerliches "Stopp!" und Aufmerksamkeit umlenken.',
    shortDescription: 'Unterbricht automatische Grübel-Spiralen',
    instructions: [
      'Erkenne, wenn du grübelst oder katastrophierst',
      'Sage innerlich laut "STOPP!"',
      'Oder stelle dir ein Stoppschild vor',
      'Lenke Aufmerksamkeit sofort auf etwas Neutrales',
      'Z.B. Umgebung oder Atmung beobachten'
    ],
    benefits: [
      'Durchbricht automatische Gedankenmuster',
      'Klassische CBT-Technik',
      'Beruhigt nach mehreren Durchgängen',
      'Funktioniert überall'
    ],
    tags: ['gedanken-stopp', 'cbt', 'grübeln', 'mental'],
    popularity: 85,
    effectiveness: 87,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'cognitive-restructuring',
    name: 'Kognitive Umstrukturierung',
    icon: '🔄',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.WRITING],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MEDIUM,
    stressRange: [4, 8],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.OVERWHELM, EmotionType.FEAR],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Stift', 'Papier'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    description: 'Mini-CBT-Übung: Stressauslösenden Gedanken aufschreiben, hinterfragen und ausgewogenen Alternativgedanken formulieren.',
    shortDescription: 'CBT-Technik zur gedanklichen Neubewertung',
    instructions: [
      'Schreibe den stressauslösenden Gedanken auf',
      'Frage: "Wie wahrscheinlich ist das wirklich?"',
      'Gibt es auch andere Sichtweisen?',
      'Welche Beweise sprechen dafür/dagegen?',
      'Formuliere einen ausgewogeneren Gedanken'
    ],
    benefits: [
      'Kern der kognitiven Verhaltenstherapie',
      'Sehr wirksam bei Angst und Stress',
      'Hilft aus dem Gedankenkarussell',
      'Entschärft Stressreaktion'
    ],
    tags: ['cbt', 'umstrukturierung', 'gedanken', 'schreiben'],
    popularity: 75,
    effectiveness: 93,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'problem-solving-sheet',
    name: 'Problemlösungsblatt',
    icon: '📝',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.WRITING],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MEDIUM,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.OVERWHELM, EmotionType.FRUSTRATION, EmotionType.STRESS],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Stift', 'Papier'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    description: 'Systematisches Brainstorming: Problem definieren, Lösungsansätze sammeln, nächsten Schritt auswählen.',
    shortDescription: 'Schafft Kontrolle und Handlungsfähigkeit',
    instructions: [
      'Definiere das Problem klar',
      'Brainstorme alle möglichen Lösungen',
      'Bewerte noch nicht - sammle nur',
      'Wähle den besten nächsten kleinen Schritt',
      'Schreibe auf, wann du ihn umsetzt'
    ],
    benefits: [
      'Schafft Gefühl von Kontrolle',
      'Reduziert Hilflosigkeit',
      'Strukturierte Problem-Solving-Methode',
      'Verwandelt Sorgen in Handlung'
    ],
    tags: ['problemlösung', 'brainstorming', 'kontrolle', 'struktur'],
    popularity: 88,
    effectiveness: 90,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'task-prioritizing',
    name: 'Aufgaben priorisieren',
    icon: '📋',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 8,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.WRITING],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MEDIUM,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.OVERWHELM, EmotionType.STRESS, EmotionType.FRUSTRATION],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Stift', 'Papier'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    description: 'To-do-Liste ordnen: Wichtige von unwichtigen Aufgaben trennen, große Aufgaben herunterbrechen.',
    shortDescription: 'Überblick gewinnen reduziert Überforderung',
    instructions: [
      'Schreibe alle Aufgaben auf',
      'Markiere: Was ist wirklich wichtig?',
      'Teile große Aufgaben in kleine Schritte',
      'Erstelle Reihenfolge nach Priorität',
      'Wähle max. 3 Aufgaben für heute'
    ],
    benefits: [
      'Gewinnt Überblick',
      'Sinkt Überforderung',
      'NHS-empfohlene Stressbewältigung',
      'Verwandelt Chaos in Plan'
    ],
    tags: ['priorisierung', 'todo', 'organisation', 'überblick'],
    popularity: 92,
    effectiveness: 86,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'laugh-break',
    name: 'Lach-Pause',
    icon: '😄',
    category: ExerciseCategory.ENERGY,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [2, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.SADNESS, EmotionType.FRUSTRATION],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Smartphone/Computer'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Humor gezielt einsetzen: Lustiges Video, Comics oder bewusstes Lächeln um Stresshormone abzubauen.',
    shortDescription: 'Lachen ist die beste Medizin - wissenschaftlich',
    instructions: [
      'Wähle etwas, das dich persönlich zum Lachen bringt',
      'Lustiges Video, Memes oder Comics ansehen',
      'Oder bewusst für 2 Minuten lächeln',
      'Lasse dich voll auf den Humor ein',
      'Genieße das warme Gefühl danach'
    ],
    benefits: [
      'Reduziert Adrenalin und Kortisol signifikant',
      'Löst körperliche Entspannung aus',
      'Macht belastbarer',
      'Wissenschaftlich bestätigt'
    ],
    tags: ['lachen', 'humor', 'hormone', 'entspannung'],
    popularity: 90,
    effectiveness: 85,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'gratitude-journal',
    name: 'Dankbarkeitsübung',
    icon: '🙏',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.WRITING],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [2, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.SADNESS, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Stift', 'Papier'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    description: 'Dankbarkeits-Tagebuch: Drei Dinge aufschreiben, für die man heute dankbar ist und warum.',
    shortDescription: 'Erhöht Resilienz, senkt Kortisol um 23%',
    instructions: [
      'Nimm Stift und Papier',
      'Schreibe 3 Dinge auf, für die du dankbar bist',
      'Erkläre auch das "Warum" dahinter',
      'Denke an konkrete Details',
      'Spüre das warme Gefühl der Dankbarkeit'
    ],
    benefits: [
      'Erhöht Resilienz nachweislich',
      'Senkt Kortisol um bis zu 23%',
      'Verschiebt Fokus von Sorgen zu Ressourcen',
      'Positive Psychologie-Technik'
    ],
    tags: ['dankbarkeit', 'tagebuch', 'resilienz', 'positiv'],
    popularity: 85,
    effectiveness: 88,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'positive-visualization',
    name: 'Positive Visualisierung',
    icon: '🌟',
    category: ExerciseCategory.VISUALIZATION,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.VISUALIZATION],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.ANXIETY, EmotionType.FEAR, EmotionType.STRESS],
    situations: [SituationType.HOME, SituationType.WORK, SituationType.PREVENTION],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Erfolgsszenario in allen Details ausmalen: Mentales "Probehandeln" mit positivem Ausgang.',
    shortDescription: 'Reduziert Ängste durch optimistische Vorstellung',
    instructions: [
      'Schließe die Augen und entspanne dich',
      'Stelle dir eine Situation vor, die dich beschäftigt',
      'Male dir den bestmöglichen Ausgang aus',
      'Sieh alle Details: Was hörst, siehst, fühlst du?',
      'Genieße das Gefühl des Erfolgs'
    ],
    benefits: [
      'Reduziert aktuelle Ängste',
      'Stärkt Selbstvertrauen',
      'Im Leistungssport bewährt',
      'Dämpft Stressempfinden'
    ],
    tags: ['visualisierung', 'erfolg', 'angst', 'mental'],
    popularity: 78,
    effectiveness: 84,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'self-compassion-pause',
    name: 'Selbstmitgefühls-Pause',
    icon: '💗',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.ANY],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.SADNESS, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Sich selbst wie einen guten Freund behandeln: Freundliche Worte an sich selbst richten.',
    shortDescription: 'Erhöht Stressresistenz durch Selbstmitgefühl',
    instructions: [
      'Lege eine Hand auf dein Herz',
      'Sprich dir selbst Mut zu: "Es ist verständlich, dass du gestresst bist"',
      'Sage: "Pass auf dich auf"',
      'Behandle dich wie deinen besten Freund',
      'Spüre die Wärme und das Mitgefühl'
    ],
    benefits: [
      'Erhöht psychische Stressresistenz',
      'Reduziert Selbstverurteilung',
      'Emotional entlastend',
      'Self-Compassion-Forschung belegt'
    ],
    tags: ['selbstmitgefühl', 'freundlichkeit', 'stress', 'herz'],
    popularity: 82,
    effectiveness: 87,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'perspective-shift',
    name: 'Perspektivwechsel',
    icon: '🔭',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 8,
    locations: [LocationType.ANY],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Langzeit-Perspektive einnehmen: "Wird das in einem Jahr noch relevant sein?"',
    shortDescription: 'Relativiert akute Stressoren durch Zeitperspektive',
    instructions: [
      'Denke an das aktuelle Problem',
      'Frage dich: "Wird das in einem Jahr noch wichtig sein?"',
      'Wie wäre es in 5 Jahren?',
      'Stelle das Ereignis in größeren Kontext',
      'Spüre, wie die Anspannung nachlässt'
    ],
    benefits: [
      'Relativiert akute Stressoren',
      'Schrumpft Katastrophenerwartung',
      'Simpler aber effektiver Stresskiller',
      'Bringt Gelassenheit zurück'
    ],
    tags: ['perspektive', 'zeit', 'relativierung', 'gelassenheit'],
    popularity: 88,
    effectiveness: 86,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'mini-workout-energy',
    name: '5-Min-Workout (Energie)',
    icon: '💪',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 7,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.HIGH,
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.ANGER],
    situations: [SituationType.HOME, SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Intensivere Bewegung um Dampf abzulassen: Jumping Jacks, Kniebeugen, imaginäres Seilspringen.',
    shortDescription: 'Verbrennt Adrenalin, danach Entspannung',
    instructions: [
      '1 Min Jumping Jacks',
      '1 Min Kniebeugen',
      '1 Min imaginäres Seilspringen',
      '1 Min abwechselnd alles wiederholen',
      '1 Min cool down und atmen'
    ],
    benefits: [
      'Verbrennt überschüssiges Adrenalin',
      'Entspannungsreaktion setzt ein',
      'Erfrischt und macht stressfrei',
      'APA-empfohlener Stress-Dress-Rehearsal'
    ],
    tags: ['workout', 'bewegung', 'adrenalin', 'intensiv'],
    popularity: 85,
    effectiveness: 89,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'guided-meditation-10min',
    name: 'Geführte Meditation (Audio, ~10 Min)',
    icon: '🎧',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Mittlere Übungen',
    minTime: 8,
    maxTime: 12,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.BEFORE_SLEEP],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ['Kopfhörer/Audio'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Angeleitete 10-minütige Meditation über App/Audio: Körperscan oder Atemsession.',
    shortDescription: 'Senkt Herzfrequenz, aktiviert Ruhe-Nerv',
    instructions: [
      'Wähle eine 10-minütige geführte Meditation',
      'Setze Kopfhörer auf',
      'Mache es dir bequem',
      'Folge der Stimme und Anleitung',
      'Lasse dich vollständig darauf ein'
    ],
    benefits: [
      'Physiologische Entspannung',
      'Senkt Herzfrequenz',
      'Aktiviert parasympathisches Nervensystem',
      'Kombination aus Stimme und Konzentration'
    ],
    tags: ['geführt', 'audio', 'meditation', 'entspannung'],
    popularity: 92,
    effectiveness: 90,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'emotion-journal',
    name: 'Emotionstagebuch',
    icon: '📖',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.WRITING],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.WORK],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Stift', 'Papier'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    description: 'Gefühle aufschreiben: Was fühle ich? Was hat dazu geführt? "Name it to tame it"-Prinzip.',
    shortDescription: 'Benennen von Gefühlen senkt Amygdala-Aktivität',
    instructions: [
      'Nimm Stift und Papier',
      'Schreibe auf: Was fühle ich gerade?',
      'Was hat zu diesem Gefühl geführt?',
      'Wie intensiv ist es (1-10)?',
      'Gewinne Abstand durch das Aufschreiben'
    ],
    benefits: [
      'Senkt Amygdala-Aktivität',
      'Reduziert emotionale Überwältigung',
      'Gewinnt Abstand zum Stressgefühl',
      'Ermöglicht klareres Denken'
    ],
    tags: ['emotionen', 'tagebuch', 'benennen', 'abstand'],
    popularity: 80,
    effectiveness: 87,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'resource-check',
    name: 'Ressourcen-Check',
    icon: '💎',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 8,
    locations: [LocationType.ANY],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.OVERWHELM, EmotionType.STRESS, EmotionType.FEAR],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Persönliche Stärken und Erfolge erinnern: Was habe ich schon gemeistert? Welche Ressourcen habe ich?',
    shortDescription: 'Steigert Selbstwirksamkeit, senkt Hilflosigkeit',
    instructions: [
      'Erinnere dich: Was habe ich schon alles geschafft?',
      'Welche Stärken habe ich?',
      'Wen kann ich um Hilfe bitten?',
      'Was hat mir früher geholfen?',
      'Spüre dein wachsendes Selbstvertrauen'
    ],
    benefits: [
      'Steigert Selbstwirksamkeit',
      'Senkt gefühlte Hilflosigkeit',
      'Resource Priming ist wissenschaftlich belegt',
      'Körper reagiert weniger gestresst'
    ],
    tags: ['ressourcen', 'stärken', 'erfolge', 'selbstwirksamkeit'],
    popularity: 85,
    effectiveness: 88,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'mindful-eating',
    name: 'Achtsames Essen (5–10 Min)',
    icon: '🍎',
    category: ExerciseCategory.MINDFULNESS,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [2, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.BREAK, SituationType.HOME, SituationType.WORK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ['Snack oder Getränk'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Kleinen Snack oder Tee ohne Ablenkung genießen. Jeden Bissen bewusst, Textur und Geschmack nachspüren.',
    shortDescription: 'Reduziert Stress und emotionales Essen',
    instructions: [
      'Nimm einen kleinen Snack oder Tee',
      'Schalte alle Ablenkungen aus',
      'Kaue jeden Bissen sehr bewusst',
      'Spüre Textur, Geschmack, Temperatur',
      'Genieße die sinnliche Erfahrung'
    ],
    benefits: [
      'Verlängert Erholungsphase',
      'Verhindert Stress-Schlingen',
      'Reduziert emotionales Essen',
      'Verbindet Pause mit sinnlicher Freude'
    ],
    tags: ['achtsamkeit', 'essen', 'genuss', 'pause'],
    popularity: 88,
    effectiveness: 84,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'guided-fantasy-journey',
    name: 'Geführte Fantasiereise (Audio)',
    icon: '🌊',
    category: ExerciseCategory.VISUALIZATION,
    subcategory: 'Mittlere Übungen',
    minTime: 8,
    maxTime: 12,
    locations: [LocationType.HOME, LocationType.BED],
    modes: [ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BEFORE_SLEEP, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ['Kopfhörer/Audio'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'Entspannungsgeschichte anhören: Wald- oder Meeresreise mit sanfter Stimme und Hintergrundmusik.',
    shortDescription: 'Führt Vorstellung in beruhigende Szenarien',
    instructions: [
      'Lege dich bequem hin',
      'Setze Kopfhörer auf',
      'Wähle eine Fantasiereise (Wald, Meer, etc.)',
      'Folge der Geschichte mit deiner Vorstellung',
      'Lasse dich in die beruhigende Welt entführen'
    ],
    benefits: [
      'Senkt Anspannungspegel',
      'Stoppt mentales Kopfkino',
      'Verlangsamt Atmung',
      'Löst Muskeln wie vor dem Einschlafen'
    ],
    tags: ['fantasiereise', 'entspannung', 'audio', 'imagination'],
    popularity: 82,
    effectiveness: 86,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'open-conversation',
    name: 'Offenes Gespräch',
    icon: '💬',
    category: ExerciseCategory.SOCIAL,
    subcategory: 'Mittlere Übungen',
    minTime: 8,
    maxTime: 12,
    locations: [LocationType.HOME, LocationType.SOCIAL],
    modes: [ActivityMode.ANY],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.LONELINESS, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.SOCIAL, SituationType.BREAK],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Vertraute Person'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: '10 Minuten mit vertrauter Person über Stress sprechen. Sozialer Rückhalt ist stärkster Schutzfaktor.',
    shortDescription: 'Stärkster protektiver Faktor in Stressforschung',
    instructions: [
      'Wähle eine vertraute Person aus',
      'Bitte um 10 Minuten Gesprächszeit',
      'Erzähle offen über deinen Stress',
      'Lasse dich aussprechen',
      'Genieße das Gefühl, verstanden zu werden'
    ],
    benefits: [
      'Stärkster protektiver Faktor',
      'Führt zu Erleichterung',
      'Macht verstanden und gestärkt',
      'Wissenschaftlich gut belegt'
    ],
    tags: ['gespräch', 'sozial', 'unterstützung', 'verstehen'],
    popularity: 90,
    effectiveness: 92,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'success-list',
    name: 'Erfolge sichtbar machen',
    icon: '🏆',
    category: ExerciseCategory.COGNITIVE,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 8,
    locations: [LocationType.ANY],
    modes: [ActivityMode.WRITING],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [2, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.SADNESS],
    situations: [SituationType.WORK, SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Stift', 'Papier'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    description: 'Erfolgsliste führen: Alles notieren, was man heute geschafft hat oder was zuletzt gut lief.',
    shortDescription: 'Reduziert Grübeln, steigert Wohlbefinden',
    instructions: [
      'Nimm Stift und Papier',
      'Schreibe auf: Was habe ich heute schon geschafft?',
      'Auch kleine Erfolge zählen',
      'Was ist zuletzt gut gelaufen?',
      'Spüre Stolz und Zufriedenheit'
    ],
    benefits: [
      'Steigert subjektives Wohlbefinden',
      'Reduziert Grübeln',
      'Erzeugt Stolz und Zufriedenheit',
      'Senkt Stressspannung unmittelbar'
    ],
    tags: ['erfolge', 'liste', 'stolz', 'zufriedenheit'],
    popularity: 85,
    effectiveness: 84,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'quick-organizing',
    name: 'Kurz-Aufräumen',
    icon: '🧹',
    category: ExerciseCategory.PHYSICAL,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME, LocationType.WORK],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MEDIUM,
    stressRange: [3, 7],
    targetEmotions: [EmotionType.OVERWHELM, EmotionType.STRESS, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Unmittelbare Umgebung ordnen: Schreibtisch aufräumen, unnötige Browser-Tabs schließen.',
    shortDescription: 'Äußeres Chaos beseitigen reduziert inneres Chaos',
    instructions: [
      'Schaue dich in deiner Umgebung um',
      'Räume den Schreibtisch auf',
      'Schließe unnötige Computer-Tabs',
      'Sortiere Papiere oder Gegenstände',
      'Genieße die aufgeräumte Umgebung'
    ],
    benefits: [
      'Beruhigt das Gehirn',
      'Weniger Reize kämpfen um Aufmerksamkeit',
      'Mentale Erleichterung',
      'Reduziert Stressauslöser'
    ],
    tags: ['aufräumen', 'ordnung', 'umgebung', 'klarheit'],
    popularity: 88,
    effectiveness: 83,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'dance-to-music',
    name: 'Tanzen zur Musik',
    icon: '💃',
    category: ExerciseCategory.MOVEMENT,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.HIGH,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.SADNESS, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: ['Musik/Smartphone'],
      forbiddenInPublic: true,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Lieblingsmusik einschalten und frei dazu bewegen. Kombiniert Bewegung, Musik und Ausdruck.',
    shortDescription: 'Drei Stresslöser: Bewegung, Musik, Ausdruck',
    instructions: [
      'Wähle deine Lieblingsmusik',
      'Stelle die Lautstärke auf angenehm',
      'Bewege dich frei zur Musik',
      'Keine Choreografie - einfach spüren',
      'Lasse Verspannungen "raus-tanzen"'
    ],
    benefits: [
      'Setzt Endorphine frei',
      'Schüttelt Verspannungen ab',
      'Reduziert Angst und Spannung',
      'Erzeugt positive Gefühle'
    ],
    tags: ['tanzen', 'musik', 'endorphine', 'ausdruck'],
    popularity: 85,
    effectiveness: 87,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'breath-mantra',
    name: 'Atem-Mantra',
    icon: '🕉️',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.ANY],
    modes: [ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Mit jedem Ausatmen ein beruhigendes Wort im Geiste sprechen: "Ruhe", "Loslassen", "Frieden".',
    shortDescription: 'Bensonsche Relaxation Response-Technik',
    instructions: [
      'Setze dich bequem hin',
      'Wähle ein beruhigendes Wort: "Ruhe", "Loslassen"',
      'Atme natürlich',
      'Bei jedem Ausatmen das Wort denken',
      'Kombiniere Atem und Autosuggestion'
    ],
    benefits: [
      'Doppelter Effekt: Atem + Autosuggestion',
      'Bensonsche Relaxation Response',
      'Kehrt Stressreaktion um',
      'Herzschlag und Atmung nehmen ab'
    ],
    tags: ['mantra', 'atem', 'autosuggestion', 'benson'],
    popularity: 78,
    effectiveness: 88,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'painting-emotions',
    name: 'Malen der Gefühle',
    icon: '🎨',
    category: ExerciseCategory.PHYSICAL,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.HOME],
    modes: [ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.FRUSTRATION],
    situations: [SituationType.HOME, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Papier', 'Stifte/Farben'],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    description: 'Stress abstrakt malen: Formen und Farben, die der aktuellen Stimmung entsprechen.',
    shortDescription: 'Kunsttherapeutisch befreiend - externalisiert Druck',
    instructions: [
      'Nimm Papier und Stifte/Farben',
      'Wie fühlt sich dein Stress an?',
      'Male abstrakte Formen und Farben',
      'Kein "schönes" Bild nötig',
      'Externalisiere den inneren Druck'
    ],
    benefits: [
      'Kunsttherapeutisch befreiend',
      'Externalisiert inneren Druck',
      'Macht diffuse Emotionen konkret',
      'Oft ruhiger und klarer danach'
    ],
    tags: ['malen', 'kunst', 'emotion', 'externalisieren'],
    popularity: 75,
    effectiveness: 82,
    lastUpdated: '2024-01-15'
  },

  {
    id: 'mindfulness-app-session',
    name: 'Kurze Achtsamkeits-App-Übung',
    icon: '📱',
    category: ExerciseCategory.MEDITATION,
    subcategory: 'Mittlere Übungen',
    minTime: 5,
    maxTime: 10,
    locations: [LocationType.ANY],
    modes: [ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.WORK, SituationType.BREAK],
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ['Smartphone/App'],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    description: 'App-gestützte 5-10 Minuten Module: Body-Scans, Atemzüge zählen, Gedanken ziehen lassen.',
    shortDescription: 'Interaktiv mit Feedback, durchbricht Ernst',
    instructions: [
      'Öffne eine Achtsamkeits-App',
      'Wähle ein 5-10 Minuten Modul',
      'Folge den interaktiven Anweisungen',
      'Nutze ggf. Feedback-Funktionen',
      'Gehe aus der ernsten Stressrolle raus'
    ],
    benefits: [
      'Basiert auf validierten Ansätzen',
      'Interaktivität und Feedback',
      'Spricht spielerisches Element an',
      'Durchbricht ernste Stressrolle'
    ],
    tags: ['app', 'achtsamkeit', 'interaktiv', 'feedback'],
    popularity: 90,
    effectiveness: 85,
    lastUpdated: '2024-01-15'
  },

  // LEVEL 4: Tiefe Entspannung (10-15 Min) - Übungen 53-92
  
  // Übung 53: Progressive Muskelentspannung (volle Session)
  {
    id: "progressive-muscle-relaxation-full",
    name: "Progressive Muskelentspannung (volle Session)",
    icon: "🧘‍♀️",
    category: ExerciseCategory.RELAXATION,
    subcategory: "Muskelentspannung",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.BED],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [6, 10],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BEFORE_SLEEP, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: true,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Ein ca. 15 Minuten langer Durchgang der PMR nach Jacobson. Alle Muskelgruppen des Körpers werden nacheinander angespannt und entspannt, mit genügend Pausen dazwischen. Diese Technik zählt zu den effektivsten überhaupt: Sie führt zu einer deutlichen Reduktion der Stresssymptome – messbar an geringerem Angstscore, niedrigeren Cortisolwerten und entspanntem Puls. Ideal abends oder in ruhiger Umgebung durchführen.",
    shortDescription: "Vollständige PMR-Session mit allen Muskelgruppen",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Beginnen Sie mit den Füßen: 5 Sekunden anspannen, dann lösen",
      "Arbeiten Sie sich systematisch durch alle Muskelgruppen hoch",
      "Beine, Gesäß, Bauch, Hände, Arme, Schultern, Nacken, Gesicht",
      "Nach jeder Anspannung 20-30 Sekunden bewusst entspannen",
      "Spüren Sie den Unterschied zwischen Anspannung und Entspannung",
      "Beenden Sie mit einer Ganzkörperentspannung von 2-3 Minuten"
    ],
    benefits: [
      "Deutliche Reduktion von Stresssymptomen",
      "Messbar niedrigere Cortisolwerte",
      "Entspannung des Pulses",
      "Verbesserte Körperwahrnehmung",
      "Tiefe muskuläre Entspannung"
    ],
    
    tags: ["PMR", "Jacobson", "Muskelentspannung", "Vollsession", "Tiefenentspannung"],
    popularity: 85,
    effectiveness: 95,
    lastUpdated: "2024-01-15"
  },

  // Übung 54: Liebende-Güte-Meditation
  {
    id: "loving-kindness-meditation",
    name: "Liebende-Güte-Meditation",
    icon: "💗",
    category: ExerciseCategory.MEDITATION,
    subcategory: "Metta-Meditation",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANGER, EmotionType.LONELINESS],
    situations: [SituationType.HOME, SituationType.PREVENTION, SituationType.SOCIAL],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine Metta-Meditation, in der man Wohlwollen und Güte sich selbst und anderen gegenüber kultiviert (z.B. Formeln wie 'Möge ich glücklich und gesund sein.' – 'Mögest du glücklich und gesund sein.'). Studien zeigen, dass schon ein mehrwöchiges Üben von Loving-Kindness Meditation die Stressreaktion des Körpers verringert und insgesamt zu weniger empfundenem Distress führt. Diese Meditation fördert zudem positive Emotionen und Mitgefühl, was langfristig Resilienz aufbaut.",
    shortDescription: "Meditation für Mitgefühl und Güte zu sich selbst und anderen",
    instructions: [
      "Setzen Sie sich bequem hin und schließen Sie die Augen",
      "Beginnen Sie mit sich selbst: 'Möge ich glücklich sein'",
      "'Möge ich gesund sein', 'Möge ich in Frieden leben'",
      "Erweitern Sie auf eine geliebte Person: 'Mögest du glücklich sein'",
      "Dann auf eine neutrale Person, dann auf schwierige Personen",
      "Schließlich auf alle Lebewesen: 'Mögen alle glücklich sein'",
      "Spüren Sie das warme Gefühl des Wohlwollens"
    ],
    benefits: [
      "Verringerte Stressreaktion des Körpers",
      "Weniger empfundener Distress",
      "Förderung positiver Emotionen",
      "Aufbau von Mitgefühl",
      "Stärkung der Resilienz"
    ],
    
    tags: ["Metta", "Mitgefühl", "Güte", "Positive Emotionen", "Resilienz"],
    popularity: 78,
    effectiveness: 88,
    lastUpdated: "2024-01-15"
  },

  // Übung 55: Einschlaf-Ritual
  {
    id: "sleep-ritual",
    name: "Einschlaf-Ritual",
    icon: "🌙",
    category: ExerciseCategory.SLEEP,
    subcategory: "Abendroutine",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.BED],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.BEFORE_SLEEP, SituationType.HOME],
    
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: false,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Abendliche Entspannungsroutine von 10–15 Minuten, um den Tag bewusst abzuschließen: z.B. erst drei tiefe Atemzüge, dann im Geist den Tag positiv bewerten (Fokussierung auf das Gelungene), anschließend Progressive Muskelentspannung im Liegen oder eine beruhigende Fantasiereise hören. Ein solches Ritual verbessert nachweislich die Schlafqualität – ausreichender Schlaf wiederum ist essentiell, um Stress abzubauen. Wichtig: Dabei keine Bildschirme/Arbeitsgeräte, sondern wirklich 'runterfahren'.",
    shortDescription: "Abendliche Routine für besseren Schlaf und Stressabbau",
    instructions: [
      "Legen Sie alle elektronischen Geräte weg",
      "Drei tiefe, bewusste Atemzüge nehmen",
      "Den Tag mental durchgehen und positive Momente würdigen",
      "Dankbarkeit für drei gelungene Dinge des Tages spüren",
      "Kurze progressive Muskelentspannung durchführen",
      "Optional: beruhigende Fantasiereise anhören",
      "Jeden Abend die gleiche Reihenfolge einhalten"
    ],
    benefits: [
      "Verbesserte Schlafqualität",
      "Bewusster Tagesabschluss",
      "Reduzierung von Grübeln",
      "Signal für den Körper zur Entspannung",
      "Essentieller Stressabbau durch besseren Schlaf"
    ],
    
    tags: ["Schlaf", "Abendritual", "Entspannung", "Tagesabschluss", "Routine"],
    popularity: 92,
    effectiveness: 90,
    lastUpdated: "2024-01-15"
  },

  // Übung 56: Autogenes Training (komplett)
  {
    id: "autogenic-training-complete",
    name: "Autogenes Training (komplett)",
    icon: "🧠",
    category: ExerciseCategory.RELAXATION,
    subcategory: "Autosuggestive Entspannung",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.BED],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.ADVANCED,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [5, 10],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BEFORE_SLEEP, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: true,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine volle Autogen-Session (~15 Min): alle sechs Standard-Formeln durchgehen und sich jeweils intensiv vorstellen (Schwere, Wärme usw.). In der Tiefenentspannungphase evtl. persönliche Leitsätze einbauen ('Ich bin ruhig…'). Autogenes Training in dieser Ausführlichkeit wirkt wie ein Reset für das vegetative Nervensystem. Untersuchungen belegen signifikante Verbesserungen des subjektiven Wohlbefindens und deutliche Stressminderung, speziell bei regelmäßiger Anwendung.",
    shortDescription: "Vollständige Autogen-Session mit allen sechs Formeln",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "1. Schwere: 'Mein rechter Arm ist ganz schwer' (alle Gliedmaßen)",
      "2. Wärme: 'Mein rechter Arm ist ganz warm' (alle Gliedmaßen)",
      "3. Herz: 'Mein Herz schlägt ruhig und gleichmäßig'",
      "4. Atmung: 'Meine Atmung ist ruhig und gleichmäßig'",
      "5. Sonnengeflecht: 'Mein Sonnengeflecht ist strömend warm'",
      "6. Stirn: 'Meine Stirn ist angenehm kühl'",
      "Tiefenentspannung mit persönlichen Leitsätzen",
      "Zurücknahme: Arme fest, tief atmen, Augen auf"
    ],
    benefits: [
      "Reset für das vegetative Nervensystem",
      "Signifikante Verbesserung des Wohlbefindens",
      "Deutliche Stressminderung",
      "Selbstregulation des Körpers",
      "Langfristige Entspannungsfähigkeit"
    ],
    
    tags: ["Autogenes Training", "Schultz", "Formeln", "Vollsession", "Vegetatives Nervensystem"],
    popularity: 75,
    effectiveness: 92,
    lastUpdated: "2024-01-15"
  },

  // Übung 57: Geführte Strandreise
  {
    id: "guided-beach-journey",
    name: "Geführte Strandreise",
    icon: "🏖️",
    category: ExerciseCategory.VISUALIZATION,
    subcategory: "Fantasiereise",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.AUDIO, ActivityMode.VISUALIZATION],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ["Kopfhörer oder Lautsprecher"],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine 15-minütige Fantasiereise an den Strand: man liegt entspannt, vielleicht mit geschlossenen Augen, und folgt einer Erzählerstimme, die einen an einen warmen, ruhigen Strand führt (Meeresrauschen, Sonnenwärme, sanfter Wind). Diese ausführliche Visualisierung beruhigt Körper und Geist tiefgreifend – das Kopfkino wird mit positiven Bildern 'beschäftigt', während der Körper in tiefe muskuläre Entspannung sinkt.",
    shortDescription: "15-minütige Entspannungsreise an einen ruhigen Strand",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Folgen Sie der Erzählerstimme zur Strandszene",
      "Stellen Sie sich warmen Sand unter Ihrem Körper vor",
      "Hören Sie das rhythmische Meeresrauschen",
      "Spüren Sie die warme Sonne auf Ihrer Haut",
      "Atmen Sie die frische Meeresluft ein",
      "Lassen Sie alle Anspannung mit den Wellen wegfließen"
    ],
    benefits: [
      "Tiefgreifende Beruhigung von Körper und Geist",
      "Positive Beschäftigung des Kopfkinos",
      "Tiefe muskuläre Entspannung",
      "Gedankliche Erholung",
      "Reduzierung von Stressgedanken"
    ],
    
    tags: ["Fantasiereise", "Strand", "Meer", "Visualisierung", "Geführte Meditation"],
    popularity: 88,
    effectiveness: 85,
    lastUpdated: "2024-01-15"
  },

  // Übung 58: Geführte Waldreise
  {
    id: "guided-forest-journey",
    name: "Geführte Waldreise",
    icon: "🌲",
    category: ExerciseCategory.VISUALIZATION,
    subcategory: "Fantasiereise",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.AUDIO, ActivityMode.VISUALIZATION],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ["Kopfhörer oder Lautsprecher"],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Ähnlich wie die Strandreise, aber Szenario Wald: In 15 Minuten gedanklich durch einen friedlichen Wald spazieren, Vögel zwitschern hören, Lichtspiele durch die Bäume sehen. Wald-Imaginationen vermitteln Geborgenheit und Verbundenheit mit der Natur. Solche detaillierten Naturszenen sind in Entspannungsverfahren etabliert, da sie stressige Gedankenkreisel komplett verdrängen – der Organismus schaltet in den 'Ruhe-Modus' um (Herabsetzung von Blutdruck und Stresshormonen wurde in Studien zu Waldbaden auch physiologisch gemessen).",
    shortDescription: "15-minütige Entspannungsreise durch einen friedlichen Wald",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Folgen Sie der Führung in einen ruhigen Wald",
      "Stellen Sie sich weichen Waldboden unter Ihren Füßen vor",
      "Hören Sie das Vogelgezwitscher und Blätterrauschen",
      "Sehen Sie Lichtspiele durch die Baumkronen",
      "Atmen Sie die frische Waldluft tief ein",
      "Spüren Sie Geborgenheit und Naturverbundenheit"
    ],
    benefits: [
      "Vermittlung von Geborgenheit",
      "Verbundenheit mit der Natur",
      "Verdrängung stressiger Gedankenkreisel",
      "Umschaltung in den Ruhe-Modus",
      "Herabsetzung von Blutdruck und Stresshormonen"
    ],
    
    tags: ["Fantasiereise", "Wald", "Natur", "Waldbaden", "Geborgenheit"],
    popularity: 85,
    effectiveness: 87,
    lastUpdated: "2024-01-15"
  },

  // Übung 59: Offene Achtsamkeitsmeditation (lang)
  {
    id: "open-awareness-meditation-long",
    name: "Offene Achtsamkeitsmeditation (lang)",
    icon: "🌅",
    category: ExerciseCategory.MEDITATION,
    subcategory: "Open Monitoring",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.ADVANCED,
    energyLevel: EnergyLevel.MIXED,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine Meditation von ~15 Minuten ohne spezifisches Objekt: Man sitzt in Stille und lässt alle Wahrnehmungen (Geräusche, Gedanken, Körpergefühle) kommen und gehen, ohne an ihnen anzuhaften. Diese offene Überwachungsmeditation (Open Monitoring) erfordert etwas Übung, führt aber zu einem Zustand gelöster Wachsamkeit. Fortgeschrittene berichten von einem tiefen Frieden und Klarsein, wenn sie aus dieser Meditation kommen. Sie lehrt den Geist, sich nicht von Stressreizen mitreißen zu lassen, sondern Abstand zu wahren.",
    shortDescription: "Offene Meditation ohne spezifisches Fokus-Objekt",
    instructions: [
      "Setzen Sie sich aufrecht und bequem hin",
      "Schließen Sie die Augen oder blicken Sie weich nach unten",
      "Lassen Sie alle Wahrnehmungen einfach kommen und gehen",
      "Beobachten Sie Gedanken, Geräusche, Körperempfindungen",
      "Haften Sie an nichts an, bewerten Sie nichts",
      "Kehren Sie immer wieder zu dieser offenen Wachsamkeit zurück",
      "Bleiben Sie präsent, aber entspannt beobachtend"
    ],
    benefits: [
      "Zustand gelöster Wachsamkeit",
      "Tiefer Frieden und Klarheit",
      "Abstand zu Stressreizen",
      "Verringerung der Reaktivität",
      "Entwicklung von Gleichmut"
    ],
    
    tags: ["Open Monitoring", "Achtsamkeit", "Wachsamkeit", "Abstand", "Gleichmut"],
    popularity: 68,
    effectiveness: 89,
    lastUpdated: "2024-01-15"
  },

  // Übung 60: Atem-Meditation (15 Min)
  {
    id: "breath-meditation-long",
    name: "Atem-Meditation (15 Min)",
    icon: "🫁",
    category: ExerciseCategory.BREATHING,
    subcategory: "Atemfokus",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MIXED,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine längere Atemfokus-Meditation, bei der man kontinuierlich den Atem beobachtet. Mit der Zeit verfeinert sich die Wahrnehmung (z.B. die kühlere Luft beim Einatmen, wärmere beim Ausatmen) – man 'verschmilzt' quasi mit dem ruhigen Atemrhythmus. Diese Vertiefung hat starken Einfluss auf das Nervensystem: Der Parasympathikus bleibt dominant, Stresshormone werden abgebaut. 15 Minuten täglicher Atemmeditation können laut Studien bereits die Reaktionsbereitschaft auf Stressreize verringern (man bleibt also auch außerhalb der Meditation ruhiger).",
    shortDescription: "Längere Atembeobachtung für tiefe Entspannung",
    instructions: [
      "Setzen Sie sich bequem hin und schließen Sie die Augen",
      "Richten Sie Ihre Aufmerksamkeit auf den natürlichen Atem",
      "Beobachten Sie das Ein- und Ausströmen der Luft",
      "Spüren Sie die kühlere Luft beim Einatmen",
      "Bemerken Sie die wärmere Luft beim Ausatmen",
      "Wenn Gedanken kommen, kehren Sie sanft zum Atem zurück",
      "Verschmelzen Sie mit dem ruhigen Atemrhythmus"
    ],
    benefits: [
      "Verfeinerte Atemwahrnehmung",
      "Parasympathikus-Dominanz",
      "Abbau von Stresshormonen",
      "Verringerte Reaktionsbereitschaft auf Stress",
      "Anhaltende Ruhe auch nach der Meditation"
    ],
    
    tags: ["Atemmeditation", "Atemfokus", "Parasympathikus", "Stressabbau", "Langzeiteffekt"],
    popularity: 82,
    effectiveness: 91,
    lastUpdated: "2024-01-15"
  },

  // Übung 61: HRV-Biofeedback
  {
    id: "hrv-biofeedback",
    name: "HRV-Biofeedback",
    icon: "💓",
    category: ExerciseCategory.BREATHING,
    subcategory: "Herzratenvariabilität",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.ACTIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ["HRV-Gerät oder App (z.B. EmWave)"],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    
    description: "Herzratenvariabilitäts-Training mit Gerät oder App (z.B. EmWave von HeartMath) für 10–15 Minuten. Dabei misst ein Sensor die Herzratenvariabilität, und man versucht durch langsames Atmen und Entspannen eine kohärente Kurve zu erreichen. Dieses Biofeedback hat in Studien beeindruckende Ergebnisse gezeigt: Regelmäßiges Üben verbessert die Fähigkeit des Körpers, in Stresssituationen schneller wieder in den Ruhezustand zu kommen. Es ist quasi Meditation mit Messgerät – für Datenfans eine motivierende High-Tech-Entspannung.",
    shortDescription: "Herzratenvariabilitäts-Training mit technischer Unterstützung",
    instructions: [
      "Verbinden Sie das HRV-Gerät oder öffnen Sie die App",
      "Setzen Sie sich bequem hin und entspannen Sie sich",
      "Beginnen Sie mit langsamer, tiefer Atmung (ca. 5 Sek ein, 5 Sek aus)",
      "Beobachten Sie die Kohärenz-Anzeige auf dem Display",
      "Passen Sie Atmung und Entspannung an für optimale Kohärenz",
      "Halten Sie den kohärenten Zustand so lange wie möglich",
      "Üben Sie täglich für beste Langzeiteffekte"
    ],
    benefits: [
      "Messbare Verbesserung der Stressresilienz",
      "Schnellere Erholung nach Stress",
      "Objektives Feedback über Entspannungszustand",
      "Motivation durch Daten und Fortschritt",
      "Langfristige Verbesserung der Herzratenvariabilität"
    ],
    
    tags: ["HRV", "Biofeedback", "HeartMath", "Technologie", "Herzratenvariabilität"],
    popularity: 72,
    effectiveness: 88,
    lastUpdated: "2024-01-15"
  },

  // Übung 62: Yoga Nidra
  {
    id: "yoga-nidra",
    name: "Yoga Nidra",
    icon: "🕉️",
    category: ExerciseCategory.RELAXATION,
    subcategory: "Yogischer Schlaf",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.BED],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.BEFORE_SLEEP],
    
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: true,
      requiresQuiet: true,
      requiresItems: ["Yoga Nidra Audio"],
      forbiddenInPublic: true,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine geführte Tiefenentspannung im Liegen (bekannt als yogischer Schlaf) von ca. 10–15 Min. Man folgt einer Stimme, die einen durch verschiedene Bewusstseinszustände und Körperbezirke leitet. Yoga Nidra führt zu extrem tiefer Entspannung bei wachem Geist – oft stellt sich ein tranceähnlicher Zustand ein, der Erholung bringt, als hätte man ein Nickerchen gemacht. Viele Anwender nutzen Yoga Nidra, um am Abend vollständig herunterzukommen oder nach der Arbeit den Reset-Knopf zu drücken.",
    shortDescription: "Geführte Tiefenentspannung im yogischen Schlaf",
    instructions: [
      "Legen Sie sich bequem auf den Rücken",
      "Schließen Sie die Augen und entspannen Sie sich völlig",
      "Folgen Sie der Stimme durch die Anleitung",
      "Bleiben Sie wach, aber völlig entspannt",
      "Lassen Sie sich durch verschiedene Körperregionen führen",
      "Erlauben Sie sich, in einen tranceähnlichen Zustand zu gleiten",
      "Nehmen Sie sich Zeit zum sanften Zurückkommen"
    ],
    benefits: [
      "Extrem tiefe Entspannung bei wachem Geist",
      "Tranceähnlicher, erholsamer Zustand",
      "Erholung wie nach einem Nickerchen",
      "Komplettes Herunterkommen",
      "Reset-Effekt für Körper und Geist"
    ],
    
    tags: ["Yoga Nidra", "Tiefenentspannung", "Yogischer Schlaf", "Trance", "Reset"],
    popularity: 79,
    effectiveness: 93,
    lastUpdated: "2024-01-15"
  },

  // Übung 63: Waldbaden (Nature Immersion)
  {
    id: "forest-bathing-nature-immersion",
    name: "Waldbaden (Nature Immersion)",
    icon: "🌳",
    category: ExerciseCategory.MINDFULNESS,
    subcategory: "Naturverbindung",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.OUTDOOR],
    
    modes: [ActivityMode.ACTIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    
    description: "15 Minuten bewusst in einer natürlichen Umgebung verbringen, ohne Ablenkung (z.B. langsam im Park umhergehen, an einem Baum lehnen und die Umgebung aufnehmen). Dieses angeleitete Nichtstun in der Natur senkt erwiesenermaßen Cortisol und Blutdruck. Anders als der kürzere Spaziergang (Level 3) geht es hier ums Verweilen und alle Sinne öffnen – der Effekt: tiefe Beruhigung und oft ein Gefühl von geerdet sein. (Tipp: Handy dabei auf Flugmodus lassen.)",
    shortDescription: "Bewusstes Verweilen in der Natur ohne Ablenkung",
    instructions: [
      "Suchen Sie sich einen ruhigen Platz in der Natur",
      "Schalten Sie Ihr Handy auf Flugmodus",
      "Gehen Sie langsam oder lehnen Sie sich an einen Baum",
      "Öffnen Sie alle Ihre Sinne für die Umgebung",
      "Hören Sie die Naturgeräusche bewusst",
      "Riechen Sie die Luft und natürlichen Düfte",
      "Spüren Sie den Boden unter Ihren Füßen",
      "Lassen Sie sich von der Natur umhüllen"
    ],
    benefits: [
      "Erwiesene Senkung von Cortisol",
      "Reduzierung des Blutdrucks",
      "Tiefe Beruhigung",
      "Gefühl von Erdung",
      "Aktivierung aller Sinne"
    ],
    
    tags: ["Waldbaden", "Natur", "Cortisol", "Sinne", "Erdung"],
    popularity: 85,
    effectiveness: 89,
    lastUpdated: "2024-01-15"
  },

  // Übung 64: Musikentspannung (15 Min)
  {
    id: "music-relaxation-15min",
    name: "Musikentspannung (15 Min)",
    icon: "🎵",
    category: ExerciseCategory.RELAXATION,
    subcategory: "Musiktherapie",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ["Kopfhörer oder Lautsprecher", "Entspannungsmusik"],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine entspannende Playlist von etwa 10–15 Minuten Länge erstellen (z.B. Klassik, Ambient oder Naturklänge) und sich damit bequem hinlegen. Augen schließen und nur der Musik lauschen. Studien belegen, dass gezieltes Musikhören Ängste und Stress spürbar reduziert, besonders wenn langsame Rhythmen (~60 BPM) gewählt werden. In 15 Minuten Musikmeditation kann sich der Körper ähnlich erholen wie in einer kurzen Tiefschlafphase – viele fühlen sich danach erfrischt.",
    shortDescription: "Tiefe Entspannung durch bewusstes Musikhören",
    instructions: [
      "Erstellen Sie eine 15-minütige Entspannungsplaylist",
      "Wählen Sie Musik mit langsamen Rhythmen (~60 BPM)",
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Konzentrieren Sie sich vollständig auf die Musik",
      "Lassen Sie die Klänge durch Ihren Körper fließen",
      "Spüren Sie, wie sich Ihr Körper entspannt",
      "Genießen Sie die musikinduzierte Tiefenentspannung"
    ],
    benefits: [
      "Spürbare Reduktion von Ängsten und Stress",
      "Erholung wie in einer Tiefschlafphase",
      "Gefühl der Erfrischung danach",
      "Aktivierung des Parasympathikus",
      "Emotionale Regulation durch Musik"
    ],
    
    tags: ["Musiktherapie", "60 BPM", "Entspannung", "Tiefschlaf", "Klassik"],
    popularity: 90,
    effectiveness: 84,
    lastUpdated: "2024-01-15"
  },

  // Übung 65: Warmes Entspannungsbad
  {
    id: "warm-relaxation-bath",
    name: "Warmes Entspannungsbad",
    icon: "🛁",
    category: ExerciseCategory.PHYSICAL,
    subcategory: "Hydrotherapie",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BEFORE_SLEEP],
    
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: ["Badewanne", "Badezusatz (optional)"],
      forbiddenInPublic: true,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: true,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    
    description: "Ein 15-minütiges Bad in wohltemperiertem Wasser (evtl. mit Lavendel- oder Melissen-Badezusatz). Wärme erweitert die Gefäße und entspannt die Muskulatur – das signalisiert dem Körper Geborgenheit. Die Kombination aus Wärme und Schwerelosigkeit im Wasser führt oft zu tiefem Nachlassen der Anspannung. Studien zur Hydrotherapie zeigen zudem, dass solche Bäder das Nervensystem positiv beeinflussen und Stressgefühle reduzieren (auch durch die achtsame 'Me-Time' im Bad). (Hinweis: Danach gemütlich warmhalten und nicht sofort wieder hektisch werden.)",
    shortDescription: "Therapeutisches Bad für tiefe körperliche Entspannung",
    instructions: [
      "Lassen Sie sich ein warmes Bad ein (37-39°C)",
      "Optional: Entspannende Badezusätze hinzufügen",
      "Tauchen Sie langsam ins Wasser ein",
      "Lassen Sie sich von der Wärme umhüllen",
      "Spüren Sie die Schwerelosigkeit im Wasser",
      "Atmen Sie tief und entspannt",
      "Genießen Sie diese achtsame Me-Time",
      "Danach warm anziehen und Ruhe bewahren"
    ],
    benefits: [
      "Gefäßerweiterung und Muskelentspannung",
      "Signal für Geborgenheit an den Körper",
      "Tiefes Nachlassen der Anspannung",
      "Positive Beeinflussung des Nervensystems",
      "Achtsame Selbstfürsorge-Zeit"
    ],
    
    tags: ["Hydrotherapie", "Wärme", "Bad", "Muskelentspannung", "Me-Time"],
    popularity: 88,
    effectiveness: 86,
    lastUpdated: "2024-01-15"
  },

  // Übung 66: Klangschalen-Reise
  {
    id: "singing-bowl-journey",
    name: "Klangschalen-Reise",
    icon: "🎎",
    category: ExerciseCategory.MEDITATION,
    subcategory: "Klangmeditation",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ["Klangschalen oder Klangschalen-Audio"],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Mit speziellen Klangschalen oder einer Klangschalen-Aufnahme eine Klangmeditation machen. Man liegt bequem und lässt die sanft vibrierenden Töne und Obertöne auf sich wirken. Die monotonen, harmonischen Klänge erzeugen Frequenzen, die Gehirnwellen verlangsamen können (ähnlich dem Effekt von sanfter Musik). Viele Menschen berichten nach 10–15 Minuten Klangbad von einer 'durchmassierten' Entspannung und inneren Stille. Es gibt Hinweise, dass Klangmeditation Stress, Angst und sogar körperliche Schmerzsymptome lindern kann – vermutlich durch tiefe mentale Entspannung.",
    shortDescription: "Meditation mit heilenden Klangschalen-Frequenzen",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Starten Sie die Klangschalen-Aufnahme oder schlagen Sie die Schale an",
      "Lassen Sie die Töne und Obertöne auf sich wirken",
      "Spüren Sie die Vibrationen im Körper",
      "Folgen Sie den harmonischen Klängen mental",
      "Lassen Sie sich von den Frequenzen entspannen",
      "Genießen Sie das 'Klangbad' für Körper und Geist"
    ],
    benefits: [
      "Verlangsamung der Gehirnwellen",
      "'Durchmassierte' Entspannung",
      "Innere Stille und Frieden",
      "Linderung von Stress und Angst",
      "Mögliche Schmerzlinderung"
    ],
    
    tags: ["Klangschalen", "Frequenzen", "Vibrationen", "Gehirnwellen", "Klangbad"],
    popularity: 73,
    effectiveness: 87,
    lastUpdated: "2024-01-15"
  },

  // Übung 67: Beine hoch (Viparita Karani)
  {
    id: "legs-up-wall-pose",
    name: "Beine hoch (Viparita Karani)",
    icon: "🧘‍♀️",
    category: ExerciseCategory.PHYSICAL,
    subcategory: "Yoga-Pose",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.BED],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.BEFORE_SLEEP],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: ["Wand"],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    
    description: "Flach auf den Rücken legen und die Beine vertikal an der Wand hochlegen, sodass Fersen höher als das Herz liegen. In dieser Position 5–10 Minuten ruhen und dabei ruhig atmen. Die 'Legs up the Wall'-Pose entlastet das Herz-Kreislauf-System und fördert den venösen Rückfluss – viele nehmen ein Pulsieren und Entlasten im Körper wahr. Psychisch vermittelt diese einfache Übung ein Gefühl von Loslassen (man muss gerade wortwörtlich nichts tragen). Sie wird im Yoga zur Regeneration eingesetzt und kann nach einem stressigen Tag wunder bewirken, um den Körper herunterzufahren.",
    shortDescription: "Regenerative Yoga-Position für Herz-Kreislauf-Entlastung",
    instructions: [
      "Legen Sie sich flach auf den Rücken vor eine Wand",
      "Heben Sie die Beine senkrecht an die Wand",
      "Fersen sind höher als das Herz positioniert",
      "Entspannen Sie Arme seitlich neben dem Körper",
      "Atmen Sie ruhig und gleichmäßig",
      "Spüren Sie das Pulsieren und Entlasten",
      "Bleiben Sie 10-15 Minuten in dieser Position",
      "Kommen Sie langsam zurück in den Sitz"
    ],
    benefits: [
      "Entlastung des Herz-Kreislauf-Systems",
      "Förderung des venösen Rückflusses",
      "Gefühl von Loslassen",
      "Körperliches Entlasten und Pulsieren",
      "Regenerative Wirkung nach stressigen Tagen"
    ],
    
    tags: ["Yoga", "Viparita Karani", "Herz-Kreislauf", "Regeneration", "Loslassen"],
    popularity: 81,
    effectiveness: 83,
    lastUpdated: "2024-01-15"
  },

  // Übung 68: Tai Chi / Qigong
  {
    id: "tai-chi-qigong",
    name: "Tai Chi / Qigong",
    icon: "🥋",
    category: ExerciseCategory.MOVEMENT,
    subcategory: "Bewegungsmeditation",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.OUTDOOR, LocationType.ANY],
    
    modes: [ActivityMode.ACTIVE, ActivityMode.MENTAL, ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.MORNING, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: true,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: true,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    
    description: "Eine ruhige Bewegungsmeditation aus Fernost, 10–15 Minuten fließende langsame Bewegungen im Stehen (z.B. einen kurzen Tai-Chi-Formablauf oder Qigong-Übungen). Tai Chi und Qigong reduzieren Stresshormone und verbessern laut systematischen Übersichten die psychische Balance. Die Kombination aus Gleichgewicht, sanfter Bewegung und tiefer Atmung erzeugt einen meditativen Flow-Zustand – Stress und Sorgen fallen dabei ab. (Tipp: Eignet sich morgens oder in Pausen, um neue Energie zu schöpfen.)",
    shortDescription: "Fließende Bewegungsmeditation für Balance und Flow",
    instructions: [
      "Stellen Sie sich aufrecht und entspannt hin",
      "Beginnen Sie mit langsamen, fließenden Armbewegungen",
      "Koordinieren Sie Bewegung mit tiefer Atmung",
      "Halten Sie das Gleichgewicht und bleiben Sie zentriert",
      "Folgen Sie einem einfachen Tai Chi oder Qigong Form",
      "Bewegen Sie sich wie in Zeitlupe",
      "Spüren Sie den meditativen Flow-Zustand",
      "Beenden Sie mit einigen ruhigen Atemzügen"
    ],
    benefits: [
      "Reduktion von Stresshormonen",
      "Verbesserung der psychischen Balance",
      "Meditativer Flow-Zustand",
      "Abfallen von Stress und Sorgen",
      "Neue Energie für den Tag"
    ],
    
    tags: ["Tai Chi", "Qigong", "Bewegungsmeditation", "Flow", "Balance"],
    popularity: 76,
    effectiveness: 85,
    lastUpdated: "2024-01-15"
  },

  // Übung 69: Ausführlicher Body-Scan
  {
    id: "detailed-body-scan",
    name: "Ausführlicher Body-Scan",
    icon: "🔍",
    category: ExerciseCategory.MINDFULNESS,
    subcategory: "Körperwahrnehmung",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.BED, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.BEFORE_SLEEP],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Ein langer Körperscan (z.B. 15 Minuten), bei dem man noch kleinschrittiger durch den Körper geht als in Level 3. Man verweilt z.B. bei jedem Finger, jedem Zeh, spürt die Stirn, den Kiefer usw. ganz bewusst. Dieser vertiefte Body-Scan verstärkt den Entspannungseffekt – man kann förmlich fühlen, wie mit jeder gewahrten Körperstelle eine Welle der Entspannung durchs System geht. MBSR-Kurse nutzen 30–45 Minuten Body-Scans; eine 15-Minuten-Variante ist ein sehr guter Kompromiss für die App, um tiefe Wirkung in praktikabler Zeit zu bieten.",
    shortDescription: "Detaillierte Körperwahrnehmung für tiefe Entspannung",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Beginnen Sie bei den Zehenspitzen des linken Fußes",
      "Spüren Sie jeden einzelnen Zeh bewusst",
      "Wandern Sie langsam durch den ganzen Fuß",
      "Gehen Sie systematisch durch Bein, Hüfte, Rumpf",
      "Spüren Sie jeden Finger, die Stirn, den Kiefer einzeln",
      "Verweilen Sie bei jeder Körperstelle mindestens 30 Sekunden",
      "Spüren Sie die Entspannungswellen durch den Körper"
    ],
    benefits: [
      "Verstärkter Entspannungseffekt",
      "Wellen der Entspannung durch das System",
      "Tiefe Körperwahrnehmung",
      "MBSR-basierte Wirksamkeit",
      "Praktikable Tiefenwirkung"
    ],
    
    tags: ["Body-Scan", "MBSR", "Körperwahrnehmung", "Entspannungswellen", "Detailliert"],
    popularity: 79,
    effectiveness: 91,
    lastUpdated: "2024-01-15"
  },

  // Übung 70: Geführte Meditation (15 Min)
  {
    id: "guided-meditation-15min",
    name: "Geführte Meditation (15 Min)",
    icon: "🎧",
    category: ExerciseCategory.MEDITATION,
    subcategory: "Geführte Praxis",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.AUDIO, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    
    stressRange: [3, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ["Geführte Meditation Audio/Video"],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine vom Coach/Therapeuten geführte Meditation, beispielsweise live per Video oder als aufgenommenes Audio, die auf die aktuelle Situation zugeschnitten ist. In 15 Minuten kann hier ein vollständiger Entspannungszyklus durchlaufen werden (Ankommen – Vertiefung – Ausleitung). Die persönliche Ansprache erhöht oft die Wirksamkeit, weil man sich geborgen und begleitet fühlt. Solche Sitzungen werden z.B. in der achtsamkeitsbasierten Therapie genutzt und zeigen exzellente Ergebnisse in Bezug auf Stressabbau und Wohlbefinden.",
    shortDescription: "Persönlich geführte Meditation für vollständige Entspannung",
    instructions: [
      "Suchen Sie sich eine geführte Meditation aus",
      "Setzen oder legen Sie sich bequem hin",
      "Schließen Sie die Augen und entspannen Sie sich",
      "Folgen Sie der Stimme des Lehrers/Therapeuten",
      "Lassen Sie sich durch den Entspannungszyklus führen",
      "Ankommen - Vertiefung - Ausleitung",
      "Spüren Sie sich geborgen und begleitet",
      "Nehmen Sie sich Zeit für das sanfte Zurückkommen"
    ],
    benefits: [
      "Vollständiger Entspannungszyklus",
      "Persönliche Ansprache und Begleitung",
      "Gefühl von Geborgenheit",
      "Exzellente Ergebnisse beim Stressabbau",
      "Achtsamkeitsbasierte therapeutische Wirkung"
    ],
    
    tags: ["Geführte Meditation", "Therapeutisch", "Entspannungszyklus", "Begleitung", "MBSR"],
    popularity: 87,
    effectiveness: 89,
    lastUpdated: "2024-01-15"
  },

  // Übung 71: Werte-Reflexion
  {
    id: "values-reflection",
    name: "Werte-Reflexion",
    icon: "💭",
    category: ExerciseCategory.COGNITIVE,
    subcategory: "Selbstreflexion",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.MENTAL, ActivityMode.WRITING],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.FRUSTRATION],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ["Optional: Stift und Papier"],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    
    description: "Nachdenken über die eigenen Werte und Prioritäten im Leben, etwa 10 Minuten in Ruhe. Man kann darüber meditieren oder schreiben, was einem wirklich wichtig ist (Familie, Kreativität, Integrität etc.) und wie der aktuelle Stressor dazu passt oder auch nicht. Studien zeigen, dass Selbstaffirmation – das Bewusstmachen der eigenen Werte – die physiologische Stressantwort abmildern kann, da es ein Gefühl von Selbst und Sinn stärkt. Diese Übung rückt das, was einen stresst, in ein anderes Licht und gibt oft Gelassenheit zurück, weil man das größere Bild sieht.",
    shortDescription: "Reflexion über persönliche Werte für Perspektive und Sinn",
    instructions: [
      "Setzen Sie sich ruhig hin und atmen Sie tief durch",
      "Denken Sie an Ihre wichtigsten Lebenswerte",
      "Familie, Kreativität, Integrität, Gesundheit, etc.",
      "Schreiben Sie diese Werte auf oder meditieren Sie darüber",
      "Betrachten Sie Ihren aktuellen Stressor in diesem Kontext",
      "Wie passt der Stress zu Ihren wahren Prioritäten?",
      "Spüren Sie das größere Bild Ihres Lebens",
      "Lassen Sie Gelassenheit und Perspektive entstehen"
    ],
    benefits: [
      "Abmilderung der physiologischen Stressantwort",
      "Stärkung des Selbst- und Sinngefühls",
      "Neue Perspektive auf aktuelle Stressoren",
      "Rückkehr zur Gelassenheit",
      "Bewusstsein für das größere Bild"
    ],
    
    tags: ["Werte", "Selbstaffirmation", "Perspektive", "Sinn", "Gelassenheit"],
    popularity: 72,
    effectiveness: 86,
    lastUpdated: "2024-01-15"
  },

  // Übung 72: Dankbarkeits-Brief
  {
    id: "gratitude-letter",
    name: "Dankbarkeits-Brief",
    icon: "💌",
    category: ExerciseCategory.SOCIAL,
    subcategory: "Dankbarkeit",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.WRITING, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.SADNESS, EmotionType.LONELINESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ["Stift und Papier oder Computer"],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: true
    },
    
    description: "Einen ausführlichen Dankesbrief an eine wichtige Person schreiben (ohne zeitlichen Druck, ruhig 10–15 Minuten daran arbeiten). Diesen Brief muss man nicht zwingend abschicken – allein das intensive Empfinden und Formulieren von Dankbarkeit hat enorme positive Effekte auf die Psyche. Es löst warme Emotionen aus, die mit erhöhter Oxytocin-Ausschüttung einhergehen und das Stressempfinden merklich senken. Viele verspüren nach einem Dankbarkeits-Brief eine Art inneren Frieden und Freude, die mit Stress nicht koexistieren kann.",
    shortDescription: "Ausführlicher Brief voller Dankbarkeit an eine wichtige Person",
    instructions: [
      "Denken Sie an eine Person, die Ihnen viel bedeutet",
      "Setzen Sie sich mit Stift und Papier hin",
      "Beginnen Sie einen herzlichen Dankesbrief",
      "Schreiben Sie konkret, wofür Sie dankbar sind",
      "Beschreiben Sie, wie diese Person Ihr Leben bereichert hat",
      "Lassen Sie Ihre Gefühle fließen, ohne Zeitdruck",
      "Spüren Sie die warmen Emotionen beim Schreiben",
      "Der Brief muss nicht abgeschickt werden"
    ],
    benefits: [
      "Enorme positive Effekte auf die Psyche",
      "Auslösung warmer Emotionen",
      "Erhöhte Oxytocin-Ausschüttung",
      "Merkliche Senkung des Stressempfindens",
      "Innerer Frieden und Freude"
    ],
    
    tags: ["Dankbarkeit", "Brief", "Oxytocin", "Positive Emotionen", "Innerer Frieden"],
    popularity: 84,
    effectiveness: 88,
    lastUpdated: "2024-01-15"
  },

  // Übung 73: Zukunftsvisualisierung
  {
    id: "future-visualization",
    name: "Zukunftsvisualisierung",
    icon: "🔮",
    category: ExerciseCategory.VISUALIZATION,
    subcategory: "Zielvisualisierung",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.MENTAL, ActivityMode.VISUALIZATION],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Mentales Probetauchen in eine stressfreie Zukunft: Sich in allen Details vorstellen, wie man eine kommende stressige Phase gemeistert hat und danach entspannt und zufrieden ist. Diese Technik (aus der zielorientierten Visualisierung) schenkt Zuversicht – der Körper reagiert auf die imaginierte Erleichterung oft mit realer Entspannung im Jetzt. Achtung: realistisch bleiben (keine Wunder erwarten), aber ruhig etwas Optimismus wagen. Das Gehirn trainiert so schon einen positiveren Ausweg und reduziert die aktuelle Alarmbereitschaft.",
    shortDescription: "Detaillierte Visualisierung einer stressfreien Zukunft",
    instructions: [
      "Setzen Sie sich bequem hin und schließen Sie die Augen",
      "Stellen Sie sich vor, die stressige Phase ist vorbei",
      "Visualisieren Sie sich entspannt und zufrieden",
      "Malen Sie alle Details dieser positiven Zukunft aus",
      "Wie fühlen Sie sich? Was machen Sie?",
      "Spüren Sie die Erleichterung und Zufriedenheit",
      "Bleiben Sie realistisch, aber optimistisch",
      "Lassen Sie diese positive Zukunft auf sich wirken"
    ],
    benefits: [
      "Vermittlung von Zuversicht",
      "Reale Entspannung durch imaginierte Erleichterung",
      "Training positiver Ausgänge im Gehirn",
      "Reduktion der aktuellen Alarmbereitschaft",
      "Stärkung der Hoffnung und des Optimismus"
    ],
    
    tags: ["Zukunft", "Visualisierung", "Zuversicht", "Optimismus", "Entspannung"],
    popularity: 75,
    effectiveness: 82,
    lastUpdated: "2024-01-15"
  },

  // Übung 74: Atem + Affirmation
  {
    id: "breath-plus-affirmation",
    name: "Atem + Affirmation",
    icon: "💨",
    category: ExerciseCategory.BREATHING,
    subcategory: "Affirmative Atmung",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.MENTAL, ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MIXED,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.FRUSTRATION],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine Suggestionstechnik während tiefer Atmung: Bei jedem Einatmen ein positives Wort aufnehmen ('Ruhe', 'Stärke' etc.), beim Ausatmen negativ Empfundenes loslassen ('Stress raus'). 10 Minuten dieses kombiniert mentalen und Atem-Mantras können alte Stressmuster überschreiben. Die Entspannung durch tiefe Atmung wird hier verstärkt durch die Kraft der Affirmation. In Stresspräventionskursen wird dies gern am Ende genutzt, um den Teilnehmer gestärkt und beruhigt zugleich zu entlassen.",
    shortDescription: "Kombination aus bewusster Atmung und positiven Affirmationen",
    instructions: [
      "Setzen Sie sich bequem hin und atmen Sie ruhig",
      "Wählen Sie ein positives Wort: 'Ruhe', 'Stärke', 'Frieden'",
      "Beim Einatmen nehmen Sie dieses Wort mental auf",
      "Beim Ausatmen lassen Sie Stress und Anspannung los",
      "Einatmen: 'Ruhe ein', Ausatmen: 'Stress raus'",
      "Wiederholen Sie diese Technik 10 Minuten lang",
      "Spüren Sie, wie sich alte Stressmuster auflösen",
      "Fühlen Sie sich gestärkt und beruhigt zugleich"
    ],
    benefits: [
      "Überschreibung alter Stressmuster",
      "Verstärkung der Atementsapnnung durch Affirmation",
      "Gleichzeitige Stärkung und Beruhigung",
      "Etablierung positiver mentaler Verknüpfungen",
      "Langfristige Stressprävention"
    ],
    
    tags: ["Affirmation", "Atmung", "Suggestion", "Stressmuster", "Prävention"],
    popularity: 78,
    effectiveness: 85,
    lastUpdated: "2024-01-15"
  },

  // Übung 75: Achtsamkeit für Geräusche
  {
    id: "sound-mindfulness",
    name: "Achtsamkeit für Geräusche",
    icon: "👂",
    category: ExerciseCategory.MINDFULNESS,
    subcategory: "Auditive Achtsamkeit",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine Meditation, bei der man 15 Minuten nur lauscht. Alle Klänge in der Umgebung (fernes Rauschen, Vogelzwitschern, das eigene Atmen) werden beobachtet, ohne sie zu benennen. Diese konzentrierte Auditiv-Achtsamkeit schult das im Moment Sein enorm. Gedanken, die kommen, lösen sich im Strom der Geräusche wieder auf. Nach einigen Minuten stellt sich oft tiefe Ruhe ein, denn der Geist ruht bei den Klängen. Diese Übung kann speziell für auditiv sensible Personen sehr entspannend sein, da sie den Hörsinn als Anker nutzt.",
    shortDescription: "Meditative Konzentration auf alle Umgebungsgeräusche",
    instructions: [
      "Setzen Sie sich bequem hin und schließen Sie die Augen",
      "Öffnen Sie Ihre Ohren für alle Geräusche um Sie herum",
      "Hören Sie fernes Rauschen, Vogelzwitschern, Ihr Atmen",
      "Benennen Sie die Geräusche nicht, beobachten Sie nur",
      "Lassen Sie Gedanken im Strom der Klänge auflösen",
      "Nutzen Sie Geräusche als Anker für die Gegenwart",
      "Spüren Sie, wie der Geist bei den Klängen zur Ruhe kommt",
      "Verweilen Sie 15 Minuten in dieser auditiven Achtsamkeit"
    ],
    benefits: [
      "Schulung des Im-Moment-Seins",
      "Auflösung von Gedanken im Klangstrom",
      "Tiefe Ruhe durch Geräusch-Fokus",
      "Nutzung des Hörsinns als Meditationsanker",
      "Besonders geeignet für auditiv sensible Personen"
    ],
    
    tags: ["Auditive Achtsamkeit", "Geräusche", "Hörsinn", "Ruhe", "Moment"],
    popularity: 71,
    effectiveness: 83,
    lastUpdated: "2024-01-15"
  },

  // Übung 76: Gedankenbeobachtung (Wolken)
  {
    id: "thought-observation-clouds",
    name: "Gedankenbeobachtung (Wolken)",
    icon: "☁️",
    category: ExerciseCategory.MEDITATION,
    subcategory: "Gedankenbeobachtung",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL, ActivityMode.VISUALIZATION],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.ANXIETY],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine Visualisierung während der Meditation: Man sitzt 10–15 Minuten und stellt sich vor, jeder aufkommende Gedanke wäre eine Wolke, die am geistigen Horizont vorüberzieht. Anstatt sich in Gedanken zu verstricken, übt man das Loslassen – die Wolken ziehen lassen. Diese Technik stammt aus der Akzeptanz- und Commitment-Therapie (ACT) und zielt darauf ab, kognitive Defusion zu erreichen. Effekt: Man identifiziert sich weniger mit stressigen Gedanken, was nachweislich die physiologische Stressreaktion reduziert.",
    shortDescription: "Visualisierung von Gedanken als vorbeiziehende Wolken",
    instructions: [
      "Setzen Sie sich bequem hin und schließen Sie die Augen",
      "Stellen Sie sich einen weiten Himmel vor",
      "Beobachten Sie jeden aufkommenden Gedanken",
      "Visualisieren Sie jeden Gedanken als eine Wolke",
      "Lassen Sie die Gedanken-Wolken vorüberziehen",
      "Verstricken Sie sich nicht in den Inhalt",
      "Bleiben Sie der Beobachter des Himmels",
      "Üben Sie das Loslassen für 10-15 Minuten"
    ],
    benefits: [
      "Kognitive Defusion (ACT-Therapie)",
      "Weniger Identifikation mit stressigen Gedanken",
      "Reduzierte physiologische Stressreaktion",
      "Übung im Loslassen",
      "Entwicklung einer Beobachter-Perspektive"
    ],
    
    tags: ["ACT", "Gedankenbeobachtung", "Wolken", "Defusion", "Loslassen"],
    popularity: 74,
    effectiveness: 87,
    lastUpdated: "2024-01-15"
  },

  // Übung 77: Meditation in völliger Stille
  {
    id: "silent-zen-meditation",
    name: "Meditation in völliger Stille",
    icon: "🔇",
    category: ExerciseCategory.MEDITATION,
    subcategory: "Zen-Meditation",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.ADVANCED,
    energyLevel: EnergyLevel.MIXED,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine stille Sitzmeditation ohne Anleitung für 15 Minuten, z.B. nach dem Zen-Prinzip (zazen). Dabei konzentriert man sich vielleicht auf die Haltung oder nur aufs Sein, ohne spezifische Methode. Absolute Stille kann zuerst ungewohnt sein, führt aber bei Fortsetzung zu einer konfrontativen Entspannung: Man sitzt den Stress quasi aus. Zen-Meister berichten, dass in der Stille der wahre Frieden liegt – moderne Neuroforschung zeigt jedenfalls, dass regelmäßige Stillmeditation das Ruhe-Netzwerk im Gehirn stärkt und die Stressverarbeitung verbessert.",
    shortDescription: "Stille Zen-Meditation ohne Anleitung oder Methode",
    instructions: [
      "Setzen Sie sich in eine aufrechte, stabile Position",
      "Schließen Sie die Augen oder blicken Sie weich nach unten",
      "Keine spezifische Technik - einfach nur dasitzen",
      "Konzentrieren Sie sich auf die Haltung oder das reine Sein",
      "Lassen Sie alle Gedanken und Gefühle kommen und gehen",
      "Sitzen Sie den Stress aus - konfrontative Entspannung",
      "Verweilen Sie 15 Minuten in völliger Stille",
      "Spüren Sie den Frieden in der Stille"
    ],
    benefits: [
      "Konfrontative Entspannung durch Aussitzen",
      "Entdeckung des wahren Friedens in der Stille",
      "Stärkung des Ruhe-Netzwerks im Gehirn",
      "Verbesserte Stressverarbeitung",
      "Entwicklung innerer Stabilität"
    ],
    
    tags: ["Zen", "Zazen", "Stille", "Ruhe-Netzwerk", "Konfrontativ"],
    popularity: 65,
    effectiveness: 90,
    lastUpdated: "2024-01-15"
  },

  // Übung 78: Bergsee-Imagination
  {
    id: "mountain-lake-imagination",
    name: "Bergsee-Imagination",
    icon: "🏔️",
    category: ExerciseCategory.VISUALIZATION,
    subcategory: "Fantasiereise",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.VISUALIZATION, ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ["Optional: Bergsee-Audio"],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine weitere Traumreise, z.B. an einen hochalpinen ruhigen Bergsee. Durch Variation der Imaginationsszenarien (Meer, Wald, Berge etc.) kann der Nutzer diejenigen finden, die für ihn am beruhigendsten sind. Jede Form von angeleiteter Entspannungsimagination unterstützt den Körper beim Runterschalten; Hauptsache, die Bilder sind positiv, friedlich und detailliert. (Diese Übung kann also als alternatives Skript zu Strand/Wald gesehen werden, um Vielfalt anzubieten.)",
    shortDescription: "Entspannungsreise zu einem ruhigen hochalpinen Bergsee",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Stellen Sie sich einen kristallklaren Bergsee vor",
      "Umgeben von majestätischen Bergen und blauem Himmel",
      "Spüren Sie die reine, kühle Bergluft",
      "Hören Sie das sanfte Plätschern des Wassers",
      "Sehen Sie Ihr Spiegelbild im stillen Wasser",
      "Spüren Sie die Ruhe und Erhabenheit der Berge",
      "Lassen Sie diese friedliche Szene 15 Minuten auf sich wirken"
    ],
    benefits: [
      "Alternative zu anderen Naturszenarien",
      "Positive und friedliche Bilderwelt",
      "Unterstützung beim körperlichen Runterschalten",
      "Detaillierte Entspannungsimagination",
      "Beruhigende Wirkung durch Bergszenarien"
    ],
    
    tags: ["Bergsee", "Fantasiereise", "Alpen", "Imagination", "Friedlich"],
    popularity: 76,
    effectiveness: 84,
    lastUpdated: "2024-01-15"
  },

  // Übung 79: Wolkenreise
  {
    id: "cloud-journey",
    name: "Wolkenreise",
    icon: "☁️",
    category: ExerciseCategory.VISUALIZATION,
    subcategory: "Fantasiereise",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.VISUALIZATION],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.BEFORE_SLEEP],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Ähnlich wie die Gedankenbeobachtung, jedoch stellt man sich vor, auf einer weichen Wolke zu liegen, die am Himmel dahingleitet. Das Gefühl von Schweben und Geborgenheit auf einer Wolke vermittelt tiefe Sicherheit – ideal für Menschen, die sich nach Leichtigkeit sehnen. 10 Minuten Wolkenfantasie können ein Gefühl wie ein Kurz-Schlaf auslösen. (Eignet sich auch gut vor dem Einschlafen, um alle schweren Gedanken ziehen zu lassen und im Siebten Himmel zu entspannen.)",
    shortDescription: "Fantasiereise auf einer weichen, schwebenden Wolke",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Stellen Sie sich vor, auf einer weichen Wolke zu liegen",
      "Spüren Sie, wie Sie sanft am Himmel dahingleiten",
      "Genießen Sie das Gefühl des Schwebens",
      "Fühlen Sie sich geborgen und sicher auf Ihrer Wolke",
      "Lassen Sie alle schweren Gedanken unter sich zurück",
      "Schweben Sie im siebten Himmel der Entspannung",
      "Verweilen Sie 10-15 Minuten in dieser Leichtigkeit"
    ],
    benefits: [
      "Gefühl von Schweben und Geborgenheit",
      "Tiefe Sicherheit und Leichtigkeit",
      "Kurz-Schlaf-ähnliche Entspannung",
      "Loslassen schwerer Gedanken",
      "Ideal vor dem Einschlafen"
    ],
    
    tags: ["Wolke", "Schweben", "Leichtigkeit", "Sicherheit", "Einschlafen"],
    popularity: 82,
    effectiveness: 85,
    lastUpdated: "2024-01-15"
  },

  // Übung 80: Wechselatmung (lang)
  {
    id: "alternate-nostril-breathing-long",
    name: "Wechselatmung (lang)",
    icon: "🌬️",
    category: ExerciseCategory.BREATHING,
    subcategory: "Pranayama",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.ACTIVE, ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Die in Level 2 vorgestellte Wechselatmung kann hier als längere Session (10 Minuten durchgehend) praktiziert werden. Durch das länger andauernde abwechselnde Atmen stabilisiert sich der Atemrhythmus nachhaltig; viele erleben einen meditativen Flow dabei. Die tiefgreifende Beruhigung zeigt sich oft in deutlich spürbarer Kühle an den Händen (Zeichen für Parasympathikus-Aktivierung) und einem ruhigen, klaren Geist nach der Übung.",
    shortDescription: "Erweiterte 10-minütige Wechselatmung für tiefen Flow",
    instructions: [
      "Setzen Sie sich aufrecht und bequem hin",
      "Verschließen Sie das rechte Nasenloch mit dem Daumen",
      "Atmen Sie 4 Sekunden durch das linke Nasenloch ein",
      "Verschließen Sie beide Nasenlöcher, halten Sie 2 Sekunden",
      "Öffnen Sie das rechte Nasenloch, atmen Sie 4 Sekunden aus",
      "Atmen Sie durch das rechte Nasenloch 4 Sekunden ein",
      "Wiederholen Sie den Zyklus 10 Minuten kontinuierlich",
      "Spüren Sie den meditativen Flow und die Kühle in den Händen"
    ],
    benefits: [
      "Nachhaltige Stabilisierung des Atemrhythmus",
      "Meditativer Flow-Zustand",
      "Parasympathikus-Aktivierung (Kühle in Händen)",
      "Ruhiger und klarer Geist",
      "Tiefgreifende Beruhigung"
    ],
    
    tags: ["Wechselatmung", "Pranayama", "Flow", "Parasympathikus", "Stabilisierung"],
    popularity: 77,
    effectiveness: 89,
    lastUpdated: "2024-01-15"
  },

  // Übung 81: EFT-Klopfakupressur
  {
    id: "eft-tapping",
    name: "EFT-Klopfakupressur",
    icon: "👆",
    category: ExerciseCategory.PHYSICAL,
    subcategory: "Akupressur",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.ACTIVE, ActivityMode.PHYSICAL, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [4, 9],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.FEAR],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.CRISIS],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    
    description: "Emotional Freedom Techniques: In ~10 Minuten bestimmte Akupressurpunkte leicht beklopfen (z.B. an Augenbrauen, unter der Nase, am Schlüsselbein), während man affirmierende Sätze spricht ('Auch wenn ich gestresst bin, akzeptiere ich mich voll und ganz.'). Diese Methode erscheint ungewöhnlich, doch Studien attestieren EFT signifikante Angst- und Stressreduktion bei diversen Gruppen. Durch das Klopfen werden vermutlich amygdaläre Stressreaktionen gedämpft und zugleich kognitive Muster umgeprägt. Für technikoffene Nutzer kann EFT eine wertvolle Tiefenentspannungsmethode sein.",
    shortDescription: "Klopfakupressur mit Affirmationen zur Stressreduktion",
    instructions: [
      "Identifizieren Sie Ihr aktuelles Stressgefühl (1-10 Skala)",
      "Klopfen Sie den Handkantenpunkt: 'Auch wenn ich gestresst bin, akzeptiere ich mich voll'",
      "Klopfen Sie Augenbraue: 'Dieser Stress'",
      "Klopfen Sie Augenaußenwinkel: 'All diese Anspannung'",
      "Klopfen Sie unter der Nase: 'Ich lasse los'",
      "Klopfen Sie das Kinn: 'Ich bin in Sicherheit'",
      "Klopfen Sie das Schlüsselbein: 'Ich entspanne mich'",
      "Wiederholen Sie 2-3 Runden, bewerten Sie Stress neu"
    ],
    benefits: [
      "Signifikante Angst- und Stressreduktion",
      "Dämpfung amygdalärer Stressreaktionen",
      "Umprägung kognitiver Muster",
      "Selbstakzeptanz und Entspannung",
      "Schnelle und messbare Ergebnisse"
    ],
    
    tags: ["EFT", "Klopfen", "Akupressur", "Amygdala", "Affirmation"],
    popularity: 69,
    effectiveness: 86,
    lastUpdated: "2024-01-15"
  },

  // Übung 82: Lichtreise
  {
    id: "light-journey-meditation",
    name: "Lichtreise",
    icon: "✨",
    category: ExerciseCategory.VISUALIZATION,
    subcategory: "Heilungsvisualisierung",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.VISUALIZATION, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [4, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.SADNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: true,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine geführte Meditation, in der man sich vorstellt, ein warmes, heilendes Licht bewege sich durch den Körper und entspanne dabei jede Region (ähnlich Body-Scan, aber mit Visualisierung). Diese Kombination aus Visualisierung und Körperentspannung nutzt zwei Kanäle gleichzeitig, um Stress abzubauen. Viele empfinden das imaginierte Licht als angenehm kribbelnd oder wärmend – ein Zeichen, dass die Muskeln locker lassen. Nach 10–15 Minuten Lichtreise fühlt man sich oft 'innerlich beleuchtet' und sehr ruhig.",
    shortDescription: "Heilendes Licht zur Entspannung durch den ganzen Körper führen",
    instructions: [
      "Legen Sie sich bequem hin und schließen Sie die Augen",
      "Stellen Sie sich ein warmes, goldenes Licht vor",
      "Lassen Sie dieses Licht bei Ihren Füßen beginnen",
      "Spüren Sie, wie es langsam durch Ihre Beine wandert",
      "Das Licht entspannt jede Region, die es berührt",
      "Führen Sie es durch Rumpf, Arme, Hals bis zum Kopf",
      "Spüren Sie Kribbeln oder Wärme als Entspannungszeichen",
      "Fühlen Sie sich am Ende 'innerlich beleuchtet'"
    ],
    benefits: [
      "Kombination aus Visualisierung und Körperentspannung",
      "Nutzung zweier Kanäle für Stressabbau",
      "Spürbare Kribbel- oder Wärmeempfindungen",
      "Lockerung der Muskeln",
      "Gefühl des 'innerlich beleuchtet' Seins"
    ],
    
    tags: ["Licht", "Heilung", "Visualisierung", "Body-Scan", "Wärme"],
    popularity: 80,
    effectiveness: 87,
    lastUpdated: "2024-01-15"
  },

  // Übung 83: Rückwärtszählen
  {
    id: "backward-counting",
    name: "Rückwärtszählen",
    icon: "🔢",
    category: ExerciseCategory.COGNITIVE,
    subcategory: "Mentale Fokussierung",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.MENTAL, ActivityMode.PASSIVE],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.BEFORE_SLEEP],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Eine einfache mentale Technik zum Runterkommen: Von 100 langsam rückwärts zählen (100…99…98…), verbunden mit dem Atem (z.B. pro Ausatem einen Zahlenschritt). Sollte man durcheinanderkommen, einfach wieder bei 100 beginnen. Diese monotone, aber nicht zu langweilige Beschäftigung wirkt fast hypnotisch – der Geist fährt seine Aktivität herunter. Oft stellt sich gegen Ende leichte Schläfrigkeit ein, ein gutes Zeichen für tiefe Entspannung.",
    shortDescription: "Hypnotisches Rückwärtszählen für mentale Beruhigung",
    instructions: [
      "Setzen oder legen Sie sich bequem hin",
      "Schließen Sie die Augen und atmen Sie ruhig",
      "Beginnen Sie bei 100 rückwärts zu zählen",
      "Verbinden Sie jeden Zahlenschritt mit einem Ausatem",
      "100 (ausatmen), 99 (ausatmen), 98 (ausatmen)...",
      "Wenn Sie durcheinanderkommen, beginnen Sie wieder bei 100",
      "Lassen Sie die monotone Beschäftigung hypnotisch wirken",
      "Spüren Sie, wie Ihr Geist zur Ruhe kommt"
    ],
    benefits: [
      "Fast hypnotische Wirkung",
      "Herunterfahren der Geistesaktivität",
      "Leichte Schläfrigkeit als Entspannungszeichen",
      "Einfache und zugängliche Technik",
      "Beruhigung des überaktiven Denkens"
    ],
    
    tags: ["Zählen", "Hypnotisch", "Monoton", "Schläfrigkeit", "Beruhigung"],
    popularity: 83,
    effectiveness: 82,
    lastUpdated: "2024-01-15"
  },

  // Übung 84: Wellenatmung
  {
    id: "wave-breathing",
    name: "Wellenatmung",
    icon: "🌊",
    category: ExerciseCategory.BREATHING,
    subcategory: "Metaphorische Atmung",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.VISUALIZATION],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Im Geiste mit dem Atem ein Bild verbinden: Beim Einatmen sich vorstellen, wie eine Welle am Strand anrollt, beim Ausatmen, wie sie sich zurückzieht. Dieses metaphorische Atmen in Wellen fördert einen langsamen, gleichmäßigen Atemfluss und verstärkt den Rhythmuscharakter (wichtig fürs Resonance Breathing). 10 Minuten Wellenatmung können sich anfühlen wie ein Kurzurlaub am Meer – viele berichten von einem entrückten, beruhigten Zustand, weil das Meeresbild so tröstlich wirkt.",
    shortDescription: "Atemrhythmus mit beruhigenden Meeresbildern verbinden",
    instructions: [
      "Setzen Sie sich bequem hin und schließen Sie die Augen",
      "Stellen Sie sich einen ruhigen Strand vor",
      "Beim Einatmen: Visualisieren Sie eine Welle, die anrollt",
      "Beim Ausatmen: Die Welle zieht sich sanft zurück",
      "Synchronisieren Sie Ihren Atem mit dem Wellenrhythmus",
      "Spüren Sie die gleichmäßigen, langsamen Bewegungen",
      "Lassen Sie sich von der Meeresstimmung tragen",
      "Genießen Sie 10 Minuten diesen mentalen Strandurlaub"
    ],
    benefits: [
      "Förderung langsamer, gleichmäßiger Atmung",
      "Verstärkung des Resonance Breathing",
      "Gefühl wie ein Kurzurlaub am Meer",
      "Entrückter, beruhigter Zustand",
      "Tröstliche Wirkung durch Meeresbilder"
    ],
    
    tags: ["Wellen", "Meer", "Metaphorisch", "Resonance Breathing", "Strand"],
    popularity: 85,
    effectiveness: 86,
    lastUpdated: "2024-01-15"
  },

  // Übung 85: Duft-Meditation
  {
    id: "scent-meditation",
    name: "Duft-Meditation",
    icon: "🌸",
    category: ExerciseCategory.MINDFULNESS,
    subcategory: "Olfaktorische Achtsamkeit",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.ANXIETY, EmotionType.RESTLESSNESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: ["Duftlampe, Räucherstäbchen oder ätherisches Öl"],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "Ein angenehmes Aroma (Lavendel, Sandelholz o.Ä.) verwenden und 10–15 Minuten die Aufmerksamkeit auf diesen Duft richten. Man könnte eine Duftlampe, Räucherstäbchen oder einen Tropfen Öl auf einem Tuch nutzen. Der Geruchssinn ist direkt mit emotionalen Hirnarealen verknüpft – ein beruhigender Duft kann daher sehr schnell Stressgefühle lindern. In dieser Meditation nimmt man bewusst alle Nuancen des Duftes wahr und verankert sich darüber im Moment. (Lavendel z.B. zeigte in Untersuchungen angstlösende Effekte bei Inhalation.)",
    shortDescription: "Meditative Konzentration auf beruhigende Düfte",
    instructions: [
      "Wählen Sie einen beruhigenden Duft (Lavendel, Sandelholz)",
      "Entzünden Sie Räucherstäbchen oder Duftlampe",
      "Setzen Sie sich bequem hin und schließen Sie die Augen",
      "Richten Sie Ihre volle Aufmerksamkeit auf den Duft",
      "Nehmen Sie alle Nuancen des Aromas bewusst wahr",
      "Lassen Sie sich vom Duft im Moment verankern",
      "Spüren Sie, wie der Geruch beruhigend wirkt",
      "Verweilen Sie 10-15 Minuten in dieser Duftmeditation"
    ],
    benefits: [
      "Direkte Verbindung zu emotionalen Hirnarealen",
      "Schnelle Linderung von Stressgefühlen",
      "Verankerung im gegenwärtigen Moment",
      "Angstlösende Effekte (besonders Lavendel)",
      "Multisensorische Entspannung"
    ],
    
    tags: ["Duft", "Lavendel", "Olfaktorisch", "Ätherische Öle", "Moment"],
    popularity: 78,
    effectiveness: 84,
    lastUpdated: "2024-01-15"
  },

  // Übung 86: Himmel beobachten
  {
    id: "sky-gazing",
    name: "Himmel beobachten",
    icon: "🌌",
    category: ExerciseCategory.MINDFULNESS,
    subcategory: "Naturbeobachtung",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.OUTDOOR, LocationType.HOME],
    
    modes: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.OVERWHELM, EmotionType.RESTLESSNESS],
    situations: [SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: true,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    
    description: "Sich draußen oder am Fenster 10 Minuten den Himmel ansehen (tags Wolken, nachts Sterne) und dabei ruhig atmen. Das weite Himmelsbild relativiert häufig die eigenen Sorgen ('Die Welt ist größer als mein Problem'). Außerdem wirkt monotones Wolkenziehen ähnlich beruhigend wie ein Mantra. Studien zum sogenannten Aufmerksamkeitsrestorations-Effekt zeigen, dass solches entspanntes In-die-Ferne-Schauen geistige Ermüdung und Stress reduziert. Nach dieser Übung fühlt man sich oft inspiriert und gleichzeitig gelassen.",
    shortDescription: "Entspannte Himmelsbetrachtung für Perspektive und Ruhe",
    instructions: [
      "Gehen Sie nach draußen oder an ein Fenster",
      "Blicken Sie entspannt in den Himmel",
      "Beobachten Sie Wolken (tags) oder Sterne (nachts)",
      "Atmen Sie dabei ruhig und gleichmäßig",
      "Lassen Sie das weite Himmelsbild auf sich wirken",
      "Spüren Sie: 'Die Welt ist größer als mein Problem'",
      "Beobachten Sie das monotone Wolkenziehen",
      "Fühlen Sie sich inspiriert und gelassen zugleich"
    ],
    benefits: [
      "Relativierung der eigenen Sorgen",
      "Beruhigende Wirkung wie ein Mantra",
      "Aufmerksamkeitsrestorations-Effekt",
      "Reduktion geistiger Ermüdung",
      "Inspiration und Gelassenheit"
    ],
    
    tags: ["Himmel", "Wolken", "Sterne", "Perspektive", "Aufmerksamkeitsrestoration"],
    popularity: 81,
    effectiveness: 83,
    lastUpdated: "2024-01-15"
  },

  // Übung 87: Mantra-Chanting
  {
    id: "mantra-chanting",
    name: "Mantra-Chanting",
    icon: "🕉️",
    category: ExerciseCategory.MEDITATION,
    subcategory: "Klang-Meditation",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.ACTIVE, ActivityMode.AUDIO],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [3, 8],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: true,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "10 Minuten lang ein Mantra oder einen Klang wiederholen, z.B. laut oder innerlich 'Om' intonieren. Das rhythmische Singen eines einfachen Lauts verlangsamt die Atmung automatisch und lässt Vibration im Brustraum entstehen – was beides sehr beruhigend wirkt. In Studien über Kirtan Kriya (Mantra-Meditation) wurden signifikante Stressreduktionen und stimmungsaufhellende Effekte festgestellt. Wichtig ist, einen bequemen Sitz zu haben und sich voll auf Klang und Resonanz einzulassen. Nach dem Chanting fühlt man sich häufig zentriert und energiegeladen zugleich (ohne stressig zu sein).",
    shortDescription: "Rhythmisches Singen von Mantras für Beruhigung und Energie",
    instructions: [
      "Setzen Sie sich bequem und aufrecht hin",
      "Wählen Sie ein einfaches Mantra wie 'Om' oder 'Ah'",
      "Beginnen Sie das Mantra laut oder innerlich zu singen",
      "Spüren Sie die Vibration im Brustraum",
      "Lassen Sie die Atmung durch das Singen verlangsamen",
      "Konzentrieren Sie sich voll auf Klang und Resonanz",
      "Wiederholen Sie rhythmisch für 10 Minuten",
      "Fühlen Sie sich zentriert und energiegeladen"
    ],
    benefits: [
      "Automatische Verlangsamung der Atmung",
      "Beruhigende Vibration im Brustraum",
      "Signifikante Stressreduktion",
      "Stimmungsaufhellende Effekte",
      "Zentrierung und Energetisierung"
    ],
    
    tags: ["Mantra", "Om", "Chanting", "Vibration", "Kirtan Kriya"],
    popularity: 74,
    effectiveness: 87,
    lastUpdated: "2024-01-15"
  },

  // Übung 88: Positive Erinnerung auskosten
  {
    id: "savoring-positive-memory",
    name: "Positive Erinnerung auskosten",
    icon: "💝",
    category: ExerciseCategory.COGNITIVE,
    subcategory: "Positive Psychologie",
    
    minTime: 10,
    maxTime: 15,
    locations: [LocationType.HOME, LocationType.ANY],
    
    modes: [ActivityMode.MENTAL, ActivityMode.VISUALIZATION],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.MEDIUM,
    
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.SADNESS, EmotionType.LONELINESS],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.PREVENTION],
    
    constraints: {
      requiresPrivacy: false,
      requiresPhysicalSpace: false,
      requiresQuiet: true,
      requiresItems: [],
      forbiddenInPublic: false,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: false,
      requiresEyesClosed: true,
      requiresWriting: false
    },
    
    description: "In Gedanken eine wunderschöne Erinnerung durchleben, als würde sie gerade passieren. Mindestens 10 Minuten alle Details dieser positiven Erfahrung ausmalen (Personen, Umgebung, Gefühle). Dieses sogenannte Savoring verstärkt positive Emotionen im Jetzt – und solche positiven Emotionen sind mit reduzierten Stressreaktionen verbunden. Fredricksons Forschung zur Broaden-and-Build-Theorie legt nahe, dass das Kultivieren von Freude und Dankbarkeit (z.B. durch Erinnerung) auf lange Sicht Ressourcen aufbaut. Kurzfristig merkt man: Man kann nicht gleichzeitig in einer schönen Vergangenheit schwelgen und maximal gestresst sein – der Körper entscheidet sich für die Entspannung.",
    shortDescription: "Intensive Wiedererlebung einer wunderschönen Erinnerung",
    instructions: [
      "Setzen Sie sich bequem hin und schließen Sie die Augen",
      "Denken Sie an eine besonders schöne Erinnerung",
      "Durchleben Sie diese Erfahrung, als würde sie jetzt passieren",
      "Malen Sie alle Details aus: Personen, Orte, Gefühle",
      "Verweilen Sie bei den positiven Emotionen",
      "Spüren Sie die Freude und Dankbarkeit",
      "Lassen Sie diese Gefühle 10-15 Minuten wirken",
      "Spüren Sie, wie Stress der Entspannung weicht"
    ],
    benefits: [
      "Verstärkung positiver Emotionen im Jetzt",
      "Reduzierte Stressreaktionen",
      "Aufbau langfristiger Ressourcen (Broaden-and-Build)",
      "Kultivierung von Freude und Dankbarkeit",
      "Unvereinbarkeit von Schwelgen und Stress"
    ],
    
    tags: ["Savoring", "Positive Emotionen", "Broaden-and-Build", "Erinnerung", "Dankbarkeit"],
    popularity: 86,
    effectiveness: 88,
    lastUpdated: "2024-01-15"
  },

  // Übung 89: Selbst-Fußmassage
  {
    id: "self-foot-massage",
    name: "Selbst-Fußmassage",
    icon: "🦶",
    category: ExerciseCategory.PHYSICAL,
    subcategory: "Massage/Reflexzonen",
    
    minTime: 12,
    maxTime: 18,
    locations: [LocationType.HOME, LocationType.BED],
    
    modes: [ActivityMode.ACTIVE, ActivityMode.PHYSICAL],
    difficulty: DifficultyLevel.BEGINNER,
    energyLevel: EnergyLevel.LOW,
    
    stressRange: [3, 7],
    targetEmotions: [EmotionType.STRESS, EmotionType.RESTLESSNESS, EmotionType.OVERWHELM],
    situations: [SituationType.HOME, SituationType.BREAK, SituationType.BEFORE_SLEEP],
    
    constraints: {
      requiresPrivacy: true,
      requiresPhysicalSpace: false,
      requiresQuiet: false,
      requiresItems: ["Optional: Igelball oder Faszienball"],
      forbiddenInPublic: true,
      needsHandsFree: false,
      requiresLyingDown: false,
      requiresStanding: false,
      makesNoise: false,
      requiresUndressing: true,
      requiresEyesClosed: false,
      requiresWriting: false
    },
    
    description: "Eine 15-minütige Fußmassage (Selbstmassage oder mit Igelball/Faszienball unter der Fußsohle). In den Füßen enden viele Nerven; durch die Massage werden Reflexzonen stimuliert, was laut Forschung den Vagusnerv aktiviert und den Blutdruck senken hilft. Viele empfinden große Beruhigung nach einer Fußmassage – einerseits durch den Druckabbau in den oft vernachlässigten Füßen, andererseits reflektorisch im ganzen Körper. Diese Übung ist sehr angenehm vor dem Schlafengehen oder in einer Ruhepause, da sie erdet und Körpergefühl gibt.",
    shortDescription: "Entspannende Selbstmassage der Füße mit Reflexzonen-Stimulation",
    instructions: [
      "Setzen Sie sich bequem hin und ziehen Sie Schuhe und Socken aus",
      "Beginnen Sie mit sanften kreisenden Bewegungen an den Zehen",
      "Massieren Sie das Fußgewölbe mit beiden Daumen",
      "Optional: Rollen Sie einen Ball unter der Fußsohle",
      "Arbeiten Sie sich von den Zehen zur Ferse vor",
      "Stimulieren Sie bewusst verschiedene Reflexzonen",
      "Massieren Sie beide Füße jeweils 7-8 Minuten",
      "Spüren Sie die Entspannung im ganzen Körper"
    ],
    benefits: [
      "Stimulation von Reflexzonen",
      "Aktivierung des Vagusnervs",
      "Senkung des Blutdrucks",
      "Druckabbau in vernachlässigten Füßen",
      "Reflektorische Beruhigung des ganzen Körpers",
      "Erdung und verbessertes Körpergefühl"
    ],
    
    tags: ["Fußmassage", "Reflexzonen", "Vagusnerv", "Erdung", "Körpergefühl"],
    popularity: 79,
    effectiveness: 85,
    lastUpdated: "2024-01-15"
  },

];

// Intelligent Exercise Matching Algorithm mit mehrstufigem Filtersystem
export class ExerciseRecommendationEngine {
  
  static findBestMatches(
    userAnswers: UserAnswers, 
    count: number = 3
  ): ExerciseScore[] {
    
    // STUFE 1: Harte physische Ausschlusskriterien
    const physicallyPossible = EXERCISE_DATABASE.filter(exercise => 
      this.isPhysicallyPossible(exercise, userAnswers)
    );
    
    if (physicallyPossible.length === 0) {
      console.warn('Keine physisch möglichen Übungen gefunden - Fallback auf alle');
      return this.scoreAndSort(EXERCISE_DATABASE, userAnswers, count);
    }
    
    // STUFE 2: Sozial/Kontext-kompatible Übungen
    const contextCompatible = physicallyPossible.filter(exercise =>
      this.isSociallyAcceptable(exercise, userAnswers)
    );
    
    if (contextCompatible.length === 0) {
      console.warn('Keine kontextkompatiblen Übungen - nutze physisch mögliche');
      return this.scoreAndSort(physicallyPossible, userAnswers, count);
    }
    
    // STUFE 3: Zeit-realistische Übungen
    const timeRealistic = contextCompatible.filter(exercise =>
      this.isTimeRealistic(exercise, userAnswers)
    );
    
    const finalCandidates = timeRealistic.length > 0 ? timeRealistic : contextCompatible;
    
    // STUFE 4: Intelligente Gewichtung der verbleibenden Kandidaten
    return this.scoreAndSort(finalCandidates, userAnswers, count);
  }
  
  // === HARTE FILTER (Boolean-Checks) ===
  
  private static isPhysicallyPossible(exercise: Exercise, userAnswers: UserAnswers): boolean {
    const { constraints } = exercise;
    const { location } = userAnswers;
    
    // Location-spezifische Ausschlüsse
    switch (location) {
      case LocationType.DESK:
        if (constraints.requiresLyingDown) return false;
        if (constraints.requiresUndressing) return false;
        if (constraints.requiresItems.some(item => 
          ['Eiswürfel', 'Gefrierschrank', 'Bad', 'Bett'].includes(item)
        )) return false; // Büro = semi-öffentlich
        break;
        
      case LocationType.PUBLIC:
        if (constraints.forbiddenInPublic) return false;
        if (constraints.requiresPrivacy) return false;
        if (constraints.requiresUndressing) return false;
        if (constraints.requiresLyingDown) return false;
        if (constraints.makesNoise) return false;
        if (constraints.requiresEyesClosed) return false; // Sicherheit
        if (constraints.requiresItems.length > 0) return false; // Keine Gegenstände verfügbar
        break;
        
      case LocationType.CAR:
        if (constraints.needsHandsFree) return false; // Hände am Lenkrad
        if (constraints.requiresPhysicalSpace) return false;
        if (constraints.requiresLyingDown) return false;
        if (constraints.requiresStanding) return false;
        if (constraints.requiresEyesClosed) return false; // Sicherheit beim Fahren
        if (constraints.requiresItems.length > 0) return false;
        break;
        
      case LocationType.BED:
        if (constraints.requiresStanding) return false;
        if (constraints.requiresPhysicalSpace) return false; // Begrenzt im Bett
        break;
        
      case LocationType.OUTDOOR:
        if (constraints.requiresQuiet && constraints.makesNoise) return false;
        if (constraints.requiresPrivacy) return false;
        if (constraints.requiresLyingDown) return false; // Hygiene/Komfort
        if (constraints.requiresItems.some(item => 
          ['Eiswürfel', 'Gefrierschrank', 'Bad', 'Bett', 'Stift', 'Papier'].includes(item)
        )) return false;
        break;
        
      case LocationType.HOME:
        // Zu Hause ist fast alles möglich - nur logische Checks
        break;
    }
    
    return true;
  }
  
  private static isSociallyAcceptable(exercise: Exercise, userAnswers: UserAnswers): boolean {
    const { constraints } = exercise;
    const { location } = userAnswers;
    
    // Emotionale/private Übungen nur in passenden Umgebungen
    if (constraints.requiresPrivacy) {
      if (![LocationType.HOME, LocationType.BED].includes(location)) {
        return false;
      }
    }
    
    // Schreibübungen brauchen ruhige Umgebung
    if (constraints.requiresWriting) {
      if ([LocationType.PUBLIC, LocationType.CAR, LocationType.OUTDOOR].includes(location)) {
        return false;
      }
    }
    
    return true;
  }
  
  private static isTimeRealistic(exercise: Exercise, userAnswers: UserAnswers): boolean {
    const { timeAvailable } = userAnswers;
    
    // Sehr harte Zeit-Grenzen
    if (timeAvailable < exercise.minTime * 0.7) {
      return false; // Zu wenig Zeit auch mit Abkürzung
    }
    
    // Übertrieben lange Übungen bei kurzer Zeit
    if (timeAvailable <= 2 && exercise.minTime > 5) {
      return false;
    }
    
    return true;
  }
  
  // === INTELLIGENTE GEWICHTUNG ===
  
  private static scoreAndSort(
    exercises: Exercise[], 
    userAnswers: UserAnswers, 
    count: number
  ): ExerciseScore[] {
    const scores = exercises.map(exercise => {
      const score = this.calculateExerciseScore(exercise, userAnswers);
      return score;
    });

    return scores
      .sort((a, b) => b.score - a.score)
      .slice(0, count);
  }

  private static calculateExerciseScore(
    exercise: Exercise, 
    userAnswers: UserAnswers
  ): ExerciseScore {
    let totalScore = 0;
    const reasons: string[] = [];
    
    // 1. Situationsanalyse (35%)
    const situationMatch = this.calculateSituationMatch(exercise, userAnswers);
    totalScore += situationMatch * 0.35;
    if (situationMatch > 0.7) reasons.push(`Perfekt für deine aktuelle Situation`);
    
    // 2. Stress-Energie Balance (25%)
    const stressEnergyMatch = this.calculateStressEnergyMatch(exercise, userAnswers);
    totalScore += stressEnergyMatch * 0.25;
    if (stressEnergyMatch > 0.8) reasons.push(`Ideal für dein Stress-/Energielevel`);
    
    // 3. Zeit-Verfügbarkeit (20%)
    const timeMatch = this.calculateTimeMatch(exercise, userAnswers.timeAvailable);
    totalScore += timeMatch * 0.20;
    
    // 4. Ort & Aktivitätsmodus (15%)
    const locationModeMatch = this.calculateLocationModeMatch(exercise, userAnswers);
    totalScore += locationModeMatch * 0.15;
    
    // 5. Persönliche Präferenzen (5%)
    const personalMatch = this.calculatePersonalMatch(exercise, userAnswers);
    totalScore += personalMatch * 0.05;
    
    // NEUE: Psychologische Faktoren
    const motivationMatch = this.calculateMotivationMatch(exercise, userAnswers);
    const moodMatch = this.calculateMoodMatch(exercise, userAnswers);
    const capacityMatch = this.calculateCapacityMatch(exercise, userAnswers);
    const copingStyleMatch = this.calculateCopingStyleMatch(exercise, userAnswers);
    const socialMatch = this.calculateSocialMatch(exercise, userAnswers);
    
    // Bonus-Faktoren
    const varietyBonus = this.calculateVarietyBonus(exercise, userAnswers.previousExercises);
    totalScore += varietyBonus;
    
    return {
      exercise,
      score: totalScore,
      reasons,
      matchFactors: {
        timeMatch,
        locationMatch: locationModeMatch,
        modeMatch: locationModeMatch, // Combined
        stressMatch: stressEnergyMatch,
        emotionMatch: situationMatch, // Combined with situation
        popularityBonus: personalMatch,
        varietyBonus,
        // NEUE: Psychologische Matching-Faktoren
        motivationMatch,
        moodMatch,
        capacityMatch,
        copingStyleMatch,
        socialMatch
      }
    };
  }
  
  // === NEUE SCORING METHODEN ===
  
  private static calculateSituationMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { stressLevel, currentEmotion, situation } = userAnswers;
    
    // Erkennung der tatsächlichen Situation basierend auf Stress + Kontext
    let actualSituation: SituationType;
    
    if (stressLevel >= 8) {
      actualSituation = SituationType.CRISIS;
    } else if (stressLevel <= 3 && situation !== SituationType.WORK) {
      actualSituation = SituationType.PREVENTION;
    } else if (situation) {
      actualSituation = situation;
    } else if (stressLevel >= 5) {
      actualSituation = SituationType.WORK; // Default bei mittlerem Stress
    } else {
      actualSituation = SituationType.BREAK;
    }
    
    // Direkter Match
    if (exercise.situations.includes(actualSituation)) {
      return 1.0;
    }
    
    // Emotions-Match als Fallback
    if (currentEmotion && exercise.targetEmotions.includes(currentEmotion)) {
      return 0.8;
    }
    
    // Verwandte Situationen
    const situationCompatibility: Record<SituationType, SituationType[]> = {
      [SituationType.CRISIS]: [SituationType.WORK],
      [SituationType.WORK]: [SituationType.BREAK],
      [SituationType.BREAK]: [SituationType.PREVENTION],
      [SituationType.PREVENTION]: [SituationType.HOME],
      [SituationType.HOME]: [SituationType.BEFORE_SLEEP],
      [SituationType.BEFORE_SLEEP]: [SituationType.HOME],
      [SituationType.MORNING]: [SituationType.HOME],
      [SituationType.COMMUTE]: [SituationType.WORK],
      [SituationType.SOCIAL]: [SituationType.WORK],
      [SituationType.PUBLIC]: [SituationType.SOCIAL, SituationType.WORK]
    };
    
    const compatible = situationCompatibility[actualSituation] || [];
    if (exercise.situations.some(sit => compatible.includes(sit))) {
      return 0.6;
    }
    
    return 0.3;
  }
  
  private static calculateStressEnergyMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { stressLevel, energyLevel } = userAnswers;
    const [minStress, maxStress] = exercise.stressRange;
    
    // Stress-Match
    let stressScore = 0;
    if (stressLevel >= minStress && stressLevel <= maxStress) {
      stressScore = 1.0;
    } else {
      const distance = stressLevel < minStress 
        ? minStress - stressLevel 
        : stressLevel - maxStress;
      stressScore = Math.max(0.1, 1 - (distance / 5));
    }
    
    // Energie-Match
    let energyScore = 0.7; // Default
    if (energyLevel) {
      if (exercise.energyLevel === EnergyLevel.MIXED) {
        energyScore = 1.0;
      } else if (exercise.energyLevel === energyLevel) {
        energyScore = 1.0;
      } else {
        // Logische Kombinationen
        const energyLogic: Record<string, number> = {
          [`${EnergyLevel.LOW}_${EnergyLevel.MEDIUM}`]: 0.7,
          [`${EnergyLevel.MEDIUM}_${EnergyLevel.HIGH}`]: 0.7,
          [`${EnergyLevel.LOW}_${EnergyLevel.HIGH}`]: 0.3
        };
        
        const key = `${energyLevel}_${exercise.energyLevel}`;
        energyScore = energyLogic[key] || energyLogic[`${exercise.energyLevel}_${energyLevel}`] || 0.4;
      }
    }
    
    return (stressScore * 0.7) + (energyScore * 0.3);
  }
  
  private static calculateTimeMatch(exercise: Exercise, availableTime: number): number {
    if (availableTime >= exercise.minTime && availableTime <= exercise.maxTime) {
      return 1.0; // Perfect match
    }
    if (availableTime >= exercise.minTime) {
      return 0.9; // User has more time than needed - good
    }
    if (availableTime >= exercise.minTime * 0.8) {
      return 0.7; // Can be shortened
    }
    return 0.2; // Too tight
  }
  
  private static calculateLocationModeMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { location, mode } = userAnswers;
    
    // Location Match
    let locationScore = 0;
    if (exercise.locations.includes(LocationType.ANY)) {
      locationScore = 1.0;
    } else if (exercise.locations.includes(location)) {
      locationScore = 1.0;
    } else {
      locationScore = 0.5; // Passed physical filter, so partially compatible
    }
    
    // Mode Match
    let modeScore = 0;
    if (exercise.modes.includes(ActivityMode.ANY)) {
      modeScore = 1.0;
    } else if (exercise.modes.includes(mode)) {
      modeScore = 1.0;
    } else {
      // Mode compatibility
      const modeCompatibility: Record<ActivityMode, ActivityMode[]> = {
        [ActivityMode.PASSIVE]: [ActivityMode.AUDIO, ActivityMode.MENTAL],
        [ActivityMode.ACTIVE]: [ActivityMode.PHYSICAL],
        [ActivityMode.AUDIO]: [ActivityMode.PASSIVE],
        [ActivityMode.WRITING]: [ActivityMode.MENTAL],
        [ActivityMode.VISUALIZATION]: [ActivityMode.PASSIVE, ActivityMode.MENTAL],
        [ActivityMode.PHYSICAL]: [ActivityMode.ACTIVE],
        [ActivityMode.MENTAL]: [ActivityMode.WRITING, ActivityMode.VISUALIZATION],
        [ActivityMode.ANY]: []
      };
      
      const compatible = modeCompatibility[mode] || [];
      modeScore = exercise.modes.some(exerciseMode => compatible.includes(exerciseMode)) ? 0.6 : 0.3;
    }
    
    return (locationScore * 0.6) + (modeScore * 0.4);
  }
  
  private static calculatePersonalMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { preferences } = userAnswers;
    let score = exercise.popularity / 100; // Base popularity
    
    if (preferences) {
      // Avoid categories
      if (preferences.avoidCategories?.includes(exercise.category)) {
        score *= 0.3;
      }
      
      // Favorite categories
      if (preferences.favoriteCategories?.includes(exercise.category)) {
        score *= 1.5;
      }
      
      // Difficulty preference
      if (preferences.maxDifficulty) {
        const difficultyOrder = [DifficultyLevel.BEGINNER, DifficultyLevel.INTERMEDIATE, DifficultyLevel.ADVANCED];
        const userMaxIndex = difficultyOrder.indexOf(preferences.maxDifficulty);
        const exerciseIndex = difficultyOrder.indexOf(exercise.difficulty);
        
        if (exerciseIndex > userMaxIndex) {
          score *= 0.5; // Too difficult
        }
      }
    }
    
    return Math.min(score, 1.0);
  }

  private static calculateVarietyBonus(exercise: Exercise, previousExercises?: string[]): number {
    if (!previousExercises || previousExercises.length === 0) return 0;
    
    // Encourage variety by reducing score for recently used exercises
    if (previousExercises.includes(exercise.id)) {
      const position = previousExercises.indexOf(exercise.id);
      return -0.3 + (position * 0.1); // Recently used = bigger penalty
    }
    
    // Small bonus for variety
    return 0.05;
  }

  // ===== NEUE: PSYCHOLOGISCHE MATCHING-METHODEN =====

  private static calculateMotivationMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { motivation } = userAnswers;
    if (!motivation) return 0.7; // Neutral wenn nicht angegeben
    
    // Bei niedriger Motivation: passive, kurze Übungen bevorzugen
    if (motivation <= MotivationLevel.LOW) {
      if (exercise.modes.includes(ActivityMode.PASSIVE) && exercise.maxTime <= 5) {
        return 1.0;
      }
      if (exercise.difficulty === DifficultyLevel.BEGINNER) {
        return 0.8;
      }
      return 0.4; // Niedrige Motivation → schwierige Übungen vermeiden
    }
    
    // Bei hoher Motivation: anspruchsvollere Übungen erlauben
    if (motivation >= MotivationLevel.HIGH) {
      if (exercise.difficulty === DifficultyLevel.ADVANCED) {
        return 1.0;
      }
      if (exercise.modes.includes(ActivityMode.ACTIVE)) {
        return 0.9;
      }
    }
    
    return 0.7; // Mittlere Motivation → neutral
  }

  private static calculateMoodMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { mood } = userAnswers;
    if (!mood) return 0.7; // Neutral wenn nicht angegeben
    
    // Bei sehr schlechter Stimmung: sanfte, beruhigende Übungen
    if (mood === MoodType.VERY_BAD || mood === MoodType.BAD) {
      if (exercise.category === ExerciseCategory.BREATHING || 
          exercise.category === ExerciseCategory.RELAXATION) {
        return 1.0;
      }
      if (exercise.targetEmotions.includes(EmotionType.SADNESS) ||
          exercise.targetEmotions.includes(EmotionType.ANXIETY)) {
        return 0.9;
      }
      return 0.5; // Aktive Übungen bei schlechter Stimmung vermeiden
    }
    
    // Bei guter Stimmung: energiegeladene Übungen erlauben
    if (mood === MoodType.GOOD || mood === MoodType.VERY_GOOD) {
      if (exercise.energyLevel === EnergyLevel.HIGH ||
          exercise.category === ExerciseCategory.ENERGY) {
        return 1.0;
      }
      if (exercise.modes.includes(ActivityMode.ACTIVE)) {
        return 0.9;
      }
    }
    
    return 0.7; // Neutrale Stimmung → alle Übungen möglich
  }

  private static calculateCapacityMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { mentalCapacity, physicalComfort } = userAnswers;
    
    let score = 0.7; // Default
    
    // Geistige Kapazität berücksichtigen
    if (mentalCapacity !== undefined) {
      if (mentalCapacity <= 3) {
        // Niedrige geistige Kapazität → einfache Übungen
        if (exercise.difficulty === DifficultyLevel.BEGINNER) {
          score += 0.2;
        }
        if (exercise.modes.includes(ActivityMode.PASSIVE)) {
          score += 0.1;
        }
      } else if (mentalCapacity >= 8) {
        // Hohe geistige Kapazität → komplexere Übungen erlaubt
        if (exercise.category === ExerciseCategory.COGNITIVE ||
            exercise.category === ExerciseCategory.MEDITATION) {
          score += 0.2;
        }
      }
    }
    
    // Körperliches Wohlbefinden berücksichtigen
    if (physicalComfort !== undefined) {
      if (physicalComfort <= 3) {
        // Niedrige körperliche Befindlichkeit → sanfte Übungen
        if (exercise.modes.includes(ActivityMode.PASSIVE) ||
            exercise.category === ExerciseCategory.BREATHING) {
          score += 0.2;
        }
        if (exercise.modes.includes(ActivityMode.PHYSICAL)) {
          score -= 0.3; // Körperliche Übungen vermeiden
        }
      }
    }
    
    return Math.min(Math.max(score, 0.1), 1.0);
  }

  private static calculateCopingStyleMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { copingStyle } = userAnswers;
    if (!copingStyle) return 0.7; // Neutral wenn nicht angegeben
    
    switch (copingStyle) {
      case StresscopingStyle.ACTIVE:
        if (exercise.category === ExerciseCategory.COGNITIVE ||
            exercise.modes.includes(ActivityMode.ACTIVE)) {
          return 1.0;
        }
        break;
        
      case StresscopingStyle.EMOTIONAL:
        if (exercise.category === ExerciseCategory.MINDFULNESS ||
            exercise.category === ExerciseCategory.MEDITATION) {
          return 1.0;
        }
        break;
        
      case StresscopingStyle.AVOIDANT:
        if (exercise.category === ExerciseCategory.RELAXATION ||
            exercise.modes.includes(ActivityMode.PASSIVE)) {
          return 1.0;
        }
        break;
        
      case StresscopingStyle.SOCIAL:
        if (exercise.category === ExerciseCategory.SOCIAL) {
          return 1.0;
        }
        break;
        
      case StresscopingStyle.COGNITIVE:
        if (exercise.category === ExerciseCategory.COGNITIVE ||
            exercise.category === ExerciseCategory.VISUALIZATION) {
          return 1.0;
        }
        break;
    }
    
    return 0.6;
  }

  private static calculateSocialMatch(exercise: Exercise, userAnswers: UserAnswers): number {
    const { socialPreference } = userAnswers;
    if (!socialPreference) return 0.7; // Neutral wenn nicht angegeben
    
    switch (socialPreference) {
      case 'alone':
        // Bevorzugt alleine → individuelle Übungen
        if (exercise.category === ExerciseCategory.MEDITATION ||
            exercise.category === ExerciseCategory.BREATHING) {
          return 1.0;
        }
        if (exercise.category === ExerciseCategory.SOCIAL) {
          return 0.3; // Soziale Übungen vermeiden
        }
        break;
        
      case 'guided':
        // Bevorzugt geführte Übungen → strukturierte Anleitungen
        if (exercise.audioUrl || exercise.videoUrl) {
          return 1.0;
        }
        if (exercise.instructions.length > 3) {
          return 0.9; // Detaillierte Anweisungen
        }
        break;
        
      case 'group':
        // Bevorzugt Gruppenaktivitäten → soziale Übungen
        if (exercise.category === ExerciseCategory.SOCIAL) {
          return 1.0;
        }
        break;
    }
    
    return 0.7;
  }
}

export default EXERCISE_DATABASE; 