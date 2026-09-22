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
  CheckCircle2,
  Gift,
  Sparkles,
  MessageCircle
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

        {/* Highlighted Refer & Earn Program Section */}
        <div id="refer-earn" className="mt-14 rounded-3xl bg-gradient-to-br from-[#0c1222] via-[#0f172a] to-[#1e1b4b] text-white p-6 sm:p-10 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Radial Halos */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-extrabold shadow-xs">
                <Gift className="w-4 h-4 text-amber-400" />
                <span>STUDENT REFERRAL REWARDS PROGRAM</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Refer a Friend & Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">₹1,000 Cash</span> for Every Referral!
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Know a friend, college mate, or colleague looking to upskill in <strong className="text-white">Salesforce Admin & Dev</strong>, <strong className="text-white">SAP CPI</strong>, or <strong className="text-white">Data Analytics</strong>? Refer them to Mahesh Online Training and earn <strong className="text-amber-300">₹1,000 directly via UPI or Bank Transfer</strong> when they enroll!
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Unlimited Referrals Allowed
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Instant UPI Payout (GPay / PhonePe)
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Or Adjust As Course Fee Discount
                </span>
              </div>
            </div>

            {/* Right Interactive 3-Step Process Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/15 space-y-4 text-left shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center justify-between">
                <span>How It Works (3 Easy Steps)</span>
                <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-extrabold border border-amber-400/30">₹1,000 / Student</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5 border border-amber-500/30">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Share With Your Friend</div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      Invite them to our live demo or share their contact details with us.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5 border border-sky-500/30">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">They Attend Free Demo & Enroll</div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      Your friend joins our interactive masterclass and confirms admission.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs shrink-0 mt-0.5 border border-emerald-500/30">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Receive ₹1,000 Instant Cash</div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      We transfer ₹1,000 directly to your UPI ID or bank account!
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={`https://wa.me/919182721589?text=${encodeURIComponent("Hello Mahesh Sir, I would like to refer my friend for the training batch under the Refer & Earn program (₹1,000 reward).")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950 text-transparent" />
                  <span>Refer via WhatsApp</span>
                </a>
                <button
                  onClick={() => onOpenDemoModal ? onOpenDemoModal("Refer & Earn Program (₹1,000 Reward)") : null}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Claim Referral</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
