import React from 'react';
import { useDiary } from '../context/DiaryContext';

export const MoodHistory: React.FC = () => {
  const { entries } = useDiary();
  
  // Get entries from the last 7 days
  const lastWeekEntries = entries.filter(entry => {
    const entryDate = new Date(entry.date);
    const today = new Date();
    const lastWeek = new Date(today.setDate(today.getDate() - 7));
    return entryDate >= lastWeek;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Stimmungsverlauf</h2>
      <div className="space-y-4">
        {lastWeekEntries.map((entry) => (
          <div key={entry.id} className="flex items-center justify-between border-b pb-2">
            <span className="text-gray-600">{new Date(entry.date).toLocaleDateString('de-DE')}</span>
            <span className="text-2xl">{entry.mood}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 