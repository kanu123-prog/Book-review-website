


# 📚 BookReview Platform (MERN)

A modern and responsive web platform where users can explore, review, and share their thoughts about their favorite books. Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** with secure authentication, book suggestion features, and a sleek admin dashboard.

---

## 🌐 Live Website

👉 [Visit BookReview Platform](https://book-review-website-nmce.vercel.app/)

---

## 🚀 Tech Stack

**Frontend:**

- React.js
- Axios
- Tailwind CSS

**Backend:**

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT & Google OAuth (Passport.js)
- Multer (File Uploads)
- Helmet, XSS-Clean, Express-Mongo-Sanitize, HPP

---



## ✨ Key Features

- 🔍 Search books by category or name
- 📚 Suggest books if not already available
- 🔐 Login with Email or Google
- 📝 Post and read book reviews
- 👥 View reviews from other users
- 🛠️ Admin dashboard for managing:
  - Books
  - Book suggestions
- 📱 Fully responsive and modern UI design
- 🛡️ Secure backend API with authentication and data protection

---

## 🏗️ Project Structure

### 🔧 Backend (MERN)

Follows **MVC (Model-View-Controller)** architecture:

```

BookReview-Platform-MERN-BE/
│
├── src/
│   ├── model/          # Mongoose schemas
│   ├── controller/     # Business logic
│   ├── route/          # API endpoints
│   ├── middleware/     # Auth, error handlers, etc.
│   ├── config/         # DB and environment config
│   ├── app.js          # App-level config and middleware
│
├── server.js           # App entry point
└── package.json

```

### 🎨 Frontend (React)

Modular and scalable React project structure:

```

BookReview-Platform-MERN-FE/
│
├── src/
│   ├── Components/     # UI components
│   ├── Pages/          # App pages (Home, Book Details, Login, etc.)
│   ├── Hooks/          # Custom React hooks
│   ├── Providers/      # Context API providers
│   ├── api.js          # Axios configuration
│   └── App.js
│
├── public/             # Static assets
└── package.json

````

---

## ⚙️ Local Setup Instructions

### 1️⃣ Backend Setup

#### Prerequisites:

- Node.js v14+
- MongoDB (local or Atlas)
- Google OAuth Credentials

#### Steps:

```bash
git clone https://github.com/ashwinn-si/BookReview-Platform-MERN-BE.git
cd BookReview-Platform-MERN-BE
npm install
````

Create a `.env` file in the root:

```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Email service (if used)
mailID=your_email
mailPass=your_email_password

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback
GOOGLE_REDIRECT_URL=http://localhost:3000/profile

CLIENT_URL=http://localhost:3000
SALT_VALUE=20
```

Start backend server:

```bash
npm start
```

Server will run on: `http://localhost:8000`

---

### 2️⃣ Frontend Setup

```bash
git clone https://github.com/ashwinn-si/BookReview-Platform-MERN-FE.git
cd BookReview-Platform-MERN-FE
npm install
```

Create a `.env` file in the root:

```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_GOOGLE_API_ENDPOINT=http://localhost:8000/api/auth/google
```

Start frontend server:

```bash
npm start
```

App will run on: [http://localhost:3000](http://localhost:3000)

---

## 🔒 Security Implementations

* **JWT Authentication**
* **Google OAuth Login**
* **Password Hashing** using bcrypt
* **Helmet** for setting HTTP headers
* **XSS-Clean** to sanitize user input
* **Express-Mongo-Sanitize** to prevent NoSQL injection
* **HPP** (HTTP Parameter Pollution protection)
* **Rate Limiting** for brute-force protection

---

## 🚨 Error Handling

Centralized error handling middleware provides consistent feedback on:

* Validation errors
* Authentication/Authorization errors
* Not found (404)
* Database/server errors

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE)


