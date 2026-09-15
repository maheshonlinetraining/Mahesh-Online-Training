import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export default function NewsTicker({ onOpenDemoModal, onOpenEnrollModal }) {
  const handleDemoClick = (e, courseName = 'Salesforce Administration and Developer') => {
    e.stopPropagation();
    if (onOpenDemoModal) {
      onOpenDemoModal(courseName);
    }
  };

  const TickerItems = () => (
    <div className="flex items-center gap-6 text-xs sm:text-[13px] tracking-wide font-medium">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-md font-bold text-[10px] sm:text-xs uppercase border border-sky-500/40">
          <Zap className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
          <span>PRE-REGISTRATIONS OPEN</span>
        </span>
        <span className="text-white font-semibold">
          Salesforce Admin & Developer (2-in-1 Masterclass):
        </span>
        <span className="text-sky-300 font-extrabold">
          19/25 Seats Reserved (Only 6 Early-Bird Seats Remaining!)
        </span>
        <button
          onClick={(e) => handleDemoClick(e, 'Salesforce Administration and Developer')}
          className="inline-flex items-center gap-1 bg-sky-600 hover:bg-sky-500 text-white font-bold px-3 py-0.5 rounded-full text-[11px] transition-all transform hover:scale-105 shadow-xs cursor-pointer ml-1"
        >
          <span>Book Free Demo</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <span className="text-sky-500/60 font-bold select-none text-base mr-3">✦</span>
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

        {/* Continuous Marquee Track (Seamless infinite scroll with 4 repeated hurry messages) */}
        <div className="animate-news-ticker flex items-center">
          <TickerItems />
          <TickerItems />
          <TickerItems />
          <TickerItems />
        </div>
      </div>

    </div>
  );
}
