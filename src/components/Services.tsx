import React from 'react';
import { motion } from 'motion/react';
import { Syringe, Stethoscope, Scissors, HeartPulse, Activity, Pill, Bone, ActivitySquare } from 'lucide-react';
import { Button } from './ui/Button';

const services = [
  {
    icon: Stethoscope,
    title: 'General Checkups',
    description: 'Comprehensive physical exams to ensure your pet\'s overall health and catch issues early.'
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Protect your pets from dangerous diseases with our complete vaccination schedules.'
  },
  {
    icon: HeartPulse,
    title: 'Emergency Care',
    description: 'Prepared for the unexpected. Immediate critical care available 24/7 for urgent situations.'
  },
  {
    icon: ActivitySquare,
    title: 'Surgery',
    description: 'State-of-the-art operating rooms for routine spays/neuters to complex procedures.'
  },
  {
    icon: Activity,
    title: 'Diagnostics & X-Rays',
    description: 'Advanced imaging and in-house laboratory for fast, accurate condition diagnosis.'
  },
  {
    icon: Bone,
    title: 'Dental Care',
    description: 'Professional cleaning, extractions, and oral health maintenance for a healthy smile.'
  },
  {
    icon: Pill,
    title: 'Pet Pharmacy',
    description: 'Fully stocked on-site pharmacy for immediate access to necessary medications.'
  },
  {
    icon: Scissors,
    title: 'Grooming',
    description: 'Medically supervised grooming to keep your pet looking and feeling their absolute best.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold text-sm tracking-wider uppercase mb-4"
          >
            What We Offer
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-medium text-brand-teal-dark mb-6 text-balance"
          >
            Comprehensive Veterinary Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            From routine checkups to specialized surgeries, our modern facility is equipped to handle all your pet's medical needs under one roof.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-sand flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                <a href="#" className="text-sm font-semibold text-brand-teal group-hover:text-brand-orange transition-colors flex items-center gap-1 mt-auto">
                  Learn more <span className="text-lg">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
           <Button variant="outline" size="lg">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
