import React from 'react';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-teal-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center text-white">
                  <Heart size={24} className="fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl leading-tight text-white">
                    Ahmed Veterinary
                  </span>
                  <span className="font-sans text-xs tracking-wider uppercase text-brand-teal-light">
                    Hospital & Care
                  </span>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Providing compassionate, state-of-the-art medical care to pets. Your furry family members deserve the very best.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:scale-110 transition-all"><Facebook size={18}/></a>
                 <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:scale-110 transition-all"><Instagram size={18}/></a>
                 <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:scale-110 transition-all"><Twitter size={18}/></a>
              </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="hover:text-brand-orange transition-colors">Meet the Team</a></li>
              <li><a href="#testimonials" className="hover:text-brand-orange transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-brand-orange transition-colors">General Checkups</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Vaccinations</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Surgical Procedures</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Pet Grooming</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                 <MapPin className="text-brand-orange shrink-0 mt-1" size={20} />
                 <span>123 Healing Paws Way,<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="text-brand-orange shrink-0" size={20} />
                 <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="text-brand-orange shrink-0" size={20} />
                 <span>info@ahmedvet.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Ahmed Veterinary Hospital. All rights reserved.</p>
          <div className="flex gap-6 relative z-20">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
