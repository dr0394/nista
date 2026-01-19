import { useState } from 'react';
import { X, ShoppingBag, MapPin, User, Phone, MessageSquare } from 'lucide-react';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'order' | 'reservation';
}

export default function OrderForm({ isOpen, onClose, type }: OrderFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deliveryType: 'delivery',
    address: '',
    orderDetails: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === 'order') {
      const message = `Neue Bestellung von ${formData.name}%0A%0A` +
        `Telefon: ${formData.phone}%0A` +
        `E-Mail: ${formData.email}%0A` +
        `${formData.deliveryType === 'delivery' ? 'Lieferung' : 'Abholung'}${formData.deliveryType === 'delivery' ? '%0AAdresse: ' + formData.address : ''}%0A%0A` +
        `Bestellung:%0A${formData.orderDetails}%0A%0A` +
        `Besondere Wünsche: ${formData.specialRequests || 'Keine'}`;

      window.open(`https://wa.me/4912345678?text=${message}`, '_blank');
    } else {
      const message = `Neue Reservierung von ${formData.name}%0A%0A` +
        `Telefon: ${formData.phone}%0A` +
        `E-Mail: ${formData.email}%0A` +
        `Datum: ${formData.date}%0A` +
        `Uhrzeit: ${formData.time}%0A` +
        `Personen: ${formData.guests}%0A%0A` +
        `Besondere Wünsche: ${formData.specialRequests || 'Keine'}`;

      window.open(`https://wa.me/4912345678?text=${message}`, '_blank');
    }

    onClose();
    setStep(1);
    setFormData({
      name: '',
      phone: '',
      email: '',
      deliveryType: 'delivery',
      address: '',
      orderDetails: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold">
              {type === 'order' ? 'Jetzt bestellen' : 'Tisch reservieren'}
            </h2>
            <p className="text-amber-100 text-sm">Schritt {step} von 3</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  s <= step ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    s < step ? 'bg-amber-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ihre Kontaktdaten</h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail (optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>
            )}

            {step === 2 && type === 'order' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bestelldetails</h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <ShoppingBag className="inline w-4 h-4 mr-2" />
                    Lieferung oder Abholung?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryType: 'delivery' })}
                      className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                        formData.deliveryType === 'delivery'
                          ? 'border-amber-600 bg-amber-50 text-amber-900'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      Lieferung
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryType: 'pickup' })}
                      className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                        formData.deliveryType === 'pickup'
                          ? 'border-amber-600 bg-amber-50 text-amber-900'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      Abholung
                    </button>
                  </div>
                </div>

                {formData.deliveryType === 'delivery' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="inline w-4 h-4 mr-2" />
                      Lieferadresse
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none"
                      placeholder="Straße, Hausnummer, PLZ, Stadt"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Was möchten Sie bestellen?
                  </label>
                  <textarea
                    required
                    value={formData.orderDetails}
                    onChange={(e) => setFormData({ ...formData, orderDetails: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none h-32"
                    placeholder="z.B. 1x Wiener Schnitzel, 2x Nista's Classic Burger..."
                  />
                </div>
              </div>
            )}

            {step === 2 && type === 'reservation' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reservierungsdetails</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Datum
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Uhrzeit
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Anzahl der Personen
                  </label>
                  <select
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Personen'}</option>
                    ))}
                    <option value="10+">10+ Personen</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Besondere Wünsche</h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Haben Sie besondere Wünsche oder Anmerkungen?
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none h-32"
                    placeholder="z.B. Allergien, Extrawünsche, Sonderwünsche..."
                  />
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Zusammenfassung</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Telefon:</strong> {formData.phone}</p>
                    {formData.email && <p><strong>E-Mail:</strong> {formData.email}</p>}
                    {type === 'order' && (
                      <>
                        <p><strong>Art:</strong> {formData.deliveryType === 'delivery' ? 'Lieferung' : 'Abholung'}</p>
                        {formData.deliveryType === 'delivery' && <p><strong>Adresse:</strong> {formData.address}</p>}
                        <p><strong>Bestellung:</strong> {formData.orderDetails}</p>
                      </>
                    )}
                    {type === 'reservation' && (
                      <>
                        <p><strong>Datum:</strong> {formData.date}</p>
                        <p><strong>Uhrzeit:</strong> {formData.time}</p>
                        <p><strong>Personen:</strong> {formData.guests}</p>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  Nach dem Absenden werden Sie zu WhatsApp weitergeleitet, um Ihre {type === 'order' ? 'Bestellung' : 'Reservierung'} zu bestätigen.
                </p>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Zurück
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Weiter
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Über WhatsApp senden
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
