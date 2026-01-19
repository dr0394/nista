import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Menü', id: 'menu' },
    { name: 'Über uns', id: 'about' },
    { name: 'Galerie', id: 'gallery' },
    { name: 'Kontakt', id: 'contact' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-900/98 backdrop-blur-lg shadow-2xl border-b-2 border-brand-500' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <h1 className="text-3xl font-black text-brand-500 tracking-tight uppercase">
              Nista's
            </h1>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-brand-400 font-bold transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('order')}
              className="px-8 py-3 bg-brand-500 text-white rounded-full font-black hover:bg-brand-600 hover:scale-105 transition-all shadow-lg uppercase text-sm tracking-wider"
            >
              Jetzt bestellen
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-white bg-brand-500 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dark-900 border-t-2 border-brand-500">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-white hover:bg-brand-500 rounded-xl font-bold transition-all uppercase"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('order')}
              className="block w-full px-4 py-4 bg-brand-500 text-white rounded-full font-black hover:bg-brand-600 transition-all text-center uppercase shadow-lg"
            >
              Jetzt bestellen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
