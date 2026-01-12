function doPost(e) {
    try {
        // 1. Parse the incoming JSON data
        // 'e.postData.contents' contains the body sent via fetch()
        var postData = JSON.parse(e.postData.contents);

        // 2. Extract fields
        var name = postData.name || '';
        var phone = postData.phone || '';
        var address = postData.address || '';
        var orderDetails = postData.orderDetails || '';
        var totalAmount = postData.totalAmount || '';

        // 3. Handle File Upload (Screenshot)
        // We expect 'fileData' (Base64 string) and 'mimeType', 'fileName'
        var fileUrl = "No File Uploaded";

        if (postData.fileData && postData.fileName) {
            // Decode Base64 string
            var decodedBlob = Utilities.newBlob(Utilities.base64Decode(postData.fileData), postData.mimeType, postData.fileName);

            // Save to Google Drive (Root folder, or specify a folder ID)
            // If you want a specific folder: DriveApp.getFolderById("YOUR_FOLDER_ID").createFile(decodedBlob)
            var file = DriveApp.createFile(decodedBlob);

            // Make the file accessible via link (Anyone with link can view)
            // This is crucial so you can view it from the spreadsheet
            file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

            fileUrl = file.getUrl();
        }

        // 4. Append to Google Sheet
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var timestamp = new Date();

        // Ensure you have these headers in your sheet:
        // Timestamp | Name | Phone | Address | Order Details | Total | Screenshot Link
        sheet.appendRow([timestamp, name, phone, address, orderDetails, totalAmount, fileUrl]);

        // 5. Return Success Response
        return ContentService.createTextOutput(JSON.stringify({ "status": "success", "fileUrl": fileUrl }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return Error Response
        return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
