function doPost(e) {
    try {
        // 1. Parse the incoming JSON data
        var postData = JSON.parse(e.postData.contents);

        // 2. Extract fields
        var name = postData.name || '';
        var phone = postData.phone || '';
        var email = postData.email || '';
        var address = postData.address || '';
        var orderDetails = postData.orderDetails || '';
        var totalAmount = postData.totalAmount || '';

        // 3. Handle File Upload (Screenshot)
        var fileUrl = "No File Uploaded";

        if (postData.fileData && postData.fileName) {
            // Decode Base64 string
            var decodedBlob = Utilities.newBlob(Utilities.base64Decode(postData.fileData), postData.mimeType, postData.fileName);

            // Save to Google Drive
            var file = DriveApp.createFile(decodedBlob);
            file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
            fileUrl = file.getUrl();
        }

        // 4. Append to Google Sheet
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var timestamp = new Date();

        // Headers: Timestamp | Name | Phone | Email | Address | Order Details | Total | Screenshot Link
        // NOTE: Make sure to add a new "Email" column in your sheet if it doesn't exist
        sheet.appendRow([timestamp, name, phone, email, address, orderDetails, totalAmount, fileUrl]);

        // 5. Send Email Confirmation
        if (email) {
            var subject = "Order Confirmation - Mugavari Thazhai";
            var body = "Hello " + name + ",\n\n" +
                "Thank you for your order!\n\n" +
                "Order Details:\n" + orderDetails + "\n\n" +
                "Total Amount: ₹" + totalAmount + "\n\n" +
                "We have received your payment screenshot. We will process your order shortly.\n\n" +
                "Best Regards,\nMugavari Thazhai";

            var htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0E2C18; padding: 20px; text-align: center; color: white;">
            <h2 style="margin: 0;">Order Confirmed!</h2>
          </div>
          <div style="padding: 20px;">
            <p>Hello <strong>${name}</strong>,</p>
            <p>Thank you for shopping with us. We have received your order and payment details.</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #0E2C18;">Order Summary</h3>
              <p style="white-space: pre-line;">${orderDetails.split(', ').join('<br>')}</p>
              <hr style="border: 0; border-top: 1px solid #e0e0e0; margin: 10px 0;">
              <p style="font-weight: bold; font-size: 18px; color: #0E2C18;">Total: ₹${totalAmount}</p>
            </div>
            
            <p>We will start packing your order immediately.</p>
            <p>If you have any questions, you can reply to this email or contact us on WhatsApp.</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #888;">
            &copy; 2026 Mugavari Thazhai
          </div>
        </div>
      `;

            MailApp.sendEmail({
                to: email,
                subject: subject,
                body: body,
                htmlBody: htmlBody
            });
        }

        // 6. Return Success Response
        return ContentService.createTextOutput(JSON.stringify({ "status": "success", "fileUrl": fileUrl }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return Error Response
        return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
