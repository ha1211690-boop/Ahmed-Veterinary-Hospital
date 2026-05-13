import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide 24/7 emergency care?",
    answer: "Yes, our emergency clinic is open 24 hours a day, 7 days a week, including holidays. If you have an emergency, please call us immediately or come straight in."
  },
  {
    question: "What vaccinations are required for my pet?",
    answer: "Core vaccinations for dogs include Rabies, Distemper, Parvovirus, and Adenovirus. For cats, core vaccines include Rabies, Feline Herpesvirus, Calicivirus, and Panleukopenia. We also offer lifestyle-dependent vaccines."
  },
  {
    question: "How often should my pet visit the vet?",
    answer: "We recommend a comprehensive physical examination at least once a year for adult pets. Senior pets and puppies/kittens usually require more frequent visits to monitor their health and development."
  },
  {
    question: "Do you treat exotic pets?",
    answer: "Yes, we have specialists on staff trained in exotic animal medicine. Please mention what specific type of pet you have when booking so we can schedule you with the correct specialist."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and cash. We also work with several pet insurance providers and offer third-party payment plans for extensive procedures."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-medium text-brand-teal-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">Find quick answers to common questions about our services and policies.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 bg-white text-left hover:bg-gray-50 focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-brand-teal transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 mt-2">
                       {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
