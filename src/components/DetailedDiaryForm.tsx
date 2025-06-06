import React, { useState } from 'react';
import { Save, X, ArrowLeft } from 'lucide-react';
import { useDiary } from '../context/DiaryContext';

const TRIGGERS = [
  'Arbeit', 'Familie', 'Zeitdruck', 'Lärm', 'Konflikte', 
  'Gesundheit', 'Finanzen', 'Verkehr', 'Termine', 'Soziale Kontakte',
  'Technik', 'Geld'
];

const PHYSICAL_REACTIONS = [
  'Herzrasen', 'Schwitzen', 'Anspannung', 'Verspannungen',
  'Kopfschmerzen', 'Müdigkeit', 'Magenschmerzen', 'Schwindel',
  'Unruhe', 'Schlaflosigkeit', 'Entspannung', 'Energie',
  'Wohlbefinden', 'Frische Luft', 'Bewegung', 'Flexibilität'
];

const EMOTIONAL_REACTIONS = [
  'Angst', 'Wut', 'Traurigkeit', 'Überforderung', 'Frustration',
  'Nervosität', 'Erschöpfung', 'Einsamkeit', 'Hilflosigkeit',
  'Sorge', 'Ärger', 'Stress', 'Freude', 'Ruhe', 'Zufriedenheit',
  'Dankbarkeit', 'Stolz', 'Erleichterung', 'Verbundenheit',
  'Gelassenheit', 'Begeisterung', 'Ausgeglichenheit'
];

const WHAT_WOULD_HELP = [
  'Atemübungen', 'Pause machen', 'Spaziergang', 'Musik hören',
  'Mit Freunden sprechen', 'Sport', 'Meditation', 'Lesen',
  'Entspannungstechniken', 'Positive Gedanken', 'Struktur',
  'Grenzen setzen', 'Prioritäten setzen', 'Professionelle Hilfe'
];

export const DetailedDiaryForm: React.FC = () => {
  const { addEntry } = useDiary();
  const [formData, setFormData] = useState({
    mood: '😐',
    text: '',
    stressLevel: 5,
    situation: '',
    trigger: [] as string[],
    triggerOther: '',
    physical: [] as string[],
    physicalOther: '',
    emotional: [] as string[],
    emotionalOther: '',
    thoughts: '',
    retrospectiveRating: 5,
    reflectionHelpful: '',
    reflectionText: '',
    whatWouldHelp: [] as string[],
    whatWouldHelpOther: '',
    wishBehavior: '',
    practiceOpportunity: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleArrayToggle = (field: 'trigger' | 'physical' | 'emotional' | 'whatWouldHelp', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleBack = () => {
    // This will be handled by the parent component (DiaryPage)
    window.history.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const entry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      mood: formData.mood,
      text: formData.text,
      stressLevel: formData.stressLevel,
      situation: formData.situation,
      trigger: formData.trigger,
      triggerOther: formData.triggerOther,
      physical: formData.physical,
      physicalOther: formData.physicalOther,
      emotional: formData.emotional,
      emotionalOther: formData.emotionalOther,
      thoughts: formData.thoughts,
      retrospectiveRating: formData.retrospectiveRating,
      reflectionHelpful: formData.reflectionHelpful,
      reflectionText: formData.reflectionText,
      whatWouldHelp: formData.whatWouldHelp,
      whatWouldHelpOther: formData.whatWouldHelpOther,
      wishBehavior: formData.wishBehavior,
      practiceOpportunity: formData.practiceOpportunity
    };

    addEntry(entry);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      mood: '😐',
      text: '',
      stressLevel: 5,
      situation: '',
      trigger: [],
      triggerOther: '',
      physical: [],
      physicalOther: '',
      emotional: [],
      emotionalOther: '',
      thoughts: '',
      retrospectiveRating: 5,
      reflectionHelpful: '',
      reflectionText: '',
      whatWouldHelp: [],
      whatWouldHelpOther: '',
      wishBehavior: '',
      practiceOpportunity: ''
    });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getStressColor = (level: number) => {
    if (level <= 3) return 'bg-green-500';
    if (level <= 6) return 'bg-yellow-500';
    return 'bg-red-500';
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
          ✅ Detaillierter Eintrag erfolgreich gespeichert!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mood Selection */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            🎭 Wie fühlst du dich heute?
          </label>
          <div className="flex gap-3 justify-center">
            {['😊', '😐', '😢', '😡', '😰', '🤔'].map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, mood: emoji }))}
                className={`text-3xl p-3 rounded-xl transition-all ${
                  formData.mood === emoji 
                    ? 'bg-[#4D5922] shadow-lg scale-110' 
                    : 'bg-[#F6D98A] hover:bg-[#F2C75B] hover:scale-105'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Stress Level */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            📊 Stresslevel (0-10)
          </label>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="10"
              value={formData.stressLevel}
              onChange={(e) => setFormData(prev => ({ ...prev, stressLevel: parseInt(e.target.value) }))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #10B981 0%, #F59E0B 50%, #EF4444 100%)`
              }}
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#23412C]">Entspannt</span>
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${getStressColor(formData.stressLevel)}`}></div>
                <span className="font-bold text-[#23412C] text-lg">{formData.stressLevel}/10</span>
              </div>
              <span className="text-sm text-[#23412C]">Sehr gestresst</span>
            </div>
          </div>
        </div>

        {/* Situation */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            📍 Beschreibe die Situation
          </label>
          <textarea
            value={formData.situation}
            onChange={(e) => setFormData(prev => ({ ...prev, situation: e.target.value }))}
            placeholder="Was ist passiert? Wo warst du? Mit wem?"
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
            rows={3}
          />
        </div>

        {/* Triggers */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            ⚡ Was waren die Auslöser?
          </label>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {TRIGGERS.map((trigger) => (
              <button
                key={trigger}
                type="button"
                onClick={() => handleArrayToggle('trigger', trigger)}
                className={`p-2 rounded-xl text-sm font-medium transition-all ${
                  formData.trigger.includes(trigger)
                    ? 'bg-[#4D5922] text-white shadow-md'
                    : 'bg-[#F6D98A] text-[#23412C] hover:bg-white'
                }`}
              >
                {trigger}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={formData.triggerOther}
            onChange={(e) => setFormData(prev => ({ ...prev, triggerOther: e.target.value }))}
            placeholder="Sonstiges..."
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
          />
        </div>

        {/* Physical Reactions */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            🫀 Körperliche Reaktionen
          </label>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {PHYSICAL_REACTIONS.map((reaction) => (
              <button
                key={reaction}
                type="button"
                onClick={() => handleArrayToggle('physical', reaction)}
                className={`p-2 rounded-xl text-sm font-medium transition-all ${
                  formData.physical.includes(reaction)
                    ? 'bg-[#E86F3A] text-white shadow-md'
                    : 'bg-[#F6D98A] text-[#23412C] hover:bg-white'
                }`}
              >
                {reaction}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={formData.physicalOther}
            onChange={(e) => setFormData(prev => ({ ...prev, physicalOther: e.target.value }))}
            placeholder="Sonstiges..."
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
          />
        </div>

        {/* Emotional Reactions */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            💭 Emotionale Reaktionen
          </label>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {EMOTIONAL_REACTIONS.map((emotion) => (
              <button
                key={emotion}
                type="button"
                onClick={() => handleArrayToggle('emotional', emotion)}
                className={`p-2 rounded-xl text-sm font-medium transition-all ${
                  formData.emotional.includes(emotion)
                    ? 'bg-[#4D5922] text-white shadow-md'
                    : 'bg-[#F6D98A] text-[#23412C] hover:bg-white'
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={formData.emotionalOther}
            onChange={(e) => setFormData(prev => ({ ...prev, emotionalOther: e.target.value }))}
            placeholder="Sonstiges..."
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
          />
        </div>

        {/* Thoughts */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            💭 Welche Gedanken hattest du?
          </label>
          <textarea
            value={formData.thoughts}
            onChange={(e) => setFormData(prev => ({ ...prev, thoughts: e.target.value }))}
            placeholder="Was ging dir durch den Kopf? Welche Sorgen oder Befürchtungen hattest du?"
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
            rows={3}
          />
        </div>

        {/* Retrospective Rating */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            🔄 Rückblickende Bewertung (0-10)
          </label>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="10"
              value={formData.retrospectiveRating}
              onChange={(e) => setFormData(prev => ({ ...prev, retrospectiveRating: parseInt(e.target.value) }))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-red-400 to-green-400"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#23412C]">Sehr schlecht</span>
              <span className="font-bold text-[#23412C] text-lg">{formData.retrospectiveRating}/10</span>
              <span className="text-sm text-[#23412C]">Sehr gut</span>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            🤔 Reflexion
          </label>
          <textarea
            value={formData.reflectionText}
            onChange={(e) => setFormData(prev => ({ ...prev, reflectionText: e.target.value }))}
            placeholder="Was hast du aus der Situation gelernt? Wie siehst du sie jetzt?"
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
            rows={3}
          />
        </div>

        {/* What Would Help */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            🆘 Was würde dir helfen?
          </label>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {WHAT_WOULD_HELP.map((help) => (
              <button
                key={help}
                type="button"
                onClick={() => handleArrayToggle('whatWouldHelp', help)}
                className={`p-2 rounded-xl text-sm font-medium transition-all ${
                  formData.whatWouldHelp.includes(help)
                    ? 'bg-[#4D5922] text-white shadow-md'
                    : 'bg-[#F6D98A] text-[#23412C] hover:bg-white'
                }`}
              >
                {help}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={formData.whatWouldHelpOther}
            onChange={(e) => setFormData(prev => ({ ...prev, whatWouldHelpOther: e.target.value }))}
            placeholder="Sonstiges..."
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
          />
        </div>

        {/* Wish Behavior */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            🎯 Wunschverhalten
          </label>
          <textarea
            value={formData.wishBehavior}
            onChange={(e) => setFormData(prev => ({ ...prev, wishBehavior: e.target.value }))}
            placeholder="Wie hättest du gerne reagiert? Was wäre dein Wunschverhalten gewesen?"
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
            rows={3}
          />
        </div>

        {/* Practice Opportunity */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            💪 Übungsmöglichkeit
          </label>
          <textarea
            value={formData.practiceOpportunity}
            onChange={(e) => setFormData(prev => ({ ...prev, practiceOpportunity: e.target.value }))}
            placeholder="Wie kannst du das Wunschverhalten üben? Welche konkreten Schritte willst du unternehmen?"
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
            rows={3}
          />
        </div>

        {/* Text Description */}
        <div className="bg-[#F2C75B] rounded-2xl p-4 border-2 border-[#F6D98A]">
          <label className="block text-[#23412C] font-medium mb-3">
            📝 Zusätzliche Notizen
          </label>
          <textarea
            value={formData.text}
            onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
            placeholder="Weitere Gedanken, Beobachtungen oder Details..."
            className="w-full p-3 border-2 border-[#F6D98A] rounded-xl bg-white text-[#23412C] placeholder-gray-500 focus:border-[#4D5922] focus:outline-none"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#4D5922] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#3A4219] transition-colors shadow-lg flex items-center justify-center gap-2"
        >
          <Save className="w-6 h-6" />
          Detaillierten Eintrag speichern
        </button>
      </form>
    </div>
  );
}; 