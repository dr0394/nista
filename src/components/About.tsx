import { Heart, Award, Users, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Aus Leidenschaft',
      description: 'Seit über 15 Jahren servieren wir authentische österreichische Küche mit Herz'
    },
    {
      icon: Award,
      title: 'Beste Qualität',
      description: 'Wir verwenden nur erstklassige, frische Zutaten von regionalen Lieferanten'
    },
    {
      icon: Users,
      title: 'Familienbetrieb',
      description: 'Ein eingespieltes Team, das mit Leidenschaft für Sie kocht'
    },
    {
      icon: Clock,
      title: 'Täglich frisch',
      description: 'Jedes Schnitzel wird erst nach Ihrer Bestellung frisch paniert und gebraten'
    }
  ];

  return (
    <section id="about" className="py-24 bg-wood-900 relative overflow-hidden">
      <div className="absolute inset-0 wood-grain opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-block mb-4">
              <span className="text-brass-400 text-2xl font-pub">━━━</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100">
              Tradition trifft
              <br />
              <span className="text-brass-400">
                Qualität
              </span>
            </h2>
            <p className="text-xl text-amber-200 font-pub leading-relaxed">
              Bei Nista's Schnitzelhaus vereinen wir traditionelle österreichische Küche
              mit modernem Service. Unser Ziel ist es, Ihnen nicht nur hervorragendes Essen
              zu servieren, sondern ein unvergessliches kulinarisches Erlebnis zu bieten.
            </p>
            <p className="text-xl text-amber-200 font-pub leading-relaxed italic">
              Jedes unserer Schnitzel wird mit Sorgfalt zubereitet – von der Auswahl des
              Fleisches über die hausgemachte Panade bis hin zur perfekten Bräunung. Das
              schmecken Sie in jedem Bissen.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="border-l-4 border-brass-500 pl-4">
                <p className="text-5xl font-pub font-bold text-brass-400">15+</p>
                <p className="text-amber-300 font-pub font-semibold text-sm">Jahre Erfahrung</p>
              </div>
              <div className="border-l-4 border-brass-500 pl-4">
                <p className="text-5xl font-pub font-bold text-brass-400">50k+</p>
                <p className="text-amber-300 font-pub font-semibold text-sm">Servierte Schnitzel</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Restaurant Innenansicht"
                className="h-64 w-full object-cover border-4 border-brass-500 hover:border-brass-400 transition-all shadow-2xl"
              />
              <img
                src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Koch bei der Arbeit"
                className="h-64 w-full object-cover mt-8 border-4 border-brass-500 hover:border-brass-400 transition-all shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-leather-800 leather-texture border-2 border-brass-600 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brass-500 mb-6 shadow-lg">
                <feature.icon className="w-10 h-10 text-wood-900" />
              </div>
              <h3 className="text-xl font-pub font-bold text-brass-400 mb-3">{feature.title}</h3>
              <p className="text-amber-100 font-pub">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
