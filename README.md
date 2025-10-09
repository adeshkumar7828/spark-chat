# ⚡ Spark Chat App

A **real-time chat application** built using **React**, **Redux Toolkit Query**, and **Socket.io** — enabling users to send and receive messages instantly.
Spark Chat is designed for clean UI, modular code, and real-time performance.

---

## 🚀 Features

✅ **User Authentication** — Login, register, and maintain sessions via cookies.
✅ **One-to-One Chat** — Create private conversations between users.
✅ **Real-time Messaging** — Messages appear instantly using Socket.io.
✅ **Persistent Storage** — All messages and users are stored in MongoDB.
✅ **Modern UI** — Built with TailwindCSS and DaisyUI for a smooth, responsive design.
✅ **Debounced Search** — Search for users in real time with minimal API calls.
✅ **Redux Toolkit Query Integration** — Efficient data fetching with cache and tag invalidation.
✅ **Auto-refresh** — Conversations and messages update automatically when new data arrives.

---

## 🧱 Tech Stack

| Category             | Technology                |
| -------------------- | ------------------------- |
| **Frontend**         | React + Vite              |
| **State Management** | Redux Toolkit & RTK Query |
| **Real-Time Engine** | Socket.io                 |
| **Backend**          | Node.js + Express         |
| **Database**         | MongoDB (via Mongoose)    |
| **Styling**          | TailwindCSS + DaisyUI     |
| **Auth**             | JWT + Cookies             |
| **Dev Tools**        | ESLint, Prettier          |

---

## 🔌 Real-Time Socket Integration

Spark Chat uses **Socket.io** for instant message updates.

## 🔄 RTK Query Integration

Messages are fetched and updated using **RTK Query**.
Whenever a new message is sent, it invalidates the `Messages` tag and triggers real-time cache updates via Socket.io.

---

## 🧑‍💻 Core Components

| Component              | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `Sidebar`              | Displays all conversations and a user search field         |
| `SidebarSearchResults` | Shows search results and allows starting new conversations |
| `MessageList`          | Displays all messages in the selected conversation         |
| `Composer`             | Message input field with real-time send functionality      |
| `Header`               | Top navigation showing current chat or app name            |

---

## 🧠 Future Improvements

* ✅ Group Chats
* ✅ File & Image Uploads
* ✅ Typing Indicators
* ✅ Message Read Receipts
* ✅ Online/Offline User Status
* ✅ Dark Mode Enhancements

---

## 🏁 Author

**Adesh Kumar**

💬 Always learning, always building.
📧 [[your-adesh7828@gmail.com](mailto:adesh7828@gmail.com)]
🌐 [LinkedIn / Portfolio link here]

---

## 📜 License

This project is open-source under the **MIT License**.
Feel free to use, modify, and distribute with attribution.

---

✨ *“Spark Chat — where every message sparks a connection.”* ⚡
