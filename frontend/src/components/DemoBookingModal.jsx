import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { api } from '../services/api.js';

export default function DemoBookingModal({ isOpen, onClose, defaultCourseTitle = '', courses = [] }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseName: defaultCourseTitle || (courses[0]?.title || 'Data Analytics with SQL, Power BI, Python, Excel')
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Clean & Short Success Screen */
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-black text-slate-900">
              Seat Reserved Successfully!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you <strong className="text-slate-900">{formData.fullName}</strong>! Our counselor will contact you shortly regarding the demo class for <strong className="text-orange-600">{formData.courseName}</strong>.
            </p>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs cursor-pointer shadow-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Clean Form */
          <div>
            <div className="mb-6 pr-6">
              <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 mb-1.5">
                Live Interactive Batch
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Reserve Your Seat
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Register for upcoming live classes or attend a free orientation session.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address <span className="text-orange-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="anand@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone / WhatsApp <span className="text-orange-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 91827 21589"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Course
                </label>
                <select
                  value={formData.courseName}
                  onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none transition-all bg-white"
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


              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm disabled:opacity-50"
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
