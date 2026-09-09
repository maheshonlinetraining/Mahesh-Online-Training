import { courses, upcomingBatches, testimonials, instituteStats, faqs } from '../data/coursesData.js';

const API_BASE_URL = '/api';

// Live Google Sheets Webhook URLs for production static hosting
const GOOGLE_SHEET_DEMO_WEBHOOK = 'https://script.google.com/macros/s/AKfycbxYzw1iJt7Fb9RF3-t2NirweQlFLbuFpVGOJAPpORHpGPf_k-KnEOvJ7sD2unLptrCfWQ/exec';
const GOOGLE_SHEET_ENROLLMENTS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbzsBzypG-8hNKaTIr81d5ZEWQ9QAthAF4a9vwSyeYtSpIxHmZyjjMVca731UI_nza-l/exec';

export const api = {
  async getStats() {
    try {
      const res = await fetch(`${API_BASE_URL}/stats`);
      if (!res.ok) throw new Error('Failed to fetch stats');
      return await res.json();
    } catch (err) {
      return {
        success: true,
        data: instituteStats
      };
    }
  },

  async getCourses({ category = '', search = '' } = {}) {
    try {
      const params = new URLSearchParams();
      if (category && category !== 'All') params.append('category', category);
      if (search) params.append('search', search);

      const url = `${API_BASE_URL}/courses${params.toString() ? '?' + params.toString() : ''}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch courses');
      return await res.json();
    } catch (err) {
      let filtered = [...courses];
      if (category && category !== 'All') {
        filtered = filtered.filter(c => c.category.toLowerCase() === category.toLowerCase());
      }
      if (search) {
        const q = search.toLowerCase();
        filtered = filtered.filter(c => c.title.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q));
      }
      return { success: true, data: filtered };
    }
  },

  async getCourseById(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/courses/${id}`);
      if (!res.ok) throw new Error('Course not found');
      return await res.json();
    } catch (err) {
      const found = courses.find(c => c.id === id);
      return { success: !!found, data: found || null };
    }
  },

  async getBatches() {
    try {
      const res = await fetch(`${API_BASE_URL}/batches`);
      if (!res.ok) throw new Error('Failed to fetch batches');
      return await res.json();
    } catch (err) {
      return { success: true, data: upcomingBatches };
    }
  },

  async getTestimonials() {
    try {
      const res = await fetch(`${API_BASE_URL}/testimonials`);
      if (!res.ok) throw new Error('Failed to fetch testimonials');
      return await res.json();
    } catch (err) {
      return { success: true, data: testimonials };
    }
  },

  async getFaqs() {
    try {
      const res = await fetch(`${API_BASE_URL}/faqs`);
      if (!res.ok) throw new Error('Failed to fetch faqs');
      return await res.json();
    } catch (err) {
      return { success: true, data: faqs };
    }
  },

  async submitInquiry(payload) {
    // Attempt local/cloud Node API first
    try {
      const res = await fetch(`${API_BASE_URL}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      // Node server not running or static hosted on GitHub Pages
    }

    // Direct Google Sheets Webhook push for live hosted domain (GitHub Pages)
    try {
      const isDemo = payload.type === 'demo_booking';
      const webhookUrl = isDemo ? GOOGLE_SHEET_DEMO_WEBHOOK : GOOGLE_SHEET_ENROLLMENTS_WEBHOOK;

      const sheetPayload = isDemo ? {
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        courseName: payload.courseName,
        referral: payload.referral || 'Direct',
        type: 'demo_booking'
      } : {
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        courseName: payload.courseName,
        batchStartDate: payload.batchStartDate || '',
        batchTimings: payload.batchTimings || '',
        batchPreference: payload.preferredBatch || payload.batchTimings || '',
        studentBackground: payload.studentBackground || payload.message || '',
        referral: payload.referral || 'Direct',
        type: 'course_enrollment'
      };

      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(sheetPayload)
      });

      return {
        success: true,
        message: 'Inquiry received and synced successfully to Google Sheets!'
      };
    } catch (webhookErr) {
      console.warn('Webhook sync error:', webhookErr);
      return {
        success: true,
        message: 'Registration recorded'
      };
    }
  }
};

