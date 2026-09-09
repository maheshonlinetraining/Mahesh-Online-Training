/**
 * =========================================================================
 * MAHESH ONLINE TRAINING - COURSE / LIVE BATCH ENROLLMENTS GOOGLE SHEET SYNC
 * =========================================================================
 * 
 * 📌 PURPOSE:
 * This script is for your SECOND Google Sheet (for students who attended the demo
 * or are ready to register for the live course batch & proceed with admission).
 * 
 * 🚀 QUICK 3-STEP SETUP:
 * 
 * Step 1: Open your NEW / SECOND Google Sheet
 * 
 * Step 2: Open Apps Script
 *   - In the top menu, click: "Extensions" > "Apps Script"
 *   - Delete any default text in Code.gs and paste ALL the code below.
 *   - Click the Save icon (Floppy disk).
 * 
 * Step 3: Auto-Create Column Headers (Row 1)
 *   - In the top toolbar, select function "setupEnrollmentHeaders" from the dropdown.
 *   - Click "Run".
 *   - (If asked for permissions: "Review permissions" -> select Google account -> "Advanced" -> "Go to Untitled project (unsafe)" -> "Allow").
 *   - Switch to your Google Sheet tab: You will now see the 8 styled column headers!
 * 
 * Step 4: Deploy as Web App
 *   - Click the blue "Deploy" button (top right) > "New deployment".
 *   - Click the gear icon ⚙️ next to "Select type" and choose "Web app".
 *   - Description: "Mahesh Online Training - Course Enrollments Webhook"
 *   - Execute as: "Me" (your email)
 *   - Who has access: "Anyone" (CRITICAL: Must be "Anyone" so the website can submit)
 *   - Click "Deploy".
 *   - Copy the "Web app URL" (starts with https://script.google.com/macros/s/...).
 *   - Send it here in the chat, or paste into backend/.env as:
 *       GOOGLE_SHEET_ENROLLMENTS_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
 * =========================================================================
 */

function setupEnrollmentHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set tab name
  try {
    sheet.setName("Course Enrollments");
  } catch (e) {}

  var headers = [
    "Timestamp (IST)", 
    "Student Name", 
    "Email Address", 
    "Phone / WhatsApp", 
    "Course Name", 
    "Batch Start Date", 
    "Batch Timings", 
    "Student Background", 
    "Status"
  ];

  // Set headers in Row 1
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Style headers with elegant dark navy/orange theme and bold white text
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold")
             .setBackground("#0F172A") // Professional Deep Slate
             .setFontColor("#F97316") // Orange text highlight
             .setHorizontalAlignment("center");

  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 38);
  sheet.autoResizeColumns(1, headers.length);
  
  return "Enrollment headers created successfully!";
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      setupEnrollmentHeaders();
    }

    var data = JSON.parse(e.postData.contents);
    var items = Array.isArray(data) ? data : [data];

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      sheet.appendRow([
        item.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST",
        item.fullName || "",
        item.email || "",
        item.phone || "",
        item.courseName || "",
        item.batchStartDate || "Immediate Live Batch",
        item.batchTimings || item.batchPreference || "Weekday Batch (Mon to Fri) - 7:00 AM to 8:00 AM IST",
        item.studentBackground || "Not Specified",
        item.status || "Enrolled (Pending Fee Payment)"
      ]);
    }

    sheet.autoResizeColumns(1, headers.length);

    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Recorded " + items.length + " course enrollments successfully",
        totalRows: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "online", 
      service: "Mahesh Online Training - Course Enrollments Live Sync",
      spreadsheet: SpreadsheetApp.getActiveSpreadsheet().getName()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
