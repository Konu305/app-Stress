import React, { useState } from 'react';
import { Lightbulb, X, ChevronDown, ChevronRight } from 'lucide-react';

interface KeyFactsProps {
  isOpen: boolean;
  onClose: () => void;
}

interface KeyFact {
  fact: string;
  example: string;
  strategy: string;
}

const KeyFacts: React.FC<KeyFactsProps> = ({ isOpen, onClose }) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [expandedFacts, setExpandedFacts] = useState<Set<string>>(new Set());

  const toggleFact = (factId: string) => {
    const newExpanded = new Set(expandedFacts);
    if (newExpanded.has(factId)) {
      newExpanded.delete(factId);
    } else {
      newExpanded.add(factId);
    }
    setExpandedFacts(newExpanded);
  };

  const moduleKeyFacts = {
    'Grundlagen des Stressmanagements': {
      'Was ist Stress?': [
        {
          fact: "Stress ist eine natürliche körperliche Reaktion auf Herausforderungen",
          example: "Vor einem wichtigen Vortrag spürt man Herzklopfen und feuchte Hände - das ist eine normale Stressreaktion, die uns auf Höchstleistung vorbereitet.",
          strategy: "Akzeptieren Sie diese Reaktionen als normal und nutzen Sie die erhöhte Energie positiv, z.B. durch tiefes Durchatmen und positive Selbstgespräche."
        },
        {
          fact: "Das Stresshormon Cortisol spielt eine wichtige Rolle",
          example: "Morgendlicher Termindruck führt zu erhöhtem Cortisolspiegel, was sich in Unruhe und Konzentrationsschwierigkeiten äußern kann.",
          strategy: "Planen Sie bewusst Pausen ein und nutzen Sie Entspannungsübungen wie die 4-7-8-Atemtechnik: 4 Sekunden einatmen, 7 Sekunden halten, 8 Sekunden ausatmen."
        },
        {
          fact: "Es gibt positiven (Eustress) und negativen Stress (Disstress)",
          example: "Eustress: Die Vorfreude auf den Urlaub. Disstress: Ständige Überlastung im Job ohne Ausgleich.",
          strategy: "Führen Sie ein Stresstagebuch und unterscheiden Sie zwischen motivierendem und belastendem Stress. Nutzen Sie Eustress als Motivator und entwickeln Sie Strategien für Disstress."
        },
        {
          fact: "Stressreaktionen aktivieren das sympathische Nervensystem",
          example: "In stressigen Situationen steigen Puls und Blutdruck, die Muskulatur spannt sich an - der Körper geht in 'Kampf-oder-Flucht'-Modus.",
          strategy: "Aktivieren Sie bewusst das parasympathische Nervensystem durch Progressive Muskelentspannung: Spannen Sie verschiedene Muskelgruppen für 5-7 Sekunden an und entspannen Sie sie dann für 30 Sekunden."
        },
        {
          fact: "Chronischer Stress kann gesundheitliche Folgen haben",
          example: "Dauerstress im Job führt zu Schlafstörungen, Kopfschmerzen und einem geschwächten Immunsystem.",
          strategy: "Etablieren Sie tägliche Entspannungsrituale: 10 Minuten Meditation am Morgen, Mittagspause ohne Handy, abendliche Achtsamkeitsübungen."
        },
        {
          fact: "Jeder Mensch reagiert unterschiedlich auf Stressoren",
          example: "Während Person A in Prüfungssituationen gelassen bleibt, reagiert Person B mit starker Nervosität.",
          strategy: "Entwickeln Sie Ihr persönliches Stress-Profil: Notieren Sie Ihre typischen Stressauslöser, Reaktionen und erfolgreiche Bewältigungsstrategien."
        }
      ]
    },
    'Kognitive Stressbewältigung': {
      'Gedanken und Stress': [
        {
          fact: "Gedanken beeinflussen direkt unser Stressempfinden",
          example: "Der Gedanke 'Ich schaffe das nie' verstärkt Stress, während 'Ich gehe es Schritt für Schritt an' beruhigend wirkt.",
          strategy: "Üben Sie positives Reframing: Formulieren Sie stressende Gedanken um in konstruktive Aussagen. Aus 'Das ist zu viel' wird 'Ich priorisiere und konzentriere mich auf das Wichtigste'."
        },
        {
          fact: "Negative Denkmuster können Stress verstärken",
          example: "Katastrophendenken wie 'Wenn ich diesen Termin verpasse, verliere ich meinen Job' führt zu unnötigem Stress.",
          strategy: "Wenden Sie die 3-Spalten-Technik an: Situation | negativer Gedanke | realistischere Alternative. Überprüfen Sie Ihre Gedanken auf ihren Realitätsgehalt."
        },
        {
          fact: "Kognitive Umstrukturierung hilft bei der Stressbewältigung",
          example: "Statt 'Ich muss perfekt sein' denken Sie 'Ich gebe mein Bestes und das ist gut genug'.",
          strategy: "Identifizieren Sie Ihre 'Muss-Gedanken' und ersetzen Sie sie durch flexiblere 'Kann-Gedanken'. Üben Sie dies täglich mit kleinen Situationen."
        },
        {
          fact: "Selbstgespräche haben Einfluss auf unsere Stressreaktion",
          example: "Innere Dialoge wie 'Ruhig bleiben, du hast das schon oft geschafft' können Stress reduzieren.",
          strategy: "Entwickeln Sie unterstützende Mantras für stressige Situationen. Sprechen Sie in Stressmomenten bewusst beruhigend mit sich selbst."
        },
        {
          fact: "Perspektivwechsel kann Stress reduzieren",
          example: "Eine Präsentation als Chance zur persönlichen Entwicklung statt als Bedrohung sehen.",
          strategy: "Üben Sie die 'Zukunfts-Perspektive': Fragen Sie sich 'Wie wichtig wird diese Situation in einem Jahr sein?' oder 'Was kann ich daraus lernen?'"
        }
      ]
    },
    'Physische Stressbewältigung': {
      'Körper und Stress': [
        {
          fact: "Körperliche Aktivität reduziert Stresshormone",
          example: "30 Minuten zügiges Gehen nach einem stressigen Meeting hilft, Anspannung abzubauen.",
          strategy: "Bauen Sie 'Bewegungs-Snacks' in Ihren Alltag ein: Treppe statt Aufzug, Spaziergang in der Mittagspause, 5 Minuten Stretching zwischen Meetings."
        },
        {
          fact: "Regelmäßige Bewegung stärkt die Stressresistenz",
          example: "Menschen, die 3x wöchentlich Sport treiben, berichten von besserer Stresstoleranz.",
          strategy: "Erstellen Sie einen Wochenplan mit festen Bewegungszeiten. Kombinieren Sie verschiedene Aktivitäten: Ausdauer, Kraft und Entspannung."
        },
        {
          fact: "Entspannungstechniken aktivieren den Parasympathikus",
          example: "10 Minuten bewusstes Atmen senkt nachweislich Herzfrequenz und Blutdruck.",
          strategy: "Lernen Sie die 'Box-Breathing'-Technik: 4 Sekunden einatmen, 4 Sekunden halten, 4 Sekunden ausatmen, 4 Sekunden Pause. Wiederholen Sie dies 5-10 Mal."
        },
        {
          fact: "Atmung beeinflusst direkt unser Nervensystem",
          example: "Flache, schnelle Atmung verstärkt Stress, tiefe Bauchatmung beruhigt.",
          strategy: "Üben Sie die 'Drei-Minuten-Atemraum'-Meditation: 1. Minute Wahrnehmung, 2. Minute Fokus auf Atmung, 3. Minute Körperempfindungen spüren."
        },
        {
          fact: "Progressive Muskelentspannung löst körperliche Anspannung",
          example: "Gezielte An- und Entspannung der Schultern löst Verspannungen durch Bildschirmarbeit.",
          strategy: "Führen Sie 2x täglich eine 'Mini-PMR' durch: Spannen Sie nacheinander Hände, Arme, Schultern, Gesicht für je 5 Sekunden an und lassen Sie dann los."
        }
      ]
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="fixed inset-y-0 right-0 w-full max-w-2xl bg-white shadow-lg">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Wichtige Erkenntnisse & Strategien</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          {Object.entries(moduleKeyFacts).map(([module, lessons]) => (
            <div key={module} className="mb-8">
              <h3 
                className="text-lg font-semibold text-gray-900 mb-4 cursor-pointer hover:text-blue-600 flex items-center gap-2"
                onClick={() => setSelectedModule(selectedModule === module ? null : module)}
              >
                {selectedModule === module ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                {module}
              </h3>
              {selectedModule === module && Object.entries(lessons).map(([lesson, facts]) => (
                <div key={lesson} className="mb-6 ml-4">
                  <h4 className="font-medium text-gray-800 mb-3">{lesson}</h4>
                  <div className="space-y-4">
                    {facts.map((fact: KeyFact, index) => {
                      const factId = `${module}-${lesson}-${index}`;
                      const isExpanded = expandedFacts.has(factId);
                      
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-xl border p-4"
                        >
                          <div 
                            className="flex items-start gap-3 cursor-pointer"
                            onClick={() => toggleFact(factId)}
                          >
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm text-blue-600 font-medium">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-900 font-medium">{fact.fact}</p>
                              {isExpanded && (
                                <div className="mt-4 space-y-4">
                                  <div className="bg-yellow-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-yellow-800 mb-2">Beispiel:</p>
                                    <p className="text-sm text-yellow-700">{fact.example}</p>
                                  </div>
                                  <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-sm font-medium text-green-800 mb-2">Anwendungsstrategie:</p>
                                    <p className="text-sm text-green-700">{fact.strategy}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                            {isExpanded ? (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFacts;