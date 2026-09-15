import React, { useState, useMemo } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export default function UpcomingBatches({ batches, onOpenDemoModal, onOpenEnrollModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Data Analytics', 'Salesforce', 'SAP'];

  const filteredBatches = useMemo(() => {
    if (activeCategory === 'All') return batches;
    return batches.filter(
      (b) => b.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [batches, activeCategory]);

  return (
    <section id="batches" className="py-16 md:py-20 bg-slate-50/60 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Batch Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Upcoming <span className="text-orange-600">Live Batches</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Small batches limited to 20 students for individual mentorship.
          </p>
        </div>

        {/* Clean Category Tabs matching Courses Section */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Schedule Cards */}
        <div className="space-y-3">
          {filteredBatches.map((batch) => {
            const isClosed = batch.isClosed || batch.status === 'Registrations Closed' || batch.status?.toLowerCase().includes('closed');
            const isComingSoon = !isClosed && (batch.isComingSoon || batch.status === 'Coming Soon' || batch.startDate.toLowerCase().includes('soon'));

            return (
              <div
                key={batch.id}
                className={`bg-white rounded-2xl p-4 sm:p-5 border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                  isClosed
                    ? 'border-slate-200/80 hover:border-slate-300 bg-slate-50/40'
                    : 'border-slate-200 hover:border-orange-300'
                }`}
              >
                {/* Date & Timing */}
                <div className="flex items-start sm:items-center gap-4">
                  {isClosed ? (
                    <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 flex flex-col items-center justify-center shrink-0 text-center">
                      <span className="text-xs uppercase font-bold text-slate-400">
                        {batch.startDate.split(' ')[0]}
                      </span>
                      <span className="text-lg font-black text-slate-600 leading-none">
                        {batch.startDate.split(' ')[1]?.replace(',', '')}
                      </span>
                    </div>
                  ) : isComingSoon ? (
                    <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex flex-col items-center justify-center shrink-0 text-center px-1">
                      <span className="text-[10px] uppercase font-black tracking-wider text-amber-600">
                        NEXT
                      </span>
                      <span className="text-xs font-black text-amber-800 leading-tight">
                        SOON
                      </span>
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex flex-col items-center justify-center shrink-0">
                      <span className="text-xs uppercase font-bold text-orange-500">
                        {batch.startDate.split(' ')[0]}
                      </span>
                      <span className="text-lg font-black text-orange-700 leading-none">
                        {batch.startDate.split(' ')[1]?.replace(',', '')}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className={`text-base font-bold ${isClosed ? 'text-slate-700' : 'text-slate-900'}`}>
                        {batch.courseName}
                      </h3>
                      {batch.category && (
                        <span className={`px-2 py-0.5 rounded font-semibold text-[11px] ${
                          isClosed ? 'bg-slate-100 text-slate-600' : 'bg-orange-50 text-orange-700'
                        }`}>
                          {batch.category}
                        </span>
                      )}
                      {batch.duration && (
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[11px] flex items-center gap-1">
                          <Clock className={`w-3 h-3 ${isClosed ? 'text-slate-400' : 'text-orange-600'}`} />
                          {batch.duration}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-1.5">
                      <span className="flex items-center gap-1">
                        <Clock className={`w-3.5 h-3.5 ${isClosed ? 'text-slate-400' : 'text-orange-600'}`} />
                        {batch.timing} ({batch.days})
                      </span>
                      {isClosed ? (
                        <span className="text-rose-600 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                          Registrations Closed
                        </span>
                      ) : isComingSoon ? (
                        <span className="text-amber-600 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-emerald-600 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          {batch.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button: Closed, Coming Soon, or Register */}
                {isClosed ? (
                  <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-500 border border-slate-300 font-bold text-xs whitespace-nowrap text-center flex items-center justify-center gap-1.5 shadow-2xs select-none">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span className="text-slate-700">Registrations Closed</span>
                  </div>
                ) : isComingSoon ? (
                  <div className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 font-bold text-xs whitespace-nowrap text-center flex items-center justify-center gap-1.5 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>Coming Soon</span>
                  </div>
                ) : (
                  <button
                    onClick={() => onOpenEnrollModal ? onOpenEnrollModal(batch.courseName, `${batch.startDate} (${batch.timing})`) : onOpenDemoModal(`${batch.courseName} (${batch.startDate})`)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs whitespace-nowrap transition-colors cursor-pointer shadow-sm text-center"
                  >
                    Register for Batch
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
