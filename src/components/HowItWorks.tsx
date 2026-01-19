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
    <section className="py-24 bg-wood-900 relative overflow-hidden">
      <div className="absolute inset-0 wood-grain opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brass-400 text-2xl font-pub">━━━</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100 mb-6">
            So geht's
          </h2>
          <p className="text-2xl text-amber-200 font-pub italic max-w-2xl mx-auto">
            In nur drei Schritten zu deinem Lieblingsgericht
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-leather-800 leather-texture border-2 border-brass-600 p-8 hover:shadow-2xl hover:scale-105 transition-all">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-brass-500 flex items-center justify-center text-wood-900 font-pub font-bold text-3xl shadow-xl border-2 border-brass-600">
                  {index + 1}
                </div>

                <div className="inline-flex items-center justify-center w-24 h-24 bg-brass-500 mx-auto mb-6 shadow-lg">
                  <step.icon className="w-12 h-12 text-wood-900" />
                </div>

                <h3 className="text-3xl font-pub font-bold text-brass-400 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-amber-100 font-pub text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-10 h-10 bg-brass-500 flex items-center justify-center shadow-xl border-2 border-brass-600">
                    <svg className="w-6 h-6 text-wood-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
