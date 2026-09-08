import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Calendar, Clock, Laptop } from 'lucide-react';

export default function Hero({ onOpenDemoModal, onOpenEnrollModal }) {
  const dataAnalyticsCourse = "Data Analytics with SQL, Power BI, Python, Excel";

  return (
    <section className="relative pt-4 pb-8 md:pt-6 md:pb-12 bg-white overflow-hidden border-b border-slate-100">
      
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-orange-50 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-4 md:space-y-5 text-center lg:text-left">
            
            {/* 1) Blinking Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs sm:text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping"></span>
              <span>Data Analytics Batch Starts on September 15, 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Data Analytics Masterclass <br />
              <span className="text-orange-600">Register for the Live Batch</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Attended our free demo session on <strong className="text-slate-900">5th September</strong>? If you are ready to take your career to the next level, register here to confirm your seat for the complete live batch starting on <strong className="text-orange-600">September 15, 2026</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => onOpenEnrollModal ? onOpenEnrollModal(dataAnalyticsCourse, "September 15, 2026 Batch (07:00 AM - 08:00 AM IST)") : onOpenDemoModal(dataAnalyticsCourse)}
                className="btn-orange w-full sm:w-auto px-7 py-3 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-brand-soft cursor-pointer transform active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Register for Data Analytics Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-sm sm:text-base border border-slate-200 flex items-center justify-center gap-2 transition-colors"
              >
                <span>View Full Curriculum</span>
              </a>
            </div>

            {/* 3 Honest Points Below Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Batch Starts: September 15, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>100% Live Interactive Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Real-Time Industry Projects & Capstones</span>
              </div>
            </div>

          </div>

          {/* 3) Right Visual Card - Compact Trainer Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg relative max-w-md mx-auto">
              
              {/* Trainer Details with WhatsApp "No DP" Avatar */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                {/* WhatsApp Default Profile Picture ("No DP") */}
                <div className="w-14 h-14 rounded-full bg-[#dfe5e7] flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 shadow-inner">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="w-full h-full text-[#aebac1]" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Head */}
                    <circle cx="50" cy="37" r="19" fill="#aebac1" />
                    {/* Shoulders / Body */}
                    <path d="M 18 88 C 18 64, 32 58, 50 58 C 68 58, 82 64, 82 88 Z" fill="#aebac1" />
                  </svg>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-orange-600 font-bold">
                    Data Analyst
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Abhi (8+ Yrs Exp)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Mentored 100+ students
                  </p>
                </div>
              </div>

              {/* 2 Clear Info Blocks */}
              <div className="grid grid-cols-2 gap-3 py-3.5 text-center border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-orange-50/70 border border-orange-100">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Start Date</div>
                  <div className="text-base sm:text-lg font-black text-orange-600 mt-0.5">
                    Sept 15
                  </div>
                  <div className="text-[10px] text-slate-600 font-medium">2026 Batch</div>
                </div>
                <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-100">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Training Mode</div>
                  <div className="text-base sm:text-lg font-black text-slate-800 mt-0.5">
                    Live Online
                  </div>
                  <div className="text-[10px] text-slate-600 font-medium">Interactive Sessions</div>
                </div>
              </div>

              {/* Registration Callout */}
              <div className="pt-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>Data Analytics Live Batch</span>
                  <span className="text-orange-600 font-bold">Starts Sept 15</span>
                </div>
                <button
                  onClick={() => onOpenEnrollModal ? onOpenEnrollModal(dataAnalyticsCourse, "September 15, 2026 Batch (07:00 AM - 08:00 AM IST)") : onOpenDemoModal(dataAnalyticsCourse)}
                  className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Register for Data Analytics Course</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
