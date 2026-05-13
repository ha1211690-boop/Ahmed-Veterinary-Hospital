import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Heart, value: '10k+', label: 'Happy Pets Treated' }, // Wait, Heart not imported here.
  { icon: ShieldCheck, value: '20+', label: 'Certified Doctors' },
  { icon: Activity, value: '24/7', label: 'Emergency Care' },
];

export function TrustBar() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="w-16 h-16 rounded-full bg-brand-sand flex items-center justify-center text-brand-teal">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
