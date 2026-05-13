import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export function WhyChooseUs() {
  const reasons = [
    "Over 15 years of veterinary excellence",
    "State-of-the-art diagnostic equipment",
    "Compassionate, fear-free handling",
    "24/7 dedicated emergency response",
    "Clean, sterile, and calming environment",
    "Affordable care plans available"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Collage of images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-lg">
                   <img src="https://images.unsplash.com/photo-1628009368231-7bb7cbcb8127?auto=format&fit=crop&q=80&w=800" alt="Vet examining cat" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-lg">
                   <img src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800" alt="Happy dog" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[32px] bg-brand-teal p-8 flex flex-col justify-center text-white aspect-[4/3] shadow-lg">
                   <h4 className="text-3xl font-display font-bold mb-2">10k+</h4>
                   <p className="text-brand-teal-light font-medium">Happy Pets</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm tracking-wider uppercase mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-teal-dark mb-6">
              We provide the highest standard of care for your pets.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When you choose Ahmed Veterinary Hospital, you're not just getting a doctor – you're getting a partner in your pet's healthcare journey. We combine expertise with deep empathy.
            </p>

            <ul className="space-y-4.5 mb-10">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-brand-green flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{reason}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}>
              Schedule a Visit
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
