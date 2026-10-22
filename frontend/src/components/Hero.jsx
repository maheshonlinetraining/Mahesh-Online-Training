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
  FileCheck,
  Play
} from 'lucide-react';
import AnalyticsHeroVideoPlayer from './AnalyticsHeroVideoPlayer';

export default function Hero({ onOpenDemoModal, onOpenEnrollModal, courses = [], onSelectCourse }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [daStudioTab, setDaStudioTab] = useState('video');


  const slides = [
    {
      id: "data-analytics",
      courseId: "data-analytics-powerbi-sql",
      courseTitle: "Data Analytics with SQL, Power BI, Python, Excel",
      tabLabel: "Data Analytics",
      tabSub: "Weekday Batch Only",
      badgeText: "🔥 Weekday Batch Only — Data Analytics with Power BI & SQL",
      isComingSoon: false,
      accentColor: "orange",
      headlinePrefix: "Data Analytics Masterclass",
      headlineHighlight: "Weekday Batch Only (Mon to Fri)",
      subtitle: (
        <>
          Direct registrations open for <strong className="text-slate-900">Weekday Batch Only (Mon to Fri)</strong>! Recorded demo session is ready for instant preview. Fast-track your career with live mentor-led training in <strong className="text-orange-600 font-bold">SQL, Power BI, Python & Excel</strong> with 3 real-world capstone projects.
        </>
      ),
      features: [
        {
          icon: "zap",
          title: "Weekday Batch Admission",
          desc: "Watch the recorded demo on-demand and confirm your seat directly."
        },
        {
          icon: "layers",
          title: "3 Enterprise Capstones",
          desc: "End-to-end Power BI dashboards, SQL ETL pipelines & analytics."
        },
        {
          icon: "briefcase",
          title: "1-on-1 Mentorship & Prep",
          desc: "Live doubt clearing, resume building, mock interviews & job referrals."
        }
      ],
      points: [
        "Weekday Batch Live Online Classes (Mon to Fri)",
        "Instant Recorded Demo Session Available on Request",
        "100% Practical Training with 3 Industry Domain Capstones"
      ],
      urgencyText: "🔥 Weekday Batch Only • Direct Registrations Open",
      alumniCompanies: ["Deloitte", "TCS", "Infosys", "Accenture", "Cognizant"],
      primaryButtonText: "Register (Weekday Batch Only)",
      secondaryButtonText: "Watch Recorded Demo",
      startDateText: "Weekday Batch Only",
      modeText: "100% Live Online",
      ambientBg: "from-[#fff7ed] via-[#ffedd5]/60 to-[#fffaf5]",
      haloColor: "bg-orange-500/20",
      gridColor: "#ea580c",
      videoSrc: "/videos/Data_Analytics_Video_Option_2.mp4",
      videoTheme: "orange",
      videoBadge: "Watch 2-Min Beginner Lesson",
      videoTitle: "Data Analytics Masterclass",
      studio: {
        tag: "POWER BI & SQL ANALYTICS SUITE",
        querySnippet: "SELECT candidate, hike FROM placements WHERE batch = 'DA-Weekday';",
        queryResult: "Weekday Batch Active",
        kpiValue: "Weekday Batch Live",
        kpiLabel: "Weekday Batch Only",
        hikeBadge: "8:00 AM IST (Mon-Fri)",
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
          subtitle: "Power BI, SQL, Python & Business Intelligence Specialist",
          initials: "AB",
          rating: "4.95/5",
          avatarGradient: "from-orange-600 to-amber-500"
        }
      ]
    },
    {
      id: "sap-cpi",
      courseId: "sap-cpi",
      courseTitle: "SAP CPI (Cloud Platform Integration)",
      tabLabel: "SAP CPI",
      tabSub: "Weekend Batch Only",
      badgeText: "🚀 Weekend Batch Only — SAP CPI (Cloud Platform Integration & BTP)",
      isComingSoon: true,
      accentColor: "purple",
      headlinePrefix: "SAP CPI (Cloud Platform Integration)",
      headlineHighlight: "Enterprise Integration Suite on SAP BTP",
      subtitle: (
        <>
          Master end-to-end <strong className="text-slate-900">SAP Integration Suite</strong> on SAP BTP, iFlow Design, Message Mapping, <strong className="text-slate-900">Groovy Scripting</strong>, Standard Adapters & S/4HANA connectivity. Exclusively scheduled on <strong className="text-purple-700">Weekend Batch Only (Sat & Sun)</strong> with a Senior SAP CPI Developer (10+ Yrs Exp).
        </>
      ),
      features: [
        {
          icon: "layers",
          title: "End-to-End iFlows",
          desc: "Design Splitter, Aggregator, Content Modifier, Routers & Error Handling."
        },
        {
          icon: "code",
          title: "Groovy & Data Mapping",
          desc: "Hands-on Graphical Message Mapping, XSLT, and complex Groovy Scripting."
        },
        {
          icon: "cloud",
          title: "Hybrid Cloud Connectivity",
          desc: "OData, REST, SOAP, SFTP, IDoc & RFC adapters connecting S/4HANA."
        }
      ],
      points: [
        "Complete SAP BTP Integration Suite Architecture",
        "Hands-on Groovy Scripting & Graphical Message Mapping",
        "Real-World S/4HANA & Cloud Integration Scenarios"
      ],
      urgencyText: "🚀 Weekend Batch Only • Registrations Open",
      alumniCompanies: ["SAP Labs Ecosystem", "Accenture", "TCS", "Infosys", "IBM"],
      primaryButtonText: "Register (Weekend Batch Only)",
      startDateText: "Weekend Batch Only",
      modeText: "100% Live Online",
      ambientBg: "from-[#faf5ff] via-[#f3e8ff]/85 to-[#fdf4ff]",
      haloColor: "bg-purple-600/25",
      gridColor: "#7c3aed",
      videoSrc: "/videos/SAP_CPI_Explainer_Video.mp4",
      videoTheme: "purple",
      videoBadge: "Watch 3-Min SAP CPI Lesson",
      videoTitle: "SAP CPI Masterclass",
      studio: {
        tag: "SAP BTP INTEGRATION SUITE",
        querySnippet: "iFlow.deploy(BTP_CloudConnector.process); // CPI",
        queryResult: "SAP iFlow Runtime Active",
        kpiValue: "SAP CPI / BTP",
        kpiLabel: "Enterprise Integration Suite",
        hikeBadge: "Weekend Batch Only",
        techStack: [
          { name: "SAP CPI", color: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
          { name: "SAP BTP", color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40" },
          { name: "Groovy Script", color: "bg-violet-500/20 text-violet-300 border-violet-500/40" },
          { name: "OData APIs", color: "bg-teal-500/20 text-teal-300 border-teal-500/40" },
          { name: "Cloud Connector", color: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40" }
        ]
      },
      trainers: [
        {
          name: "Ramesh (10+ Yrs Exp)",
          role: "Senior SAP CPI Developer",
          subtitle: "SAP BTP Integration Suite, iFlows, Groovy Scripting & S/4HANA",
          initials: "RM",
          rating: "4.95/5",
          avatarGradient: "from-purple-700 via-indigo-600 to-violet-700"
        }
      ]
    },
    {
      id: "salesforce",
      courseId: "salesforce-administration-and-developer",
      courseTitle: "Salesforce Administration and Developer",
      tabLabel: "Salesforce",
      tabSub: "Coming Soon",
      badgeText: "⚡ Free Demo Registrations Open — Salesforce 2-in-1 Masterclass",
      isComingSoon: true,
      accentColor: "sky",
      headlinePrefix: "Salesforce Admin & Developer",
      headlineHighlight: "Comprehensive 2-in-1 Masterclass",
      subtitle: (
        <>
          Master end-to-end <strong className="text-slate-900">Salesforce Administration</strong>, Flow Automation, <strong className="text-slate-900">Core Apex</strong>, LWC & REST APIs. To ensure thorough master-level coverage of both Administration and Development, this course is taught by <strong className="text-sky-700">2 dedicated industry specialists</strong>.
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
      urgencyText: "⚡ Free Demo Registrations Open • Live Masterclass",
      alumniCompanies: ["Salesforce Ecosystem", "Deloitte Digital", "Capgemini", "PwC", "Wipro"],
      primaryButtonText: "Register for Free Demo",
      startDateText: "Coming Soon",
      modeText: "100% Live Online",
      ambientBg: "from-[#f0f9ff] via-[#e0f2fe]/60 to-[#fffaf5]",
      haloColor: "bg-sky-500/20",
      gridColor: "#0284c7",
      videoSrc: "/videos/Salesforce_Explainer_Video.mp4",
      videoTheme: "blue",
      videoBadge: "Watch 2-Min Salesforce Lesson",
      videoTitle: "Salesforce 2-in-1 Masterclass",
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

  // Manual slide control only: No auto-slide rotation
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
    <section className="relative pt-2 pb-6 md:pt-3 md:pb-8 overflow-hidden border-b border-slate-200/80 transition-colors duration-700 bg-white">

      
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
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200/60">
          
          {/* Slicer Tabs - Streamlined & Compact */}
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs max-w-full overflow-x-auto scrollbar-none">
            {slides.map((s, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                    isActive
                      ? s.id === 'data-analytics'
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md ring-2 ring-orange-400/30'
                        : s.id === 'sap-cpi'
                        ? 'bg-gradient-to-r from-purple-700 via-indigo-700 to-violet-800 text-white shadow-md ring-2 ring-purple-400/30'
                        : 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md ring-2 ring-sky-400/30'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {s.id === 'data-analytics' ? (
                    <BarChart3 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-white' : 'text-orange-600'}`} />
                  ) : s.id === 'sap-cpi' ? (
                    <Layers className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-white' : 'text-purple-700'}`} />
                  ) : (
                    <Cloud className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-white' : 'text-sky-600'}`} />
                  )}
                  <span className="whitespace-nowrap">{s.tabLabel}</span>
                  <span
                    className={`hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded font-extrabold uppercase tracking-wide transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : s.id === 'data-analytics'
                        ? 'bg-orange-100 text-orange-800'
                        : s.id === 'sap-cpi'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {s.tabSub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Slicer Slide Navigation Buttons & Dot Indicator */}
          {slides.length > 1 && (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 mr-1">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveSlide(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === dotIdx ? 'w-5 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handlePrev}
                className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 shadow-xs transition-colors cursor-pointer"
                title="Previous Course"
                aria-label="Previous Course"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 shadow-xs transition-colors cursor-pointer"
                title="Next Course"
                aria-label="Next Course"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Slide Content Grid: Compact, Above-The-Fold Balanced 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          
          {/* Left Column: Course Details, Mentor Spotlight & Action Buttons */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 text-center lg:text-left transition-all duration-300">
            
            {/* Blinking Live Beacon Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border ${
              current.id === 'data-analytics'
                ? 'border-orange-200/90 text-orange-950'
                : current.id === 'sap-cpi'
                ? 'border-purple-200/90 text-purple-900'
                : 'border-sky-200/90 text-sky-900'
            } text-xs font-bold shadow-xs`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  current.id === 'data-analytics'
                    ? 'bg-orange-500'
                    : current.isComingSoon
                    ? 'bg-amber-400'
                    : 'bg-sky-500'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${
                  current.id === 'data-analytics'
                    ? 'bg-orange-600'
                    : current.isComingSoon
                    ? 'bg-amber-500'
                    : 'bg-sky-600'
                }`}></span>
              </span>
              <span className={`font-extrabold ${
                current.id === 'data-analytics'
                  ? 'text-orange-700'
                  : current.id === 'sap-cpi'
                  ? 'text-purple-800'
                  : 'text-sky-700'
              }`}>{current.badgeText}</span>
            </div>

            {/* Headline with Dual-Tone Gradient */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {current.headlinePrefix} <br className="hidden sm:inline" />
              <span className={`bg-gradient-to-r ${
                current.id === 'data-analytics'
                  ? 'from-orange-600 via-amber-600 to-yellow-600'
                  : current.id === 'sap-cpi'
                  ? 'from-purple-700 via-indigo-600 to-violet-600'
                  : 'from-sky-600 via-blue-600 to-indigo-600'
              } bg-clip-text text-transparent`}>
                {current.headlineHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {current.subtitle}
            </p>

            {/* Trainer & Batch Details Card on Left Side */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 min-w-0">
                {current.trainers.map((tr, trIdx) => (
                  <div key={trIdx} className="flex items-center gap-2 min-w-0">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                      tr.avatarGradient || (current.id === 'data-analytics' ? 'from-orange-600 to-amber-500' : 'from-sky-600 to-blue-500')
                    } text-white font-extrabold text-[10px] flex items-center justify-center shadow-xs shrink-0 ring-2 ring-white`}>
                      {tr.initials}
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-slate-900 truncate">{tr.name}</span>
                        {tr.rating && (
                          <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1 py-0.2 rounded border border-amber-200 flex items-center gap-0.5 shrink-0">
                            <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                            {tr.rating}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">{tr.role}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Batch Date & Mode Info */}
              <div className="flex items-center gap-2 pl-3 border-l border-slate-200 text-left shrink-0">
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5 text-orange-600" />
                    <span>Batch Starts</span>
                  </div>
                  <div className="text-xs font-black text-slate-900">{current.startDateText}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-0.5">
              <button
                onClick={() => {
                  if (current.id === 'data-analytics' && onOpenEnrollModal) {
                    onOpenEnrollModal(current.courseTitle, 'Weekday Batch Only');
                  } else if (onOpenDemoModal) {
                    onOpenDemoModal(current.courseTitle);
                  }
                }}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer transform active:scale-95 text-white ${
                  current.id === 'data-analytics'
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700'
                    : current.id === 'sap-cpi'
                    ? 'bg-gradient-to-r from-purple-700 via-indigo-700 to-violet-800 hover:from-purple-800 hover:to-indigo-800'
                    : 'bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>{current.primaryButtonText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {current.id === 'data-analytics' ? (
                <button
                  onClick={() => onOpenDemoModal ? onOpenDemoModal(current.courseTitle + ' (Recorded Demo Session)') : null}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-orange-50 text-orange-700 font-bold text-xs sm:text-sm border border-orange-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                  <span>Watch Recorded Demo</span>
                </button>
              ) : (
                <button
                  onClick={handleViewCurriculum}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-xs sm:text-sm border border-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                  <span>View Full Curriculum</span>
                </button>
              )}
            </div>

            {/* Compact Proof Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-[11px] text-slate-500 pt-0.5">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                100% Practical Hands-On
              </span>
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                Resume & Mock Interviews
              </span>
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                4.95 Rating • 1,250+ Placed
              </span>
            </div>

          </div>

          {/* Right Column: Clean Interactive Video Box ONLY (Minimized & Sized to Fit Screen) */}
          <div className="lg:col-span-5 relative w-full">
            {/* Main Video Box with subtle radiant outer border */}
            <div className={`relative rounded-2xl p-[1px] bg-gradient-to-b ${
              current.id === 'data-analytics'
                ? 'from-orange-400/80 via-amber-300/60 to-slate-200'
                : current.id === 'sap-cpi'
                ? 'from-purple-500/80 via-indigo-400/60 to-slate-200'
                : 'from-sky-400/80 via-blue-300/60 to-slate-200'
            } shadow-xl transition-all duration-300`}>
              
              <div className="bg-slate-950 rounded-[15px] p-2.5 sm:p-3 text-white overflow-hidden shadow-inner">
                {/* Simulated Window Title Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2 px-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shrink-0"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shrink-0"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shrink-0"></span>
                    <span className="text-[10px] font-mono text-slate-400 ml-1.5 tracking-wider truncate">
                      {current.studio.tag}
                    </span>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                    current.id === 'data-analytics'
                      ? 'text-orange-400 bg-orange-950/60 border-orange-500/30'
                      : current.id === 'sap-cpi'
                      ? 'text-purple-300 bg-purple-950/60 border-purple-500/30'
                      : 'text-sky-300 bg-sky-950/60 border-sky-500/30'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      current.id === 'data-analytics'
                        ? 'bg-orange-400'
                        : current.id === 'sap-cpi'
                        ? 'bg-purple-400'
                        : 'bg-sky-400'
                    }`}></span>
                    <span>DEMO VIDEO</span>
                  </div>
                </div>

                {/* The Custom Video Player (Course-Themed Controls & Specific Video per Slide) */}
                <AnalyticsHeroVideoPlayer 
                  key={current.videoSrc}
                  videoSrc={current.videoSrc}
                  theme={current.videoTheme}
                  badgeText={current.videoBadge}
                  title={current.videoTitle}
                />

                {/* Compact Tech Stack Pills underneath */}
                <div className="flex flex-wrap items-center justify-between gap-1 pt-2 px-1 text-[10px]">
                  <div className="flex flex-wrap items-center gap-1">
                    {current.studio.techStack.slice(0, 4).map((tool, idx) => (
                      <span key={idx} className={`font-bold px-1.5 py-0.5 rounded border text-[9px] ${tool.color}`}>
                        {tool.name}
                      </span>
                    ))}
                  </div>
                  <span className={`font-mono font-bold text-[9px] flex items-center gap-1 ${
                    current.id === 'data-analytics'
                      ? 'text-orange-400'
                      : current.id === 'sap-cpi'
                      ? 'text-purple-300'
                      : 'text-sky-400'
                  }`}>
                    <Sparkles className="w-2.5 h-2.5" />
                    HD 1080P
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
