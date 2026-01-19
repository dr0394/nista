import { Search, ShoppingCart, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Auswählen',
      description: 'Stöbern Sie durch unsere Speisekarte und wählen Sie Ihre Lieblingsgerichte aus'
    },
    {
      icon: ShoppingCart,
      title: 'Bestellen',
      description: 'Geben Sie Ihre Bestellung über unser Formular auf und wählen Sie Lieferung oder Abholung'
    },
    {
      icon: Truck,
      title: 'Genießen',
      description: 'Wir bereiten Ihr Essen frisch zu und liefern es schnell zu Ihnen oder Sie holen es ab'
    }
  ];

  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-500 text-white px-6 py-3 rounded-full text-sm font-black tracking-[0.3em] uppercase mb-8">
            So Einfach
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            So geht's
          </h2>
          <p className="text-2xl text-gray-300 font-bold max-w-2xl mx-auto">
            In nur drei Schritten zu deinem Lieblingsgericht
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-600 font-black text-3xl shadow-xl">
                  {index + 1}
                </div>

                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mx-auto mb-6 shadow-lg">
                  <step.icon className="w-12 h-12 text-brand-600" />
                </div>

                <h3 className="text-3xl font-black text-white mb-3 text-center uppercase">
                  {step.title}
                </h3>
                <p className="text-white/90 font-medium text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
