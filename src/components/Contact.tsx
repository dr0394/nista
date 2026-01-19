import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const openingHours = [
    { day: 'Montag - Freitag', hours: '11:00 - 22:00 Uhr' },
    { day: 'Samstag', hours: '12:00 - 23:00 Uhr' },
    { day: 'Sonntag', hours: '12:00 - 21:00 Uhr' }
  ];

  return (
    <section id="contact" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            <span className="block text-xl md:text-2xl font-bold mb-4 text-brand-400 tracking-wide">Kontakt</span>
            Komm vorbei
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Wir freuen uns auf deinen Besuch oder deine Bestellung
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8">
              <h3 className="text-3xl font-black text-white mb-6 uppercase">Kontaktinformationen</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-4 rounded-xl flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-1 uppercase text-sm tracking-wider">Adresse</h4>
                    <p className="text-white/90 font-medium">
                      Hauptstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-4 rounded-xl flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-1 uppercase text-sm tracking-wider">Telefon</h4>
                    <a href="tel:+4912345678" className="text-white/90 font-bold hover:text-white text-lg">
                      +49 123 456 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-4 rounded-xl flex-shrink-0 shadow-lg">
                    <Mail className="w-7 h-7 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-white mb-1 uppercase text-sm tracking-wider">E-Mail</h4>
                    <a href="mailto:info@nistas-schnitzelhaus.de" className="text-white/90 font-bold hover:text-white">
                      info@nistas-schnitzelhaus.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-white p-4 rounded-xl mr-4 shadow-lg">
                  <Clock className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase">Öffnungszeiten</h3>
              </div>

              <div className="space-y-4">
                {openingHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b-2 border-white/20 last:border-0">
                    <span className="font-black text-white">{item.day}</span>
                    <span className="text-white/90 font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl border-2 border-white/30">
                <p className="text-sm text-white/90 font-medium">
                  <strong className="text-white">Hinweis:</strong> An Feiertagen können abweichende Öffnungszeiten gelten.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[600px] border-4 border-brand-500/50 hover:border-brand-500 transition-all">
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
