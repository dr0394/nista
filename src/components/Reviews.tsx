import { useState, useEffect } from 'react';
import { supabase, Review } from '../lib/supabase';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    if (!supabase) return;
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .limit(4);
    if (data) setReviews(data);
  };

  return (
    <section className="py-24 bg-wood-800 wood-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-brass-400 text-2xl font-pub">━━━</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-pub font-bold text-amber-100 mb-4">
            Unsere Gäste
          </h2>
          <p className="text-xl md:text-2xl text-amber-200 font-pub italic max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von der Qualität
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-leather-800 leather-texture border-2 border-brass-600 p-8 hover:shadow-2xl hover:scale-105 transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brass-500/30" />
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-brass-400 text-brass-400" />
                ))}
              </div>
              <p className="text-amber-100 text-xl font-pub mb-6 leading-relaxed italic">
                "{review.comment}"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-brass-500 flex items-center justify-center text-wood-900 font-pub font-bold text-2xl shadow-lg">
                  {review.customer_name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-pub font-bold text-brass-400 text-lg">{review.customer_name}</p>
                  <p className="text-sm text-amber-300 font-pub font-semibold">
                    {new Date(review.created_at).toLocaleDateString('de-DE')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-brass-500 px-8 py-4 shadow-2xl border-2 border-brass-600">
            <div className="flex items-center space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-wood-900 text-wood-900" />
              ))}
            </div>
            <span className="text-wood-900 font-pub font-bold text-xl">4.9/5 Durchschnittsbewertung</span>
          </div>
        </div>
      </div>
    </section>
  );
}
