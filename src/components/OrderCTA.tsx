import { useState } from 'react';
import { ShoppingBag, Calendar } from 'lucide-react';
import OrderForm from './OrderForm';

export default function OrderCTA() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      <section id="order" className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-500 text-white px-6 py-3 rounded-full text-sm font-black tracking-[0.3em] uppercase mb-8">
              Bestell Jetzt
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
              JETZT BESTELLEN
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 font-bold max-w-2xl mx-auto">
              Liefern lassen, abholen oder vor Ort genießen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-black text-white mb-3 uppercase">Lieferung</h3>
              <p className="text-white/90 font-medium">Warm und frisch in 30-45 Minuten</p>
            </div>

            <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">🥡</div>
              <h3 className="text-2xl font-black text-white mb-3 uppercase">Abholung</h3>
              <p className="text-white/90 font-medium">Vorbestellen und direkt abholen</p>
            </div>

            <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-black text-white mb-3 uppercase">Vor Ort</h3>
              <p className="text-white/90 font-medium">Genieße unser Ambiente</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setIsOrderOpen(true)}
              className="group px-12 py-6 bg-brand-500 text-white rounded-full font-black text-xl hover:bg-brand-600 transition-all shadow-2xl hover:scale-105 flex items-center justify-center uppercase"
            >
              <ShoppingBag className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
              Online bestellen
            </button>

            <button
              onClick={() => setIsReservationOpen(true)}
              className="group px-12 py-6 border-4 border-brand-500 text-brand-500 rounded-full font-black text-xl hover:bg-brand-500 hover:text-white transition-all flex items-center justify-center uppercase"
            >
              <Calendar className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
              Tisch reservieren
            </button>
          </div>

          <p className="text-center text-gray-300 font-bold mt-10 text-lg">
            Oder ruf uns an: <a href="tel:+4912345678" className="text-brand-500 hover:text-brand-400 underline hover:no-underline">+49 123 456 78</a>
          </p>
        </div>
      </section>

      <OrderForm
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        type="order"
      />

      <OrderForm
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        type="reservation"
      />
    </>
  );
}
