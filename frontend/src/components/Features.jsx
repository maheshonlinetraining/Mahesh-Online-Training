import React from 'react';
import { 
  Video, 
  ClipboardList, 
  Puzzle, 
  Rocket, 
  FileText, 
  Linkedin, 
  Award, 
  HelpCircle,
  CheckCircle2 
} from 'lucide-react';

export default function Features({ onOpenDemoModal }) {
  const offerings = [
    {
      icon: Video,
      title: 'Live Class Recordings',
      desc: 'Every live session is recorded. If you ever miss a class, you will receive the recorded video immediately for revision.'
    },
    {
      icon: ClipboardList,
      title: 'Weekly Assignments',
      desc: 'Practical, scenario-based tasks and coding challenges assigned every week to test and reinforce your concepts.'
    },
    {
      icon: Puzzle,
      title: 'Hands-on Mini Projects',
      desc: 'Module-wise mini projects to gain confidence in individual tools, syntax, and workflows before tackling large architectures.'
    },
    {
      icon: Rocket,
      title: 'Major Real-World Projects',
      desc: 'End-to-end enterprise capstone projects (Salesforce workflows, full-stack apps, data pipelines) you can proudly showcase on your resume.'
    },
    {
      icon: FileText,
      title: 'Professional Resume Building',
      desc: 'ATS-optimized resume crafting tailored to your target role, highlighting real-time project contributions and technical skills.'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Profile Enhancement',
      desc: 'Complete optimization of your headline, project showcase, and technical skillset to attract hiring managers and recruiters.'
    },
    {
      icon: Award,
      title: 'Global Certification Guidance',
      desc: 'Structured preparation roadmaps, mock tests, and exam guidance for Microsoft, Salesforce (Admin & Developer), AWS, and other industry certifications.'
    },
    {
      icon: HelpCircle,
      title: 'Daily 1-on-1 Doubt Clearing',
      desc: 'Direct daily support with experienced mentors. Share your screen, debug errors live, and keep your learning momentum going.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            What You Get With Every Course
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Learning & <span className="text-orange-600">Career Support</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you are learning Salesforce, Data Analytics, Web Development, or Cloud — every program includes our full practical training ecosystem.
          </p>
        </div>

        {/* 8 Clean Cards Grid (4x2 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:border-orange-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-orange-100/70 text-orange-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-orange-600">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-orange-600 shrink-0" />
                  <span>Included with Course</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
