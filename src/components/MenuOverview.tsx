import { useState, useEffect } from 'react';
import { supabase, MenuCategory } from '../lib/supabase';
import { ChevronRight } from 'lucide-react';

export default function MenuOverview() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('menu_categories')
      .select('*')
      .order('display_order');
    if (data) setCategories(data);
  };

  const categoryIcons = [
    '🥩',
    '🍔',
    '🍟',
    '🥗',
    '🍰'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            <span className="block text-xl md:text-2xl font-bold mb-4 text-brand-400 tracking-wide">Unser Angebot</span>
            Unsere Speisekarte
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
            Von klassischen Schnitzeln bis zu saftigen Burgern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
            >
              <div className="text-6xl mb-4">{categoryIcons[index] || '🍽️'}</div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase">
                {category.name}
              </h3>
              <p className="text-white/90 font-medium">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('bestsellers')}
            className="inline-flex items-center px-10 py-5 bg-white text-brand-600 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 uppercase"
          >
            Zu den Bestsellern
            <ChevronRight className="ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
