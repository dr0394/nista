import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Wohin liefern Sie?',
      answer: 'Wir liefern in einem Umkreis von 10 km um unser Restaurant. Geben Sie einfach Ihre Adresse ein, um zu prüfen, ob wir zu Ihnen liefern können.'
    },
    {
      question: 'Wie hoch ist der Mindestbestellwert?',
      answer: 'Der Mindestbestellwert für Lieferungen beträgt 15 €. Für Abholungen gibt es keinen Mindestbestellwert.'
    },
    {
      question: 'Welche Zahlungsarten akzeptieren Sie?',
      answer: 'Wir akzeptieren Barzahlung, EC-Karte, Kreditkarte und Online-Zahlung über PayPal. Bei Lieferungen ist auch Kartenzahlung an der Tür möglich.'
    },
    {
      question: 'Wie lange dauert die Lieferung?',
      answer: 'In der Regel beträgt die Lieferzeit 30-45 Minuten. Zu Stoßzeiten kann es etwas länger dauern. Sie erhalten eine Bestätigung mit der voraussichtlichen Lieferzeit.'
    },
    {
      question: 'Kann ich einen Tisch reservieren?',
      answer: 'Ja, wir empfehlen eine Reservierung, besonders am Wochenende. Sie können telefonisch, per WhatsApp oder über unser Kontaktformular reservieren.'
    },
    {
      question: 'Bieten Sie auch vegetarische Gerichte an?',
      answer: 'Ja, wir haben eine Auswahl an vegetarischen Gerichten, darunter Veggie-Schnitzel und Halloumi-Burger. Alle vegetarischen Optionen sind in unserer Speisekarte gekennzeichnet.'
    },
    {
      question: 'Gibt es Informationen zu Allergenen?',
      answer: 'Ja, wir können Ihnen detaillierte Informationen zu allen Allergenen in unseren Gerichten geben. Bitte kontaktieren Sie uns vor der Bestellung, wenn Sie Allergien oder Unverträglichkeiten haben.'
    },
    {
      question: 'Kann ich meine Bestellung stornieren?',
      answer: 'Stornierungen sind möglich, solange Ihre Bestellung noch nicht in Bearbeitung ist. Bitte kontaktieren Sie uns so schnell wie möglich telefonisch oder per WhatsApp.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-wood-900 relative overflow-hidden">
      <div className="absolute inset-0 wood-grain opacity-20"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brass-400 text-2xl font-pub">━━━</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100 mb-6">
            Fragen & Antworten
          </h2>
          <p className="text-2xl text-amber-200 font-pub italic">
            Hier findest du Antworten auf die wichtigsten Fragen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-leather-800 leather-texture border-2 border-brass-600 overflow-hidden hover:border-brass-400 hover:shadow-2xl transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-pub font-bold text-brass-400 text-xl">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-7 h-7 text-brass-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-7 h-7 text-brass-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-amber-100 font-pub text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-leather-800 leather-texture p-10 border-2 border-brass-600 shadow-2xl">
          <h3 className="text-3xl font-pub font-bold text-brass-400 mb-3">
            Deine Frage ist nicht dabei?
          </h3>
          <p className="text-amber-100 text-lg font-pub font-semibold mb-6">
            Kontaktiere uns gerne direkt. Wir helfen dir gerne weiter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4912345678"
              className="px-8 py-4 bg-brass-500 text-wood-900 font-pub font-bold text-lg hover:bg-brass-400 hover:scale-105 transition-all shadow-lg border-2 border-brass-600"
            >
              Anrufen
            </a>
            <a
              href="https://wa.me/4912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-brass-500 text-brass-400 font-pub font-bold text-lg hover:bg-brass-500 hover:text-wood-900 hover:scale-105 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
