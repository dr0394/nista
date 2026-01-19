import { useState, useEffect } from 'react';
import { supabase, MenuItem } from '../lib/supabase';
import { Star, Award } from 'lucide-react';

export default function Bestsellers() {
  const [bestsellers, setBestsellers] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetchBestsellers();
  }, []);

  const fetchBestsellers = async () => {
    if (!supabase) return;
    const { data } = await supabase
      .from('menu_items')
      .select('*')
      .eq('is_bestseller', true)
      .eq('is_available', true)
      .order('display_order')
      .limit(6);
    if (data) setBestsellers(data);
  };

  const foodImages = [
    'https://images.pexels.com/photos/8477881/pexels-photo-8477881.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/14737/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  return (
    <section id="bestsellers" className="py-24 bg-wood-900 relative overflow-hidden">
      <div className="absolute inset-0 wood-grain opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brass-400 text-2xl font-pub">━━━</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100 mb-4">
            Unsere Hits
          </h2>
          <p className="text-xl md:text-2xl text-amber-200 font-pub italic max-w-2xl mx-auto">
            Diese Gerichte lieben unsere Gäste besonders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellers.map((item, index) => (
            <div
              key={item.id}
              className="bg-leather-800 leather-texture border-2 border-brass-600 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image_url || foodImages[index % foodImages.length]}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-900/95 via-wood-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-brass-500 text-wood-900 px-4 py-2 text-sm font-pub font-bold flex items-center shadow-lg border-2 border-brass-600">
                  <Star className="w-5 h-5 mr-1 fill-wood-900" />
                  Beliebt
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-pub font-bold text-brass-400 mb-2">{item.name}</h3>
                <p className="text-amber-100 font-pub mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-pub font-bold text-brass-400">
                    {item.price.toFixed(2)} €
                  </span>
                  {item.is_vegetarian && (
                    <span className="bg-brass-500 text-wood-900 px-3 py-1 text-sm font-pub font-bold border-2 border-brass-600">
                      Veggie
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
