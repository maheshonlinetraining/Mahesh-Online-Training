import nodemailer from 'nodemailer';

const RECIPIENT_EMAILS = [
  'hr@maheshonlinetraining.com',
  'admin@maheshonlinetraining.com'
];

const INSTITUTE_WHATSAPP = '919182721589'; // +91 91827 21589

/**
 * Creates Nodemailer transporter based on environment variables
 */
function createTransporter() {
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
  return null;
}

/**
 * Formats WhatsApp text message for student inquiry
 */
export function formatWhatsAppMessage({ fullName, phone, courseName, preferredBatch, type }) {
  const typeLabel = type === 'callback_request' ? 'Callback Request' : 'Seat Reservation / Demo';
  return (
    `*New ${typeLabel} - Mahesh Online Training*\n\n` +
    `👤 *Student Name:* ${fullName}\n` +
    `📱 *Phone Number:* ${phone}\n` +
    `📚 *Course Interested:* ${courseName || 'General Inquiry'}\n` +
    (preferredBatch ? `⏰ *Preferred Batch:* ${preferredBatch}\n` : '') +
    `\n_Please contact the student regarding batch details and admissions._`
  );
}

/**
 * Sends inquiry details to hr@ and admin@maheshonlinetraining.com
 * and returns WhatsApp link.
 */
export async function sendInquiryNotification({
  fullName,
  phone,
  email,
  courseName,
  preferredBatch,
  message,
  type = 'callback_request'
}) {
  const cleanPhone = (phone || '').replace(/[^0-9]/g, '');
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
  const typeTitle = type === 'callback_request' ? 'Callback Request' : 'Demo / Course Booking';

  const subject = `[New ${typeTitle}] ${fullName} - ${courseName || 'Course Inquiry'}`;

  const plainText = `
==================================================
  NEW STUDENT INQUIRY - MAHESH ONLINE TRAINING
==================================================

Student Name     : ${fullName}
Phone Number     : ${phone}
Email Address    : ${email || 'Not provided'}
Course Interested: ${courseName || 'General Inquiry'}
Preferred Timing : ${preferredBatch || 'Flexible'}
Inquiry Type     : ${typeTitle}
Time (IST)       : ${timestamp}
${message ? `Student Note     : ${message}\n` : ''}
--------------------------------------------------
Quick Action:
- Call Student: tel:${cleanPhone}
- Message Student on WhatsApp: https://wa.me/${cleanPhone}
==================================================
`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #ea580c, #c2410c); padding: 24px 30px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 28px 30px; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; background: #ffedd5; color: #c2410c; margin-bottom: 16px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .info-table td.label { font-weight: 700; color: #64748b; width: 35%; }
    .info-table td.value { font-weight: 600; color: #0f172a; }
    .actions { display: flex; gap: 12px; margin-top: 20px; }
    .btn { display: inline-block; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; text-align: center; }
    .btn-call { background: #ea580c; color: #ffffff; }
    .btn-wa { background: #22c55e; color: #ffffff; }
    .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 30px; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Mahesh Online Training</h1>
      <p>New Student Inquiry Notification</p>
    </div>
    <div class="content">
      <span class="badge">${typeTitle}</span>
      <table class="info-table">
        <tr>
          <td class="label">Student Name</td>
          <td class="value">${fullName}</td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="value"><strong>${phone}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value">${email || 'Not provided'}</td>
        </tr>
        <tr>
          <td class="label">Course Interested</td>
          <td class="value"><span style="color: #ea580c; font-weight: 700;">${courseName || 'General Inquiry'}</span></td>
        </tr>
        ${preferredBatch ? `
        <tr>
          <td class="label">Preferred Batch</td>
          <td class="value">${preferredBatch}</td>
        </tr>
        ` : ''}
        <tr>
          <td class="label">Received Time</td>
          <td class="value">${timestamp}</td>
        </tr>
      </table>

      <div class="actions">
        <a href="tel:${cleanPhone}" class="btn btn-call">📞 Call Student</a>
        <a href="https://wa.me/${cleanPhone}" class="btn btn-wa">💬 Chat on WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      This notification was automatically sent to hr@maheshonlinetraining.com & admin@maheshonlinetraining.com
    </div>
  </div>
</body>
</html>
`;

  let emailSent = false;
  let emailError = null;

  const transporter = createTransporter();
  if (transporter) {
    try {
      const fromAddress = process.env.FROM_EMAIL || `"Mahesh Online Training" <${process.env.SMTP_USER}>`;
      await transporter.sendMail({
        from: fromAddress,
        to: RECIPIENT_EMAILS.join(', '),
        replyTo: email && email.includes('@') ? email : undefined,
        subject: subject,
        text: plainText,
        html: htmlContent
      });
      emailSent = true;
      console.log(`[EMAIL DISPATCHED] Successfully sent inquiry email to: ${RECIPIENT_EMAILS.join(', ')}`);
    } catch (err) {
      emailError = err.message;
      console.error(`[EMAIL ERROR] Failed to send email via SMTP:`, err.message);
    }
  }

  // Attempt real email dispatch via FormSubmit gateway directly to admin@ and hr@
  try {
    const fsRes = await fetch('https://formsubmit.co/ajax/admin@maheshonlinetraining.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Referer': 'https://maheshonlinetraining.com',
        'Origin': 'https://maheshonlinetraining.com'
      },
      body: JSON.stringify({
        name: fullName,
        phone: phone,
        course: courseName || 'General Inquiry',
        preferredBatch: preferredBatch || 'Flexible',
        inquiryType: typeTitle,
        receivedAt: timestamp,
        _subject: `New Student Callback Request: ${fullName} (${courseName || 'Course'})`,
        _cc: 'hr@maheshonlinetraining.com'
      })
    });
    const fsData = await fsRes.json();
    console.log('[EMAIL GATEWAY DISPATCH]:', fsData);
    emailSent = true;
  } catch (e) {
    console.error('[EMAIL GATEWAY ERROR]:', e.message);
  }

  // Also send directly to hr@ mailbox
  try {
    await fetch('https://formsubmit.co/ajax/hr@maheshonlinetraining.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Referer': 'https://maheshonlinetraining.com',
        'Origin': 'https://maheshonlinetraining.com'
      },
      body: JSON.stringify({
        name: fullName,
        phone: phone,
        course: courseName || 'General Inquiry',
        preferredBatch: preferredBatch || 'Flexible',
        inquiryType: typeTitle,
        receivedAt: timestamp,
        _subject: `New Student Callback Request: ${fullName} (${courseName || 'Course'})`
      })
    });
  } catch (e) {}

  console.log(`\n======================================================`);
  console.log(`📨 [STUDENT INQUIRY EMAIL NOTIFIED]`);
  console.log(`To: ${RECIPIENT_EMAILS.join(', ')}`);
  console.log(`Subject: ${subject}`);
  console.log(`Student: ${fullName} | Phone: ${phone} | Course: ${courseName}`);
  console.log(`======================================================\n`);

  const waText = formatWhatsAppMessage({ fullName, phone, courseName, preferredBatch, type });
  const whatsappUrl = `https://wa.me/${INSTITUTE_WHATSAPP}?text=${encodeURIComponent(waText)}`;

  return {
    emailSent,
    emailError,
    recipients: RECIPIENT_EMAILS,
    whatsappTarget: `+91 ${INSTITUTE_WHATSAPP.slice(2, 7)} ${INSTITUTE_WHATSAPP.slice(7)}`,
    whatsappUrl
  };
}
