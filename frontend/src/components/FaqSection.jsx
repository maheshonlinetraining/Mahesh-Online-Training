import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection({ faqs = [] }) {
  const [openIdx, setOpenIdx] = useState(0);

  // Keep to top 4 most essential questions to prevent info overload
  const displayFaqs = faqs.length > 0 ? faqs.slice(0, 4) : [
    {
      question: "Are the training sessions live or pre-recorded?",
      answer: "All classes at Mahesh Online Training are 100% Live Interactive sessions with industry trainers where you can ask questions and clear doubts in real-time. Every live class is also recorded, and if you ever miss a session, you will get the recorded video immediately."
    },
    {
      question: "What if I miss a live class due to work or emergencies?",
      answer: "No problem at all! Every live session is recorded, and whenever you miss a class, you will receive the recorded video immediately along with session notes and materials. In addition, you can attend the missed topic live in another batch."
    },
    {
      question: "Do you provide job placement assistance and mock interviews?",
      answer: "Yes, absolutely! We provide dedicated placement support including professional resume crafting, 1-on-1 technical mock interviews, and direct job referrals to our hiring partners."
    },
    {
      question: "Can beginners or non-IT background students enroll?",
      answer: "Yes! Many of our successful alumni come from non-IT, mechanical, or commerce backgrounds. We start with foundational basics before advancing to production-grade development."
    }
  ];

  return (
    <section id="faqs" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Quick answers to the most common questions from students.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="space-y-3">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-orange-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
