# Collabzz Team Task Manager API

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcryptjs

---

## 📦 Setup Instructions

1. Clone the repository
2. Run:
   npm install

3. Create a `.env` file in root:

PORT=8000  
MONGO_URI=your_mongo_uri  
JWT_SECRET=your_secret  

4. Start server:
   npm run dev

Server runs at:
http://localhost:8000

---

## 🔐 Authentication

### Register
POST /auth/register

Body:
{
  "name": "John",
  "email": "john@test.com",
  "password": "123456"
}

### Login
POST /auth/login

Returns JWT token.

Use token in header:

Authorization: Bearer <token>

---

## 📋 Task Routes (Protected)

### Create Task
POST /tasks

### Get Tasks (With Pagination)
GET /tasks?page=1&limit=5

### Filter by Status
GET /tasks?status=todo

### Get Task by ID
GET /tasks/:id

### Update Task
PUT /tasks/:id

### Delete Task
DELETE /tasks/:id

---

## 📌 Business Rules Implemented

- Passwords are securely hashed
- JWT-based authentication
- Only task creator can update or delete tasks
- Task status restricted to:
  - todo
  - in-progress
  - done
- Pagination implemented for scalability
- Proper HTTP status codes used
