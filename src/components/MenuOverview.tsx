import { useState, useEffect } from 'react';
import { supabase, MenuCategory } from '../lib/supabase';
import { ChevronRight } from 'lucide-react';

export default function MenuOverview() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    if (!supabase) return;
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
    <section id="menu" className="py-24 bg-wood-800 wood-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brass-400 text-2xl font-pub">━━━</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100 mb-4">
            Unsere Speisekarte
          </h2>
          <p className="text-xl md:text-2xl text-amber-200 font-pub italic max-w-2xl mx-auto">
            Von klassischen Schnitzeln bis zu saftigen Burgern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="bg-leather-800 leather-texture border-2 border-brass-600 p-8 hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer"
            >
              <div className="text-6xl mb-4">{categoryIcons[index] || '🍽️'}</div>
              <h3 className="text-2xl font-pub font-bold text-brass-400 mb-2">
                {category.name}
              </h3>
              <p className="text-amber-100 font-pub">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('bestsellers')}
            className="inline-flex items-center px-10 py-5 bg-brass-500 text-wood-900 font-pub font-bold text-xl hover:bg-brass-400 transition-all shadow-xl hover:scale-105 border-2 border-brass-600"
          >
            Zu den Bestsellern
            <ChevronRight className="ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
