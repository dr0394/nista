import { useState, useEffect } from 'react';
import { supabase, MenuItem } from '../lib/supabase';
import { Star, Award } from 'lucide-react';

export default function Bestsellers() {
  const [bestsellers, setBestsellers] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetchBestsellers();
  }, []);

  const fetchBestsellers = async () => {
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
    <section id="bestsellers" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            <span className="block text-xl md:text-2xl font-bold mb-4 text-brand-400 tracking-wide">Bestseller</span>
            Unsere Hits
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
            Diese Gerichte lieben unsere Gäste besonders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellers.map((item, index) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image_url || foodImages[index % foodImages.length]}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white text-brand-600 px-4 py-2 rounded-full text-sm font-black flex items-center shadow-lg uppercase">
                  <Star className="w-5 h-5 mr-1 fill-brand-600" />
                  Beliebt
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-2 uppercase">{item.name}</h3>
                <p className="text-white/90 font-medium mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-white">
                    {item.price.toFixed(2)} €
                  </span>
                  {item.is_vegetarian && (
                    <span className="bg-white text-brand-600 px-3 py-1 rounded-full text-sm font-bold uppercase">
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
