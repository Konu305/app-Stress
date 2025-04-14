import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  isReversed?: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    text: "In den letzten vier Wochen, wie oft fühlten Sie sich verärgert wegen etwas, das unerwartet passiert ist?"
  },
  {
    id: 2,
    text: "In den letzten vier Wochen, wie oft hatten Sie das Gefühl, die wichtigen Dinge in Ihrem Leben nicht unter Kontrolle zu haben?"
  },
  {
    id: 3,
    text: "In den letzten vier Wochen, wie oft fühlten Sie sich nervös und gestresst?"
  },
  {
    id: 4,
    text: "In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass Sie Ihre Aufgaben nicht bewältigen können?"
  },
  {
    id: 5,
    text: "In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass alles nach Ihren Wünschen verläuft?",
    isReversed: true
  },
  {
    id: 6,
    text: "In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass Sie nicht mit all den Dingen zurechtkommen, die Sie erledigen müssen?"
  },
  {
    id: 7,
    text: "In den letzten vier Wochen, wie oft konnten Sie sich entspannen?",
    isReversed: true
  },
  {
    id: 8,
    text: "In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass Sie die Kontrolle über die Dinge behalten?",
    isReversed: true
  },
  {
    id: 9,
    text: "In den letzten vier Wochen, wie oft waren Sie verärgert, weil Dinge außerhalb Ihrer Kontrolle lagen?"
  },
  {
    id: 10,
    text: "In den letzten vier Wochen, wie oft hatten Sie das Gefühl, dass Schwierigkeiten sich so sehr anhäufen, dass Sie sie nicht überwinden können?"
  }
];

const options = [
  { value: 0, label: "Nie" },
  { value: 1, label: "Fast nie" },
  { value: 2, label: "Manchmal" },
  { value: 3, label: "Häufig" },
  { value: 4, label: "Sehr oft" }
];

interface PSSQuestionnaireProps {
  onClose: () => void;
}

const PSSQuestionnaire: React.FC<PSSQuestionnaireProps> = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const calculateScore = useCallback(() => {
    let score = 0;
    questions.forEach((question, index) => {
      const answer = answers[index] || 0;
      score += question.isReversed ? 4 - answer : answer;
    });
    return score;
  }, [answers]);

  const handleAnswer = useCallback((value: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const score = calculateScore();
      setTotalScore(score);
      setShowResults(true);
    }
  }, [currentQuestion, calculateScore]);

  const getStressLevel = (score: number) => {
    if (score <= 13) return { level: "Niedrig", color: "text-green-600" };
    if (score <= 26) return { level: "Mittel", color: "text-yellow-600" };
    return { level: "Hoch", color: "text-red-600" };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showCongratulations) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <ArrowRight className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Herzlichen Glückwunsch!</h2>
          <p className="text-gray-600 mb-8 max-w-sm">
            Sie haben alle Fragen erfolgreich beantwortet. Nun können wir mit dem ersten Modul beginnen.
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Zum Modul 1
          </button>
        </div>
      </div>
    );
  }

  if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <ArrowRight className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vielen Dank!</h2>
          <p className="text-gray-600 mb-8 max-w-sm">
            Sie haben den PSS-10 Fragebogen erfolgreich abgeschlossen. Nun können wir mit dem Kurs beginnen.
          </p>
          <button
            onClick={() => setShowCongratulations(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Weiter
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const { level, color } = getStressLevel(totalScore);

    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="text-xl font-bold text-gray-900">Ihre Ergebnisse</h2>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>

        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          <div className="w-48 h-48 rounded-full border-8 border-gray-200 flex items-center justify-center mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">{totalScore}</p>
              <p className={`text-xl font-semibold ${color}`}>{level}</p>
            </div>
          </div>

          <div className="text-center max-w-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ihr Stresslevel ist {level}</h3>
            <p className="text-gray-600 mb-8">
              Basierend auf Ihren Antworten haben Sie ein {level.toLowerCase()}es Stressniveau. 
              {level === "Hoch" && " Wir empfehlen Ihnen, die Stressmanagement-Übungen regelmäßig durchzuführen."}
              {level === "Mittel" && " Die Übungen in diesem Kurs werden Ihnen helfen, besser mit Stress umzugehen."}
              {level === "Niedrig" && " Sie haben bereits gute Strategien im Umgang mit Stress entwickelt."}
            </p>
            <button
              onClick={() => setShowThankYou(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Weiter
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">PSS-10 Fragebogen</h2>
        <div className="w-10" /> {/* Spacer for alignment */}
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600 text-center">
            Frage {currentQuestion + 1} von {questions.length}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              {questions[currentQuestion].text}
            </h3>

            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left"
                >
                  <span className="font-medium text-gray-900">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              className={`p-2 rounded-lg ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentQuestion === questions.length - 1}
              className={`p-2 rounded-lg ${
                currentQuestion === questions.length - 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSSQuestionnaire;