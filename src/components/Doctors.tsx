import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Sarah Ahmed',
    role: 'Chief Veterinarian',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    bio: 'Specializes in feline medicine and soft tissue surgery with 15+ years experience.',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Veterinary Surgeon',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600', // actually a doctor pic
    bio: 'Expert in orthopedic surgery and advanced diagnostics for both dogs and cats.',
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Pet Nutritionist',
    image: 'https://images.unsplash.com/photo-1594824436951-7f12bcbf6918?auto=format&fit=crop&q=80&w=600',
    bio: 'Dedicated to preventative care, nutrition, and holistic wellness approaches.',
  }
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-medium text-brand-teal-dark mb-6 text-balance"
          >
            Meet Our Expert Veterinarians
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Our team of certified professionals share a common goal: providing the highest standard of compassionate care for your animal companions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-brand-teal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                   <button className="w-10 h-10 rounded-full bg-white text-brand-teal flex items-center justify-center hover:scale-110 transition-transform"><Linkedin size={18} /></button>
                   <button className="w-10 h-10 rounded-full bg-white text-brand-teal flex items-center justify-center hover:scale-110 transition-transform"><Instagram size={18} /></button>
                   <button className="w-10 h-10 rounded-full bg-white text-brand-teal flex items-center justify-center hover:scale-110 transition-transform"><Mail size={18} /></button>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-brand-orange font-medium text-sm mb-4 tracking-wider uppercase">{doc.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{doc.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
