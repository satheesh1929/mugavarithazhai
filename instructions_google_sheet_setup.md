# How to Connect Your Forms to Google Sheets

To save your customer orders to your Google Sheet automatically, follow these steps:

## Step 1: Open Your Google Sheet
1. Open your Google Sheet: [Link](https://docs.google.com/spreadsheets/d/1cx2GqnlJ9Qb77b2cC5ICvkQX6BCfCdD_Ng2Z_zGWP-U/edit?usp=sharing)
2. Ensure the first row (Header) has the following columns (in this order):
   - **A1**: Timestamp
   - **B1**: Name
   - **C1**: Phone
   - **D1**: Address
   - **E1**: Order Details
   - **F1**: Total Amount

## Step 2: Open Apps Script
1. In the Google Sheet, click on **Extensions** in the top menu.
2. Click on **Apps Script**.
3. A new tab will open with a code editor.

## Step 3: Paste the Code
1. Delete any code currently in the editor (like `function myFunction() {...}`).
2. Copy and paste the code below completely:

```javascript
var SHEET_ID = '1cx2GqnlJ9Qb77b2cC5ICvkQX6BCfCdD_Ng2Z_zGWP-U'; // Your Sheet ID
var SHEET_NAME = 'Sheet1'; // Make sure this matches your tab name at the bottom

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  // Lock to prevent concurrent edits
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Parse the data
    // Supports both GET (query info) and POST (body)
    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }

    var timestamp = new Date();
    var name = data.name || '';
    var phone = data.phone || '';
    var address = data.address || '';
    var orderDetails = data.orderDetails || '';
    var totalAmount = data.totalAmount || '';

    // Append to sheet
    sheet.appendRow([timestamp, name, phone, address, orderDetails, totalAmount]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

## Step 4: Deploy as Web App (Important!)
1. Click the blue **Deploy** button at the top right -> **New deployment**.
2. Click the gear icon (Select type) -> **Web app**.
3. Fill in the details:
   - **Description**: Order Saver
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (This is critical so the website can send data)
4. Click **Deploy**.
5. You will likely be asked to **Authorize access**.
   - Click "Authorize access".
   - Select your Google account.
   - If you see a "Google hasn't verified this app" warning (since you wrote it yourself):
     - Click **Advanced**.
     - Click **Go to (Untitled project) (unsafe)** at the bottom.
     - Click **Allow**.

## Step 5: Copy the Web App URL
1. Once deployed, you will see a **Web App URL**. It looks like `https://script.google.com/macros/s/.../exec`.
2. **Copy this URL**.

## Step 6: Update Your Website Code
1. Open your `products.html` file (or paste the URL into the chat so I can do it for you).
2. Find the line that says `const GOOGLE_SCRIPT_URL = 'PASTE_YOUR_WEB_APP_URL_HERE';`.
3. detailed instructions on where to paste it are in the comments of the code I updated.

DONE! Now when someone places an order, it will appear in your sheet.
