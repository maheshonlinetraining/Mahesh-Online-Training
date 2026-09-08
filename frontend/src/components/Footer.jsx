import React from 'react';
import { Phone, Mail, ArrowUp, Sparkles, CheckCircle2 } from 'lucide-react';
import logoWhiteImg from '../assets/logo-white.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs sm:text-sm pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80 items-start">
          
          {/* Left: Prominent Institute Logo & Branding (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Logo + Institute Name */}
            <div className="flex items-center gap-3.5">
              <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200/20 shrink-0">
                <img
                  src={logoWhiteImg}
                  alt="Mahesh Online Training Logo"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-tight">
                  Mahesh <span className="text-orange-500">Online Training</span>
                </h3>
                <p className="text-xs sm:text-sm text-orange-400 font-bold tracking-wide mt-0.5">
                  Step in for Success
                </p>
                <p className="text-[11px] text-slate-400 font-medium mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  100% Live Interactive Online Institute
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
              Live, project-based software training and mentorship. Small batches, hands-on real-time capstones, dedicated doubt clearing, and career guidance for ambitious professionals.
            </p>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs pt-1">
              <a
                href="tel:+919182721589"
                className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>+91 91827 21589</span>
              </a>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <a
                href="mailto:hr@maheshonlinetraining.com"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-orange-500" />
                <span>hr@maheshonlinetraining.com</span>
              </a>
            </div>
          </div>

          {/* Right: Top Courses (5 cols) */}
          <div className="md:col-span-5 space-y-3 md:pl-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Our Popular Programs</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#courses" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="text-orange-500 text-[10px] opacity-70 group-hover:opacity-100">▸</span>
                  <span>Data Analytics with SQL, Power BI, Python, Excel</span>
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="text-orange-500 text-[10px] opacity-70 group-hover:opacity-100">▸</span>
                  <span>SQL for Data Analysts</span>
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <span className="text-orange-500 text-[10px] opacity-70 group-hover:opacity-100">▸</span>
                  <span>Salesforce Administration and Developer</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Mahesh Online Training. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
