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
    <section id="faq" className="py-24 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            Fragen & Antworten
          </h2>
          <p className="text-2xl text-gray-300 font-semibold">
            Hier findest du Antworten auf die wichtigsten Fragen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-brand-500 to-brand-700 border-4 border-brand-400 rounded-2xl overflow-hidden hover:border-white hover:shadow-2xl transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-black text-white text-xl">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-7 h-7 text-white flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-7 h-7 text-white flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-white font-medium text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-10 border-4 border-brand-400 shadow-2xl">
          <h3 className="text-3xl font-black text-white mb-3 uppercase">
            Deine Frage ist nicht dabei?
          </h3>
          <p className="text-white text-lg font-semibold mb-6">
            Kontaktiere uns gerne direkt. Wir helfen dir gerne weiter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4912345678"
              className="px-8 py-4 bg-white text-brand-600 rounded-full font-black text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-lg uppercase"
            >
              Anrufen
            </a>
            <a
              href="https://wa.me/4912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-4 border-white text-white rounded-full font-black text-lg hover:bg-white hover:text-brand-600 hover:scale-105 transition-all uppercase"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
