import React from 'react';
import { Check, X, Sparkles, ShieldCheck } from 'lucide-react';

export default function WhyUsComparison() {
  const comparisonData = [
    {
      feature: "Learning Delivery Mode",
      mahesh: "100% Live Interactive with Two-Way Audio & Live Coding",
      others: "Outdated pre-recorded video recordings",
      traditional: "Crowded classrooms with limited hands-on time"
    },
    {
      feature: "Instructor Profile",
      mahesh: "Mahesh Sir & Active Principal Tech Architects (14+ Yrs Exp)",
      others: "Junior teaching assistants or automated bots",
      traditional: "Generic faculty with limited current enterprise experience"
    },
    {
      feature: "Daily Doubt Resolution",
      mahesh: "Dedicated Daily 1-on-1 Live Debugging Sessions",
      others: "Slow asynchronous discussion forum (24-48 hr replies)",
      traditional: "Only during class hours if time permits"
    },
    {
      feature: "Curriculum & Tech Stacks",
      mahesh: "Updated Quarterly (React 19, Spring Boot 3, GenAI, K8s, AWS)",
      others: "Older versions rarely updated",
      traditional: "Legacy syllabus without modern cloud/DevOps focus"
    },
    {
      feature: "Real Projects & Portfolio",
      mahesh: "5 Enterprise Production Capstone Projects with Git Repos",
      others: "Cookie-cutter Todo Apps / Toy tutorials",
      traditional: "Generic college lab style assignments"
    },
    {
      feature: "Placement & Mock Interviews",
      mahesh: "Guaranteed 1-on-1 Mocks, ATS Resumes & 150+ Partner Referrals",
      others: "Zero placement support or just a job board link",
      traditional: "Infrequent pool drives without preparation"
    }
  ];

  return (
    <section className="py-20 bg-[#070b16] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Value Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Compare Against <span className="text-gradient">The Rest</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            See why ambitious students and career changers choose Mahesh Online Training over passive video websites.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/90 text-xs font-bold uppercase tracking-wider">
                  <th className="py-5 px-6 text-slate-400 w-1/4">Key Criterion</th>
                  <th className="py-5 px-6 text-cyan-400 bg-cyan-950/40 w-2/5 border-x border-cyan-500/20">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-white">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                      Mahesh Online Training
                    </div>
                  </th>
                  <th className="py-5 px-6 text-slate-400 w-1/3">Typical Recorded Portals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-medium text-cyan-200 bg-cyan-950/20 border-x border-cyan-500/15">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{row.mahesh}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
