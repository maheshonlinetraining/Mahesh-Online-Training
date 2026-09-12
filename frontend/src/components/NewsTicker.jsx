import React, { useMemo } from 'react';
import { Flame, Zap, ArrowRight, GraduationCap, Phone } from 'lucide-react';

export default function NewsTicker({ onOpenDemoModal, onOpenEnrollModal }) {
  // Dynamic calculation for Sept 15, 2026 batch countdown
  const countdown = useMemo(() => {
    const now = new Date();
    // September is index 8 (0-indexed in JS Date)
    const targetDate = new Date(2026, 8, 15, 0, 0, 0);
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffTime = targetDate.getTime() - todayMidnight.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      return {
        days: diffDays,
        daysText: `Only ${diffDays} Days Left!`,
        urgencyPill: `Starts Sept 15th • ${diffDays} Days Left`,
        headline: `HURRY UP! Registrations Closing in ${diffDays} Days`
      };
    } else if (diffDays === 1) {
      return {
        days: 1,
        daysText: "Only 1 Day Left! Closes Tomorrow!",
        urgencyPill: "Starts Tomorrow • Final 24 Hours",
        headline: "HURRY UP! Registrations Closing Tomorrow"
      };
    } else if (diffDays === 0) {
      return {
        days: 0,
        daysText: "Batch Starts TODAY!",
        urgencyPill: "Starting Today",
        headline: "FINAL HOURS! Batch Starts Today"
      };
    } else {
      return {
        days: 0,
        daysText: "Admissions Open",
        urgencyPill: "Upcoming Cohort",
        headline: "Admissions Open for Next Live Cohort"
      };
    }
  }, []);

  const handleEnrollClick = (e, courseName = 'Data Analytics with SQL, Power BI, Python, Excel') => {
    e.stopPropagation();
    if (onOpenEnrollModal) {
      onOpenEnrollModal(courseName);
    } else if (onOpenDemoModal) {
      onOpenDemoModal(courseName);
    }
  };

  const handleDemoClick = (e, courseName = 'Salesforce Administration and Developer') => {
    e.stopPropagation();
    if (onOpenDemoModal) {
      onOpenDemoModal(courseName);
    }
  };

  const TickerItems = () => (
    <div className="flex items-center gap-7 text-xs sm:text-[13px] tracking-wide font-medium">
      
      {/* 1. DATA ANALYTICS */}
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-md font-bold text-[10px] sm:text-xs uppercase border border-amber-500/40">
          <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse" />
          <span>{countdown.headline}</span>
        </span>
        <span className="text-white font-semibold">
          Data Analytics (SQL • Power BI • Python • Excel):
        </span>
        <span className="text-amber-300 font-extrabold">
          Starts Sept 15th ({countdown.daysText})
        </span>
        <span className="bg-orange-600/30 text-orange-300 px-2 py-0.5 rounded-full text-[11px] font-bold border border-orange-500/40">
          22/25 Seats Filled
        </span>
        <button
          onClick={(e) => handleEnrollClick(e, 'Data Analytics with SQL, Power BI, Python, Excel')}
          className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold px-2.5 py-0.5 rounded-full text-[11px] transition-all transform hover:scale-105 shadow-xs cursor-pointer"
        >
          <span>Register Now</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <span className="text-amber-500/60 font-bold select-none text-base">✦</span>

      {/* 2. SALESFORCE (Concise pre-registration without Sept 15 start date) */}
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-md font-bold text-[10px] sm:text-xs uppercase border border-sky-500/40">
          <Zap className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
          <span>PRE-REGISTRATIONS OPEN</span>
        </span>
        <span className="text-white font-semibold">
          Salesforce Admin & Developer:
        </span>
        <span className="text-sky-300 font-extrabold">
          19/25 Seats Reserved (Only 6 Left!)
        </span>
        <button
          onClick={(e) => handleDemoClick(e, 'Salesforce Administration and Developer')}
          className="inline-flex items-center gap-1 bg-sky-600 hover:bg-sky-500 text-white font-bold px-2.5 py-0.5 rounded-full text-[11px] transition-all transform hover:scale-105 shadow-xs cursor-pointer"
        >
          <span>Book Free Demo</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <span className="text-amber-500/60 font-bold select-none text-base">✦</span>

      {/* 3. HIGHLIGHTS & HELPLINES */}
      <div className="flex items-center gap-2 text-slate-300">
        <span className="flex items-center gap-1 text-orange-400 font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Live Interactive Classes • On-Demand Recordings</span>
        </span>
        <span className="text-slate-500">•</span>
        <span className="flex items-center gap-1 text-slate-200 font-medium">
          <Phone className="w-3 h-3 text-orange-400" />
          <span>Helpline: +91 91827 21589 / +1 3303304531</span>
        </span>
      </div>

      <span className="text-amber-500/60 font-bold select-none text-base mr-5">✦</span>
    </div>
  );

  return (
    <div className="relative z-50 w-full overflow-hidden bg-[#070b14] border-b border-orange-500/40 shadow-sm flex items-stretch select-none">
      
      {/* Pinned Broadcast Station Badge (TV News Channel Alert Style) */}
      <div className="relative z-30 flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white font-black text-[11px] sm:text-xs uppercase tracking-wider px-3 sm:px-4 py-2 shadow-lg shrink-0 border-r border-red-500/40 select-none">
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-yellow-400"></span>
        </span>
        <span className="hidden md:inline font-extrabold tracking-widest text-[11px]">LIVE ADMISSIONS</span>
        <span className="md:hidden font-extrabold text-[10px] tracking-wider">LIVE ALERT</span>
      </div>

      {/* Marquee Ticker Track with Hover-Pause */}
      <div 
        className="news-ticker-wrapper relative flex-1 overflow-hidden py-1.5 sm:py-2 flex items-center cursor-pointer group"
        title="Hover to pause ticker"
      >
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-[#070b14] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-l from-[#070b14] to-transparent z-20" />

        {/* Continuous Marquee Track (Duplicated for 100% seamless infinite scroll) */}
        <div className="animate-news-ticker flex items-center">
          <TickerItems />
          <TickerItems />
        </div>
      </div>

    </div>
  );
}
