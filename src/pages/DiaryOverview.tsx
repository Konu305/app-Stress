import React, { useState } from 'react';
import { ChevronLeft, Plus, Settings, Edit, Calendar, List, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDiary } from '../context/DiaryContext';
import { DiaryEntry as NewDiaryEntry } from '../lib/types';

interface DiaryEntry {
  id: string;
  date: string;
  notes: string;
  stressLevel?: number;
  situation?: string;
  trigger?: string[];
  triggerOther?: string;
  physical?: string[];
  physicalOther?: string;
  emotional?: string[];
  emotionalOther?: string;
  thoughts?: string;
  retrospectiveRating?: number;
  reflectionHelpful?: string;
  reflectionText?: string;
  whatWouldHelp?: string[];
  whatWouldHelpOther?: string;
  wishBehavior?: string;
  practiceOpportunity?: string;
  mood?: string; // Für Text- und Audio-Tagebuch
}

// Emotionen mit Emoji und Text
const EMOTIONS = [
  { id: 'anger', label: 'Wut', emoji: '😠' },
  { id: 'fear', label: 'Angst', emoji: '😰' },
  { id: 'sadness', label: 'Traurigkeit', emoji: '😢' },
  { id: 'overwhelm', label: 'Überforderung', emoji: '😩' },
  { id: 'helpless', label: 'Hilflosigkeit', emoji: '😞' },
  { id: 'neutral', label: 'Neutral', emoji: '😐' },
  { id: 'satisfied', label: 'Zufriedenheit', emoji: '🙂' },
  { id: 'joy', label: 'Freude', emoji: '😄' },
];

// Mood-Icons für die Übersicht
const MOOD_DISPLAY = [
  { id: 'overjoyed', label: 'Overjoyed', emoji: '😄', color: 'bg-journalgreen' },
  { id: 'happy', label: 'Happy', emoji: '😊', color: 'bg-yellow-400' },
  { id: 'satisfied', label: 'Satisfied', emoji: '🙂', color: 'bg-green-400' },
  { id: 'neutral', label: 'Neutral', emoji: '😐', color: 'bg-gray-400' },
  { id: 'sad', label: 'Sad', emoji: '😢', color: 'bg-orange-400' },
  { id: 'depressed', label: 'Depressed', emoji: '😔', color: 'bg-gray-500' },
];

export default function DiaryOverview() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [currentDate, setCurrentDate] = useState(new Date());
  const { entries: newEntries } = useDiary();

  // Konvertiere neue Tagebucheinträge in das alte Format für die Anzeige
  const convertNewEntriesToOld = (newEntries: NewDiaryEntry[]): DiaryEntry[] => {
    return newEntries.map(entry => ({
      id: entry.id,
      date: entry.date,
      notes: entry.text,
      mood: getMoodIdFromEmoji(entry.mood)
    }));
  };

  // Hilfsfunktion um Emoji zu Mood-ID zu konvertieren
  const getMoodIdFromEmoji = (emoji: string): string => {
    switch (emoji) {
      case '😊': case '😄': case '🥳': return 'joy';
      case '😐': return 'neutral';
      case '😢': return 'sadness';
      case '😡': return 'anger';
      case '😴': return 'neutral';
      case '🤔': return 'neutral';
      default: return 'neutral';
    }
  };

  const entries = convertNewEntriesToOld(newEntries);

  const getMoodForEntry = (entry: DiaryEntry) => {
    // Für neue Einträge: Direkt das Emoji aus dem Eintrag verwenden
    const newEntry = newEntries.find(ne => ne.id === entry.id);
    if (newEntry) {
      // Bestimme Mood-Display basierend auf Emoji
      switch (newEntry.mood) {
        case '😊': case '😄': case '🥳':
          return { ...MOOD_DISPLAY.find(m => m.id === 'happy'), emoji: newEntry.mood };
        case '😐': case '😴': case '🤔':
          return { ...MOOD_DISPLAY.find(m => m.id === 'neutral'), emoji: newEntry.mood };
        case '😢':
          return { ...MOOD_DISPLAY.find(m => m.id === 'sad'), emoji: newEntry.mood };
        case '😡':
          return { ...MOOD_DISPLAY.find(m => m.id === 'sad'), emoji: newEntry.mood };
        default:
          return { ...MOOD_DISPLAY.find(m => m.id === 'neutral'), emoji: newEntry.mood };
      }
    }

    // Für detaillierte Einträge: Basierend auf Stresslevel und Emotionen
    if (entry.stressLevel !== undefined) {
      if (entry.stressLevel <= 3) return MOOD_DISPLAY.find(m => m.id === 'happy');
      if (entry.stressLevel <= 6) return MOOD_DISPLAY.find(m => m.id === 'neutral');
      return MOOD_DISPLAY.find(m => m.id === 'sad');
    }
    
    // Für Text/Audio-Einträge: Basierend auf gewählter Emotion
    if (entry.mood) {
      const emotion = EMOTIONS.find(e => e.id === entry.mood);
      if (emotion) {
        if (['joy', 'satisfied'].includes(emotion.id)) return MOOD_DISPLAY.find(m => m.id === 'happy');
        if (['neutral'].includes(emotion.id)) return MOOD_DISPLAY.find(m => m.id === 'neutral');
        if (['sadness', 'anger', 'fear', 'overwhelm', 'helpless'].includes(emotion.id)) return MOOD_DISPLAY.find(m => m.id === 'sad');
      }
    }
    
    return MOOD_DISPLAY.find(m => m.id === 'neutral');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('de-DE', { month: 'short' }),
      time: date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
      weekday: date.toLocaleDateString('de-DE', { weekday: 'short' })
    };
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Vorherige Monatstage
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    
    // Aktuelle Monatstage
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ date: new Date(year, month, day), isCurrentMonth: true });
    }
    
    return days;
  };

  const getEntryForDate = (date: Date) => {
    return entries.find(entry => {
      const entryDate = new Date(entry.date);
      return entryDate.toDateString() === date.toDateString();
    });
  };

  const renderListView = () => (
    <div className="space-y-4">
      {entries.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-text/70 text-lg">Noch keine Einträge vorhanden</p>
          <p className="text-text/50">Tippe auf + um deinen ersten Eintrag zu erstellen</p>
        </div>
      ) : (
        entries.map(entry => {
          const mood = getMoodForEntry(entry);
          const dateInfo = formatDate(entry.date);
          
          return (
            <div 
              key={entry.id} 
              onClick={() => navigate(`/diary-entry/${entry.id}`)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full ${mood?.color || 'bg-gray-400'} flex items-center justify-center text-white font-bold text-sm`}>
                  {dateInfo.day}
                </div>
                <span className="text-xs text-gray-500 mt-1">{dateInfo.month}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{mood?.emoji || '😐'}</span>
                  <span className="font-bold text-lg text-gray-900">{mood?.label || 'Neutral'}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{entry.notes}</p>
              </div>
              
              <div className="text-right">
                <div className="text-xs text-gray-400">{dateInfo.time}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );

  const renderCalendarView = () => {
    const days = getDaysInMonth(currentDate);
    const monthYear = currentDate.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
    
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-bold capitalize">{monthYear}</h3>
          <button 
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const entry = getEntryForDate(day.date);
            const mood = entry ? getMoodForEntry(entry) : null;
            
            return (
              <div 
                key={index} 
                onClick={() => entry && navigate(`/diary-entry/${entry.id}`)}
                className={`aspect-square flex flex-col items-center justify-center relative ${
                  entry ? 'cursor-pointer hover:bg-gray-100 rounded-lg transition-colors' : ''
                }`}
              >
                <span className={`text-sm ${day.isCurrentMonth ? 'text-gray-900' : 'text-gray-300'}`}>
                  {day.date.getDate().toString().padStart(2, '0')}
                </span>
                {mood && (
                  <span className="text-lg mt-1">{mood.emoji}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-accent"
          >
            <ChevronLeft className="w-6 h-6 text-text" />
          </button>
          <h1 className="text-xl font-bold text-text">My Mood</h1>
          <div className="w-10" />
        </div>

        {/* Toggle Buttons */}
        <div className="px-6 mb-6">
          <div className="bg-journalgreen/20 rounded-full p-1 flex">
            <button
              onClick={() => setViewMode('list')}
              className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
                viewMode === 'list' 
                  ? 'bg-journalgreen text-white shadow-md' 
                  : 'text-journalgreen'
              }`}
            >
              History
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
                viewMode === 'calendar' 
                  ? 'bg-journalgreen text-white shadow-md' 
                  : 'text-journalgreen'
              }`}
            >
              Mood History
            </button>
          </div>
        </div>

        {/* View Header */}
        <div className="px-6 mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text">
              {viewMode === 'list' ? 'History' : 'Mood History'}
            </h2>
            <button className="text-sm text-text/70 flex items-center gap-1">
              {viewMode === 'list' ? 'List View' : 'Calendar View'}
              <ChevronLeft className="w-4 h-4 rotate-90" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-24">
          {viewMode === 'list' ? renderListView() : renderCalendarView()}
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button 
            onClick={() => navigate('/analytics')}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
          >
            <BarChart3 className="w-6 h-6 text-gray-600" />
          </button>
          
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={() => navigate('/diary')}
            className="w-16 h-16 bg-journalgreen rounded-full shadow-lg flex items-center justify-center"
          >
            <Plus className="w-8 h-8 text-white" />
          </button>
          
          <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200">
            <Edit className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
} 