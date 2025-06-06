import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Brain, TrendingUp, Info, Target, Heart, BarChart3 } from 'lucide-react';

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
  const [showIntro, setShowIntro] = useState(true);
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
    if (score <= 13) return { 
      level: "Niedrig", 
      color: "text-[#4D5922]", 
      bgColor: "bg-[#4D5922]",
      description: "Sie haben bereits gute Strategien im Umgang mit Stress entwickelt.",
      recommendation: "Nutzen Sie die Übungen zur Vertiefung Ihrer Entspannungsfähigkeiten."
    };
    if (score <= 26) return { 
      level: "Mittel", 
      color: "text-[#E86F3A]", 
      bgColor: "bg-[#E86F3A]",
      description: "Ihr Stresslevel liegt im mittleren Bereich.",
      recommendation: "Die Übungen in diesem Kurs werden Ihnen helfen, besser mit Stress umzugehen."
    };
    return { 
      level: "Hoch", 
      color: "text-[#D85A2A]", 
      bgColor: "bg-[#D85A2A]",
      description: "Sie erleben aktuell ein hohes Stressniveau.",
      recommendation: "Wir empfehlen Ihnen, die Stressmanagement-Übungen regelmäßig durchzuführen."
    };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showCongratulations) {
    return (
      <div className="fixed inset-0 bg-[#F6E3B6] z-50 flex flex-col overflow-y-auto">
        <div className="flex-1 p-6 flex flex-col items-center justify-center text-center min-h-0">
          <div className="w-24 h-24 bg-[#4D5922] rounded-full flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#23412C] mb-4 flex-shrink-0">Herzlichen Glückwunsch!</h2>
          <p className="text-[#23412C]/80 mb-8 max-w-sm leading-relaxed flex-shrink-0">
            Sie haben alle Fragen erfolgreich beantwortet. Nun können wir mit dem ersten Modul beginnen.
          </p>
          <button
            onClick={onClose}
            className="bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex-shrink-0"
          >
            Zum Modul 1
          </button>
        </div>
      </div>
    );
  }

  if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-[#F6E3B6] z-50 flex flex-col overflow-y-auto">
        <div className="flex-1 p-6 flex flex-col items-center justify-center text-center min-h-0">
          <div className="w-24 h-24 bg-[#F2C75B] rounded-full flex items-center justify-center mb-6 shadow-lg flex-shrink-0">
            <Brain className="w-12 h-12 text-[#23412C]" />
          </div>
          <h2 className="text-3xl font-bold text-[#23412C] mb-4 flex-shrink-0">Vielen Dank!</h2>
          <p className="text-[#23412C]/80 mb-8 max-w-sm leading-relaxed flex-shrink-0">
            Sie haben den PSS-10 Fragebogen erfolgreich abgeschlossen. Nun können wir mit dem Kurs beginnen.
          </p>
          <button
            onClick={() => setShowCongratulations(true)}
            className="bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center gap-2 flex-shrink-0"
          >
            <span>Weiter</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const { level, color, bgColor, description, recommendation } = getStressLevel(totalScore);

    return (
      <div className="fixed inset-0 bg-[#F6E3B6] z-50 flex flex-col overflow-y-auto">
        <div className="p-6 flex items-center justify-between flex-shrink-0">
          <button
            onClick={onClose}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">Ihre Ergebnisse</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 flex flex-col items-center justify-center min-h-0">
          <div className="w-56 h-56 rounded-full border-8 border-white/80 backdrop-blur-sm flex items-center justify-center mb-8 shadow-2xl bg-white/50 flex-shrink-0">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2 text-[#23412C]">{totalScore}</p>
              <p className={`text-2xl font-bold ${color}`}>{level}</p>
              <p className="text-sm text-[#23412C]/60 mt-1">von 40 Punkten</p>
            </div>
          </div>

          <div className="text-center max-w-sm flex-shrink-0">
            <h3 className="text-2xl font-bold text-[#23412C] mb-4">Ihr Stresslevel ist {level}</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
              <p className="text-[#23412C]/80 mb-4 leading-relaxed">
                {description}
              </p>
              <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#E86F3A] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#23412C] leading-relaxed">
                    {recommendation}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowThankYou(true)}
              className="bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center gap-2 mx-auto"
            >
              <span>Weiter</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#F6E3B6] via-[#F6E3B6] to-[#F2C75B]/30 z-50 flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
          >
            <ChevronLeft className="w-6 h-6 text-[#23412C]" />
          </button>
          <h2 className="text-xl font-bold text-[#23412C]">PSS-10 Fragebogen</h2>
          <div className="w-12" />
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-[#E86F3A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <BarChart3 className="w-16 h-16 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold text-[#23412C] mb-4">Stress-Eingangsassessment</h1>
            <p className="text-[#23412C]/80 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Bevor wir mit dem Kurs beginnen, möchten wir Ihr aktuelles Stresslevel besser verstehen.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-xl font-bold text-[#23412C] mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-[#E86F3A]" />
              Warum führen wir diesen Fragebogen durch?
            </h3>
            
            <div className="space-y-4 text-sm text-[#23412C]/80 leading-relaxed">
              <div className="bg-[#E86F3A]/20 rounded-xl p-4 border-l-4 border-[#E86F3A]">
                <h4 className="font-semibold text-[#23412C] mb-2">🎯 Individuelle Ausgangslage erfassen</h4>
                <p>
                  Jeder Mensch erlebt Stress unterschiedlich. Um Ihnen die bestmögliche Unterstützung zu bieten, 
                  müssen wir zunächst verstehen, wie stark Sie aktuell von Stress betroffen sind. Diese Einschätzung 
                  hilft uns, den Kurs optimal auf Ihre Bedürfnisse anzupassen.
                </p>
              </div>

              <div className="bg-[#F6E3B6]/50 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">📊 Wissenschaftlich validiert</h4>
                <p>
                  Der PSS-10 (Perceived Stress Scale) ist ein wissenschaftlich anerkanntes Instrument zur 
                  Messung des subjektiv wahrgenommenen Stresses. Er wurde speziell entwickelt, um zu erfassen, 
                  wie unvorhersagbar, unkontrollierbar und überlastend Sie Ihr Leben empfinden.
                </p>
              </div>

              <div className="bg-[#F2C75B]/30 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">🔍 Bewusstsein schaffen</h4>
                <p>
                  Oft sind wir uns nicht vollständig bewusst, wie stark uns Stress wirklich belastet. 
                  Die Fragen helfen Ihnen dabei, Ihre Stressreaktionen bewusster wahrzunehmen und 
                  ein realistisches Bild Ihrer aktuellen Situation zu entwickeln.
                </p>
              </div>

              <div className="bg-[#4D5922]/20 rounded-xl p-4">
                <h4 className="font-semibold text-[#23412C] mb-2">📈 Fortschritt messbar machen</h4>
                <p>
                  Diese Eingangsmessung dient als Vergleichswert für Ihren Fortschritt. Am Ende des Kurses 
                  können Sie sehen, wie sich Ihr Stresslevel verändert hat und welche Verbesserungen Sie 
                  durch die erlernten Techniken erreicht haben.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#F6D98A] shadow-lg">
            <h3 className="text-lg font-semibold text-[#23412C] mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#E86F3A]" />
              Was erwartet Sie?
            </h3>
            
            <div className="space-y-3 text-sm text-[#23412C]/80">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E86F3A] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">1</div>
                <p><strong>10 Fragen</strong> zu Ihrem Stresserleben in den letzten 4 Wochen</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F2C75B] rounded-full flex items-center justify-center text-[#23412C] text-xs font-bold mt-0.5">2</div>
                <p><strong>5 Antwortmöglichkeiten</strong> von "Nie" bis "Sehr oft"</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#4D5922] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
                <p><strong>Sofortige Auswertung</strong> mit personalisierter Einschätzung</p>
              </div>
            </div>
          </div>

          <div className="bg-[#4D5922] rounded-2xl p-6 mb-6 text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Ihre Daten sind sicher
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Alle Ihre Antworten werden vertraulich behandelt und dienen ausschließlich Ihrer persönlichen 
              Entwicklung. Die Ergebnisse helfen uns, Ihnen maßgeschneiderte Empfehlungen zu geben.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setShowIntro(false)}
              className="w-full bg-[#E86F3A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#D85A2A] transition-colors shadow-lg border border-[#F6D98A] flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Fragebogen jetzt starten
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#F6E3B6] z-50 flex flex-col overflow-y-auto">
      <div className="p-6 flex items-center justify-between flex-shrink-0">
        <button
          onClick={onClose}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg border border-[#F6D98A]"
        >
          <ChevronLeft className="w-6 h-6 text-[#23412C]" />
        </button>
        <h2 className="text-xl font-bold text-[#23412C]">PSS-10 Fragebogen</h2>
        <div className="w-12" />
      </div>

      <div className="flex-1 p-6 flex flex-col min-h-0">
        <div className="mb-8 flex-shrink-0">
          <div className="w-full bg-white/60 rounded-full h-3 shadow-inner border border-[#F6D98A]">
            <div
              className="bg-gradient-to-r from-[#E86F3A] to-[#F2C75B] h-3 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 text-sm text-[#23412C]/70 text-center font-medium">
            Frage {currentQuestion + 1} von {questions.length}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between min-h-0">
          <div className="flex-1 overflow-y-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-[#F6D98A] shadow-lg">
              <h3 className="text-xl font-semibold text-[#23412C] mb-4 leading-relaxed">
                {questions[currentQuestion].text}
              </h3>
            </div>

            <div className="space-y-4 pb-4">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full p-5 rounded-2xl border-2 border-white/60 bg-white/40 backdrop-blur-sm hover:border-[#E86F3A] hover:bg-white/60 transition-all duration-300 text-left shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-[#23412C] text-lg">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8 flex-shrink-0">
            <button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              className={`w-12 h-12 rounded-2xl transition-colors shadow-md ${
                currentQuestion === 0
                  ? 'bg-white/30 text-[#23412C]/30 cursor-not-allowed'
                  : 'bg-white/80 text-[#23412C] hover:bg-white border border-[#F6D98A]'
              }`}
            >
              <ChevronLeft className="w-6 h-6 mx-auto" />
            </button>
            <button
              onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentQuestion === questions.length - 1 || !answers.hasOwnProperty(currentQuestion)}
              className={`w-12 h-12 rounded-2xl transition-colors shadow-md ${
                currentQuestion === questions.length - 1 || !answers.hasOwnProperty(currentQuestion)
                  ? 'bg-white/30 text-[#23412C]/30 cursor-not-allowed'
                  : 'bg-[#E86F3A] text-white hover:bg-[#D85A2A] border border-[#F6D98A]'
              }`}
            >
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSSQuestionnaire;