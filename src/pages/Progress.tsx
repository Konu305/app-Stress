import React, { useState } from 'react';
import { Calendar, TrendingUp, Award, ChevronLeft, ChevronRight, Download, Activity } from 'lucide-react';

const Progress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [currentWeek, setCurrentWeek] = useState('March 11-17');

  const moodData = [
    { day: 'Mon', value: 80, note: 'Stressmanagement-Übungen abgeschlossen', stressLevel: 7, activities: ['Meditation', 'Atemübungen'] },
    { day: 'Tue', value: 65, note: 'Atemübungen durchgeführt', stressLevel: 5, activities: ['Atemübungen'] },
    { day: 'Wed', value: 90, note: 'Erfolgreich Stressoren identifiziert', stressLevel: 8, activities: ['Stressanalyse'] },
    { day: 'Thu', value: 75, note: 'Progressive Muskelentspannung praktiziert', stressLevel: 6, activities: ['PMR'] },
    { day: 'Fri', value: 85, note: 'Kognitive Übungen absolviert', stressLevel: 4, activities: ['Gedankenjournal'] },
    { day: 'Sat', value: 95, note: 'Entspannungstechniken angewendet', stressLevel: 3, activities: ['Yoga', 'Meditation'] },
    { day: 'Sun', value: 88, note: 'Ressourcen aktiviert', stressLevel: 2, activities: ['Naturspaziergang'] },
  ];

  const achievements = [
    { title: '7-Tage-Serie', description: 'Tägliche Stressmanagement-Übungen', date: 'March 17' },
    { title: 'Modul-Meilenstein', description: 'Grundlagen des Stressmanagements abgeschlossen', date: 'March 15' },
    { title: 'Entspannungs-Experte', description: '10 Entspannungsübungen durchgeführt', date: 'March 12' },
  ];

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24 bg-background min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text">Fortschritt</h1>
        <button className="flex items-center gap-2 text-sm text-blue-600">
          <Download className="w-4 h-4 text-primary" />
          Daten exportieren
        </button>
      </div>

      <div className="bg-card rounded-xl shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-text">Stresslevel-Verlauf</h2>
          </div>
          <div className="flex gap-2">
            {['week', 'month', 'year'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedPeriod === period
                    ? 'bg-primary text-white'
                    : 'text-text/80 hover:bg-accent'
                }`}
              >
                {period === 'week' ? 'Woche' : period === 'month' ? 'Monat' : 'Jahr'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button className="p-1 hover:bg-accent rounded-full">
            <ChevronLeft className="w-5 h-5 text-text" />
          </button>
          <span className="font-medium text-text">{currentWeek}</span>
          <button className="p-1 hover:bg-accent rounded-full">
            <ChevronRight className="w-5 h-5 text-text" />
          </button>
        </div>

        <div className="relative h-40 flex items-end gap-2 mb-6">
          {/* Background grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[10, 8, 6, 4, 2].map((level) => (
              <div key={level} className="border-b border-gray-100 h-8 flex items-center">
                <span className="text-xs text-muted w-6">{level}</span>
              </div>
            ))}
          </div>

          {/* Stress level dots */}
          {moodData.map((day) => (
            <div
              key={day.day}
              className="flex-1 flex flex-col items-center gap-2 relative group z-10"
            >
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 w-48 bg-gray-900 text-white text-sm rounded-lg p-2 hidden group-hover:block">
                <p className="font-medium">Stresslevel: {day.stressLevel}/10</p>
                <p className="text-gray-300 text-xs">{day.note}</p>
                {day.activities.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {day.activities.map((activity) => (
                      <span key={activity} className="px-1.5 py-0.5 bg-gray-700 rounded-full text-xs">
                        {activity}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Data point */}
              <div 
                className="w-4 h-4 rounded-full bg-primary border-4 border-card shadow-lg absolute cursor-pointer transition-transform hover:scale-110"
                style={{ bottom: `${day.stressLevel * 10}%` }}
              />

              <div className="h-full w-px bg-gray-100" />
              <span className="text-xs text-text/80 mt-2">{day.day}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 text-sm text-text/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-text/80">Stresslevel</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-card rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-text">Aktuelle Serie</h3>
          </div>
          <p className="text-2xl font-bold text-text">7 Tage</p>
          <p className="text-sm text-text/80">Bestleistung: 14 Tage</p>
        </div>
        <div className="bg-primary/30 rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-text">Übungszeit</h3>
          </div>
          <p className="text-2xl font-bold text-text">120 min</p>
          <p className="text-sm text-text/80">Diese Woche</p>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-sm p-4 mb-6">
        <h2 className="text-lg font-semibold text-text mb-4">Aktuelle Erfolge</h2>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="flex items-start gap-4 py-2 border-b border-gray-100 last:border-0"
            >
              <div className="bg-accent p-2 rounded-lg">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text">{achievement.title}</h3>
                <p className="text-sm text-text/80">{achievement.description}</p>
                <p className="text-xs text-muted mt-1">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-sm p-4">
        <h2 className="text-lg font-semibold text-text mb-4">Aktivitätsübersicht</h2>
        <div className="space-y-4">
          {[
            { name: 'Stressmanagement-Grundlagen', completed: 4, total: 8, progress: 50 },
            { name: 'Entspannungsübungen', completed: 10, total: 12, progress: 83 },
            { name: 'Kognitive Übungen', completed: 6, total: 8, progress: 75 },
          ].map((activity) => (
            <div key={activity.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-text">{activity.name}</p>
                <p className="text-sm text-text/80">
                  {activity.completed}/{activity.total}
                </p>
              </div>
              <div className="w-full bg-accent rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${activity.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;