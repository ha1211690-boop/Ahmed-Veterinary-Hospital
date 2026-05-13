import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Heart, Menu, X, Clock } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center text-white">
              <Heart size={24} className="fill-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl leading-tight ${isScrolled ? 'text-brand-teal-dark' : 'text-brand-teal-dark'}`}>
                Ahmed Veterinary
              </span>
              <span className={`font-sans text-xs tracking-wider uppercase ${isScrolled ? 'text-gray-500' : 'text-gray-600'}`}>
                Hospital & Care
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-teal transition-colors"
                onClick={(e) => {
                  if(link.name === 'Home') return;
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mr-2">
              <Clock size={16} className="text-brand-orange" />
              <span>24/7 Emergency</span>
            </div>
            <Button size="sm" variant="outline" className="hidden lg:flex gap-2">
              <Phone size={16} />
              +1 234 567 890
            </Button>
            <Button size="sm" 
              onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Visit
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-brand-teal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-3"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-gray-800"
                  onClick={(e) => {
                     setMobileMenuOpen(false);
                     if(link.name === 'Home') return;
                     e.preventDefault();
                     document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-px bg-gray-100 my-2" />
              <div className="flex flex-col gap-3">
                <Button variant="emergency" className="w-full justify-center gap-2"
                  onClick={() => document.querySelector('#emergency')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Phone size={18} />
                  Emergency Help
                </Button>
                <Button className="w-full justify-center"
                   onClick={() => {
                     setMobileMenuOpen(false);
                     document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
                   }}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
