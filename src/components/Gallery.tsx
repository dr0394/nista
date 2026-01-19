export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gemütliche Atmosphäre'
    },
    {
      url: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Moderne Einrichtung'
    },
    {
      url: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Perfekt für Gruppen'
    },
    {
      url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Außenbereich'
    },
    {
      url: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Frische Zubereitung'
    },
    {
      url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Bar-Bereich'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-wood-800 wood-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brass-400 text-2xl font-pub">━━━</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100 mb-4">
            Unser Restaurant
          </h2>
          <p className="text-xl md:text-2xl text-amber-200 font-pub italic max-w-2xl mx-auto">
            Ein Blick in unsere gemütlichen Räumlichkeiten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden aspect-[4/3] border-4 border-brass-600 hover:border-brass-400 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-900/90 via-wood-900/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-brass-400 font-pub font-bold text-2xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
