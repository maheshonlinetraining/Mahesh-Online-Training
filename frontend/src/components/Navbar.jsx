import React, { useState } from 'react';
import { Sparkles, Phone, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenDemoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Courses', href: '#courses' },
    { label: 'Batches', href: '#batches' },
    { label: 'Why Us', href: '#features' },
    { label: 'Placements', href: '#placements' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner - Clean Orange Accent */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-semibold flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        <span>Admissions Open for Next Week Batches! 100% Live Interactive Classes.</span>
        <button
          onClick={() => onOpenDemoModal()}
          className="hidden sm:inline underline font-bold hover:text-orange-100 ml-1 cursor-pointer"
        >
          Reserve Free Demo
        </button>
      </div>

      {/* Main Navbar - Pure White with Slate Border */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Official Logo */}
            <a href="#" className="flex items-center py-1 group">
              <img
                src={logoImg}
                alt="Mahesh Online Training"
                className="h-14 sm:h-[70px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+919182721589"
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-orange-600 px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>+91 91827 21589</span>
              </a>

              <button
                onClick={() => onOpenDemoModal()}
                className="btn-orange px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Book Free Demo</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => onOpenDemoModal()}
                className="sm:hidden text-xs bg-orange-600 text-white font-bold px-3 py-1.5 rounded-lg"
              >
                Book Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-700 hover:text-orange-600 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full btn-orange py-3 rounded-xl text-sm font-bold text-center"
              >
                Book Your Free Demo Session
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
