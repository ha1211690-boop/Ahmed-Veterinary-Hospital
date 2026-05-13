import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Doctors } from './components/Doctors';
import { Emergency } from './components/Emergency';
import { Testimonials } from './components/Testimonials';
import { Appointment } from './components/Appointment';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-sand font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Emergency />
        <Doctors />
        <Testimonials />
        <Appointment />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} className="fill-white" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold py-2 px-4 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Click to WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
}
