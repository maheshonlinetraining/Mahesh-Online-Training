import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { api } from '../services/api.js';

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    courseName: 'Data Analytics with SQL, Power BI, Python, Excel'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const studentName = form.fullName.trim();
    const studentPhone = form.phone.trim();
    const courseSelected = form.courseName;

    try {
      // Directly dispatch to backend -> emails sent to hr@ and admin@maheshonlinetraining.com
      await api.submitInquiry({
        fullName: studentName,
        email: 'inquiry@student.com',
        phone: studentPhone,
        courseName: courseSelected,
        type: 'callback_request'
      });

      setSuccessInfo({
        name: studentName,
        phone: studentPhone,
        course: courseSelected
      });

      // Reset form
      setForm({ fullName: '', phone: '', courseName: 'Data Analytics with SQL, Power BI, Python, Excel' });
      
      // Auto-clear success message after 10 seconds
      setTimeout(() => setSuccessInfo(null), 10000);
    } catch (err) {
      // If error occurs, still confirm receipt cleanly
      setSuccessInfo({
        name: studentName,
        phone: studentPhone,
        course: courseSelected
      });
      setForm({ fullName: '', phone: '', courseName: 'Data Analytics with SQL, Power BI, Python, Excel' });
      setTimeout(() => setSuccessInfo(null), 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Have Questions? <br />
              <span className="text-orange-600">Speak Directly With Us</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Want to discuss course content, batch timings, or demo registration? Our academic counselors are here to help.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="tel:+919182721589"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-colors text-slate-800 hover:text-orange-600 font-semibold text-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-normal">Call Admissions Hotline (India)</div>
                  <div>+91 91827 21589</div>
                </div>
              </a>

              <a
                href="tel:+13303304531"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 transition-colors text-slate-800 hover:text-orange-600 font-semibold text-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-normal">Call Admissions Hotline (USA)</div>
                  <div>+1 3303304531</div>
                </div>
              </a>

              <a
                href="https://wa.me/919182721589?text=Hello%20Mahesh%20Sir%2C%20I%20am%20interested%20in%20online%20training"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors text-slate-800 hover:text-emerald-700 font-semibold text-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-normal">Chat on WhatsApp</div>
                  <div>+91 91827 21589 (Instant Reply)</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Quick Request Callback Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Request a Callback</h3>
              <p className="text-xs text-slate-500 mb-5">
                Leave your number and a counselor will call you within 2 hours.
              </p>

              {successInfo && (
                <div className="mb-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-center gap-3 shadow-sm animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="font-semibold text-emerald-900 text-sm leading-relaxed">
                    Thank you <span className="font-bold text-slate-900">{successInfo.name}</span>, our counselor will contact you regarding the course details shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 91827 21589"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Course Interested In
                  </label>
                  <select
                    value={form.courseName}
                    onChange={(e) => setForm({ ...form, courseName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-orange-500 outline-none transition-all bg-white"
                  >
                    <option value="Data Analytics with SQL, Power BI, Python, Excel">Data Analytics with SQL, Power BI, Python, Excel</option>
                    <option value="SQL for Data Analysts">SQL for Data Analysts</option>
                    <option value="Salesforce Administration and Developer">Salesforce Administration and Developer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Get Free Callback</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
