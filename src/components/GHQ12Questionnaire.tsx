import React, { useState } from 'react';
import { ChevronLeft, Info, Target, Award } from 'lucide-react';

interface GHQ12QuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (score: number) => void;
}

const GHQ12Questionnaire: React.FC<GHQ12QuestionnaireProps> = ({ isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  if (!isOpen) return null;

  const questions = [
    {
      id: 'q1',
      text: 'Konnten Sie sich in letzter Zeit auf Ihre Tätigkeiten konzentrieren?',
      options: [
        'Besser als üblich',
        'So wie üblich',
        'Schlechter als üblich',
        'Viel schlechter als üblich'
      ]
    },
    {
      id: 'q2',
      text: 'Haben Sie in letzter Zeit schlecht geschlafen, weil Sie besorgt waren?',
      options: [
        'Überhaupt nicht',
        'Nicht mehr als üblich',
        'Etwas mehr als üblich',
        'Viel mehr als üblich'
      ]
    },
    {
      id: 'q3',
      text: 'Hatten Sie in letzter Zeit das Gefühl, im täglichen Leben eine nützliche Rolle zu spielen?',
      options: [
        'Mehr als üblich',
        'So wie üblich',
        'Weniger als üblich',
        'Viel weniger als üblich'
      ]
    },
    {
      id: 'q4',
      text: 'Fühlten Sie sich in letzter Zeit in der Lage, Entscheidungen zu treffen?',
      options: [
        'Besser als üblich',
        'So wie üblich',
        'Schlechter als üblich',
        'Viel schlechter als üblich'
      ]
    },
    {
      id: 'q5',
      text: 'Fühlten Sie sich in letzter Zeit ständig unter Druck?',
      options: [
        'Überhaupt nicht',
        'Nicht mehr als üblich',
        'Etwas mehr als üblich',
        'Viel mehr als üblich'
      ]
    },
    {
      id: 'q6',
      text: 'Hatten Sie in letzter Zeit das Gefühl, Ihre Schwierigkeiten nicht überwinden zu können?',
      options: [
        'Überhaupt nicht',
        'Nicht mehr als üblich',
        'Etwas mehr als üblich',
        'Viel mehr als üblich'
      ]
    },
    {
      id: 'q7',
      text: 'Konnten Sie in letzter Zeit Ihre alltäglichen Tätigkeiten genießen?',
      options: [
        'Mehr als üblich',
        'So wie üblich',
        'Weniger als üblich',
        'Viel weniger als üblich'
      ]
    },
    {
      id: 'q8',
      text: 'Waren Sie in letzter Zeit in der Lage, sich Ihren Problemen zu stellen?',
      options: [
        'Besser als üblich',
        'So wie üblich',
        'Schlechter als üblich',
        'Viel schlechter als üblich'
      ]
    },
    {
      id: 'q9',
      text: 'Haben Sie sich in letzter Zeit unglücklich und deprimiert gefühlt?',
      options: [
        'Überhaupt nicht',
        'Nicht mehr als üblich',
        'Etwas mehr als üblich',
        'Viel mehr als üblich'
      ]
    },
    {
      id: 'q10',
      text: 'Haben Sie in letzter Zeit Ihr Selbstvertrauen verloren?',
      options: [
        'Überhaupt nicht',
        'Nicht mehr als üblich',
        'Etwas mehr als üblich',
        'Viel mehr als üblich'
      ]
    },
    {
      id: 'q11',
      text: 'Haben Sie sich in letzter Zeit als wertlose Person gefühlt?',
      options: [
        'Überhaupt nicht',
        'Nicht mehr als üblich',
        'Etwas mehr als üblich',
        'Viel mehr als üblich'
      ]
    },
    {
      id: 'q12',
      text: 'Alles in allem, haben Sie sich in letzter Zeit einigermaßen zufrieden gefühlt?',
      options: [
        'Mehr als üblich',
        'So wie üblich',
        'Weniger als üblich',
        'Viel weniger als üblich'
      ]
    }
  ];

  const calculateScore = () => {
    let totalScore = 0;
    Object.values(answers).forEach(value => {
      totalScore += value;
    });
    return totalScore;
  };

  const getScoreInterpretation = (score: number) => {
    if (score <= 12) {
      return {
        level: 'Niedrig',
        description: 'Ihre psychische Gesundheit scheint stabil zu sein.',
        recommendations: [
          'Behalten Sie Ihre gesunden Gewohnheiten bei',
          'Pflegen Sie weiterhin Ihre sozialen Kontakte',
          'Bleiben Sie körperlich aktiv'
        ]
      };
    } else if (score <= 20) {
      return {
        level: 'Moderat',
        description: 'Sie zeigen einige Anzeichen von psychischer Belastung.',
        recommendations: [
          'Nehmen Sie sich mehr Zeit für Entspannung',
          'Sprechen Sie mit vertrauten Personen',
          'Strukturieren Sie Ihren Alltag'
        ]
      };
    } else {
      return {
        level: 'Hoch',
        description: 'Sie zeigen deutliche Anzeichen von psychischer Belastung.',
        recommendations: [
          'Suchen Sie professionelle Unterstützung',
          'Reduzieren Sie wenn möglich Stressoren',
          'Fokussieren Sie sich auf Selbstfürsorge'
        ]
      };
    }
  };

  const renderIntro = () => (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onClose}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
        >
          <ChevronLeft className="w-6 h-6 text-[#23412C]" />
        </button>
        <h2 className="text-xl font-bold text-[#23412C]">GHQ-12 Fragebogen</h2>
        <div className="w-12" />
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F6D98A] shadow-lg mb-8">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#4D5922] to-[#3D4819] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Target className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-[#23412C] mb-4">
            Allgemeiner Gesundheitsfragebogen
          </h1>
          <p className="text-lg text-[#23412C]/80 max-w-2xl mx-auto">
            Der GHQ-12 ist ein bewährtes Instrument zur Erfassung des psychischen Wohlbefindens.
          </p>
        </div>

        <div className="bg-[#4D5922] rounded-xl p-4 text-white mb-8">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Wichtige Information
          </h4>
          <p className="text-sm text-white/90">
            Dieser Fragebogen dient der Selbsteinschätzung und ersetzt keine professionelle Diagnose. 
            Bei anhaltenden Beschwerden wenden Sie sich bitte an einen Arzt oder Therapeuten.
          </p>
        </div>

        <div className="space-y-4 text-sm text-[#23412C]/70 mb-8">
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 text-[#4D5922] mt-0.5 flex-shrink-0">✓</span>
            <span>12 Fragen zu Ihrem Befinden in den letzten Wochen</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 text-[#4D5922] mt-0.5 flex-shrink-0">✓</span>
            <span>Schnelle und einfache Durchführung</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 text-[#4D5922] mt-0.5 flex-shrink-0">✓</span>
            <span>Personalisierte Empfehlungen basierend auf Ihren Antworten</span>
          </div>
        </div>

        <button
          onClick={() => setCurrentStep('questions')}
          className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-3"
        >
          <Target className="w-6 h-6" />
          Fragebogen starten
        </button>
      </div>
    </div>
  );

  const renderQuestions = () => (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrentStep('intro')}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
        >
          <ChevronLeft className="w-6 h-6 text-[#23412C]" />
        </button>
        <h2 className="text-xl font-bold text-[#23412C]">GHQ-12 Fragebogen</h2>
        <div className="w-12" />
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4">
              {index + 1}. {question.text}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => {
                    setAnswers(prev => ({
                      ...prev,
                      [question.id]: optionIndex
                    }));
                  }}
                  className={`p-4 rounded-xl text-left transition-colors ${
                    answers[question.id] === optionIndex
                      ? 'bg-[#4D5922] text-white'
                      : 'bg-[#F6E3B6]/50 text-[#23412C] hover:bg-[#F6E3B6]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        {Object.keys(answers).length === questions.length && (
          <button
            onClick={() => {
              const score = calculateScore();
              if (onComplete) {
                onComplete(score);
              }
              setCurrentStep('results');
            }}
            className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-3"
          >
            <Target className="w-6 h-6" />
            Auswertung anzeigen
          </button>
        )}
      </div>
    </div>
  );

  const renderResults = () => {
    const score = calculateScore();
    const interpretation = getScoreInterpretation(score);

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentStep('questions')}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Ihre Ergebnisse</h2>
          <div className="w-12" />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#F6D98A] shadow-lg mb-6">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#4D5922] to-[#3D4819] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#23412C] mb-2">
              Belastungsniveau: {interpretation.level}
            </h3>
            <p className="text-lg text-[#23412C]/80">
              {interpretation.description}
            </p>
          </div>

          <div className="bg-[#F6E3B6]/50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold text-[#23412C] mb-4">Empfehlungen für Sie:</h4>
            <div className="space-y-3">
              {interpretation.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 text-[#4D5922] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-[#23412C]">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-3"
          >
            <Target className="w-6 h-6" />
            Abschließen
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 overflow-y-auto">
      {currentStep === 'intro' && renderIntro()}
      {currentStep === 'questions' && renderQuestions()}
      {currentStep === 'results' && renderResults()}
    </div>
  );
};

export default GHQ12Questionnaire; 