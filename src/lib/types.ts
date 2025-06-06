export interface DiaryEntry {
  id: string;
  date: string;
  mood: string | number;
  text?: string;
  // Detailed entry fields
  stressLevel?: number;
  situation?: string;
  trigger?: string[];
  triggerOther?: string;
  physical?: string[];
  physicalOther?: string;
  emotional?: string[];
  emotionalOther?: string;
  thoughts?: string;
  retrospectiveRating?: number;
  reflectionHelpful?: string;
  reflectionText?: string;
  whatWouldHelp?: string[];
  whatWouldHelpOther?: string;
  wishBehavior?: string;
  practiceOpportunity?: string;
  notes?: string;
}

export const SAMPLE_ENTRIES: DiaryEntry[] = [
  {
    id: '1',
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    mood: '😊',
    text: "Heute war ein produktiver Tag! Ich habe alle meine Aufgaben erledigt und fühle mich sehr zufrieden.",
    stressLevel: 2,
    situation: 'Erfolgreicher Arbeitstag mit allen erledigten Aufgaben',
    trigger: ['Arbeit'],
    physical: ['Entspannung', 'Energie'],
    emotional: ['Freude', 'Stolz', 'Zufriedenheit'],
    thoughts: 'Ich bin stolz auf das, was ich heute geschafft habe.',
    retrospectiveRating: 8,
    reflectionText: 'Produktive Tage geben mir viel Energie und Motivation.',
    whatWouldHelp: ['Erfolge feiern', 'Positive Selbstgespräche'],
    wishBehavior: 'Ich möchte meine Erfolge bewusster wahrnehmen.',
    practiceOpportunity: 'Jeden Abend drei positive Dinge des Tages notieren.'
  },
  {
    id: '2',
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    mood: '😐',
    text: "Ein durchschnittlicher Tag. Nichts Besonderes ist passiert, aber das ist auch in Ordnung.",
    stressLevel: 4,
    situation: 'Normaler Alltag ohne besondere Ereignisse',
    trigger: [],
    physical: ['Müdigkeit'],
    emotional: ['Ruhe', 'Zufriedenheit'],
    thoughts: 'Manchmal sind ruhige Tage genau das, was ich brauche.',
    retrospectiveRating: 6,
    reflectionText: 'Auch normale Tage haben ihren Wert.',
    whatWouldHelp: ['Entspannung', 'Kleine Freuden finden'],
    wishBehavior: 'Ich möchte auch in ruhigen Momenten dankbar sein.',
    practiceOpportunity: 'Bewusst kleine schöne Momente im Alltag wahrnehmen.'
  },
  {
    id: '3',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    mood: '😢',
    text: "Heute war ein schwieriger Tag. Ich hatte viel Stress bei der Arbeit.",
    stressLevel: 7,
    situation: 'Stressiger Arbeitstag mit vielen Herausforderungen',
    trigger: ['Arbeit', 'Zeitdruck'],
    physical: ['Anspannung', 'Kopfschmerzen'],
    emotional: ['Stress', 'Überforderung', 'Frustration'],
    thoughts: 'Manchmal ist alles zu viel auf einmal.',
    retrospectiveRating: 4,
    reflectionText: 'Schwierige Tage gehören dazu, aber sie gehen auch vorbei.',
    whatWouldHelp: ['Pausen machen', 'Atemübungen'],
    wishBehavior: 'Ich möchte lernen, in stressigen Zeiten ruhiger zu bleiben.',
    practiceOpportunity: 'Bei Stress bewusst drei tiefe Atemzüge nehmen.'
  },
  {
    id: '4',
    date: new Date().toISOString().split('T')[0],
    mood: '😊',
    text: "Ein wundervoller Tag! Ich habe Zeit mit Freunden verbracht und neue Energie getankt.",
    stressLevel: 1,
    situation: 'Schöner Tag mit Freunden',
    trigger: ['Soziale Kontakte'],
    physical: ['Energie', 'Wohlbefinden'],
    emotional: ['Freude', 'Dankbarkeit', 'Verbundenheit'],
    thoughts: 'Freunde sind so wichtig für mein Wohlbefinden.',
    retrospectiveRating: 9,
    reflectionText: 'Zeit mit lieben Menschen gibt mir so viel Kraft.',
    whatWouldHelp: ['Mehr Zeit mit Freunden', 'Soziale Aktivitäten'],
    wishBehavior: 'Ich möchte bewusster Zeit für Freundschaften einplanen.',
    practiceOpportunity: 'Regelmäßig Freunde kontaktieren und Treffen planen.'
  },
  {
    id: '5',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    mood: '🤔',
    text: `Heute war ein sehr reflektierender Tag. Morgens bin ich mit gemischten Gefühlen aufgewacht - einerseits gespannt auf die anstehende Präsentation, andererseits nervös wegen der vielen Kollegen, die dabei sein würden.

Die Präsentation lief besser als erwartet! Ich hatte mich gut vorbereitet und konnte alle Fragen souverän beantworten. Mein Chef hat mir sogar ein Kompliment gemacht, was mich sehr gefreut hat.

Mittags habe ich mit Sarah zu Mittag gegessen. Es war schön, sich mal wieder richtig zu unterhalten und nicht nur über die Arbeit zu sprechen. Sie hat mir von ihrem neuen Hobby erzählt - Töpfern. Das klingt so entspannend, vielleicht sollte ich auch mal etwas Kreatives ausprobieren.

Am Nachmittag kam dann die Nachricht, dass das Projekt, an dem ich seit Wochen arbeite, verschoben wird. Erst war ich frustriert, aber dann habe ich realisiert, dass das auch eine Chance ist, alles nochmal zu überdenken und zu verbessern.

Abends habe ich einen langen Spaziergang gemacht und dabei Musik gehört. Die frische Luft und die Bewegung haben mir geholfen, den Tag zu reflektieren. Ich merke, wie wichtig es ist, auch mal innezuhalten und nicht immer nur zu funktionieren.

Insgesamt war es ein Tag voller Höhen und Tiefen, aber ich gehe mit einem guten Gefühl ins Bett. Manchmal sind es gerade diese gemischten Tage, die einen weiterbringen.`,
    stressLevel: 5,
    situation: 'Gemischter Tag mit Präsentation, Projektänderungen und Reflexion',
    trigger: ['Arbeit', 'Zeitdruck'],
    physical: ['Nervosität', 'Anspannung', 'Entspannung'],
    emotional: ['Nervosität', 'Stolz', 'Freude', 'Frustration', 'Ruhe', 'Dankbarkeit'],
    thoughts: 'Es ist okay, wenn nicht alles perfekt läuft. Wichtig ist, dass ich mein Bestes gebe.',
    retrospectiveRating: 7,
    reflectionText: 'Auch schwierige Tage haben ihre guten Momente. Die Präsentation war ein Erfolg!',
    whatWouldHelp: ['Flexibilität', 'Positive Gedanken', 'Bewegung'],
    wishBehavior: 'Ich möchte lernen, auch bei Rückschlägen die positiven Aspekte zu sehen.',
    practiceOpportunity: 'Abends reflektieren: Was lief heute gut? Was habe ich gelernt?'
  },
  {
    id: '6',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    mood: '😰',
    text: "Stressige Situation im Büro - wichtige Präsentation vor dem Vorstand",
    stressLevel: 8,
    situation: "Wichtige Präsentation vor dem Vorstand mit sehr kurzer Vorbereitungszeit",
    trigger: ['Arbeit', 'Zeitdruck'],
    triggerOther: '',
    physical: ['Herzrasen', 'Schwitzen', 'Anspannung'],
    physicalOther: '',
    emotional: ['Angst', 'Überforderung', 'Nervosität'],
    emotionalOther: '',
    thoughts: "Ich schaffe das nicht rechtzeitig. Was, wenn ich mich blamiere? Alle werden merken, dass ich nicht gut genug vorbereitet bin. Mein Chef wird enttäuscht sein.",
    retrospectiveRating: 6,
    reflectionHelpful: "Ja, sehr hilfreich",
    reflectionText: "Beim Reflektieren ist mir aufgefallen, dass meine Gedanken sehr katastrophisierend waren. In Wirklichkeit hatte ich mehr Zeit als gedacht und die Präsentation lief am Ende gut. Meine Angst war größer als die tatsächliche Bedrohung.",
    whatWouldHelp: ['Atmen', 'Gedanken umlenken', 'Pause machen'],
    whatWouldHelpOther: '',
    wishBehavior: "Ich hätte gerne früher eine Pause gemacht und bewusst geatmet, anstatt in Panik zu verfallen. Außerdem hätte ich mir eine realistische To-Do-Liste machen sollen.",
    practiceOpportunity: "Beim nächsten Mal werde ich die 4-7-8 Atemtechnik anwenden und mir bewusst 5 Minuten Zeit nehmen, um die Situation realistisch einzuschätzen, bevor ich in Stress verfalle."
  }
]; 