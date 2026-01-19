import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 bg-leather-800 leather-texture shadow-2xl border-2 border-brass-600 p-6">
      <button
        onClick={handleDecline}
        className="absolute top-4 right-4 text-brass-400 hover:text-brass-300"
        aria-label="Schließen"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-start mb-4">
        <div className="bg-brass-500 p-2 mr-3 flex-shrink-0">
          <Cookie className="w-6 h-6 text-wood-900" />
        </div>
        <div>
          <h3 className="font-pub font-bold text-brass-400 mb-2">Wir verwenden Cookies</h3>
          <p className="text-sm text-amber-100 font-pub leading-relaxed">
            Diese Website verwendet nur technisch notwendige Cookies, um Ihnen die
            bestmögliche Nutzererfahrung zu bieten. Weitere Informationen finden
            Sie in unserer Datenschutzerklärung.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleDecline}
          className="flex-1 px-4 py-2 border-2 border-brass-600 text-brass-400 font-pub font-semibold hover:bg-brass-500/10 transition-colors text-sm"
        >
          Alles ablehnen
        </button>
        <button
          onClick={handleAccept}
          className="flex-1 px-4 py-2 bg-brass-500 text-wood-900 font-pub font-semibold hover:bg-brass-400 transition-colors text-sm border-2 border-brass-600"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
