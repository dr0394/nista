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
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 bg-white rounded-xl shadow-2xl border-2 border-gray-200 p-6">
      <button
        onClick={handleDecline}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Schließen"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-start mb-4">
        <div className="bg-amber-100 p-2 rounded-lg mr-3 flex-shrink-0">
          <Cookie className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-2">Wir verwenden Cookies</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Diese Website verwendet nur technisch notwendige Cookies, um Ihnen die
            bestmögliche Nutzererfahrung zu bieten. Weitere Informationen finden
            Sie in unserer Datenschutzerklärung.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleDecline}
          className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm"
        >
          Alles ablehnen
        </button>
        <button
          onClick={handleAccept}
          className="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors text-sm"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
