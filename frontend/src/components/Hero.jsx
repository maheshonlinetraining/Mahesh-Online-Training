import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Calendar, Clock, Laptop, ChevronLeft, ChevronRight, Users, ShieldCheck, Code, Award, Bell } from 'lucide-react';

export default function Hero({ onOpenDemoModal, onOpenEnrollModal, courses = [], onSelectCourse }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: "data-analytics",
      courseId: "data-analytics-powerbi-sql",
      courseTitle: "Data Analytics with SQL, Power BI, Python, Excel",
      tabLabel: "Data Analytics",
      tabSub: "Starts Sept 15",
      topBadge: "Data Analytics Batch Starts on September 15, 2026",
      isComingSoon: false,
      badgeColor: "orange",
      headlinePrefix: "Data Analytics Masterclass",
      headlineHighlight: "Register for the Live Batch",
      subtitle: (
        <>
          Attended our free demo session on <strong className="text-slate-900">5th September</strong>? If you are ready to take your career to the next level, register here to confirm your seat for the complete live batch starting on <strong className="text-orange-600">September 15, 2026</strong>.
        </>
      ),
      points: [
        "Batch Starts: September 15, 2026",
        "100% Live Interactive Classes",
        "Real-Time Industry Projects & Capstones"
      ],
      primaryButtonText: "Register for Data Analytics Course",
      startDateText: "Sept 15",
      startSubText: "2026 Batch",
      trainers: [
        {
          name: "Abhi (8+ Yrs Exp)",
          role: "Data Analyst",
          subtitle: "Mentored 100+ students",
          accentColor: "orange"
        }
      ]
    },
    {
      id: "salesforce",
      courseId: "salesforce-administration-and-developer",
      courseTitle: "Salesforce Administration and Developer",
      tabLabel: "Salesforce Admin & Dev",
      tabSub: "Coming Soon",
      topBadge: "Salesforce Live Batch — Coming Soon",
      isComingSoon: true,
      badgeColor: "amber",
      headlinePrefix: "Salesforce Admin & Developer",
      headlineHighlight: "Comprehensive 2-in-1 Masterclass",
      subtitle: (
        <>
          Master end-to-end <strong className="text-slate-900">Salesforce Administration</strong>, Flow Automation, <strong className="text-slate-900">Core Apex</strong>, LWC & REST APIs. To ensure thorough master-level coverage of both Administration and Development, this course is taught by <strong className="text-orange-600">2 dedicated industry specialists</strong>.
        </>
      ),
      points: [
        "Complete 2-in-1: Admin + Developer Tracks",
        "2 Dedicated Industry Mentors (Admin & Dev)",
        "Enterprise Trailhead, Flow Builder & LWC Projects"
      ],
      primaryButtonText: "Inquire / Book Free Demo",
      startDateText: "Coming",
      startSubText: "Soon",
      trainers: [
        {
          name: "Koti (6+ Yrs Exp)",
          role: "Salesforce Administrator",
          subtitle: "Admin 201, Flow Builder & Security Architecture",
          accentColor: "blue"
        },
        {
          name: "Bharat (9+ Yrs Exp)",
          role: "Salesforce Developer",
          subtitle: "Apex Programming, LWC & REST API Integrations",
          accentColor: "indigo"
        }
      ]
    }
  ];

  const current = slides[activeSlide];

  // Auto slide transition every 6 seconds (resets timer on manual change)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeSlide, slides.length]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleViewCurriculum = () => {
    if (onSelectCourse && courses?.length) {
      const match = courses.find((c) => c.id === current.courseId || c.title === current.courseTitle);
      if (match) {
        onSelectCourse(match);
        return;
      }
    }
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative pt-4 pb-8 md:pt-6 md:pb-12 bg-white overflow-hidden border-b border-slate-100"
    >
      
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-orange-50 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Slicer / Toggler Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-100">
          
          {/* Slicer Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner">
            {slides.map((s, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <span>{s.tabLabel}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wide ${
                      s.isComingSoon
                        ? isActive
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-200 text-slate-600'
                        : isActive
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {s.tabSub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls: Arrows and Slider Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Batch {activeSlide + 1} of {slides.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 text-slate-600 hover:text-orange-600 shadow-xs transition-colors cursor-pointer"
                title="Previous Batch"
                aria-label="Previous Batch"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 text-slate-600 hover:text-orange-600 shadow-xs transition-colors cursor-pointer"
                title="Next Batch"
                aria-label="Next Batch"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Slide Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-4 md:space-y-5 text-center lg:text-left transition-all duration-300">
            
            {/* Blinking Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs sm:text-sm font-bold">
              <span className={`w-2 h-2 rounded-full ${current.isComingSoon ? 'bg-amber-500 animate-pulse' : 'bg-orange-600 animate-ping'}`}></span>
              <span>{current.topBadge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {current.headlinePrefix} <br />
              <span className="text-orange-600">{current.headlineHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {current.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              {current.isComingSoon ? (
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                  <span className="px-4 py-3 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-800 font-extrabold text-sm tracking-wide text-center w-full sm:w-auto">
                    Coming Soon
                  </span>
                  <button
                    onClick={() => onOpenDemoModal ? onOpenDemoModal(current.courseTitle) : null}
                    className="btn-orange w-full sm:w-auto px-6 py-3 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-brand-soft cursor-pointer transform active:scale-95"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Inquire / Book Free Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => onOpenEnrollModal ? onOpenEnrollModal(current.courseTitle, "September 15, 2026 Batch (07:00 AM - 08:00 AM IST)") : onOpenDemoModal(current.courseTitle)}
                  className="btn-orange w-full sm:w-auto px-7 py-3 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-brand-soft cursor-pointer transform active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>{current.primaryButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={handleViewCurriculum}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-sm sm:text-base border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>View Full Curriculum</span>
              </button>
            </div>

            {/* 3 Value Points Below Button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 font-medium">
              {current.points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Visual Card - Trainer Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg relative max-w-md mx-auto transition-all duration-200">
              
              {/* Header banner if multiple trainers */}
              {current.trainers.length > 1 ? (
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>2 Dedicated Specialist Mentors</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-700 text-[10px] font-bold">
                    Admin + Dev
                  </span>
                </div>
              ) : null}

              {/* Trainers List */}
              <div className="space-y-3 pb-3 border-b border-slate-100">
                {current.trainers.map((tr, trIdx) => (
                  <div key={trIdx} className="flex items-center gap-3.5">
                    {/* WhatsApp Default Profile Picture ("No DP") */}
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#dfe5e7] flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 shadow-inner">
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

                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-orange-600 font-bold">
                        {tr.role}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug truncate">
                        {tr.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 truncate">
                        {tr.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2 Clear Info Blocks */}
              <div className="grid grid-cols-2 gap-3 py-3.5 text-center border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-orange-50/70 border border-orange-100">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Start Date</div>
                  <div className="text-base sm:text-lg font-black text-orange-600 mt-0.5">
                    {current.startDateText}
                  </div>
                  <div className="text-[10px] text-slate-600 font-medium">{current.startSubText}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-orange-50/70 border border-orange-100">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Training Mode</div>
                  <div className="text-base sm:text-lg font-black text-slate-800 mt-0.5">
                    Live Online
                  </div>
                  <div className="text-[10px] text-slate-600 font-medium">Interactive Sessions</div>
                </div>
              </div>

              {/* Registration / Inquiry Callout */}
              <div className="pt-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="truncate max-w-[200px]">{current.tabLabel} Live Batch</span>
                  <span className={`font-bold ${current.isComingSoon ? 'text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200' : 'text-orange-600'}`}>
                    {current.isComingSoon ? 'Coming Soon' : 'Starts Sept 15'}
                  </span>
                </div>

                {current.isComingSoon ? (
                  <button
                    onClick={() => onOpenDemoModal ? onOpenDemoModal(current.courseTitle) : null}
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Inquire / Book Free Demo</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenEnrollModal ? onOpenEnrollModal(current.courseTitle, "September 15, 2026 Batch (07:00 AM - 08:00 AM IST)") : onOpenDemoModal(current.courseTitle)}
                    className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Register for Data Analytics Course</span>
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
