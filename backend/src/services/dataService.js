import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  courses,
  upcomingBatches,
  testimonials,
  instituteStats,
  hiringCompanies,
  faqs
} from '../data/coursesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const INQUIRIES_FILE = path.join(__dirname, '../data/inquiries.json');

// In-memory inquiries store with file persistence
let inMemoryInquiries = [];

// Initialize inquiries from file if present
const initInquiriesStore = async () => {
  try {
    const data = await fs.readFile(INQUIRIES_FILE, 'utf-8');
    inMemoryInquiries = JSON.parse(data);
  } catch (err) {
    // If file doesn't exist, create it with empty list
    inMemoryInquiries = [];
    try {
      await fs.writeFile(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
    } catch (e) {
      console.warn("Could not initialize inquiries.json, using memory only");
    }
  }
};

initInquiriesStore();

export const dataService = {
  // Courses
  async getAllCourses({ category, search, level } = {}) {
    let result = [...courses];

    if (category && category.toLowerCase() !== 'all') {
      result = result.filter(c => c.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.tools.some(t => t.toLowerCase().includes(q))
      );
    }

    if (level && level !== 'all') {
      result = result.filter(c => c.level.toLowerCase().includes(level.toLowerCase()));
    }

    return result;
  },

  async getCourseById(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return null;
    return course;
  },

  // Batches
  async getUpcomingBatches() {
    return upcomingBatches;
  },

  // Testimonials
  async getTestimonials() {
    return testimonials;
  },

  // Institute Statistics
  async getInstituteStats() {
    return instituteStats;
  },

  // Hiring Companies
  async getHiringCompanies() {
    return hiringCompanies;
  },

  // FAQs
  async getFaqs() {
    return faqs;
  },

  // Lead / Demo Booking Inquiries
  async createInquiry(data) {
    const newInquiry = {
      id: `inq-${Date.now()}`,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      courseId: data.courseId || "general",
      courseName: data.courseName || "General Inquiry",
      preferredBatch: data.preferredBatch || "Any Time",
      demoDate: data.demoDate || "",
      demoTime: data.demoTime || "",
      mode: data.mode || "Online Live",
      message: data.message || "",
      type: data.type || "demo_booking", // demo_booking, syllabus_download, contact_us
      createdAt: new Date().toISOString(),
      status: "pending_review"
    };

    inMemoryInquiries.unshift(newInquiry);

    // Save asynchronously to local JSON file
    try {
      await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inMemoryInquiries, null, 2), 'utf-8');
    } catch (e) {
      console.error("Error saving inquiry to file:", e);
    }

    return newInquiry;
  },

  async getAllInquiries() {
    return inMemoryInquiries;
  }
};
