# 📚 BookReview Platform - Frontend (MERN)

A modern and responsive web platform where users can explore, review, and share their thoughts about their favorite books.

This repository contains the **frontend** codebase of the BookReview Platform project.

---

## 🌐 Live Website

👉 [Visit Live Website](https://book-review-ashwin.vercel.app/)

---

## 🚀 Tech Stack

- **Frontend:** React.js, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

---

## 📂 Backend Repository

👉 [BookReview Platform Backend Repository](https://github.com/ashwinn-si/BookReview-Platform-MERN-BE)

---

## ✨ Features

- 🔍 Search for books by category or name.
- 📚 Suggest books if not already available.
- 🔐 Log in with Email or Google.
- 📝 Leave reviews on books.
- 👥 View reviews from other users.
- 📱 Fully responsive and modern UI design.
- 🛠️ Admin dashboard for:
  - Adding and removing books.
  - Managing book suggestions.
- 🛡️ Secure API interactions with backend services.

---

## 🧩 Project Structure

```
BookReview-Platform-MERN-FE/
│
├── src/
│   ├── Components/     # Reusable UI components
│   ├── Pages/          # Application pages (Home, Login, Book Details, etc.)
│   ├── Hooks/          # Custom React Hooks
│   ├── Providers/      # Context API Providers
│   ├── api.js          # Axios setup for API calls
│   └── App.js          # Main App entry point
│
├── public/             # Static assets
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation (this file)
```

---

## ⚙️ Installation & Setup

Follow the steps below to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashwinn-si/BookReview-Platform-MERN-FE.git
   cd BookReview-Platform-MERN-FE
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```bash
   REACT_APP_API_URL=
   REACT_APP_GOOGLE_API_ENDPOINT=
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   The app will be available at: [http://localhost:3000](http://localhost:3000)

5. **Important:**
   - Make sure your backend server is also running locally.
   - Alternatively, configure the frontend to connect to your deployed backend.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
