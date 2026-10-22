import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, Sparkles, User, Mail, Phone, GraduationCap } from 'lucide-react';
import { api } from '../services/api.js';

export default function DemoBookingModal({ isOpen, onClose, defaultCourseTitle = '', courses = [] }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseName: defaultCourseTitle || (courses[0]?.title || 'Data Analytics with SQL, Power BI, Python, Excel'),
    referral: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isDataAnalytics = Boolean(
    formData.courseName &&
    (formData.courseName.toLowerCase().includes('data analytic') ||
     formData.courseName.toLowerCase().includes('sql for data'))
  );

  const isSapCpi = Boolean(
    formData.courseName &&
    (formData.courseName.toLowerCase().includes('sap') ||
     formData.courseName.toLowerCase().includes('cpi'))
  );

  useEffect(() => {
    const isInvalid = !defaultCourseTitle || ['Navbar', 'Top Banner', 'Mobile Top', 'Mobile Nav', 'Footer'].includes(defaultCourseTitle);
    if (!isInvalid) {
      setFormData(prev => ({ ...prev, courseName: defaultCourseTitle }));
    } else if (courses.length > 0) {
      setFormData(prev => ({ ...prev, courseName: courses[0].title }));
    }
  }, [defaultCourseTitle, courses]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await api.submitInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        courseName: formData.courseName,
        referral: formData.referral || 'Direct',
        type: 'demo_booking'
      });

      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-2xl sm:max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Modal Header (Always Visible with High-Contrast Close Button) */}
        <div className="relative px-5 py-3.5 sm:px-6 sm:py-4 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap pr-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              Live Interactive Batch
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Reserve Your Seat
            </h3>
          </div>

          {/* Close Button X (Prominent, High-Contrast & Always Reachable) */}
          <button
            onClick={handleResetAndClose}
            className="p-1.5 sm:p-2 rounded-full bg-slate-200/80 hover:bg-orange-100 hover:text-orange-600 text-slate-600 transition-colors cursor-pointer shrink-0"
            title="Close modal"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {isSuccess ? (
          /* Clean & Short Success Screen */
          <div className="text-center p-6 sm:p-8 space-y-4 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1.5">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Reservation Confirmed
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Seat Reserved Successfully!
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Thank you <strong className="text-slate-900">{formData.fullName}</strong>! Our counselor will contact you shortly regarding the session for <strong className="text-orange-600">{formData.courseName}</strong>.
            </p>

            <div className="pt-2 max-w-md mx-auto">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm cursor-pointer shadow-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* 2-Column Wide Form Layout (Fits Viewport Without Scrolling) */
          <div className="p-5 sm:p-6 overflow-y-auto">
            <p className="text-xs sm:text-sm text-slate-500 mb-4 leading-relaxed">
              Register for upcoming live classes or attend a free orientation session. Our academic team will connect with you on WhatsApp.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-orange-600" />
                    Full Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>

                {/* 2. Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-orange-600" />
                    Phone / WhatsApp <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 91827 21589"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>

                {/* 3. Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-orange-600" />
                    Email Address <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>

                {/* 4. Course */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-orange-600" />
                    Course Interested In
                  </label>
                  <select
                    value={formData.courseName}
                    onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all bg-white"
                  >
                    {courses.length > 0 ? (
                      courses.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))
                    ) : (
                      <option value={formData.courseName}>{formData.courseName}</option>
                    )}
                  </select>
                </div>

                {/* 5. Course Specific Callout: Full 2-Column Span */}
                {isDataAnalytics && (
                  <div className="col-span-1 sm:col-span-2 p-3 rounded-xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/90 text-orange-950 text-xs font-medium flex items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-600 text-white font-bold text-xs shrink-0 shadow-xs">
                        ⚡
                      </span>
                      <div>
                        <strong className="text-orange-900 font-extrabold">Weekday Batch Only (8:00 AM to 9:00 AM IST): </strong>
                        <span className="text-slate-700">Weekday Batch Only (Mon to Fri). Full demo recording is ready! We will send you the instant session access link on WhatsApp.</span>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-orange-200/70 text-orange-900 font-extrabold text-[10px] shrink-0 uppercase tracking-wide border border-orange-300/50">
                      Weekday Batch Only
                    </span>
                  </div>
                )}

                {isSapCpi && (
                  <div className="col-span-1 sm:col-span-2 p-3 rounded-xl bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200/90 text-purple-950 text-xs font-medium flex items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-purple-600 text-white font-bold text-xs shrink-0 shadow-xs">
                        ⚡
                      </span>
                      <div>
                        <strong className="text-purple-900 font-extrabold">Weekend Batch Only: </strong>
                        <span className="text-slate-700">Classes for SAP CPI are conducted on Weekend Batch Only (Sat &amp; Sun) with Senior Industry Architects.</span>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-purple-200/70 text-purple-900 font-extrabold text-[10px] shrink-0 uppercase tracking-wide border border-purple-300/50">
                      Weekend Batch Only
                    </span>
                  </div>
                )}

                {/* 6. Referral Field: Full 2-Column Span */}
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                    <span>Referred by a Friend?</span>
                    <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      ₹1,000 Reward Program
                    </span>
                  </label>
                  <input
                    type="text"
                    value={formData.referral}
                    onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                    placeholder="Enter Friend's Name or Mobile / UPI ID"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none transition-all"
                  />
                  <p className="mt-1 text-[10px] text-slate-500">
                    * Referrer receives ₹1,000 reward upon student's full course fee clearance.
                  </p>
                </div>

                {/* 7. Submit Button: Full 2-Column Span */}
                <div className="col-span-1 sm:col-span-2 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Reserving Seat...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Confirm Seat Reservation</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              <div className="text-center text-[11px] text-slate-400 pt-1">
                Zero spam • 100% Live interactive batches
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
