import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Calendar, TrendingUp, Award, Filter, Eye, EyeOff, ChevronLeft, ChevronRight, Target, Brain, Heart, Zap } from 'lucide-react';
import { useDiary } from '../context/DiaryContext';
import { format, subDays, isAfter, isBefore, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';

const Analytics = () => {
  const { entries } = useDiary();
  const [timeFilter, setTimeFilter] = useState<'7' | '30' | 'custom'>('30');
  const [showHighStressOnly, setShowHighStressOnly] = useState(false);
  const [selectedTrigger, setSelectedTrigger] = useState<string | null>(null);
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  // Color scheme matching the app design
  const colors = {
    primary: '#E86F3A',      // Primär-Button & Warnung
    secondary: '#F2C75B',    // Karten-Hintergrund
    accent: '#F6D98A',       // Akzent
    background: '#F6E3B6',   // Haupt-Hintergrund
    card: '#F2C75B',         // Karten-Hintergrund (gleich wie secondary)
    text: '#23412C',         // Haupttext
    muted: '#B6B6A6',        // Inaktive Felder
    journalgreen: '#4D5922', // Tagebuch-Grün
    success: '#4D5922',      // Grün für niedrigen Stress
    warning: '#F2C75B',      // Gelb für mittleren Stress
    danger: '#E86F3A'        // Orange/Rot für hohen Stress
  };

  // Filter entries based on time period
  const filteredEntries = useMemo(() => {
    let filtered = entries.filter(entry => entry.stressLevel !== undefined);
    
    const now = new Date();
    let startDate: Date;
    
    if (timeFilter === 'custom' && customStartDate && customEndDate) {
      startDate = parseISO(customStartDate);
      const endDate = parseISO(customEndDate);
      filtered = filtered.filter(entry => {
        const entryDate = parseISO(entry.date);
        return isAfter(entryDate, startDate) && isBefore(entryDate, endDate);
      });
    } else {
      const days = timeFilter === '7' ? 7 : 30;
      startDate = subDays(now, days);
      filtered = filtered.filter(entry => {
        const entryDate = parseISO(entry.date);
        return isAfter(entryDate, startDate);
      });
    }

    if (showHighStressOnly) {
      filtered = filtered.filter(entry => (entry.stressLevel || 0) > 6);
    }

    return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [entries, timeFilter, showHighStressOnly, customStartDate, customEndDate]);

  // Prepare data for stress level chart
  const stressLevelData = useMemo(() => {
    return filteredEntries.map(entry => ({
      date: format(parseISO(entry.date), 'dd.MM', { locale: de }),
      fullDate: entry.date,
      stressLevel: entry.stressLevel || 0,
      triggers: entry.trigger?.join(', ') || 'Keine Angabe',
      mood: entry.mood,
      situation: entry.situation || ''
    }));
  }, [filteredEntries]);

  // Prepare trigger frequency data
  const triggerData = useMemo(() => {
    const triggerCount: Record<string, number> = {};
    
    filteredEntries.forEach(entry => {
      entry.trigger?.forEach(trigger => {
        triggerCount[trigger] = (triggerCount[trigger] || 0) + 1;
      });
    });

    return Object.entries(triggerCount)
      .map(([trigger, count]) => ({
        trigger,
        count,
        percentage: Math.round((count / filteredEntries.length) * 100)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8); // Top 8 triggers
  }, [filteredEntries]);

  // Prepare emotional reactions data
  const emotionalData = useMemo(() => {
    const emotionCount: Record<string, number> = {};
    
    filteredEntries.forEach(entry => {
      entry.emotional?.forEach(emotion => {
        emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
      });
    });

    return Object.entries(emotionCount)
      .map(([emotion, count]) => ({
        emotion,
        count,
        percentage: Math.round((count / filteredEntries.length) * 100)
      }))
      .sort((a, b) => b.count - a.count);
  }, [filteredEntries]);

  // Categorize emotions into positive and negative
  const emotionalBalance = useMemo(() => {
    const positiveEmotions = [
      'Freude', 'Ruhe', 'Zufriedenheit', 'Dankbarkeit', 'Stolz', 'Erleichterung',
      'Verbundenheit', 'Gelassenheit', 'Begeisterung', 'Ausgeglichenheit',
      'Verbundenheit mit der Natur', 'Geborgenheit', 'Energie', 'Wohlbefinden'
    ];
    
    const negativeEmotions = [
      'Angst', 'Wut', 'Traurigkeit', 'Überforderung', 'Frustration', 'Nervosität',
      'Erschöpfung', 'Einsamkeit', 'Hilflosigkeit', 'Ungerechtigkeit', 'Sorge',
      'Ärger', 'Stress'
    ];

    let positiveCount = 0;
    let negativeCount = 0;
    let neutralCount = 0;

    emotionalData.forEach(({ emotion, count }) => {
      if (positiveEmotions.includes(emotion)) {
        positiveCount += count;
      } else if (negativeEmotions.includes(emotion)) {
        negativeCount += count;
      } else {
        neutralCount += count;
      }
    });

    const total = positiveCount + negativeCount + neutralCount;
    
    return {
      positive: total > 0 ? Math.round((positiveCount / total) * 100) : 0,
      negative: total > 0 ? Math.round((negativeCount / total) * 100) : 0,
      neutral: total > 0 ? Math.round((neutralCount / total) * 100) : 0,
      positiveCount,
      negativeCount,
      neutralCount
    };
  }, [emotionalData]);

  // Progress calculations
  const progressStats = useMemo(() => {
    const totalEntries = entries.length;
    const entriesWithReflection = entries.filter(entry => entry.reflectionText).length;
    const entriesWithWishBehavior = entries.filter(entry => entry.wishBehavior).length;
    const entriesWithPractice = entries.filter(entry => entry.practiceOpportunity).length;
    
    return {
      totalEntries,
      reflectionProgress: totalEntries > 0 ? Math.round((entriesWithReflection / totalEntries) * 100) : 0,
      wishBehaviorProgress: totalEntries > 0 ? Math.round((entriesWithWishBehavior / totalEntries) * 100) : 0,
      practiceProgress: totalEntries > 0 ? Math.round((entriesWithPractice / totalEntries) * 100) : 0,
      level: Math.floor(totalEntries / 5) + 1
    };
  }, [entries]);

  // Get stress level color
  const getStressColor = (level: number) => {
    if (level <= 3) return colors.success;
    if (level <= 6) return colors.warning;
    return colors.danger;
  };

  // Trigger icons mapping
  const getTriggerIcon = (trigger: string) => {
    const iconMap: Record<string, string> = {
      'Arbeit': '💼',
      'Familie': '👨‍👩‍👧‍👦',
      'Gesundheit': '🏥',
      'Soziale Kontakte': '👥',
      'Zeitdruck': '⏰',
      'Geld': '💰',
      'Verkehr': '🚗',
      'Technik': '💻'
    };
    return iconMap[trigger] || '📌';
  };

  // Emotion color mapping
  const getEmotionColor = (emotion: string) => {
    const colorMap: Record<string, string> = {
      // Negative Emotionen
      'Angst': '#8B5CF6',
      'Wut': '#E86F3A',
      'Traurigkeit': '#3B82F6',
      'Überforderung': '#F97316',
      'Frustration': '#DC2626',
      'Nervosität': '#A855F7',
      'Erschöpfung': '#6B7280',
      'Einsamkeit': '#6366F1',
      'Hilflosigkeit': '#9CA3AF',
      'Ungerechtigkeit': '#EF4444',
      'Sorge': '#8B5CF6',
      'Ärger': '#E86F3A',
      'Stress': '#F97316',
      
      // Positive Emotionen
      'Freude': '#F2C75B',
      'Ruhe': '#4D5922',
      'Zufriedenheit': '#4D5922',
      'Dankbarkeit': '#10B981',
      'Stolz': '#F2C75B',
      'Erleichterung': '#10B981',
      'Verbundenheit': '#06B6D4',
      'Gelassenheit': '#4D5922',
      'Begeisterung': '#F59E0B',
      'Ausgeglichenheit': '#10B981',
      'Verbundenheit mit der Natur': '#059669',
      'Geborgenheit': '#10B981',
      'Energie': '#F59E0B',
      'Wohlbefinden': '#10B981'
    };
    return colorMap[emotion] || colors.primary;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card p-4 rounded-xl shadow-lg border-2 border-accent max-w-xs">
          <p className="font-semibold text-text">{label}</p>
          <p className="text-sm text-text/80 mb-2">{data.situation}</p>
          <div className="flex items-center gap-2 mb-1">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: getStressColor(data.stressLevel) }}
            />
            <span className="text-sm font-medium text-text">Stresslevel: {data.stressLevel}/10</span>
          </div>
          <p className="text-xs text-muted">Auslöser: {data.triggers}</p>
          <p className="text-xs text-text">Stimmung: {data.mood}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text">Auswertung</h1>
        <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-xl">
          <Calendar className="w-4 h-4 text-text" />
          <span className="text-sm font-medium text-text">
            {filteredEntries.length} Einträge
          </span>
        </div>
      </div>

      {/* Time Filter */}
      <div className="bg-card rounded-xl shadow-sm p-4 mb-6 border-2 border-accent/30">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text">Zeitraum</h2>
          <button
            onClick={() => setShowHighStressOnly(!showHighStressOnly)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              showHighStressOnly 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-accent text-text hover:bg-accent/80'
            }`}
          >
            {showHighStressOnly ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            Nur hoher Stress (&gt;6)
          </button>
        </div>
        
        <div className="flex gap-2 mb-4">
          {[
            { key: '7', label: '7 Tage' },
            { key: '30', label: '30 Tage' },
            { key: 'custom', label: 'Benutzerdefiniert' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTimeFilter(key as any)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                timeFilter === key
                  ? 'bg-journalgreen text-white shadow-md'
                  : 'bg-accent text-text hover:bg-accent/80'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {timeFilter === 'custom' && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-text/80 mb-1 font-medium">Von</label>
              <input
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate(e.target.value)}
                className="w-full px-3 py-2 border-2 border-accent rounded-xl text-sm bg-background text-text"
              />
            </div>
            <div>
              <label className="block text-xs text-text/80 mb-1 font-medium">Bis</label>
              <input
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate(e.target.value)}
                className="w-full px-3 py-2 border-2 border-accent rounded-xl text-sm bg-background text-text"
              />
            </div>
          </div>
        )}
      </div>

      {/* Module 1: Stress Level Trend */}
      <div className="bg-card rounded-xl shadow-sm p-4 mb-6 border-2 border-accent/30">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-journalgreen" />
          <h2 className="text-lg font-semibold text-text">Stresslevel-Verlauf</h2>
        </div>
        
        {stressLevelData.length > 0 ? (
          <div className="h-64 bg-background/50 rounded-xl p-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stressLevelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#B6B6A6" opacity={0.3} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12, fill: colors.text }}
                  stroke={colors.muted}
                />
                <YAxis 
                  domain={[0, 10]}
                  tick={{ fontSize: 12, fill: colors.text }}
                  stroke={colors.muted}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="stressLevel"
                  stroke={colors.primary}
                  strokeWidth={3}
                  dot={{ fill: colors.journalgreen, strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, stroke: colors.primary, strokeWidth: 3, fill: colors.card }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-32 flex items-center justify-center text-muted bg-background/50 rounded-xl">
            <p className="text-center">
              Keine Daten für den gewählten Zeitraum
            </p>
          </div>
        )}
      </div>

      {/* Module 2: Most Common Triggers */}
      <div className="bg-card rounded-xl shadow-sm p-4 mb-6 border-2 border-accent/30">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-text">Häufigste Auslöser</h2>
        </div>
        
        {triggerData.length > 0 ? (
          <div className="space-y-3">
            {triggerData.map((item, index) => (
              <div
                key={item.trigger}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                  selectedTrigger === item.trigger 
                    ? 'bg-accent border-2 border-journalgreen shadow-md' 
                    : 'bg-background/50 hover:bg-accent/50 border-2 border-transparent'
                }`}
                onClick={() => setSelectedTrigger(
                  selectedTrigger === item.trigger ? null : item.trigger
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{getTriggerIcon(item.trigger)}</span>
                  <div>
                    <p className="font-medium text-text">{item.trigger}</p>
                    <p className="text-sm text-muted">{item.count} Einträge</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-journalgreen text-lg">{item.percentage}%</p>
                  <div className="w-16 h-3 bg-background rounded-full mt-1 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-journalgreen to-primary rounded-full transition-all duration-700"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-background/50 rounded-xl">
            <p className="text-muted">Keine Auslöser-Daten verfügbar</p>
          </div>
        )}
      </div>

      {/* Module 3: Emotional Balance */}
      <div className="bg-card rounded-xl shadow-sm p-4 mb-6 border-2 border-accent/30">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-text">Emotionale Balance</h2>
        </div>
        
        {emotionalData.length > 0 ? (
          <div className="space-y-4">
            {/* Balance Overview */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 rounded-xl bg-background/50 border-2 border-success/30">
                <p className="font-bold text-success text-lg">{emotionalBalance.positive}%</p>
                <p className="text-xs text-text font-medium">Positive</p>
                <p className="text-xs text-muted">{emotionalBalance.positiveCount} Einträge</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-background/50 border-2 border-muted/30">
                <p className="font-bold text-muted text-lg">{emotionalBalance.neutral}%</p>
                <p className="text-xs text-text font-medium">Neutral</p>
                <p className="text-xs text-muted">{emotionalBalance.neutralCount} Einträge</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-background/50 border-2 border-danger/30">
                <p className="font-bold text-danger text-lg">{emotionalBalance.negative}%</p>
                <p className="text-xs text-text font-medium">Negativ</p>
                <p className="text-xs text-muted">{emotionalBalance.negativeCount} Einträge</p>
              </div>
            </div>

            {/* Balance Bar */}
            <div className="bg-background rounded-full h-6 overflow-hidden border-2 border-accent/30">
              <div className="h-full flex">
                <div 
                  className="bg-gradient-to-r from-success to-journalgreen transition-all duration-700"
                  style={{ width: `${emotionalBalance.positive}%` }}
                />
                <div 
                  className="bg-muted transition-all duration-700"
                  style={{ width: `${emotionalBalance.neutral}%` }}
                />
                <div 
                  className="bg-gradient-to-r from-warning to-danger transition-all duration-700"
                  style={{ width: `${emotionalBalance.negative}%` }}
                />
              </div>
            </div>

            {/* Insight */}
            <div className="bg-background/50 rounded-xl p-3 border-2 border-accent/20">
              <p className="text-sm text-text text-center">
                {emotionalBalance.positive > emotionalBalance.negative ? (
                  <span className="font-medium text-success">
                    Großartig! Du erlebst mehr positive als negative Emotionen.
                  </span>
                ) : emotionalBalance.positive === emotionalBalance.negative ? (
                  <span className="font-medium text-muted">
                    Deine emotionale Balance ist ausgeglichen.
                  </span>
                ) : (
                  <span className="font-medium text-warning">
                    Du durchlebst herausfordernde Zeiten. Achte gut auf dich!
                  </span>
                )}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 bg-background/50 rounded-xl">
            <p className="text-muted">Keine Emotions-Daten verfügbar</p>
          </div>
        )}
      </div>

      {/* Module 4: Emotional Reactions */}
      <div className="bg-card rounded-xl shadow-sm p-4 mb-6 border-2 border-accent/30">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-text">Emotionale Reaktionen</h2>
        </div>
        
        {emotionalData.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {emotionalData.map((item, index) => (
              <div
                key={item.emotion}
                className="p-3 rounded-xl border-2 text-center bg-background/50 hover:bg-accent/30 transition-colors"
                style={{ 
                  borderColor: `${getEmotionColor(item.emotion)}40`
                }}
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold shadow-md"
                  style={{ backgroundColor: getEmotionColor(item.emotion) }}
                >
                  {item.count}
                </div>
                <p className="font-medium text-text text-sm">{item.emotion}</p>
                <p className="text-xs text-muted font-semibold">{item.percentage}%</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-background/50 rounded-xl">
            <p className="text-muted">Keine Emotions-Daten verfügbar</p>
          </div>
        )}
      </div>

      {/* Module 5: Progress & Gamification */}
      <div className="bg-card rounded-xl shadow-sm p-4 mb-6 border-2 border-accent/30">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-text">Fortschritt & Erfolge</h2>
        </div>
        
        <div className="space-y-4">
          {/* Level Badge */}
          <div className="text-center p-4 bg-gradient-to-r from-accent to-secondary rounded-xl border-2 border-journalgreen/30">
            <p className="font-bold text-text text-lg">Stress-Detektiv Level {progressStats.level}</p>
            <p className="text-sm text-text/80">{progressStats.totalEntries} Einträge gesammelt</p>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text flex items-center gap-2">
                  Reflexion
                </span>
                <span className="text-sm font-bold text-journalgreen">{progressStats.reflectionProgress}%</span>
              </div>
              <div className="w-full bg-background rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-journalgreen to-accent h-3 rounded-full transition-all duration-700"
                  style={{ width: `${progressStats.reflectionProgress}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text flex items-center gap-2">
                  Wunschverhalten
                </span>
                <span className="text-sm font-bold text-journalgreen">{progressStats.wishBehaviorProgress}%</span>
              </div>
              <div className="w-full bg-background rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-700"
                  style={{ width: `${progressStats.wishBehaviorProgress}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text flex items-center gap-2">
                  Übungsmöglichkeiten
                </span>
                <span className="text-sm font-bold text-journalgreen">{progressStats.practiceProgress}%</span>
              </div>
              <div className="w-full bg-background rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-accent to-card h-3 rounded-full transition-all duration-700"
                  style={{ width: `${progressStats.practiceProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[
              { name: 'Erste Woche', unlocked: progressStats.totalEntries >= 7 },
              { name: 'Analyst', unlocked: progressStats.reflectionProgress >= 50 },
              { name: 'Zielstrebig', unlocked: progressStats.wishBehaviorProgress >= 30 },
              { name: 'Durchhalter', unlocked: progressStats.totalEntries >= 14 },
              { name: 'Selbstreflexion', unlocked: progressStats.reflectionProgress >= 80 },
              { name: 'Vollprofi', unlocked: progressStats.totalEntries >= 30 }
            ].map((badge, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl text-center transition-all border-2 ${
                  badge.unlocked
                    ? 'bg-accent border-journalgreen text-text shadow-md'
                    : 'bg-background/50 border-muted text-muted'
                }`}
              >
                <p className="text-xs font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-journalgreen rounded-xl shadow-sm p-4 border-2 border-accent text-white">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-5 h-5" />
          <h3 className="font-semibold">Deine Erkenntnisse</h3>
        </div>
        
        {filteredEntries.length > 0 ? (
          <div className="space-y-2 text-sm">
            <p>
              Dein durchschnittlicher Stresslevel liegt bei{' '}
              <span className="font-bold bg-white/20 px-2 py-1 rounded-lg">
                {Math.round(
                  filteredEntries.reduce((sum, entry) => sum + (entry.stressLevel || 0), 0) / 
                  filteredEntries.length * 10
                ) / 10}/10
              </span>
            </p>
            
            {triggerData.length > 0 && (
              <p>
                Dein häufigster Stressauslöser ist{' '}
                <span className="font-bold bg-white/20 px-2 py-1 rounded-lg">{triggerData[0].trigger}</span>
                {' '}({triggerData[0].percentage}% der Einträge)
              </p>
            )}
            
            {emotionalData.length > 0 && (
              <p>
                Deine häufigste emotionale Reaktion ist{' '}
                <span className="font-bold bg-white/20 px-2 py-1 rounded-lg">{emotionalData[0].emotion}</span>
              </p>
            )}

            {emotionalBalance.positive + emotionalBalance.negative > 0 && (
              <p>
                Deine emotionale Balance:{' '}
                <span className="font-bold bg-white/20 px-2 py-1 rounded-lg">
                  {emotionalBalance.positive}% positive, {emotionalBalance.negative}% negative Emotionen
                </span>
              </p>
            )}
            
            <p className="font-medium mt-3 bg-white/20 p-2 rounded-lg">
              Großartig! Du reflektierst bereits {progressStats.reflectionProgress}% deiner Erfahrungen.
            </p>
          </div>
        ) : (
          <p className="text-white/90 text-sm">
            Fülle weitere Tagebucheinträge aus, um personalisierte Erkenntnisse zu erhalten.
          </p>
        )}
      </div>
    </div>
  );
};

export default Analytics; 