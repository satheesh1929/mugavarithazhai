# Mugavari Thazhai - E-commerce Website

A premium, static e-commerce website for **Mugavari Thazhai**, specializing in authentic cold-pressed oils and sustainable coconut shell crafts from Pollachi, Tamil Nadu.

## 🌐 Live Website
**[https://mugavarithazhai.in/](https://mugavarithazhai.in/)**

## ✨ Key Features

### 🛍️ Shopping Experience
-   **Dynamic Product Catalog**: Detailed product pages with image galleries, specifications, and customer reviews.
-   **Smart Cart System**: LocalStorage-based cart that persists across sessions.
-   **Special Offers logic**: automated "Buy 1L Oil, Get Free Scrubber" logic applied in cart.
-   **Delivery Calculation**: Automatic addition of ₹50 delivery charge to the total.
-   **Bilingual Support**: Full website translation available in **English** and **Tamil** (Toggleable).

### 💳 Checkout & Payment Flow
-   **Seamless Checkout**: Integrated form for shipping details.
-   **QR Code Payment**: Users can pay via UPI QR code (Razorpay/GPay integration visually).
-   **Payment Verification system**: Users upload a payment screenshot which is automatically sent to the backend.
-   **Automated Order Processing**: 
    -   Order details + Screenshot are sent to a **Google Sheet** via Google Apps Script.
    -   Automatic **WhatsApp redirect** pre-filled with order summary to send to the merchant.

### 🎨 Design & UI
-   **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop.
-   **Modern Aesthetics**: Glassmorphism effects, smooth gradients, and custom animations (Blob effects, Marquees).
-   **Interactive Elements**: Hover effects, confetti animations on "Add to Cart", and dynamic tabs.

## 🛠️ Technologies Used

-   **Frontend**: HTML5, Vanilla JavaScript.
-   **Styling**: Tailwind CSS (CDN) + FontAwesome Icons.
-   **Fonts**: Google Fonts (Poppins).
-   **Backend / Data**: Google Apps Script (Serverless handling of form data), Google Sheets (Database).
-   **Analytics**: Google Analytics (GA4).

## 📂 Project Structure

-   `index.html` - Landing page with hero, categories, and testimonials.
-   `products.html` - Product listing grid.
-   `product-details.html` - Dynamic product view using URL parameters.
-   `cart.html` - Shopping cart management.
-   `payment.html` - Checkout form and payment upload.
-   `js/product-data.js` - Centralized JSON-like data for all products.
-   `js/translations.js` - Dictionary for English/Tamil translations.

## 🚀 How to Run Locally

Since this is a static website, no complex build tools are required.

1.  **Clone or Download** the repository.
2.  **Open** the folder in VS Code or your preferred editor.
3.  **Run**: Double-click `index.html` to open in a browser, or use various "Live Server" extensions to run a local dev server.

---
*Developed with ❤️ for Mugavari Thazhai*
