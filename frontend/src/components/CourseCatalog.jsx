import React, { useState, useMemo } from 'react';
import { Clock, Star, ArrowRight, Sparkles, Check } from 'lucide-react';

export default function CourseCatalog({ courses, onSelectCourse, onOpenDemoModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Data Analytics', 'Salesforce'];

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'All') return courses;
    return courses.filter(
      (course) => course.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [courses, activeCategory]);

  return (
    <section id="courses" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Industry-Ready Courses
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Our <span className="text-orange-600">Popular Programs</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select a technology track to see full syllabus modules, live batch timings, and career paths.
          </p>
        </div>

        {/* Clean Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {course.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase bg-red-600 text-white shadow-sm">
                      {course.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    {course.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-amber-500" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 font-normal">({course.studentsCount} students)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-700 font-semibold text-[11px]">
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {course.title}
                  </h3>

                  {/* Short Tagline */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {course.tagline}
                  </p>

                  {/* 3 Simple highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    {course.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Batch & Level Info */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-md text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {course.nextBatch || 'Live Batch'}
                    </span>
                    <span className="font-medium text-slate-500 text-[11px]">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  View Syllabus
                </button>
                <button
                  onClick={() => onOpenDemoModal(course.title)}
                  className="w-full py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
                >
                  Book Demo
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
