import XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EXCEL_FILE = path.join(__dirname, '../data/demo_bookings.xlsx');
const ENROLLMENT_EXCEL_FILE = path.join(__dirname, '../data/course_enrollments.xlsx');
const GOOGLE_SHEET_ID = '1l5oj8f1-I1PkMOJshloYRDjbx0GlBqxcAGZWKyRHcKw';
const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit?usp=sharing`;

/**
 * Appends a new student demo booking to the Excel sheet
 * and pushes to Google Sheet Webhook if configured.
 */
export async function appendDemoBooking({
  fullName,
  email,
  phone,
  courseName,
  referral
}) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';

  const newRow = {
    'Timestamp (IST)': timestamp,
    'Student Name': fullName,
    'Email Address': email,
    'Phone / WhatsApp': phone,
    'Course Name': courseName,
    'Referral': referral || 'Direct',
    'Status': 'New Demo Booking'
  };

  // 1. Save to local Excel (.xlsx) file
  try {
    let workbook;
    let existingRows = [];

    if (fs.existsSync(EXCEL_FILE)) {
      workbook = XLSX.readFile(EXCEL_FILE);
      const sheetName = workbook.SheetNames[0] || 'Demo Bookings';
      const worksheet = workbook.Sheets[sheetName];
      existingRows = XLSX.utils.sheet_to_json(worksheet);
    } else {
      workbook = XLSX.utils.book_new();
    }

    // Add new row at the beginning (or end)
    existingRows.push(newRow);

    const updatedWorksheet = XLSX.utils.json_to_sheet(existingRows);

    // Set column widths for readability
    updatedWorksheet['!cols'] = [
      { wch: 24 }, // Timestamp
      { wch: 22 }, // Name
      { wch: 28 }, // Email
      { wch: 18 }, // Phone
      { wch: 45 }, // Course
      { wch: 20 }, // Referral
      { wch: 18 }  // Status
    ];

    const sheetTitle = 'Demo Bookings';
    workbook.Sheets[sheetTitle] = updatedWorksheet;
    if (!workbook.SheetNames.includes(sheetTitle)) {
      workbook.SheetNames.push(sheetTitle);
    }

    XLSX.writeFile(workbook, EXCEL_FILE);
    console.log(`[EXCEL SYNC] Recorded demo booking for "${fullName}" into demo_bookings.xlsx`);
  } catch (err) {
    console.error('[EXCEL SYNC ERROR]:', err.message);
  }

  // 2. Push to Google Sheet Webhook if URL is configured in .env
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  let googleSheetSynced = false;

  if (webhookUrl) {
    try {
      const gRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          sheetId: GOOGLE_SHEET_ID,
          timestamp,
          fullName,
          email,
          phone,
          courseName,
          referral: referral || 'Direct',
          status: 'New Demo Booking'
        }),
        redirect: 'follow'
      });
      googleSheetSynced = true;
      console.log(`[GOOGLE SHEET SYNC] Pushed row to Google Sheet Webhook successfully (status: ${gRes.status})`);
    } catch (gErr) {
      console.error('[GOOGLE SHEET SYNC ERROR]:', gErr.message);
    }
  } else {
    console.log(`[GOOGLE SHEET INFO] Sheet ID: ${GOOGLE_SHEET_ID}`);
    console.log(`(Configure GOOGLE_SHEET_WEBHOOK_URL in backend/.env to automatically append rows to live Google Sheet)`);
  }

  return {
    success: true,
    excelFile: EXCEL_FILE,
    googleSheetId: GOOGLE_SHEET_ID,
    googleSheetUrl: GOOGLE_SHEET_URL,
    googleSheetSynced
  };
}

/**
 * Pushes all recorded demo bookings from inquiries.json to the Google Sheet Webhook
 */
export async function syncAllToGoogleSheet(webhookUrlOverride) {
  const webhookUrl = webhookUrlOverride || process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('GOOGLE_SHEET_WEBHOOK_URL is not configured yet. Deploy Google Apps Script first.');
  }

  const inqs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/inquiries.json'), 'utf-8'));
  const demoInqs = inqs.filter(i => i.type === 'demo_booking');

  const rows = demoInqs.map(i => ({
    timestamp: new Date(i.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
    fullName: i.fullName,
    email: i.email !== 'inquiry@student.com' ? i.email : '',
    phone: i.phone,
    courseName: i.courseName,
    demoDate: i.demoDate || 'Flexible',
    demoTime: i.demoTime || 'Flexible',
    status: 'New Demo Booking'
  }));

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(rows),
    redirect: 'follow'
  });

  const responseText = await res.text();
  return {
    success: true,
    count: rows.length,
    response: responseText
  };
}

/**
 * Appends a confirmed Course / Live Batch Enrollment to course_enrollments.xlsx
 * and pushes to the second Google Sheet Webhook if configured.
 */
export async function appendCourseEnrollment({
  fullName,
  email,
  phone,
  courseName,
  batchStartDate,
  batchTimings,
  batchPreference,
  studentBackground,
  referral
}) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';

  const newRow = {
    'Timestamp (IST)': timestamp,
    'Student Name': fullName,
    'Email Address': email,
    'Phone / WhatsApp': phone,
    'Course Name': courseName,
    'Batch Start Date': batchStartDate || 'Immediate Live Batch',
    'Batch Timings': batchTimings || batchPreference || 'Weekday Batch (Mon to Fri) - 7:00 AM to 8:00 AM IST',
    'Student Background': studentBackground || 'Not Specified',
    'Referral': referral || 'Direct',
    'Status': 'Enrolled (Pending Fee Payment)'
  };

  // 1. Save to local course_enrollments.xlsx
  try {
    let workbook;
    let existingRows = [];

    if (fs.existsSync(ENROLLMENT_EXCEL_FILE)) {
      workbook = XLSX.readFile(ENROLLMENT_EXCEL_FILE);
      const sheetName = workbook.SheetNames[0] || 'Course Enrollments';
      const worksheet = workbook.Sheets[sheetName];
      existingRows = XLSX.utils.sheet_to_json(worksheet);
    } else {
      workbook = XLSX.utils.book_new();
    }

    existingRows.push(newRow);

    const updatedWorksheet = XLSX.utils.json_to_sheet(existingRows);
    updatedWorksheet['!cols'] = [
      { wch: 24 }, // Timestamp
      { wch: 22 }, // Name
      { wch: 28 }, // Email
      { wch: 18 }, // Phone
      { wch: 45 }, // Course Name
      { wch: 22 }, // Batch Start Date
      { wch: 45 }, // Batch Timings
      { wch: 25 }, // Background
      { wch: 20 }, // Referral
      { wch: 25 }  // Status
    ];

    const sheetTitle = 'Course Enrollments';
    workbook.Sheets[sheetTitle] = updatedWorksheet;
    if (!workbook.SheetNames.includes(sheetTitle)) {
      workbook.SheetNames.push(sheetTitle);
    }

    XLSX.writeFile(workbook, ENROLLMENT_EXCEL_FILE);
    console.log(`[ENROLLMENT EXCEL] Recorded course enrollment for "${fullName}" into course_enrollments.xlsx`);
  } catch (err) {
    console.error('[ENROLLMENT EXCEL ERROR]:', err.message);
  }

  // 2. Push to Google Sheet Enrollments Webhook if URL is configured
  const webhookUrl = process.env.GOOGLE_SHEET_ENROLLMENTS_WEBHOOK_URL;
  let googleSheetSynced = false;

  if (webhookUrl) {
    try {
      const gRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          timestamp,
          fullName,
          email,
          phone,
          courseName,
          batchStartDate: batchStartDate || 'Immediate Live Batch',
          batchTimings: batchTimings || batchPreference || 'Weekday Batch (Mon to Fri) - 7:00 AM to 8:00 AM IST',
          batchPreference: batchPreference || batchTimings || 'Immediate Live Batch',
          studentBackground: studentBackground || 'Not Specified',
          referral: referral || 'Direct',
          status: 'Enrolled (Pending Fee Payment)'
        }),
        redirect: 'follow'
      });
      googleSheetSynced = true;
      console.log(`[ENROLLMENT GOOGLE SHEET SYNC] Pushed enrollment to Google Sheet Webhook (status: ${gRes.status})`);
    } catch (gErr) {
      console.error('[ENROLLMENT GOOGLE SHEET SYNC ERROR]:', gErr.message);
    }
  } else {
    console.log(`[ENROLLMENT GOOGLE SHEET INFO] Configure GOOGLE_SHEET_ENROLLMENTS_WEBHOOK_URL in backend/.env to push enrollments live`);
  }

  return {
    success: true,
    excelFile: ENROLLMENT_EXCEL_FILE,
    googleSheetSynced
  };
}

/**
 * Pushes all recorded course enrollments from inquiries.json to the Enrollments Google Sheet Webhook
 */
export async function syncAllEnrollmentsToGoogleSheet(webhookUrlOverride) {
  const webhookUrl = webhookUrlOverride || process.env.GOOGLE_SHEET_ENROLLMENTS_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error('GOOGLE_SHEET_ENROLLMENTS_WEBHOOK_URL is not configured yet. Deploy Google Apps Script on your second sheet first.');
  }

  const inqs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/inquiries.json'), 'utf-8'));
  const enrollInqs = inqs.filter(i => i.type === 'course_enrollment');

  const rows = enrollInqs.map(i => ({
    timestamp: new Date(i.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
    fullName: i.fullName,
    email: i.email !== 'inquiry@student.com' ? i.email : '',
    phone: i.phone,
    courseName: i.courseName,
    batchPreference: i.preferredBatch || 'Immediate Live Batch',
    studentBackground: i.message || 'Not Specified',
    status: 'Enrolled (Pending Fee Payment)'
  }));

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(rows),
    redirect: 'follow'
  });

  const responseText = await res.text();
  return {
    success: true,
    count: rows.length,
    response: responseText
  };
}


