import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function CourseModal({ course, onClose, onOpenDemoModal }) {
  const [openModuleIndex, setOpenModuleIndex] = useState(0);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Modal Header (Always Visible) */}
        <div className="relative px-5 py-3.5 sm:px-6 sm:py-4 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap pr-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700">
              {course.category}
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 truncate max-w-sm sm:max-w-md">
              {course.title}
            </h3>
          </div>

          {/* Close Button X (Prominent, High-Contrast & Always Reachable) */}
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full bg-slate-200/80 hover:bg-orange-100 hover:text-orange-600 text-slate-600 transition-colors cursor-pointer shrink-0"
            title="Close modal"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Scrollable Curriculum Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Course Intro */}
          <div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {course.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-600 border-y border-slate-100 py-2.5">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-500" />
                <span>{course.rating} / 5</span>
                <span className="text-slate-400 font-normal">({course.studentsCount} students)</span>
              </div>
              <div className="flex items-center gap-1 text-slate-600">
                <Clock className="w-3.5 h-3.5 text-orange-600" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Course Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {course.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Modules Accordion */}
          <div>
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Curriculum Breakdown
            </h3>

            <div className="space-y-2">
              {course.syllabus?.map((item, idx) => {
                const isOpen = openModuleIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenModuleIndex(isOpen ? -1 : idx)}
                      className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <span className="font-bold text-xs sm:text-sm text-slate-900">
                        {item.module}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-orange-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-3.5 pt-1 border-t border-slate-200 bg-white">
                        <ul className="space-y-1 text-xs text-slate-600">
                          {item.topics.map((t, tidx) => (
                            <li key={tidx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pinned Modal Footer */}
        <div className="p-4 sm:px-6 sm:py-3.5 border-t border-slate-200/80 bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <div className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">Next Live Batch</div>
            <div className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5 mt-0.5">
              <span className={`w-2 h-2 rounded-full ${
                course.category === 'SAP' || course.id === 'sap-cpi' || course.nextBatch?.toLowerCase().includes('soon')
                  ? 'bg-amber-500'
                  : 'bg-emerald-500'
              }`}></span>
              {course.category === 'SAP' || course.id === 'sap-cpi' ? 'Weekend Batch Only (Coming Soon)' : (course.nextBatch || 'Weekday Batch Only')}
            </div>
          </div>

          <div className="w-full sm:w-auto">
            {course.category === 'SAP' || course.id === 'sap-cpi' || course.title?.toLowerCase().includes('sap') ? (
              <div className="w-full sm:w-auto px-6 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 select-none shadow-2xs cursor-not-allowed">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>Coming Soon</span>
              </div>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onOpenDemoModal(course.title);
                }}
                className="w-full sm:w-auto px-6 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer transition-colors shadow-sm text-center"
              >
                Book Free Demo
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
