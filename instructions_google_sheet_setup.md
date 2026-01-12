# How to Connect Your Forms to Google Sheets (Updated)

To save your customer orders to your **new** Google Sheet automatically, and organize them **Month-Wise**, follow these steps:

## Step 1: Open Your New Google Sheet
1. Open your Google Sheet: [Link](https://docs.google.com/spreadsheets/d/1Hul1Ym9wppzfsQlOxHu0h-XSbun3slfiV1ONTUl8l2E/edit?usp=sharing)
2. You do **not** need to create headers manually anymore; the script will create a new sheet for the current month automatically if it doesn't exist.

## Step 2: Open Apps Script
1. In the Google Sheet, click on **Extensions** in the top menu.
2. Click on **Apps Script**.
3. A new tab will open with a code editor.

## Step 3: Paste the Updated Code
1. Delete any code currently in the editor.
2. Copy and paste the **entire code below**:

```javascript
// NEW SHEET ID provided by you
var SHEET_ID = '1Hul1Ym9wppzfsQlOxHu0h-XSbun3slfiV1ONTUl8l2E';

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    // 1. Get the spreadsheet
    var ss = SpreadsheetApp.openById(SHEET_ID);
    
    // 2. Determine Current Month Sheet Name (e.g., "January 2026")
    // usage of Session.getScriptTimeZone() ensures it uses the script's configured time zone
    var sheetName = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "MMMM yyyy");
    
    // 3. Check if sheet exists, if not create it
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      // Add Headers to the new sheet
      sheet.appendRow(["Timestamp", "Name", "Phone", "Address", "Order Details", "Total Amount"]);
      // Optional: Make headers bold
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
    }

    // 4. Parse the incoming data
    var data;
    try {
      // Try parsing as JSON first
      if (e.postData && e.postData.contents) {
        data = JSON.parse(e.postData.contents);
      } else {
        data = e.parameter;
      }
    } catch (err) {
      // Fallback to parameters if JSON parse fails
      data = e.parameter;
    }

    var timestamp = new Date();
    var name = data.name || '';
    var phone = data.phone || '';
    var address = data.address || '';
    var orderDetails = data.orderDetails || '';
    var totalAmount = data.totalAmount || '';

    // 5. Append to the specific month's sheet
    sheet.appendRow([timestamp, name, phone, address, orderDetails, totalAmount]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow(), 'sheet': sheetName }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

## Step 4: Deploy as Web App
1. Click the blue **Deploy** button (top right) -> **New deployment**.
2. **Select type**: Click the gear icon -> **Web app**.
3. Fill in the details:
   - **Description**: Month Wise Order Saver
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (Critical!)
4. Click **Deploy**.
5. **Authorize Access**:
   - Click "Authorize access".
   - Select your account.
   - Click **Advanced** -> **Go to (Untitled project) (unsafe)** -> **Allow**.

## Step 5: Copy the New Web App URL
1. Copy the **Web App URL** provided after deployment.

## Step 6: Send me the URL
**Please paste the NEW Web App URL in the chat**, and I will update your `products.html` file to use it.
