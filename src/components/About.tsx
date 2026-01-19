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
    <section id="about" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase">
              <span className="block text-xl md:text-2xl font-bold mb-4 text-brand-400 tracking-wide">Über uns</span>
              Tradition trifft
              <br />
              <span className="text-brand-500">
                Qualität
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">
              Bei Nista's Schnitzelhaus vereinen wir traditionelle österreichische Küche
              mit modernem Service. Unser Ziel ist es, Ihnen nicht nur hervorragendes Essen
              zu servieren, sondern ein unvergessliches kulinarisches Erlebnis zu bieten.
            </p>
            <p className="text-xl text-gray-300 font-medium leading-relaxed">
              Jedes unserer Schnitzel wird mit Sorgfalt zubereitet – von der Auswahl des
              Fleisches über die hausgemachte Panade bis hin zur perfekten Bräunung. Das
              schmecken Sie in jedem Bissen.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-5xl font-black text-brand-500">15+</p>
                <p className="text-gray-400 font-bold uppercase text-sm tracking-wider">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-5xl font-black text-brand-500">50k+</p>
                <p className="text-gray-400 font-bold uppercase text-sm tracking-wider">Servierte Schnitzel</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Restaurant Innenansicht"
                className="rounded-2xl h-64 w-full object-cover border-4 border-brand-500/50 hover:border-brand-500 transition-all"
              />
              <img
                src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Koch bei der Arbeit"
                className="rounded-2xl h-64 w-full object-cover mt-8 border-4 border-brand-500/50 hover:border-brand-500 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
                <feature.icon className="w-10 h-10 text-brand-600" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 uppercase">{feature.title}</h3>
              <p className="text-white/90 font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
