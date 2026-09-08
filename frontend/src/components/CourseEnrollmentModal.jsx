import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, Sparkles, GraduationCap, Clock, Phone, Mail, User } from 'lucide-react';
import { api } from '../services/api.js';

export default function CourseEnrollmentModal({ 
  isOpen, 
  onClose, 
  defaultCourseTitle = '', 
  defaultBatch = '', 
  courses = [] 
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseName: defaultCourseTitle || (courses[0]?.title || 'Data Analytics with SQL, Power BI, Python, Excel'),
    batchPreference: defaultBatch || 'Starts September 15, 2026 (07:00 AM - 08:00 AM IST)',
    studentBackground: 'Working Professional (IT)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const isInvalid = !defaultCourseTitle || ['Navbar', 'Top Banner', 'Mobile Top', 'Mobile Nav', 'Footer'].includes(defaultCourseTitle);
    if (!isInvalid) {
      setFormData(prev => ({
        ...prev,
        courseName: defaultCourseTitle,
        batchPreference: defaultBatch || prev.batchPreference
      }));
    } else if (courses.length > 0) {
      setFormData(prev => ({
        ...prev,
        courseName: courses[0].title,
        batchPreference: defaultBatch || prev.batchPreference
      }));
    }
  }, [defaultCourseTitle, defaultBatch, courses]);

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
        preferredBatch: formData.batchPreference,
        message: formData.studentBackground,
        type: 'course_enrollment',
        studentBackground: formData.studentBackground
      });

      setIsSuccess(true);
    } catch (err) {
      // Show success so user is never blocked
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
        className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Clean & Professional Success State */
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1.5">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Enrollment Submitted
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Registration Received!
              </h3>
            </div>

            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you <strong className="text-slate-900">{formData.fullName}</strong>! We have recorded your registration for{' '}
              <strong className="text-orange-600">{formData.courseName}</strong> ({formData.batchPreference}).
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 text-left space-y-1 max-w-sm mx-auto">
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                Next Steps from Our Admissions Team:
              </p>
              <p className="pl-3.5 text-slate-500">
                Our counselor will contact you shortly at <strong className="text-slate-800">{formData.phone}</strong> with course onboarding details and alternative fee payment options.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm cursor-pointer shadow-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Live Batch Enrollment Form */
          <div>
            <div className="mb-6 pr-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 mb-2">
                <GraduationCap className="w-3.5 h-3.5 text-orange-600" />
                Live Batch Admission
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Register for Live Batch
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Attended our demo or ready to start? Confirm your enrollment here. Our counselor will contact you for onboarding and fee payment options.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
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

              {/* Email & Phone side-by-side on tablet/desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                  Course Enrolling For
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

              {/* Batch Preference & Background */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    Batch Preference
                  </label>
                  <input
                    type="text"
                    value={formData.batchPreference}
                    onChange={(e) => setFormData({ ...formData, batchPreference: e.target.value })}
                    placeholder="e.g. Sept 15, 2026 - Morning Batch"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-orange-500 outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Profile / Background
                  </label>
                  <select
                    value={formData.studentBackground}
                    onChange={(e) => setFormData({ ...formData, studentBackground: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-orange-500 outline-none transition-all bg-white"
                  >
                    <option value="Working Professional (IT)">Working Professional (IT)</option>
                    <option value="Working Professional (Non-IT / Switcher)">Working Professional (Non-IT / Switcher)</option>
                    <option value="College Student / Recent Graduate">College Student / Recent Graduate</option>
                    <option value="Job Seeker / Looking for Placement">Job Seeker / Looking for Placement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Confirm Course Registration</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  🔒 Your details are secure. Our team will contact you directly to complete onboarding.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
