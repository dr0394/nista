import { useState } from 'react';
import { ShoppingBag, Calendar } from 'lucide-react';
import OrderForm from './OrderForm';

export default function OrderCTA() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      <section id="order" className="py-24 bg-wood-800 wood-grain relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-brass-400 text-2xl font-pub">━━━</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100 mb-6">
              Jetzt bestellen
            </h2>
            <p className="text-2xl md:text-3xl text-amber-200 font-pub italic max-w-2xl mx-auto">
              Liefern lassen, abholen oder vor Ort genießen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-leather-800 leather-texture border-2 border-brass-600 p-8 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-pub font-bold text-brass-400 mb-3">Lieferung</h3>
              <p className="text-amber-100 font-pub">Warm und frisch in 30-45 Minuten</p>
            </div>

            <div className="bg-leather-800 leather-texture border-2 border-brass-600 p-8 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">🥡</div>
              <h3 className="text-2xl font-pub font-bold text-brass-400 mb-3">Abholung</h3>
              <p className="text-amber-100 font-pub">Vorbestellen und direkt abholen</p>
            </div>

            <div className="bg-leather-800 leather-texture border-2 border-brass-600 p-8 hover:shadow-2xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-2xl font-pub font-bold text-brass-400 mb-3">Vor Ort</h3>
              <p className="text-amber-100 font-pub">Genieße unser Ambiente</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setIsOrderOpen(true)}
              className="group px-12 py-6 bg-brass-500 text-wood-900 font-pub font-bold text-xl hover:bg-brass-400 transition-all shadow-2xl hover:scale-105 flex items-center justify-center border-2 border-brass-600"
            >
              <ShoppingBag className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
              Online bestellen
            </button>

            <button
              onClick={() => setIsReservationOpen(true)}
              className="group px-12 py-6 border-2 border-brass-500 text-brass-400 font-pub font-bold text-xl hover:bg-brass-500 hover:text-wood-900 transition-all flex items-center justify-center"
            >
              <Calendar className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
              Tisch reservieren
            </button>
          </div>

          <p className="text-center text-amber-200 font-pub font-bold mt-10 text-lg">
            Oder ruf uns an: <a href="tel:+4912345678" className="text-brass-400 hover:text-brass-300 underline hover:no-underline">+49 123 456 78</a>
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
