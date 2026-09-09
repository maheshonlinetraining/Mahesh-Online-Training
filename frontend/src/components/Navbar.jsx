import React, { useState } from 'react';
import { Sparkles, Phone, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenDemoModal, onOpenEnrollModal }) {
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
          onClick={() => (onOpenEnrollModal ? onOpenEnrollModal() : onOpenDemoModal())}
          className="hidden sm:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full font-bold text-xs ml-1.5 transition-colors cursor-pointer border border-white/30 shadow-xs"
        >
          <span>Register for Course</span>
          <span>→</span>
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
            <div className="hidden sm:flex items-center gap-3.5">
              {/* Dual Contact Phone Numbers: India & USA */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <div className="flex flex-col text-[11px] font-bold leading-tight">
                  <a 
                    href="tel:+919182721589" 
                    className="hover:text-orange-600 transition-colors flex items-center gap-1"
                    title="Call India Admissions"
                  >
                    <span>+91 91827 21589</span>
                    <span className="text-[9px] font-semibold text-slate-400 uppercase">(IN)</span>
                  </a>
                  <a 
                    href="tel:+13303304531" 
                    className="hover:text-orange-600 transition-colors flex items-center gap-1"
                    title="Call USA Admissions"
                  >
                    <span>+1 3303304531</span>
                    <span className="text-[9px] font-semibold text-slate-400 uppercase">(US)</span>
                  </a>
                </div>
              </div>

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

            {/* Mobile Phone Contacts */}
            <div className="pt-2 pb-1 border-b border-slate-100 flex flex-col gap-2 text-xs font-bold text-slate-700">
              <a href="tel:+919182721589" className="flex items-center gap-2 hover:text-orange-600">
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>+91 91827 21589 (India)</span>
              </a>
              <a href="tel:+13303304531" className="flex items-center gap-2 hover:text-orange-600">
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>+1 3303304531 (USA)</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnrollModal) onOpenEnrollModal();
                  else onOpenDemoModal();
                }}
                className="w-full py-2.5 rounded-xl bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold text-center"
              >
                Register for Course
              </button>
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
