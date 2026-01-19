import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/4912345678?text=Hallo, ich habe eine Frage zu Nista\'s Schnitzelhaus', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-12 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Schreiben Sie uns!
      </span>
    </button>
  );
}
