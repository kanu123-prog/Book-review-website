#📚 BookReview Platform - Backend (MERN)

A modern web platform where users can explore, review, and share their thoughts about their favorite books.

This repository contains the **backend** codebase of the BookReview Platform project.

---

## 🌐 Live Demo

👉 [Visit Live Website](https://book-review-ashwin.vercel.app/)

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT, Passport (Google OAuth)
- **File Upload:** Multer
- **Security:** Helmet, XSS-Clean, Express-Mongo-Sanitize, HPP
- **Request Validator:** Express-Validator

---

## 📂 Frontend Repository

👉 [BookReview Platform Frontend Repository](https://github.com/ashwinn-si/BookReview-Platform-MERN-FE)

---

## 🏗️ Backend Structure

The backend follows the **MVC (Model-View-Controller)** architecture for a clean separation of concerns.

```
BookReview-Platform-MERN-BE/
│
├── src/
│   ├── model/          # Mongoose models (Schemas)
│   ├── controller/     # Controller logic for handling requests
│   ├── route/          # API routes (endpoints)
│   ├── middleware/     # Middleware for authentication, error handling, etc.
│   ├── config/         # Configuration files (DB connection, environment variables)
│   ├── app.js          # Express app - setup for middlewares and routes
│
├── server.js           # Main entry point - connects DB and starts the server
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation (this file)
```

---

## 📋 Prerequisites

Before getting started, make sure you have the following:

- **Node.js** (v14 or higher)
- **MongoDB instance** (local or hosted on Atlas)
- **Google OAuth credentials** (for social login integration)

---

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashwinn-si/BookReview-Platform-MERN-BE.git
   cd BookReview-Platform-MERN-BE
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with the following variables:
   ```bash
   MONGODB_URL=your_mongodb_connection_string

   JWT_SECRET=your_jwt_secret
   
   # Email configuration (for email notifications)
   mailID=your_email_service
   mailPass=your_email_password
   
   # Google OAuth credentials
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback
   GOOGLE_REDIRECT_URL=http://localhost:3000/profile

   CLIENT_URL=http://localhost:3000

   SALT_VALUE=20
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   The backend server will now be running locally.

---

## 🔒 Security Implementations

This backend includes several key security features to protect both the system and its users:

- **JSON Web Tokens (JWT)** for secure user authentication
- **Password hashing** with bcrypt for secure password storage
- **HTTP security headers** using Helmet to secure the API
- **Rate limiting** to prevent brute-force attacks
- **Data sanitization** with Express-Mongo-Sanitize to prevent NoSQL injection
- **XSS protection** through XSS-Clean
- **Parameter pollution prevention** (HPP)

---

## 🚨 Error Handling

The API features a global error-handling middleware that ensures consistent and informative error responses, including:

- Validation errors
- Authentication errors
- Authorization errors
- Resource not found errors
- Database errors

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
