import React from 'react';
import { Award, Star } from 'lucide-react';

export default function Placements({ testimonials, onOpenDemoModal }) {
  const companies = [
    "Google", "Amazon", "Microsoft", "Cognizant", "Capgemini", "TCS", "Infosys", "Deloitte", "Accenture", "Wipro"
  ];

  return (
    <section id="placements" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Alumni Placements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Students Work at <span className="text-orange-600">Top Tech MNCs</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From freshers to experienced professionals, our students crack interviews with great confidence.
          </p>
        </div>

        {/* Company Logo Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {companies.map((company) => (
            <span
              key={company}
              className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:border-orange-300 transition-colors"
            >
              {company}
            </span>
          ))}
        </div>

        {/* 3 Clean Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials?.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {/* WhatsApp Default "No DP" Avatar */}
                  <div className="w-12 h-12 rounded-full bg-[#dfe5e7] flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 shadow-inner">
                    <svg 
                      viewBox="0 0 100 100" 
                      className="w-full h-full text-[#aebac1]" 
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="37" r="19" fill="#aebac1" />
                      <path d="M 18 88 C 18 64, 32 58, 50 58 C 68 58, 82 64, 82 88 Z" fill="#aebac1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <div className="text-xs text-orange-600 font-semibold">{t.role}</div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-4">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
                  {t.hike}
                </span>
                <div className="flex text-amber-500 text-xs">
                  {"★".repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
