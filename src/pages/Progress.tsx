import React, { useState } from 'react';
import { Calendar, TrendingUp, Award, ChevronLeft, ChevronRight, Download, Activity, ArrowLeft } from 'lucide-react';

const Progress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [currentWeek, setCurrentWeek] = useState('11.-17. März');

  const handleBack = () => {
    window.history.back();
  };

  const moodData = [
    { day: 'Mo', value: 80, note: 'Stressmanagement-Übungen abgeschlossen', stressLevel: 7, activities: ['Meditation', 'Atemübungen'] },
    { day: 'Di', value: 65, note: 'Atemübungen durchgeführt', stressLevel: 5, activities: ['Atemübungen'] },
    { day: 'Mi', value: 90, note: 'Erfolgreich Stressoren identifiziert', stressLevel: 8, activities: ['Stressanalyse'] },
    { day: 'Do', value: 75, note: 'Progressive Muskelentspannung praktiziert', stressLevel: 6, activities: ['PMR'] },
    { day: 'Fr', value: 85, note: 'Kognitive Übungen absolviert', stressLevel: 4, activities: ['Gedankenjournal'] },
    { day: 'Sa', value: 95, note: 'Entspannungstechniken angewendet', stressLevel: 3, activities: ['Yoga', 'Meditation'] },
    { day: 'So', value: 88, note: 'Ressourcen aktiviert', stressLevel: 2, activities: ['Naturspaziergang'] },
  ];

  const achievements = [
    { title: '7-Tage-Serie', description: 'Tägliche Stressmanagement-Übungen', date: '17. März', icon: '🏆' },
    { title: 'Modul-Meilenstein', description: 'Grundlagen des Stressmanagements abgeschlossen', date: '15. März', icon: '🎯' },
    { title: 'Entspannungs-Experte', description: '10 Entspannungsübungen durchgeführt', date: '12. März', icon: '⭐' },
  ];

  const getStressColor = (level: number) => {
    if (level <= 3) return '#10B981'; // Green
    if (level <= 6) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24 bg-[#F6E3B6] min-h-screen">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-[#23412C] hover:text-[#4D5922] transition-colors bg-[#F2C75B] hover:bg-[#E6B84F] px-3 py-2 rounded-xl border-2 border-[#F6D98A] shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Zurück</span>
          </button>
          <h1 className="text-2xl font-bold text-[#23412C]">Fortschritt</h1>
        </div>
        <button className="flex items-center gap-2 text-sm text-[#4D5922] bg-[#F2C75B] hover:bg-[#E6B84F] px-3 py-2 rounded-xl border-2 border-[#F6D98A] transition-colors">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Stress Level Chart */}
      <div className="bg-[#F2C75B] rounded-2xl shadow-lg p-6 mb-6 border-2 border-[#F6D98A]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-[#4D5922]" />
            <h2 className="text-lg font-bold text-[#23412C]">Stresslevel-Verlauf</h2>
          </div>
          <div className="flex gap-2">
            {['week', 'month', 'year'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 rounded-xl text-sm font-medium transition-all ${
                  selectedPeriod === period
                    ? 'bg-[#4D5922] text-white shadow-md'
                    : 'bg-[#F6D98A] text-[#23412C] hover:bg-white'
                }`}
              >
                {period === 'week' ? 'Woche' : period === 'month' ? 'Monat' : 'Jahr'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button className="p-2 hover:bg-[#F6D98A] rounded-xl transition-colors">
            <ChevronLeft className="w-5 h-5 text-[#23412C]" />
          </button>
          <span className="font-bold text-[#23412C] text-lg">{currentWeek}</span>
          <button className="p-2 hover:bg-[#F6D98A] rounded-xl transition-colors">
            <ChevronRight className="w-5 h-5 text-[#23412C]" />
          </button>
        </div>

        <div className="relative h-48 bg-white rounded-xl p-4 border-2 border-[#F6D98A]">
          {/* Background grid lines */}
          <div className="absolute inset-4 flex flex-col justify-between">
            {[10, 8, 6, 4, 2, 0].map((level) => (
              <div key={level} className="border-b border-gray-200 flex items-center">
                <span className="text-xs text-[#23412C] font-medium w-6">{level}</span>
              </div>
            ))}
          </div>

          {/* Stress level chart */}
          <div className="relative h-full flex items-end justify-between px-6">
            {moodData.map((day, index) => (
              <div
                key={day.day}
                className="flex flex-col items-center gap-2 relative group"
              >
                {/* Tooltip */}
                <div className="absolute bottom-full mb-4 w-56 bg-[#23412C] text-white text-sm rounded-xl p-3 hidden group-hover:block z-20 shadow-xl">
                  <p className="font-bold text-center mb-2">{day.day}</p>
                  <p className="font-medium">Stresslevel: {day.stressLevel}/10</p>
                  <p className="text-gray-300 text-xs mt-1">{day.note}</p>
                  {day.activities.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {day.activities.map((activity) => (
                        <span key={activity} className="px-2 py-1 bg-[#4D5922] rounded-full text-xs">
                          {activity}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Data point */}
                <div 
                  className="w-5 h-5 rounded-full border-4 border-white shadow-lg cursor-pointer transition-all hover:scale-125 z-10"
                  style={{ 
                    backgroundColor: getStressColor(day.stressLevel),
                    marginBottom: `${day.stressLevel * 14}px`
                  }}
                />

                <span className="text-sm font-medium text-[#23412C] mt-2">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <span className="text-[#23412C] font-medium">Niedrig (0-3)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500" />
            <span className="text-[#23412C] font-medium">Mittel (4-6)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <span className="text-[#23412C] font-medium">Hoch (7-10)</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#F2C75B] rounded-2xl shadow-lg p-4 border-2 border-[#F6D98A]">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-6 h-6 text-[#4D5922]" />
            <h3 className="font-bold text-[#23412C]">Serie</h3>
          </div>
          <p className="text-3xl font-bold text-[#4D5922]">7</p>
          <p className="text-sm text-[#23412C]">Tage</p>
          <p className="text-xs text-[#23412C] opacity-80 mt-1">Bestleistung: 14 Tage</p>
        </div>
        <div className="bg-[#4D5922] rounded-2xl shadow-lg p-4 border-2 border-[#F6D98A]">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-6 h-6 text-[#F6D98A]" />
            <h3 className="font-bold text-white">Zeit</h3>
          </div>
          <p className="text-3xl font-bold text-[#F6D98A]">120</p>
          <p className="text-sm text-white">Minuten</p>
          <p className="text-xs text-white opacity-80 mt-1">Diese Woche</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-[#F2C75B] rounded-2xl shadow-lg p-6 mb-6 border-2 border-[#F6D98A]">
        <h2 className="text-lg font-bold text-[#23412C] mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-[#4D5922]" />
          Aktuelle Erfolge
        </h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="flex items-start gap-4 p-3 bg-white rounded-xl border-2 border-[#F6D98A] hover:shadow-md transition-all"
            >
              <div className="bg-[#4D5922] p-3 rounded-xl text-2xl">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#23412C]">{achievement.title}</h3>
                <p className="text-sm text-[#23412C] opacity-80">{achievement.description}</p>
                <p className="text-xs text-[#4D5922] font-medium mt-1">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Overview */}
      <div className="bg-[#F2C75B] rounded-2xl shadow-lg p-6 border-2 border-[#F6D98A]">
        <h2 className="text-lg font-bold text-[#23412C] mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6 text-[#4D5922]" />
          Aktivitätsübersicht
        </h2>
        <div className="space-y-4">
          {[
            { name: 'Stressmanagement-Grundlagen', completed: 4, total: 8, progress: 50, color: '#10B981' },
            { name: 'Entspannungsübungen', completed: 10, total: 12, progress: 83, color: '#3B82F6' },
            { name: 'Kognitive Übungen', completed: 6, total: 8, progress: 75, color: '#8B5CF6' },
          ].map((activity) => (
            <div key={activity.name} className="bg-white p-4 rounded-xl border-2 border-[#F6D98A]">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-[#23412C]">{activity.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#4D5922]">
                    {activity.completed}/{activity.total}
                  </span>
                  <span className="text-xs bg-[#4D5922] text-white px-2 py-1 rounded-full">
                    {activity.progress}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#F6D98A] rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-700 shadow-sm"
                  style={{ 
                    width: `${activity.progress}%`,
                    backgroundColor: activity.color
                  }}
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