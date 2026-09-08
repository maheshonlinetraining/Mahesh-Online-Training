import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CourseCatalog from './components/CourseCatalog';
import CourseModal from './components/CourseModal';
import UpcomingBatches from './components/UpcomingBatches';
import Placements from './components/Placements';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DemoBookingModal from './components/DemoBookingModal';
import CourseEnrollmentModal from './components/CourseEnrollmentModal';
import { MessageCircle, Sparkles } from 'lucide-react';
import { api } from './services/api';

export default function App() {
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [stats, setStats] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoCourseTitle, setDemoCourseTitle] = useState('');

  // Course / Live Batch Enrollment Modal states
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollCourseTitle, setEnrollCourseTitle] = useState('');
  const [enrollBatch, setEnrollBatch] = useState('');

  // Initial data loading from Backend REST API
  useEffect(() => {
    async function loadData() {
      try {
        const [statsRes, coursesRes, batchesRes, testRes, faqsRes] = await Promise.all([
          api.getStats(),
          api.getCourses(),
          api.getBatches(),
          api.getTestimonials(),
          api.getFaqs()
        ]);

        if (statsRes?.data) setStats(statsRes.data);
        if (coursesRes?.data) setCourses(coursesRes.data);
        if (batchesRes?.data) setBatches(batchesRes.data);
        if (testRes?.data) setTestimonials(testRes.data);
        if (faqsRes?.data) setFaqs(faqsRes.data);
      } catch (err) {
        console.error("Data loading error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const handleOpenDemoModal = (courseTitle = '') => {
    const isInvalidTitle = !courseTitle || ['Navbar', 'Top Banner', 'Mobile Top', 'Mobile Nav', 'Footer'].includes(courseTitle);
    const validTitle = isInvalidTitle
      ? (courses[0]?.title || 'Data Analytics with SQL, Power BI, Python, Excel')
      : courseTitle;
    setDemoCourseTitle(validTitle);
    setIsDemoModalOpen(true);
  };

  const handleOpenEnrollModal = (courseTitle = '', batch = '') => {
    const isInvalidTitle = !courseTitle || ['Navbar', 'Top Banner', 'Mobile Top', 'Mobile Nav', 'Footer'].includes(courseTitle);
    const validTitle = isInvalidTitle
      ? (courses[0]?.title || 'Data Analytics with SQL, Power BI, Python, Excel')
      : courseTitle;
    setEnrollCourseTitle(validTitle);
    setEnrollBatch(batch || 'Starts September 15, 2026 (07:00 AM - 08:00 AM IST)');
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-orange-500 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Sections - Clean, Uncluttered, Spaced */}
      <main>
        <Hero
          onOpenDemoModal={handleOpenDemoModal}
          onOpenEnrollModal={handleOpenEnrollModal}
          stats={stats}
        />

        <Features
          onOpenDemoModal={handleOpenDemoModal}
        />

        <CourseCatalog
          courses={courses}
          onSelectCourse={(course) => setSelectedCourse(course)}
          onOpenDemoModal={handleOpenDemoModal}
        />

        <UpcomingBatches
          batches={batches}
          onOpenDemoModal={handleOpenDemoModal}
          onOpenEnrollModal={handleOpenEnrollModal}
        />

        <Placements
          testimonials={testimonials}
          onOpenDemoModal={handleOpenDemoModal}
        />

        <FaqSection
          faqs={faqs}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Course Detailed Syllabus Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onOpenDemoModal={handleOpenDemoModal}
        />
      )}

      {/* Free Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourseTitle={demoCourseTitle}
        courses={courses}
      />

      {/* Course / Live Batch Enrollment Modal */}
      <CourseEnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        defaultCourseTitle={enrollCourseTitle}
        defaultBatch={enrollBatch}
        courses={courses}
      />

      {/* Floating Action Button for Instant WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/919182721589?text=Hello%20Mahesh%20Sir%2C%20I%20am%20interested%20in%20online%20training%20courses"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-transparent" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>

    </div>
  );
}
