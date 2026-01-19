import { ArrowRight } from 'lucide-react';

export default function Hero() {
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
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1668618296698-a2e8e36eefeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nobml0emVsfGVufDB8fDB8fHww"
          alt="Köstliches Schnitzel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-wood-900/95 via-wood-800/90 to-leather-900/95"></div>
        <div className="absolute inset-0 wood-grain opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-6 py-2 bg-brass-500/20 border-2 border-brass-500 text-brass-400 font-pub font-bold text-lg tracking-wide">
            Willkommen in
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-pub font-bold text-brass-400 mb-6 leading-tight drop-shadow-2xl">
          Nista's
          <span className="block text-5xl md:text-6xl lg:text-7xl text-amber-200 mt-2">Schnitzelstube</span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-100 font-pub font-medium mb-12 max-w-2xl mx-auto italic">
          Traditionelle Schnitzelkunst seit Generationen
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('order')}
            className="px-10 py-4 bg-brass-500 text-wood-900 font-pub font-bold text-base hover:bg-brass-400 transition-all shadow-2xl hover:scale-105 border-2 border-brass-600"
          >
            Jetzt bestellen
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-transparent border-2 border-brass-400 text-brass-400 font-pub font-bold text-base hover:bg-brass-500 hover:text-wood-900 hover:border-brass-500 transition-all shadow-lg"
          >
            Filiale wählen
          </button>
        </div>
      </div>
    </section>
  );
}
