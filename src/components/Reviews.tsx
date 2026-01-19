import { useState, useEffect } from 'react';
import { supabase, Review } from '../lib/supabase';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .limit(4);
    if (data) setReviews(data);
  };

  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            <span className="block text-xl md:text-2xl font-bold mb-4 text-brand-400 tracking-wide">Bewertungen</span>
            Unsere Gäste
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von der Qualität
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/30" />
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-white text-white" />
                ))}
              </div>
              <p className="text-white text-xl font-medium mb-6 leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-600 font-black text-2xl shadow-lg">
                  {review.customer_name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-black text-white text-lg">{review.customer_name}</p>
                  <p className="text-sm text-white/80 font-medium">
                    {new Date(review.created_at).toLocaleDateString('de-DE')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gradient-to-br from-brand-500 to-brand-700 rounded-full px-8 py-4 shadow-2xl">
            <div className="flex items-center space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-white text-white" />
              ))}
            </div>
            <span className="text-white font-black text-xl">4.9/5 DURCHSCHNITTSBEWERTUNG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
