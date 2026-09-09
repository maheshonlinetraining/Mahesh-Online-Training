import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dataService } from '../services/dataService.js';
import { sendInquiryNotification } from '../services/notificationService.js';
import { 
  appendDemoBooking, 
  syncAllToGoogleSheet,
  appendCourseEnrollment,
  syncAllEnrollmentsToGoogleSheet 
} from '../services/sheetService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Mahesh Online Training API',
    timestamp: new Date().toISOString()
  });
});

// GET /api/stats
router.get('/stats', async (req, res) => {
  try {
    const stats = await dataService.getInstituteStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/courses
router.get('/courses', async (req, res) => {
  try {
    const { category, search, level } = req.query;
    const courses = await dataService.getAllCourses({ category, search, level });
    res.json({ success: true, count: courses.length, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/courses/:id
router.get('/courses/:id', async (req, res) => {
  try {
    const course = await dataService.getCourseById(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/batches
router.get('/batches', async (req, res) => {
  try {
    const batches = await dataService.getUpcomingBatches();
    res.json({ success: true, count: batches.length, data: batches });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/testimonials
router.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await dataService.getTestimonials();
    res.json({ success: true, data: testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await dataService.getHiringCompanies();
    res.json({ success: true, data: companies });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/faqs
router.get('/faqs', async (req, res) => {
  try {
    const faqs = await dataService.getFaqs();
    res.json({ success: true, data: faqs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/inquiries (Book Demo, Request Syllabus, Contact)
router.post('/inquiries', async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      phone, 
      courseId, 
      courseName, 
      preferredBatch, 
      batchStartDate,
      batchTimings,
      demoDate, 
      demoTime, 
      message, 
      referral,
      type 
    } = req.body;

    // Basic validation: Full name and phone are strictly required
    if (!fullName || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Full name and phone number are required.'
      });
    }

    // Email regex validation if provided
    let cleanEmail = email ? email.trim() : '';
    if (cleanEmail && !cleanEmail.includes('student.com')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail)) {
        return res.status(400).json({
          success: false,
          message: 'Please provide a valid email address.'
        });
      }
    } else if (!cleanEmail) {
      cleanEmail = 'inquiry@student.com';
    }

    const resolvedBatch = preferredBatch || batchTimings || 'Flexible';

    // 1. Save inquiry record to JSON
    const inquiry = await dataService.createInquiry({
      fullName,
      email: cleanEmail,
      phone,
      courseId,
      courseName,
      preferredBatch: resolvedBatch,
      batchStartDate: batchStartDate || '',
      batchTimings: batchTimings || '',
      demoDate: demoDate || '',
      demoTime: demoTime || '',
      referral: referral || 'Direct',
      message,
      type: type || 'callback_request'
    });

    // 2. Append to Excel Sheet & sync with Google Sheet
    let sheetResult = null;
    if (type === 'course_enrollment') {
      sheetResult = await appendCourseEnrollment({
        fullName,
        email: cleanEmail !== 'inquiry@student.com' ? cleanEmail : '',
        phone,
        courseName: courseName || 'General Course Enrollment',
        batchStartDate: batchStartDate || 'Immediate Live Batch',
        batchTimings: batchTimings || resolvedBatch,
        batchPreference: resolvedBatch,
        studentBackground: message || req.body.studentBackground || 'Not Specified',
        referral: referral || 'Direct'
      });
    } else if (type === 'demo_booking' || (!batchTimings && !batchStartDate)) {
      sheetResult = await appendDemoBooking({
        fullName,
        email: cleanEmail !== 'inquiry@student.com' ? cleanEmail : '',
        phone,
        courseName: courseName || 'General Inquiry',
        referral: referral || 'Direct'
      });
    }

    // 3. Dispatch email notifications to hr@ and admin@maheshonlinetraining.com
    const notification = await sendInquiryNotification({
      fullName,
      phone,
      email: cleanEmail !== 'inquiry@student.com' ? cleanEmail : '',
      courseName,
      preferredBatch: resolvedBatch,
      message: message || (type === 'course_enrollment' ? `Enrollment for: ${courseName} (${resolvedBatch})` : `Demo Scheduled for: ${demoDate} at ${demoTime}`),
      type: type || 'callback_request'
    });

    const isEnrollment = type === 'course_enrollment';
    res.status(201).json({
      success: true,
      message: isEnrollment
        ? `Thank you ${fullName}, your course registration for ${courseName} has been received!`
        : `Thank you ${fullName}, your demo seat has been reserved and recorded into the Excel sheet.`,
      data: inquiry,
      sheet: sheetResult,
      notification: {
        emailsSentTo: notification.recipients,
        whatsappTarget: notification.whatsappTarget
      }
    });
  } catch (error) {
    console.error('Error handling inquiry:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/demo-bookings/excel (Download Demo Bookings Excel file)
router.get('/demo-bookings/excel', (req, res) => {
  const excelPath = path.join(__dirname, '../data/demo_bookings.xlsx');
  if (!fs.existsSync(excelPath)) {
    return res.status(404).json({ success: false, message: 'Demo bookings Excel file not found yet.' });
  }
  res.download(excelPath, 'Mahesh_Online_Training_Demo_Bookings.xlsx');
});

// GET or POST /api/demo-bookings/sync-google-sheet
router.all('/demo-bookings/sync-google-sheet', async (req, res) => {
  try {
    const webhookUrl = req.body?.webhookUrl || req.query?.webhookUrl;
    const result = await syncAllToGoogleSheet(webhookUrl);
    res.json({ success: true, message: `Successfully synced ${result.count} bookings to Demo Google Sheet!`, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/course-enrollments/excel (Download Course Enrollments Excel file)
router.get('/course-enrollments/excel', (req, res) => {
  const excelPath = path.join(__dirname, '../data/course_enrollments.xlsx');
  if (!fs.existsSync(excelPath)) {
    return res.status(404).json({ success: false, message: 'Course enrollments Excel file not found yet.' });
  }
  res.download(excelPath, 'Mahesh_Online_Training_Course_Enrollments.xlsx');
});

// GET or POST /api/course-enrollments/sync-google-sheet
router.all('/course-enrollments/sync-google-sheet', async (req, res) => {
  try {
    const webhookUrl = req.body?.webhookUrl || req.query?.webhookUrl;
    const result = await syncAllEnrollmentsToGoogleSheet(webhookUrl);
    res.json({ success: true, message: `Successfully synced ${result.count} enrollments to Enrollments Google Sheet!`, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/inquiries (Counselor / Admin access)
router.get('/inquiries', async (req, res) => {
  try {
    const inquiries = await dataService.getAllInquiries();
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
