import { Link } from 'react-router-dom';
import { UtensilsCrossed, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 text-white pt-20 pb-8 border-t-4 border-brand-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-black mb-4 uppercase text-brand-500">Nista's</h3>
            <p className="text-gray-300 mb-6 leading-relaxed font-medium text-lg">
              Seit über 15 Jahren servieren wir authentische österreichische Küche
              mit Leidenschaft und Qualität. Besuch uns oder bestell online!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center hover:bg-brand-600 hover:scale-110 transition-all shadow-lg"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center hover:bg-brand-600 hover:scale-110 transition-all shadow-lg"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@nistas-schnitzelhaus.de"
                className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center hover:bg-brand-600 hover:scale-110 transition-all shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xl mb-4 uppercase text-brand-400">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-brand-400 transition-colors font-semibold"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-brand-400 transition-colors font-semibold"
                >
                  Speisekarte
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-brand-400 transition-colors font-semibold"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-brand-400 transition-colors font-semibold"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-brand-400 transition-colors font-semibold"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-4 uppercase text-brand-400">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/impressum"
                  className="text-gray-300 hover:text-brand-400 transition-colors font-semibold"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-gray-300 hover:text-brand-400 transition-colors font-semibold"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-semibold">
              © {new Date().getFullYear()} Nista's Schnitzelhaus. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-400 font-semibold">
              Hauptstraße 123, 12345 Musterstadt | <a href="tel:+4912345678" className="hover:text-brand-400 transition-colors">+49 123 456 78</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
