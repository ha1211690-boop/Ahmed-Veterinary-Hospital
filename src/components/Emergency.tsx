import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, AlertTriangle, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export function Emergency() {
  return (
    <section id="emergency" className="py-24 bg-brand-teal-dark relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-white">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-orange text-white rounded-[40px] p-8 md:p-16 shadow-2xl flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <AlertTriangle size={40} className="text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">
            Pet Emergency? We're Here 24/7
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
            Don't wait. If your pet is experiencing difficulty breathing, severe bleeding, or sudden collapse, call us immediately or bring them straight in.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-orange hover:bg-gray-100 focus:ring-white shrink-0 text-xl font-bold gap-3 h-16 w-full sm:w-auto"
            >
              <PhoneCall size={24} />
              +1 234 567 890
            </Button>
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange-hover border-2 border-white focus:ring-white shrink-0 text-xl h-16 w-full sm:w-auto gap-3"
            >
               Directions to Hospital
            </Button>
          </div>
          
          <div className="mt-8 flex items-center text-white/80 font-medium text-sm gap-2 bg-white/10 px-4 py-2 rounded-full">
             <Clock size={16} /> No prior appointment needed for critical emergencies.
          </div>
        </div>
      </div>
    </section>
  );
}
