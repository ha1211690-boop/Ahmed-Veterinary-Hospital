import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins & Luna",
    text: "The compassionate care Luna received during her surgery was incredible. Dr. Ahmed explained everything clearly and put my mind at ease. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Mark Townsend",
    text: "Brought my puppy here for his first shots. The staff made it such a fear-free experience that Max wasn't scared at all. Clean, modern, and friendly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Emily Chen",
    text: "When our cat had an emergency at 2 AM, they were ready and acted fast. Their 24/7 service truly saved our pet's life. Cannot thank them enough.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  }
];

export function Testimonials() {
  const [activeIdx, setActiveIdx] = React.useState(0);

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-teal-dark mb-6">
            Loved by Pets & Their Parents
          </h2>
          <div className="flex justify-center gap-1 text-brand-orange">
             {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-brand-orange" />)}
          </div>
          <p className="mt-4 text-gray-500 font-medium">4.9/5 based on 500+ Google Reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {reviews.map((review, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               className="bg-brand-sand p-8 rounded-3xl relative"
             >
               <Quote size={40} className="text-brand-teal/20 absolute top-8 right-8" />
               <div className="flex items-center gap-1 text-brand-orange mb-6">
                 {[1,2,3,4,5].map(star => <Star key={star} size={16} className="fill-brand-orange" />)}
               </div>
               <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">"{review.text}"</p>
               
               <div className="flex items-center gap-4 mt-auto">
                 <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                 <div>
                   <h4 className="font-bold text-gray-900">{review.name}</h4>
                   <p className="text-xs text-gray-500 uppercase tracking-wider">Pet Parent</p>
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
