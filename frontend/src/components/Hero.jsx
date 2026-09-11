import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Award, 
  TrendingUp, 
  Star, 
  Briefcase,
  ShieldCheck,
  Zap,
  Terminal,
  Code2,
  Check,
  BarChart3,
  Cloud,
  Layers,
  BookOpen,
  Flame,
  FileCheck
} from 'lucide-react';

export default function Hero({ onOpenDemoModal, onOpenEnrollModal, courses = [], onSelectCourse }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: "data-analytics",
      courseId: "data-analytics-powerbi-sql",
      courseTitle: "Data Analytics with SQL, Power BI, Python, Excel",
      tabLabel: "Data Analytics",
      tabSub: "Starts Sept 15",
      badgeText: "Live Batch Starts September 15, 2026",
      isComingSoon: false,
      accentColor: "orange",
      headlinePrefix: "Data Analytics Masterclass",
      headlineHighlight: "Become an Industry-Ready Analyst",
      subtitle: (
        <>
          Attended our free demo session on <strong className="text-slate-900">5th September</strong>? Fast-track your career with mentor-led interactive training in <strong className="text-slate-900">SQL, Power BI, Python & Excel</strong>, complete with 3 production-grade capstone projects and end-to-end placement guidance.
        </>
      ),
      features: [
        {
          icon: "zap",
          title: "100% Live Mentorship",
          desc: "Interactive 2-way screen sharing, live doubt clearing & daily practice labs."
        },
        {
          icon: "layers",
          title: "3 Enterprise Capstones",
          desc: "Real-world Power BI dashboards, SQL ETL pipelines & business intelligence."
        },
        {
          icon: "briefcase",
          title: "Placement & Mock Prep",
          desc: "Resume reviews, LinkedIn optimization, interview mock drills & referrals."
        }
      ],
      points: [
        "100% Live Interactive Classes with Abhi",
        "Real-Time Business Intelligence & SQL Capstones",
        "Placement Support & Resume Portfolio Reviews"
      ],
      seatsBooked: 19,
      totalSeats: 25,
      urgencyText: "Only 6 seats remaining for Sept 15 batch",
      alumniCompanies: ["Deloitte", "TCS", "Infosys", "Accenture", "Cognizant"],
      primaryButtonText: "Register for Live Batch",
      startDateText: "Sept 15, 2026",
      modeText: "100% Live Online",
      ambientBg: "from-[#fff7ed] via-[#ffedd5]/60 to-[#fffaf5]",
      haloColor: "bg-orange-500/20",
      gridColor: "#ea580c",
      studio: {
        tag: "POWER BI & SQL ANALYTICS SUITE",
        querySnippet: "SELECT candidate, hike FROM placements WHERE batch = 'DA-2026';",
        queryResult: "100% Placed • Avg 42% Hike",
        kpiValue: "₹8.5 LPA",
        kpiLabel: "Average Alumni Package",
        hikeBadge: "+42% Avg Hike",
        techStack: [
          { name: "Power BI", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
          { name: "SQL Querying", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
          { name: "Python", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
          { name: "Excel & DAX", color: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
          { name: "Pandas", color: "bg-sky-500/20 text-sky-300 border-sky-500/40" }
        ]
      },
      trainers: [
        {
          name: "Abhi (8+ Yrs Exp)",
          role: "Lead Data Analyst & Industry Mentor",
          subtitle: "Mentored 100+ students • Power BI, SQL & Python Specialist",
          initials: "AB",
          rating: "4.9/5",
          avatarGradient: "from-orange-600 to-amber-500"
        }
      ]
    },
    {
      id: "salesforce",
      courseId: "salesforce-administration-and-developer",
      courseTitle: "Salesforce Administration and Developer",
      tabLabel: "Salesforce Admin & Dev",
      tabSub: "Coming Soon",
      badgeText: "Salesforce 2-in-1 Cohort — Coming Soon",
      isComingSoon: true,
      accentColor: "sky",
      headlinePrefix: "Salesforce Admin & Developer",
      headlineHighlight: "Comprehensive 2-in-1 Masterclass",
      subtitle: (
        <>
          Master end-to-end <strong className="text-slate-900">Salesforce Administration</strong>, Flow Automation, <strong className="text-slate-900">Core Apex</strong>, LWC & REST APIs. To ensure thorough master-level coverage of both Administration and Development, this course is taught by <strong className="text-orange-600">2 dedicated industry specialists</strong>.
        </>
      ),
      features: [
        {
          icon: "layers",
          title: "2-in-1 Dual Track",
          desc: "Comprehensive coverage of both Administration (201) & Developer (PD1) tracks."
        },
        {
          icon: "users",
          title: "2 Dedicated Mentors",
          desc: "Separate industry specialists for Admin configuration and Apex coding."
        },
        {
          icon: "briefcase",
          title: "Real Enterprise Apps",
          desc: "Hands-on experience with Flow Builder, Apex Triggers, LWC & REST APIs."
        }
      ],
      points: [
        "Complete 2-in-1: Admin + Developer Tracks in One Course",
        "2 Dedicated Industry Mentors (Admin & Dev Specialists)",
        "Enterprise Trailhead, Flow Builder & LWC Projects"
      ],
      seatsBooked: 14,
      totalSeats: 25,
      urgencyText: "Early-bird registrations open for upcoming cohort",
      alumniCompanies: ["Salesforce Ecosystem", "Deloitte Digital", "Capgemini", "PwC", "Wipro"],
      primaryButtonText: "Inquire / Book Free Demo",
      startDateText: "Coming Soon",
      modeText: "100% Live Online",
      ambientBg: "from-[#f0f9ff] via-[#e0f2fe]/60 to-[#fffaf5]",
      haloColor: "bg-sky-500/20",
      gridColor: "#0284c7",
      studio: {
        tag: "ENTERPRISE CRM CLOUD 360",
        querySnippet: "ApexTrigger.execute(LeadAutomation.class); // PD1 Track",
        queryResult: "Admin 201 + PD1 Dual Tracks",
        kpiValue: "2-in-1 Track",
        kpiLabel: "Admin + Developer Mastery",
        hikeBadge: "Dual Certification Prep",
        techStack: [
          { name: "Sales Cloud", color: "bg-sky-500/20 text-sky-300 border-sky-500/40" },
          { name: "Flow Builder", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
          { name: "Core Apex", color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40" },
          { name: "LWC Components", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
          { name: "REST APIs", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" }
        ]
      },
      trainers: [
        {
          name: "Koti (6+ Yrs Exp)",
          role: "Salesforce Administrator",
          subtitle: "Admin 201, Flow Builder & Security Architecture",
          initials: "KT",
          rating: "4.9/5",
          avatarGradient: "from-sky-600 to-blue-500"
        },
        {
          name: "Bharat (9+ Yrs Exp)",
          role: "Salesforce Developer",
          subtitle: "Apex OOP, Trigger Handlers, LWC & REST APIs",
          initials: "BH",
          rating: "5.0/5",
          avatarGradient: "from-indigo-600 to-purple-500"
        }
      ]
    }
  ];

  const current = slides[activeSlide];

  // Auto slide transition every 30 seconds (resets timer on manual change)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 30000);
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
    <section className="relative pt-3 pb-8 md:pt-5 md:pb-14 overflow-hidden border-b border-slate-200/80 transition-colors duration-700 bg-white">
      
      {/* 1. Dynamic Seamless Aurora Ambient Canvas (100% Vector & Radiant Mesh, Zero Stock Photo Clutter) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        {slides.map((s, idx) => {
          const isActive = activeSlide === idx;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Soft Multi-stop Ambient Mesh */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.ambientBg}`} />

              {/* Radiant Top Spotlight Beam */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"
                style={{
                  background: `radial-gradient(circle, ${s.gridColor} 0%, transparent 70%)`
                }}
              />

              {/* Radiant Top-Right Aurora Orb */}
              <div className={`absolute -top-24 right-0 w-[700px] h-[600px] ${s.haloColor} blur-[120px] rounded-full`} />

              {/* Gentle Top-Left Warm Halo */}
              <div className={`absolute -top-16 -left-16 w-[450px] h-[450px] ${s.haloColor} blur-[100px] rounded-full`} />

              {/* Delicate Architectural Dot Matrix */}
              <div 
                className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,#000_60%,transparent_100%)]"
                style={{
                  opacity: 0.14,
                  backgroundImage: `radial-gradient(${s.gridColor} 1.2px, transparent 1.2px)`,
                  backgroundSize: '28px 28px'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 2. Main Hero Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Interactive Slicer Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-200/60">
          
          {/* Slicer Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs">
            {slides.map((s, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-brand-soft ring-2 ring-orange-400/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {s.id === 'data-analytics' ? (
                    <BarChart3 className={`w-4 h-4 ${isActive ? 'text-white' : 'text-orange-600'}`} />
                  ) : (
                    <Cloud className={`w-4 h-4 ${isActive ? 'text-white' : 'text-sky-600'}`} />
                  )}
                  <span>{s.tabLabel}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wide transition-colors ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : s.isComingSoon
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {s.tabSub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Slicer Step Indicator & Live urgency */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>{current.urgencyText}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 text-slate-600 hover:text-orange-600 shadow-xs transition-colors cursor-pointer"
                title="Previous Cohort"
                aria-label="Previous Cohort"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 text-slate-600 hover:text-orange-600 shadow-xs transition-colors cursor-pointer"
                title="Next Cohort"
                aria-label="Next Cohort"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Slide Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-4 md:space-y-4 text-center lg:text-left transition-all duration-300">
            
            {/* Blinking Live Beacon Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-orange-200/90 text-slate-800 text-xs sm:text-sm font-bold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.isComingSoon ? 'bg-amber-400' : 'bg-orange-500'}`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${current.isComingSoon ? 'bg-amber-500' : 'bg-orange-600'}`}></span>
              </span>
              <span className="font-extrabold text-orange-700">{current.badgeText}</span>
            </div>

            {/* Headline with Dual-Tone Gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.14]">
              {current.headlinePrefix} <br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                {current.headlineHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {current.subtitle}
            </p>

            {/* 3 Enhanced Feature Value Cards (Replacing plain text bullets) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {current.features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-orange-300 hover:shadow-md transition-all duration-200 text-left group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {feat.icon === 'zap' && <Zap className="w-3.5 h-3.5 text-orange-600" />}
                      {feat.icon === 'layers' && <Layers className="w-3.5 h-3.5 text-orange-600" />}
                      {feat.icon === 'briefcase' && <Briefcase className="w-3.5 h-3.5 text-orange-600" />}
                      {feat.icon === 'users' && <Users className="w-3.5 h-3.5 text-orange-600" />}
                    </div>
                    <span className="font-extrabold text-xs text-slate-900 group-hover:text-orange-600 transition-colors">
                      {feat.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              {current.isComingSoon ? (
                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                  <span className="px-4 py-3 rounded-xl bg-amber-50 border border-amber-300/90 text-amber-900 font-extrabold text-sm tracking-wide text-center w-full sm:w-auto shadow-xs">
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
                  onClick={() => onOpenEnrollModal ? onOpenEnrollModal(current.courseTitle, "September 15, 2026 Live Batch") : onOpenDemoModal(current.courseTitle)}
                  className="btn-orange w-full sm:w-auto px-7 py-3 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-brand-soft cursor-pointer transform active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>{current.primaryButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={handleViewCurriculum}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-sm sm:text-base border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span>View Full Curriculum</span>
              </button>
            </div>

            {/* Reassurance Micro-Copy Trust Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                100% Practical Hands-On
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Class Recordings on Demand
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Resume & Interview Preparation
              </span>
            </div>

            {/* Learner Trust & Proof Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 border-t border-slate-200/60">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-amber-500 to-orange-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">AK</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-blue-500 to-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">SR</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-emerald-500 to-teal-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">MN</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-purple-500 to-pink-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">VT</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-slate-900 text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">+1.2k</div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-black text-slate-800 ml-1">4.95/5</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  From 1,250+ Placed Students
                </div>
              </div>
            </div>

            {/* Social Proof Alumni Bar */}
            {current.alumniCompanies && current.alumniCompanies.length > 0 && (
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 pt-1">
                <span className="font-semibold text-slate-600 flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-orange-600" />
                  Alumni Placed At:
                </span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
                  {current.alumniCompanies.map((company, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md bg-white/90 border border-slate-200/80 font-semibold text-slate-700 text-[11px] shadow-2xs">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: The Showstopper "Course Studio Bento Card" */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Trust Badge: Top Right */}
            <div className="absolute -top-3.5 right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/95 backdrop-blur-md text-white text-xs font-extrabold shadow-xl border border-slate-700/60">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>4.95 Rating • 1,250+ Placed</span>
            </div>

            {/* Floating Trust Badge: Bottom Left */}
            <div className="absolute -bottom-3 -left-3 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs font-bold shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Practical Curriculum</span>
            </div>

            {/* Main Bento Studio Card with subtle radiant outer border */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-orange-300/70 via-amber-200/50 to-slate-200 shadow-2xl transition-all duration-300">
              <div className="bg-white/95 backdrop-blur-xl rounded-[23px] p-5 sm:p-6 space-y-4">
                
                {/* Studio Component Preview Box (Show, Don't Tell!) */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-4 shadow-inner relative overflow-hidden border border-slate-700/60">
                  
                  {/* Simulated Window Title Bar */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-700/80 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90"></span>
                      <span className="text-[10px] font-mono text-slate-400 ml-2 tracking-wider">
                        {current.studio.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>ACTIVE LAB</span>
                    </div>
                  </div>

                  {/* Terminal / Code Query Bar */}
                  <div className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-slate-950/90 border border-slate-800/90 mb-3 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-400 truncate">
                      <Terminal className="w-3 h-3 text-orange-400 shrink-0" />
                      <span className="text-orange-400/90 select-none">$</span>
                      <span className="text-slate-300 truncate">{current.studio.querySnippet}</span>
                    </div>
                    <div className="shrink-0 text-[10px] font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      <Check className="w-2.5 h-2.5" />
                      <span>{current.studio.queryResult}</span>
                    </div>
                  </div>

                  {/* Course-Specific Interactive Component Content */}
                  {current.id === 'data-analytics' ? (
                    /* Data Analytics BI Dashboard Preview */
                    <div className="space-y-3">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            {current.studio.kpiLabel}
                          </div>
                          <div className="text-2xl font-black text-white tracking-tight flex items-baseline gap-2">
                            <span>{current.studio.kpiValue}</span>
                            <span className="text-xs font-bold text-emerald-400 flex items-center gap-0.5">
                              <TrendingUp className="w-3.5 h-3.5" />
                              {current.studio.hikeBadge}
                            </span>
                          </div>
                        </div>
                        <div className="text-[11px] font-mono text-orange-400 bg-orange-950/60 px-2.5 py-1 rounded border border-orange-500/30">
                          SQL + Power BI + Python
                        </div>
                      </div>

                      {/* SVG Mini Trendline Chart with Animated Ping Node */}
                      <div className="h-16 w-full relative">
                        <svg viewBox="0 0 320 60" fill="none" className="w-full h-full">
                          <defs>
                            <linearGradient id="heroChartGrad" x1="0%" y1="0%" x2="1">
                              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.45" />
                              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path 
                            d="M0 48 Q 40 40 80 44 T 160 28 T 240 16 T 320 8 L 320 60 L 0 60 Z" 
                            fill="url(#heroChartGrad)" 
                          />
                          <path 
                            d="M0 48 Q 40 40 80 44 T 160 28 T 240 16 T 320 8" 
                            fill="none" 
                            stroke="#f97316" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                          />
                          <circle cx="80" cy="44" r="3" fill="#ffffff" />
                          <circle cx="160" cy="28" r="3" fill="#ffffff" />
                          <circle cx="240" cy="16" r="3" fill="#ffffff" />
                          <circle cx="320" cy="8" r="7" fill="#f97316" fillOpacity="0.3" className="animate-ping" />
                          <circle cx="320" cy="8" r="3.5" fill="#f97316" stroke="#ffffff" strokeWidth="1.5" />
                        </svg>
                      </div>

                      {/* Tech Stack Pills Row */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {current.studio.techStack.map((tool, idx) => (
                          <span key={idx} className={`text-[10px] font-bold px-2 py-0.5 rounded border ${tool.color}`}>
                            {tool.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Salesforce Cloud Architecture Preview */
                    <div className="space-y-3">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            {current.studio.kpiLabel}
                          </div>
                          <div className="text-2xl font-black text-white tracking-tight flex items-baseline gap-2">
                            <span>{current.studio.kpiValue}</span>
                            <span className="text-xs font-bold text-sky-400 flex items-center gap-0.5">
                              <Award className="w-3.5 h-3.5" />
                              {current.studio.hikeBadge}
                            </span>
                          </div>
                        </div>
                        <div className="text-[11px] font-mono text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded border border-sky-500/30">
                          Admin 201 + PD1 Track
                        </div>
                      </div>

                      {/* Visual 4-Step Enterprise Pipeline */}
                      <div className="grid grid-cols-4 gap-1.5 py-1 text-center font-mono">
                        <div className="p-1.5 rounded-lg bg-slate-800/90 border border-sky-500/30 shadow-xs">
                          <div className="text-[9px] font-bold text-sky-400">01. Config</div>
                          <div className="text-[10px] font-semibold text-slate-200">Admin 201</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-slate-800/90 border border-cyan-500/30 shadow-xs">
                          <div className="text-[9px] font-bold text-cyan-400">02. Flow</div>
                          <div className="text-[10px] font-semibold text-slate-200">Automation</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-slate-800/90 border border-indigo-500/30 shadow-xs">
                          <div className="text-[9px] font-bold text-indigo-400">03. Code</div>
                          <div className="text-[10px] font-semibold text-slate-200">Core Apex</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-slate-800/90 border border-emerald-500/30 shadow-xs">
                          <div className="text-[9px] font-bold text-emerald-400">04. Apps</div>
                          <div className="text-[10px] font-semibold text-slate-200">LWC & API</div>
                        </div>
                      </div>

                      {/* Tech Stack Pills Row */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {current.studio.techStack.map((tool, idx) => (
                          <span key={idx} className={`text-[10px] font-bold px-2 py-0.5 rounded border ${tool.color}`}>
                            {tool.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Mentors Spotlight Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                      {current.trainers.length > 1 ? (
                        <>
                          <Users className="w-3.5 h-3.5" />
                          <span>2 Dedicated Specialist Mentors</span>
                        </>
                      ) : (
                        <>
                          <Award className="w-3.5 h-3.5" />
                          <span>Lead Specialist Mentor</span>
                        </>
                      )}
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 text-[10px] font-extrabold border border-orange-200/60 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-orange-600" />
                      <span>Industry Expert</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    {current.trainers.map((tr, trIdx) => (
                      <div key={trIdx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/90 hover:bg-slate-50 border border-slate-100 transition-colors">
                        {/* Avatar Initials Badge with Gradient */}
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${tr.avatarGradient || 'from-orange-600 to-amber-500'} text-white font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0 ring-2 ring-white`}>
                          {tr.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                              {tr.role}
                            </div>
                            {tr.rating && (
                              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 flex items-center gap-0.5">
                                <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                                {tr.rating}
                              </span>
                            )}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {tr.name}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {tr.subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seat Urgency & Batch Progress Bar */}
                <div className="p-3 rounded-2xl bg-orange-50/80 border border-orange-100/90">
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-700 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-orange-600" />
                      <span>{current.isComingSoon ? "Pre-Registration Status" : "Live Batch Seats"}</span>
                    </span>
                    <span className="text-orange-700 font-extrabold">
                      {current.seatsBooked} / {current.totalSeats} Seats Reserved ({Math.round((current.seatsBooked / current.totalSeats) * 100)}%)
                    </span>
                  </div>
                  <div className="w-full bg-orange-200/70 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(current.seatsBooked / current.totalSeats) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Batch Info Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50/70 to-amber-50/40 border border-orange-100/90 text-center flex flex-col items-center justify-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      <span>Start Date</span>
                    </div>
                    <div className="text-sm sm:text-base font-black text-orange-600 mt-1">{current.startDateText}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-50/70 to-amber-50/40 border border-orange-100/90 text-center flex flex-col items-center justify-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>Training Mode</span>
                    </div>
                    <div className="text-sm sm:text-base font-black text-slate-800 mt-1">{current.modeText}</div>
                  </div>
                </div>

                {/* Action Button inside Card */}
                <div className="pt-1">
                  {current.isComingSoon ? (
                    <button
                      onClick={() => onOpenDemoModal ? onOpenDemoModal(current.courseTitle) : null}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-brand-soft flex items-center justify-center gap-2 transform active:scale-98"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Inquire / Book Free Demo for Salesforce</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenEnrollModal ? onOpenEnrollModal(current.courseTitle, "September 15, 2026 Live Batch") : onOpenDemoModal(current.courseTitle)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-brand-soft flex items-center justify-center gap-2 transform active:scale-98"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Register for Data Analytics Live Batch</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
