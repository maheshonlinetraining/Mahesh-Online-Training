import React, { useEffect } from 'react';
import { 
  X, 
  Gift, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  Clock,
  Wallet
} from 'lucide-react';

export default function ReferralTermsModal({ isOpen, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-modal-title"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-6 pb-5 border-b border-indigo-900/50">
          {/* Subtle Ambient Halo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-extrabold uppercase tracking-wide">
                <Gift className="w-3.5 h-3.5 text-amber-400" />
                <span>Student Referral Rewards Program</span>
              </div>
              <h3 id="terms-modal-title" className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Terms &amp; Conditions (T&amp;C)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Please read how the ₹1,000 referral cash reward program works before referring.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
              aria-label="Close Terms Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Terms Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-700 text-xs sm:text-sm leading-relaxed scrollbar-thin">
          
          {/* 1. HIGHLIGHTED CORE CONDITION (The Most Important Rule) */}
          <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300/80 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 font-black">
                <AlertCircle className="w-5 h-5 text-slate-950" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black text-amber-950 uppercase tracking-wide">
                  Primary Condition: Full Course Payment Required
                </h4>
                <p className="text-xs sm:text-[13px] text-amber-900 leading-relaxed font-medium">
                  When <strong>Person Z (Referrer)</strong> refers <strong>Person X (Candidate)</strong>, the <strong>₹1,000 cash reward</strong> is paid out to Person Z <u>only after Person X completes 100% of their course fee payment</u> and their admission is confirmed.
                </p>
                <div className="pt-1 text-[11px] text-amber-800/90 font-medium">
                  ⚠️ <em>Attending demo sessions or having pending fees does not qualify for the ₹1,000 reward payout. Payout is issued upon complete fee clearance.</em>
                </div>
              </div>
            </div>
          </div>

          {/* 2. How the Referral Cycle Works (Step by Step) */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>Step-by-Step Payout Workflow</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-black text-orange-600 mb-1">Step 1: Referral</div>
                <div className="text-xs text-slate-600">
                  Share your friend's contact with Mahesh sir via WhatsApp or have your friend mention your name/phone during registration.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-black text-indigo-600 mb-1">Step 2: Full Admission</div>
                <div className="text-xs text-slate-600">
                  Your friend attends the demo, decides to join, and pays the full course fees to secure their batch seat.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] font-black text-emerald-600 mb-1">Step 3: ₹1,000 Payout</div>
                <div className="text-xs text-slate-600">
                  Within 24–48 hours of fee confirmation, ₹1,000 is transferred directly to your UPI ID (GPay / PhonePe) or Bank account.
                </div>
              </div>
            </div>
          </div>

          {/* 3. Detailed Terms Points */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Detailed Program Rules &amp; Guidelines</span>
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">No Upper Limit on Referrals:</strong> You can refer as many friends, colleagues, and juniors as you like. You will receive ₹1,000 for each candidate who enrolls and completes full course payment (e.g. 5 friends = ₹5,000 cash).
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Payout Options:</strong> You may choose between an <strong>Instant Cash Payout via UPI / Bank Transfer</strong> OR adjusting the ₹1,000 as a <strong>direct fee discount</strong> on your own current or upcoming course.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Eligible Masterclasses:</strong> Valid for all live courses offered by Mahesh Online Training, including <em>Data Analytics (SQL, Power BI, Python, Excel)</em>, <em>SAP CPI (Cloud Platform Integration)</em>, and <em>Salesforce Administration &amp; Developer</em>.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Timely Attribution:</strong> The referral must be declared prior to or at the time of the student's initial inquiry/registration. Retroactive claims cannot be accepted once a student has already enrolled independently.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Refund / Cancellation Policy:</strong> In the rare event that the referred student cancels their admission or receives a fee refund before batch commencement, the referral reward will not be disbursed or will be adjusted accordingly.
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Contact & Support Note */}
          <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/60 flex items-start gap-3">
            <Wallet className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs text-indigo-950 leading-relaxed">
              <strong>Need to check your referral status?</strong> You can message Mahesh sir directly on WhatsApp at <strong>+91 91827 21589</strong> along with your referred friend's name to check status and receive your UPI payout.
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-colors cursor-pointer"
          >
            I Understand &amp; Close
          </button>

          <a
            href={`https://wa.me/919182721589?text=${encodeURIComponent("Hello Mahesh Sir, I have read the Refer & Earn terms and conditions. I would like to refer a friend for the upcoming course batch.")}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-transparent" />
            <span>Refer a Friend on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
          </a>
        </div>

      </div>
    </div>
  );
}
