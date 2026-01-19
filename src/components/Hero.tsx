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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/90 via-black/80 to-black/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 leading-tight uppercase">
          <span className="block text-2xl md:text-3xl font-bold mb-4 tracking-wide">Willkommen im</span>
          Schnitzel&shy;himmel
        </h1>

        <p className="text-xl md:text-2xl text-white font-medium mb-12 max-w-2xl mx-auto">
          Deine Lieblingsschnitzel zum Abholen oder Liefern.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('order')}
            className="px-10 py-4 bg-brand-500 text-white rounded-full font-black text-base uppercase tracking-wide hover:bg-brand-600 transition-all shadow-lg hover:scale-105"
          >
            Jetzt bestellen
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-black text-base uppercase tracking-wide hover:bg-white hover:text-brand-600 transition-all"
          >
            Filiale wählen
          </button>
        </div>
      </div>
    </section>
  );
}
