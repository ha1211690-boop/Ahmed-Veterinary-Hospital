import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 bg-brand-teal p-10 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden">
             {/* Abstract circle */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
             
             <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 relative z-10">
               Book a Visit
             </h2>
             <p className="text-brand-teal-light text-lg mb-10 relative z-10 leading-relaxed text-white/90">
               Scheduling an appointment is easy. Choose your preferred date and time, and our team will get back to you confirming your visit.
             </p>

             <div className="space-y-6 relative z-10">
               <div>
                 <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                 <p className="text-brand-teal-light text-white/80">Mon - Fri: 8:00 AM - 8:00 PM</p>
                 <p className="text-brand-teal-light text-white/80">Sat - Sun: 9:00 AM - 5:00 PM</p>
                 <p className="text-brand-orange mt-2 font-medium">Emergency: 24/7</p>
               </div>
             </div>
          </div>

          <div className="lg:w-1/2 p-10 lg:p-16">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green mb-4">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Request Sent!</h3>
                <p className="text-gray-600">Our receptionist will contact you shortly to confirm your appointment.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Your Name</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all bg-gray-50 hover:bg-gray-100/50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input required type="tel" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all bg-gray-50 hover:bg-gray-100/50" placeholder="+1 234 567 890" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Pet Type</label>
                    <select required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal text-gray-700 bg-gray-50 hover:bg-gray-100/50">
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="exotic">Exotic / Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Needed</label>
                    <select required className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal text-gray-700 bg-gray-50 hover:bg-gray-100/50">
                      <option value="">Select service</option>
                      <option value="checkup">General Checkup</option>
                      <option value="vaccination">Vaccination</option>
                      <option value="grooming">Grooming</option>
                      <option value="surgery">Surgery/Dental</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                   <input required type="date" className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal text-gray-700 bg-gray-50 hover:bg-gray-100/50" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Additional Notes</label>
                  <textarea rows={4} className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all bg-gray-50 hover:bg-gray-100/50" placeholder="Briefly describe the reason for visit..." />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Request Appointment
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
