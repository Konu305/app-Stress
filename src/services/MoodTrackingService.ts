import { MoodType, MotivationLevel, StresscopingStyle } from '../data/exerciseDatabase';

export interface MoodEntry {
  id: string;
  timestamp: number;
  date: string; // YYYY-MM-DD format
  
  // Psychologische Faktoren
  mood?: MoodType;
  motivation?: MotivationLevel;
  mentalCapacity?: number;        // 1-10
  physicalComfort?: number;       // 1-10
  socialPreference?: 'alone' | 'guided' | 'group';
  copingStyle?: StresscopingStyle;
  
  // Kontext
  stressLevel: number;            // 1-10
  exerciseId?: string;            // Welche Übung wurde durchgeführt
  exerciseCompleted: boolean;     // Wurde eine Übung abgeschlossen
  exerciseDuration?: number;      // Dauer in Minuten
  exerciseRating?: number;        // 1-5 Bewertung der Übung
  
  // Notizen
  notes?: string;
  tags?: string[];
}

export interface MoodAnalytics {
  averageMood: number;
  averageMotivation: number;
  averageStress: number;
  exerciseCompletionRate: number;
  totalSessions: number;
  streak: number;
  topCopingStyle?: StresscopingStyle;
  insights: string[];
}

export class MoodTrackingService {
  private static readonly STORAGE_KEY = 'stressApp_moodEntries';
  private static readonly ANALYTICS_KEY = 'stressApp_moodAnalytics';

  // === ENTRY MANAGEMENT ===
  
  static saveEntry(entry: Omit<MoodEntry, 'id' | 'timestamp'>): MoodEntry {
    const newEntry: MoodEntry = {
      ...entry,
      id: this.generateId(),
      timestamp: Date.now(),
      date: entry.date || new Date().toISOString().split('T')[0]
    };

    const entries = this.getAllEntries();
    entries.push(newEntry);
    this.saveEntries(entries);
    
    // Update analytics
    this.updateAnalytics();
    
    return newEntry;
  }

  static getAllEntries(): MoodEntry[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading mood entries:', error);
      return [];
    }
  }

  static getEntriesInRange(startDate: string, endDate: string): MoodEntry[] {
    const entries = this.getAllEntries();
    return entries.filter(entry => 
      entry.date >= startDate && entry.date <= endDate
    );
  }

  static getRecentEntries(days: number = 7): MoodEntry[] {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
      .toISOString().split('T')[0];
    
    return this.getEntriesInRange(startDate, endDate);
  }

  static getEntryById(id: string): MoodEntry | undefined {
    const entries = this.getAllEntries();
    return entries.find(entry => entry.id === id);
  }

  static updateEntry(id: string, updates: Partial<MoodEntry>): boolean {
    const entries = this.getAllEntries();
    const index = entries.findIndex(entry => entry.id === id);
    
    if (index === -1) return false;
    
    entries[index] = { ...entries[index], ...updates };
    this.saveEntries(entries);
    this.updateAnalytics();
    return true;
  }

  static deleteEntry(id: string): boolean {
    const entries = this.getAllEntries();
    const filtered = entries.filter(entry => entry.id !== id);
    
    if (filtered.length === entries.length) return false;
    
    this.saveEntries(filtered);
    this.updateAnalytics();
    return true;
  }

  // === ANALYTICS ===
  
  static getAnalytics(): MoodAnalytics {
    try {
      const stored = localStorage.getItem(this.ANALYTICS_KEY);
      if (stored) return JSON.parse(stored);
    } catch (error) {
      console.error('Error loading analytics:', error);
    }
    
    // Generate fresh analytics if none stored
    return this.calculateAnalytics();
  }

  static calculateAnalytics(): MoodAnalytics {
    const entries = this.getAllEntries();
    const recentEntries = this.getRecentEntries(30); // Last 30 days
    
    if (entries.length === 0) {
      return {
        averageMood: 0,
        averageMotivation: 0,
        averageStress: 0,
        exerciseCompletionRate: 0,
        totalSessions: 0,
        streak: 0,
        insights: ['Noch keine Daten verfügbar. Beginne mit deiner ersten Übung!']
      };
    }

    // Calculate averages
    const moodValues = entries
      .filter(e => e.mood)
      .map(e => this.moodTypeToNumber(e.mood!));
    const motivationValues = entries
      .filter(e => e.motivation)
      .map(e => e.motivation!);
    const stressValues = entries.map(e => e.stressLevel);

    const averageMood = moodValues.length > 0 
      ? moodValues.reduce((sum, val) => sum + val, 0) / moodValues.length
      : 0;
    
    const averageMotivation = motivationValues.length > 0
      ? motivationValues.reduce((sum, val) => sum + val, 0) / motivationValues.length
      : 0;
    
    const averageStress = stressValues.reduce((sum, val) => sum + val, 0) / stressValues.length;

    // Exercise completion rate
    const completedCount = entries.filter(e => e.exerciseCompleted).length;
    const exerciseCompletionRate = (completedCount / entries.length) * 100;

    // Current streak
    const streak = this.calculateStreak();

    // Top coping style
    const copingStyles = entries
      .filter(e => e.copingStyle)
      .map(e => e.copingStyle!);
    const topCopingStyle = this.getMostFrequent(copingStyles);

    // Create preliminary analytics object
    const preliminaryAnalytics = {
      averageMood,
      averageMotivation,
      averageStress,
      exerciseCompletionRate,
      totalSessions: entries.length,
      streak,
      topCopingStyle
    };

    // Generate insights
    const insights = this.generateInsights(preliminaryAnalytics);

    const analytics: MoodAnalytics = {
      ...preliminaryAnalytics,
      insights
    };

    // Save analytics
    localStorage.setItem(this.ANALYTICS_KEY, JSON.stringify(analytics));
    return analytics;
  }

  // === HELPER METHODS ===
  
  private static generateId(): string {
    return `mood_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private static saveEntries(entries: MoodEntry[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(entries));
    } catch (error) {
      console.error('Error saving mood entries:', error);
    }
  }

  private static updateAnalytics(): void {
    this.calculateAnalytics();
  }

  private static moodTypeToNumber(mood: MoodType): number {
    const mapping = {
      [MoodType.VERY_BAD]: 1,
      [MoodType.BAD]: 2,
      [MoodType.NEUTRAL]: 3,
      [MoodType.GOOD]: 4,
      [MoodType.VERY_GOOD]: 5
    };
    return mapping[mood];
  }

  private static calculateStreak(): number {
    const entries = this.getAllEntries()
      .filter(e => e.exerciseCompleted)
      .sort((a, b) => b.timestamp - a.timestamp);

    if (entries.length === 0) return 0;

    let streak = 0;
    let currentDate = new Date().toISOString().split('T')[0];

    for (const entry of entries) {
      if (entry.date === currentDate) {
        streak++;
        const prevDate = new Date(Date.parse(currentDate) - 24 * 60 * 60 * 1000)
          .toISOString().split('T')[0];
        currentDate = prevDate;
      } else {
        break;
      }
    }

    return streak;
  }

  private static getMostFrequent<T>(array: T[]): T | undefined {
    if (array.length === 0) return undefined;
    
    const counts = array.reduce((acc, item) => {
      acc[item as string] = (acc[item as string] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(counts)
      .sort(([,a], [,b]) => b - a)[0][0] as T;
  }

  private static generateInsights(analytics: Omit<MoodAnalytics, 'insights'>): string[] {
    const insights: string[] = [];

    // Mood insights
    if (analytics.averageMood >= 4) {
      insights.push('🎉 Deine Stimmung ist überdurchschnittlich gut!');
    } else if (analytics.averageMood <= 2) {
      insights.push('💙 Deine Stimmung war niedrig - regelmäßige Übungen können helfen');
    }

    // Motivation insights
    if (analytics.averageMotivation >= 7) {
      insights.push('🚀 Hohe Motivation erkannt - nutze sie für anspruchsvollere Übungen');
    } else if (analytics.averageMotivation <= 4) {
      insights.push('🔋 Niedrige Motivation - versuche kürzere, einfachere Übungen');
    }

    // Stress insights
    if (analytics.averageStress >= 7) {
      insights.push('⚠️ Hoher Stress-Level - tägliche Entspannung empfohlen');
    } else if (analytics.averageStress <= 4) {
      insights.push('😌 Dein Stress-Level ist gut unter Kontrolle');
    }

    // Exercise completion insights
    if (analytics.exerciseCompletionRate >= 80) {
      insights.push('🏆 Ausgezeichnete Übungsrate - du bist sehr diszipliniert!');
    } else if (analytics.exerciseCompletionRate >= 60) {
      insights.push('👍 Gute Übungsrate - halte den Kurs!');
    } else {
      insights.push('💪 Versuche realistischere Ziele zu setzen');
    }

    // Streak insights
    if (analytics.streak >= 7) {
      insights.push(`🔥 ${analytics.streak} Tage Streak - fantastisch!`);
    } else if (analytics.streak >= 3) {
      insights.push(`✨ ${analytics.streak} Tage Streak - weiter so!`);
    }

    // Coping style insights
    if (analytics.topCopingStyle) {
      const styleNames = {
        [StresscopingStyle.ACTIVE]: 'aktive Problemlösung',
        [StresscopingStyle.EMOTIONAL]: 'emotionsfokussierte Bewältigung',
        [StresscopingStyle.AVOIDANT]: 'vermeidende Strategien',
        [StresscopingStyle.SOCIAL]: 'sozialen Support',
        [StresscopingStyle.COGNITIVE]: 'kognitive Umstrukturierung'
      };
      insights.push(`🎯 Du bevorzugst ${styleNames[analytics.topCopingStyle]}`);
    }

    return insights.length > 0 
      ? insights 
      : ['Sammle mehr Daten für personalisierte Insights'];
  }

  // === EXPORT/IMPORT ===
  
  static exportData(): string {
    const data = {
      entries: this.getAllEntries(),
      analytics: this.getAnalytics(),
      exportDate: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  }

  static importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      if (data.entries && Array.isArray(data.entries)) {
        this.saveEntries(data.entries);
        this.updateAnalytics();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  static clearAllData(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.ANALYTICS_KEY);
  }
} 