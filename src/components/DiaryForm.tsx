import React, { useState } from 'react';
import { Save, ArrowLeft } from 'lucide-react';
import { useDiary } from '../context/DiaryContext';

export const DiaryForm: React.FC = () => {
  const { addEntry } = useDiary();
  const [mood, setMood] = useState('😐');
  const [text, setText] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBack = () => {
    // This will be handled by the parent component (DiaryPage)
    window.history.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const entry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      mood,
      text
    };

    addEntry(entry);
    setShowSuccess(true);
    
    // Reset form
    setMood('😐');
    setText('');

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <div className="flex items-center mb-4">
        <button
          onClick={handleBack}
          className="flex items-center space-x-2 text-[#23412C] hover:text-[#4D5922] transition-colors bg-[#F2C75B] hover:bg-[#E6B84F] px-4 py-2 rounded-xl border-2 border-[#F6D98A] shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Zurück zum Menü</span>
        </button>
      </div>

      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
          ✅ Eintrag erfolgreich gespeichert!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mood Selection */}
        <div className="bg-[#F2C75B] rounded-2xl p-6 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-4 text-center">
            🎭 Wie fühlst du dich heute?
          </label>
          <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
            {['😊', '😐', '😢', '😡', '😰', '🤔', '😴', '🤗'].map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setMood(emoji)}
                className={`text-2xl p-3 rounded-xl transition-all aspect-square flex items-center justify-center ${
                  mood === emoji 
                    ? 'bg-[#4D5922] shadow-lg scale-105 ring-2 ring-[#23412C]' 
                    : 'bg-[#F6D98A] hover:bg-[#E6B84F] hover:scale-105'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Text Input */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            📝 Beschreibe deinen Tag
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Was ist heute passiert? Wie hast du dich gefühlt?"
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
            rows={6}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#4D5922] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#3A4219] transition-colors shadow-lg flex items-center justify-center gap-2"
        >
          <Save className="w-6 h-6" />
          Eintrag speichern
        </button>
      </form>
    </div>
  );
}; 