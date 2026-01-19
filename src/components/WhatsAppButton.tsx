import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/4912345678?text=Hallo, ich habe eine Frage zu Nista\'s Schnitzelhaus', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 group border-4 border-green-600"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-12 right-0 bg-leather-800 border-2 border-brass-600 text-amber-100 px-4 py-2 text-sm font-pub font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Schreiben Sie uns!
      </span>
    </button>
  );
}
