/**
 * =========================================================================
 * MAHESH ONLINE TRAINING - GOOGLE APPS SCRIPT FOR LIVE GOOGLE SHEET SYNC
 * =========================================================================
 * 
 * 🚀 QUICK 3-STEP SETUP:
 * 
 * Step 1: Open your Google Sheet
 *   https://docs.google.com/spreadsheets/d/1l5oj8f1-I1PkMOJshloYRDjbx0GlBqxcAGZWKyRHcKw/edit?usp=sharing
 * 
 * Step 2: Open Apps Script
 *   - In the top menu, click: "Extensions" > "Apps Script"
 *   - Delete any default text inside Code.gs and paste ALL the code below.
 *   - Click the Save icon (Floppy disk).
 * 
 * Step 3: Set Column Headers
 *   - In the top toolbar, select function "setupSheetHeaders" and click "Run".
 *   - (If Google asks for authorization, click "Review permissions" -> select your Google account -> "Advanced" -> "Go to Untitled project (unsafe)" -> "Allow").
 *   - Look at your Google Sheet tab: The 8 column headers are now created with orange styling!
 * 
 * Step 4: Deploy as Web App
 *   - Click the blue "Deploy" button (top right) > "New deployment".
 *   - Click the gear icon ⚙️ next to "Select type" and choose "Web app".
 *   - Description: "Mahesh Online Training Webhook"
 *   - Execute as: "Me" (your email)
 *   - Who has access: "Anyone" (CRITICAL: Must be "Anyone" so the website can submit)
 *   - Click "Deploy".
 *   - Copy the "Web app URL" (it starts with https://script.google.com/macros/s/...).
 *   - Paste it into backend/.env as:
 *       GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
 *     (Or send the link in chat, and we will configure it instantly!)
 * =========================================================================
 */

function setupSheetHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set tab name
  try {
    sheet.setName("Demo Bookings");
  } catch (e) {}

  var headers = [
    "Timestamp (IST)", 
    "Student Name", 
    "Email Address", 
    "Phone / WhatsApp", 
    "Course Name", 
    "Status"
  ];

  // Set headers in Row 1
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Style headers with brand orange color and bold white text
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold")
             .setBackground("#EA580C")
             .setFontColor("#FFFFFF")
             .setHorizontalAlignment("center");

  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 35);
  sheet.autoResizeColumns(1, headers.length);
  
  return "Headers created successfully!";
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      setupSheetHeaders();
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
        item.status || "New Demo Booking"
      ]);
    }

    sheet.autoResizeColumns(1, 6);

    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Recorded " + items.length + " rows successfully",
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
      service: "Mahesh Online Training - Google Sheets Live Sync",
      spreadsheet: SpreadsheetApp.getActiveSpreadsheet().getName()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
