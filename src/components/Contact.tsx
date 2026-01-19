import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const openingHours = [
    { day: 'Montag - Freitag', hours: '11:00 - 22:00 Uhr' },
    { day: 'Samstag', hours: '12:00 - 23:00 Uhr' },
    { day: 'Sonntag', hours: '12:00 - 21:00 Uhr' }
  ];

  return (
    <section id="contact" className="py-24 bg-wood-800 wood-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brass-400 text-2xl font-pub">━━━</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100 mb-4">
            Komm vorbei
          </h2>
          <p className="text-xl md:text-2xl text-amber-200 font-pub italic">
            Wir freuen uns auf deinen Besuch oder deine Bestellung
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-leather-800 leather-texture border-2 border-brass-600 p-8">
              <h3 className="text-3xl font-pub font-bold text-brass-400 mb-6">Kontaktinformationen</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brass-500 p-4 flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-wood-900" />
                  </div>
                  <div>
                    <h4 className="font-pub font-bold text-brass-400 mb-1 text-sm">Adresse</h4>
                    <p className="text-amber-100 font-pub">
                      Hauptstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brass-500 p-4 flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7 text-wood-900" />
                  </div>
                  <div>
                    <h4 className="font-pub font-bold text-brass-400 mb-1 text-sm">Telefon</h4>
                    <a href="tel:+4912345678" className="text-amber-100 font-pub font-semibold hover:text-brass-400 text-lg">
                      +49 123 456 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brass-500 p-4 flex-shrink-0 shadow-lg">
                    <Mail className="w-7 h-7 text-wood-900" />
                  </div>
                  <div>
                    <h4 className="font-pub font-bold text-brass-400 mb-1 text-sm">E-Mail</h4>
                    <a href="mailto:info@nistas-schnitzelhaus.de" className="text-amber-100 font-pub font-semibold hover:text-brass-400">
                      info@nistas-schnitzelhaus.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-leather-800 leather-texture border-2 border-brass-600 p-8">
              <div className="flex items-center mb-6">
                <div className="bg-brass-500 p-4 mr-4 shadow-lg">
                  <Clock className="w-7 h-7 text-wood-900" />
                </div>
                <h3 className="text-3xl font-pub font-bold text-brass-400">Öffnungszeiten</h3>
              </div>

              <div className="space-y-4">
                {openingHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b-2 border-brass-600/20 last:border-0">
                    <span className="font-pub font-bold text-amber-100">{item.day}</span>
                    <span className="text-amber-200 font-pub font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-brass-500/10 border-2 border-brass-600">
                <p className="text-sm text-amber-100 font-pub">
                  <strong className="text-brass-400">Hinweis:</strong> An Feiertagen können abweichende Öffnungszeiten gelten.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden h-[600px] border-4 border-brass-600 hover:border-brass-400 transition-all shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092503187647!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Nista's Schnitzelhaus"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
