import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { HeartPulse, Calendar, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-brand-sand min-h-[90vh] flex items-center">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/20 text-brand-teal-dark font-medium text-sm mb-6">
              <HeartPulse size={16} className="text-brand-teal" />
              Available 24/7 for Emergencies
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-brand-teal-dark leading-[1.1] mb-6 text-balance">
              Compassionate Veterinary Care for Your Beloved Pets.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience world-class medical treatment delivered with genuine love and care. We treat every pet like our own family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2"
                onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar size={20} />
                Book Appointment
              </Button>
              <Button size="lg" variant="emergency" className="gap-2"
                onClick={() => document.querySelector('#emergency')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone size={20} />
                Emergency Help
              </Button>
            </div>
            
            {/* Quick Trust Indicators */}
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <span className="text-brand-teal">✓</span>
                </div>
                Expert Vets
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <span className="text-brand-teal">✓</span>
                </div>
                Modern Tech
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                  <span className="text-brand-teal">✓</span>
                </div>
                Clean & Safe
              </div>
            </div>
          </motion.div>
          
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[120%] lg:-mr-[10%] aspect-square lg:aspect-auto lg:h-full">
              {/* Pet Image placeholder (A beautifully lit photo of a smiling golden retriever with a vet in background) */}
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl bg-gray-200">
                 <img 
                   src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=1200" 
                   alt="Happy healthy dog with veterinarian" 
                   className="w-full h-full object-cover origin-center"
                 />
              </div>
              
              {/* Floating review card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl max-w-[240px] hidden md:block"
              >
                <div className="flex gap-1 mb-2 text-brand-orange">
                  {[1,2,3,4,5].map(i => <HeartPulse key={i} size={14} className="fill-brand-orange" />)}
                </div>
                <p className="text-sm text-gray-700 font-medium leading-snug">"The doctors saved my cat's life. Forever grateful."</p>
                <p className="text-xs text-gray-400 mt-2">— Sarah & Luna</p>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
