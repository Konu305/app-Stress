import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDiary } from '../context/DiaryContext';

export const DiaryEntryDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { entries } = useDiary();

  const entry = entries.find(e => e.id === id);

  if (!entry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-text/70 text-lg mb-4">Eintrag nicht gefunden</p>
          <button 
            onClick={() => navigate('/diary-overview')}
            className="bg-journalgreen text-white px-4 py-2 rounded-lg"
          >
            Zurück zur Übersicht
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isDetailedEntry = entry.stressLevel !== undefined;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <button 
            onClick={() => navigate('/diary-overview')}
            className="p-2 rounded-full hover:bg-accent"
          >
            <ChevronLeft className="w-6 h-6 text-text" />
          </button>
          <h1 className="text-xl font-bold text-text">
            {isDetailedEntry ? 'Detaillierter Eintrag' : 'Tagebucheintrag'}
          </h1>
          <div className="w-10" />
        </div>

        {/* Content */}
        <div className="px-6 pb-24 space-y-6">
          {/* Basic Info Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  {formatDate(entry.date)}
                </h2>
                <p className="text-gray-500 text-sm">
                  {new Date(entry.date).toLocaleTimeString('de-DE', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
              <div className="text-4xl">{entry.mood}</div>
            </div>

            <div className="prose prose-gray max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {entry.text}
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          {isDetailedEntry && (
            <>
              {/* Stress Level */}
              {entry.stressLevel !== undefined && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Stresslevel</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-3 rounded-full transition-all"
                        style={{ width: `${(entry.stressLevel / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold text-gray-900">{entry.stressLevel}/10</span>
                  </div>
                </div>
              )}

              {/* Situation */}
              {entry.situation && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Situation</h3>
                  <p className="text-gray-700">{entry.situation}</p>
                </div>
              )}

              {/* Triggers */}
              {entry.trigger && entry.trigger.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Auslöser</h3>
                  <div className="flex flex-wrap gap-2">
                    {entry.trigger.map((trigger, index) => (
                      <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {trigger}
                      </span>
                    ))}
                  </div>
                  {entry.triggerOther && (
                    <p className="text-gray-700 mt-3">Sonstiges: {entry.triggerOther}</p>
                  )}
                </div>
              )}

              {/* Physical Reactions */}
              {entry.physical && entry.physical.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Körperliche Reaktionen</h3>
                  <div className="flex flex-wrap gap-2">
                    {entry.physical.map((reaction, index) => (
                      <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {reaction}
                      </span>
                    ))}
                  </div>
                  {entry.physicalOther && (
                    <p className="text-gray-700 mt-3">Sonstiges: {entry.physicalOther}</p>
                  )}
                </div>
              )}

              {/* Emotional Reactions */}
              {entry.emotional && entry.emotional.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Emotionale Reaktionen</h3>
                  <div className="flex flex-wrap gap-2">
                    {entry.emotional.map((emotion, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {emotion}
                      </span>
                    ))}
                  </div>
                  {entry.emotionalOther && (
                    <p className="text-gray-700 mt-3">Sonstiges: {entry.emotionalOther}</p>
                  )}
                </div>
              )}

              {/* Thoughts */}
              {entry.thoughts && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Gedanken</h3>
                  <p className="text-gray-700 italic">"{entry.thoughts}"</p>
                </div>
              )}

              {/* Retrospective Rating */}
              {entry.retrospectiveRating !== undefined && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Rückblickende Bewertung</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 h-3 rounded-full transition-all"
                        style={{ width: `${(entry.retrospectiveRating / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-lg font-bold text-gray-900">{entry.retrospectiveRating}/10</span>
                  </div>
                </div>
              )}

              {/* Reflection */}
              {entry.reflectionText && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Reflexion</h3>
                  {entry.reflectionHelpful && (
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>War die Reflexion hilfreich?</strong> {entry.reflectionHelpful}
                    </p>
                  )}
                  <p className="text-gray-700">{entry.reflectionText}</p>
                </div>
              )}

              {/* What Would Help */}
              {entry.whatWouldHelp && entry.whatWouldHelp.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Was hätte geholfen?</h3>
                  <div className="flex flex-wrap gap-2">
                    {entry.whatWouldHelp.map((help, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {help}
                      </span>
                    ))}
                  </div>
                  {entry.whatWouldHelpOther && (
                    <p className="text-gray-700 mt-3">Sonstiges: {entry.whatWouldHelpOther}</p>
                  )}
                </div>
              )}

              {/* Wish Behavior */}
              {entry.wishBehavior && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Gewünschtes Verhalten</h3>
                  <p className="text-gray-700">{entry.wishBehavior}</p>
                </div>
              )}

              {/* Practice Opportunity */}
              {entry.practiceOpportunity && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Übungsmöglichkeit</h3>
                  <p className="text-gray-700">{entry.practiceOpportunity}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}; 