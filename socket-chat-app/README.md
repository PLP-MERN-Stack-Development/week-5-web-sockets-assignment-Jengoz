# Socket.io Chat App

A real-time chat application built with React, Node.js, Express, and Socket.io.

---

## 📁 Project Structure

```
socket-chat-app/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # UI components (Chat, Login, etc.)
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── socket/         # Socket.io client setup
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Node.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Socket event handlers
│   ├── models/             # Data models
│   ├── socket/             # Socket.io server setup
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

---

## 🚀 Features

- Real-time messaging using Socket.io
- Simple username-based authentication
- Typing indicators
- Online/offline user status
- Private messaging
- Responsive UI (desktop & mobile)

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (for database)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd socket-chat-app
```

### 2. Server Setup

```bash
cd server
npm install
```

- Create a `.env` file in the `server` folder:
  ```
  MONGO_URL=mongodb+srv://<db_username>:<password>@cluster0.o1jzay4.mongodb.net/socket-chat-app?retryWrites=true&w=majority&appName=Cluster0
  PORT=5000
  ```

### 3. Client Setup

```bash
cd client
npm install
```

### 4. Run the Development Servers

- Start the server:
  ```bash
  npm run dev
  ```
- Start the client:
  ```bash
  npm run dev
  ```

---

## 📸 Screenshots

screenshots--socket-chat-app\screenshots\Screenshot (75).png

---

## 🌐 Deployment

- Server: Deploy to Render, Railway, or Heroku
- Client: Deploy to Vercel, Netlify, or GitHub Pages



---

## ✨ Credits

Built by [Moses Jengo]