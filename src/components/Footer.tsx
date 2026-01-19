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
    <footer className="bg-wood-900 wood-grain text-white pt-20 pb-8 border-t-4 border-brass-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-pub font-bold mb-4 text-brass-400">Nista's Schnitzelstube</h3>
            <p className="text-amber-200 mb-6 leading-relaxed font-pub text-lg">
              Seit über 15 Jahren servieren wir authentische österreichische Küche
              mit Leidenschaft und Qualität. Besuch uns oder bestell online!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brass-500 flex items-center justify-center hover:bg-brass-400 hover:scale-110 transition-all shadow-lg border-2 border-brass-600"
              >
                <Facebook className="w-6 h-6 text-wood-900" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brass-500 flex items-center justify-center hover:bg-brass-400 hover:scale-110 transition-all shadow-lg border-2 border-brass-600"
              >
                <Instagram className="w-6 h-6 text-wood-900" />
              </a>
              <a
                href="mailto:info@nistas-schnitzelhaus.de"
                className="w-12 h-12 bg-brass-500 flex items-center justify-center hover:bg-brass-400 hover:scale-110 transition-all shadow-lg border-2 border-brass-600"
              >
                <Mail className="w-6 h-6 text-wood-900" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-pub font-bold text-xl mb-4 text-brass-400">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-amber-200 hover:text-brass-400 transition-colors font-pub font-semibold"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-amber-200 hover:text-brass-400 transition-colors font-pub font-semibold"
                >
                  Speisekarte
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-amber-200 hover:text-brass-400 transition-colors font-pub font-semibold"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-amber-200 hover:text-brass-400 transition-colors font-pub font-semibold"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-amber-200 hover:text-brass-400 transition-colors font-pub font-semibold"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-pub font-bold text-xl mb-4 text-brass-400">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/impressum"
                  className="text-amber-200 hover:text-brass-400 transition-colors font-pub font-semibold"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-amber-200 hover:text-brass-400 transition-colors font-pub font-semibold"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-wood-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-300 font-pub font-semibold">
              © {new Date().getFullYear()} Nista's Schnitzelstube. Alle Rechte vorbehalten.
            </p>
            <p className="text-amber-300 font-pub font-semibold">
              Hauptstraße 123, 12345 Musterstadt | <a href="tel:+4912345678" className="hover:text-brass-400 transition-colors">+49 123 456 78</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
