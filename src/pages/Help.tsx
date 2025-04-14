import React from 'react';
import { ChevronLeft, HelpCircle, MessageCircle, Book, Mail, Phone, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "Wie funktioniert das Stresstagebuch?",
      answer: "Das Stresstagebuch ermöglicht es Ihnen, Ihre täglichen Stresslevel, Emotionen und Bewältigungsstrategien zu dokumentieren. Sie können schnelle oder detaillierte Einträge erstellen und Ihre Fortschritte über Zeit verfolgen."
    },
    {
      question: "Wie oft sollte ich die Übungen machen?",
      answer: "Wir empfehlen, täglich mindestens eine Übung durchzuführen. Die besten Ergebnisse erzielen Sie mit regelmäßiger Praxis von 10-15 Minuten pro Tag."
    },
    {
      question: "Kann ich meine Daten exportieren?",
      answer: "Ja, Sie können Ihre Fortschrittsdaten und Tagebucheinträge über die Profileinstellungen exportieren. Die Daten werden in einem gängigen Format bereitgestellt."
    }
  ];

  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hilfe & Support</h1>
          <p className="text-gray-600">Finden Sie Antworten und Unterstützung</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 mb-8">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <HelpCircle className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-blue-900">
              Haben Sie Fragen? Wir sind hier, um Ihnen zu helfen. Durchsuchen Sie unsere FAQ oder kontaktieren Sie uns direkt.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Live Chat</span>
          <span className="text-xs text-gray-600">Response in 5 min</span>
        </button>

        <button className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Book className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Dokumentation</span>
          <span className="text-xs text-gray-600">Ausführliche Guides</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Kontakt</h2>
        <div className="space-y-4">
          <a href="mailto:support@example.com" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <Mail className="w-5 h-5 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">E-Mail Support</p>
              <p className="text-sm text-gray-600">support@example.com</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
          </a>

          <a href="tel:+49123456789" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <Phone className="w-5 h-5 text-gray-600" />
            <div>
              <p className="font-medium text-gray-900">Telefon-Support</p>
              <p className="text-sm text-gray-600">Mo-Fr 9:00-17:00</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;