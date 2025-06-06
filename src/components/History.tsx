import React from 'react';
import { useDiary } from '../context/DiaryContext';

export const History: React.FC = () => {
  const { entries } = useDiary();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">History</h2>
      <div className="space-y-6">
        {entries.map((entry) => (
          <div key={entry.id} className="border-b pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 font-medium">
                {new Date(entry.date).toLocaleDateString('de-DE')}
              </span>
              <span className="text-2xl">{entry.mood}</span>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 