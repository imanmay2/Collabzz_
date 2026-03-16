

# 📄 README.md

```md
# Collabzz Team Task Manager API

A RESTful API built with Node.js, Express, and MongoDB for managing team tasks with JWT-based authentication.

This project was developed as part of the Collabzz Backend Developer Intern Screening Task.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcryptjs (Password Hashing)
- dotenv

---

## 📁 Project Structure

```

collabzz-task-manager/
│
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── utils/
│   └── generateToken.js
├── server.js
└── .env

```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```

git clone <your-repo-link>
cd collabzz-task-manager

```

### 2️⃣ Install Dependencies

```

npm install

```

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory:

```

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

### 4️⃣ Run the Server

```

npm run dev

```

Server will run at:

```

[http://localhost:8000](http://localhost:8000)

````

---

## 🔐 Authentication

### Register User

**POST** `/auth/register`

Body:
```json
{
  "name": "John Doe",
  "email": "john@test.com",
  "password": "123456"
}
````

Returns:

* User info
* JWT token

---

### Login User

**POST** `/auth/login`

Body:

```json
{
  "email": "john@test.com",
  "password": "123456"
}
```

Returns:

* User info
* JWT token

---

## 🔑 Using Protected Routes

All `/tasks` routes require a valid JWT token.

Add this header:

```
Authorization: Bearer <your_token_here>
```

---

## 📋 Task Routes

### Create Task

**POST** `/tasks`

Body:

```json
{
  "title": "Complete API",
  "description": "Finish backend implementation",
  "status": "todo"
}
```

---

### Get All Tasks (With Pagination)

**GET** `/tasks?page=1&limit=5`

Returns paginated tasks.

---

### Filter Tasks by Status

**GET** `/tasks?status=todo`

Allowed status values:

* todo
* in-progress
* done

---

### Get Single Task

**GET** `/tasks/:id`

---

### Update Task

**PUT** `/tasks/:id`

Only the task creator can update.

Body:

```json
{
  "title": "Updated Title",
  "status": "done"
}
```

---

### Delete Task

**DELETE** `/tasks/:id`

Only the task creator can delete.

---

## 📌 Business Rules Implemented

* Passwords are securely hashed using bcrypt.
* JWT-based authentication protects all task routes.
* Only the creator of a task can update or delete it.
* Task status is restricted using enum validation.
* Pagination implemented for scalable task retrieval.
* Proper HTTP status codes used.
* Modular and clean folder structure.

---

## 🧪 Testing

The API was tested using Postman.

Include the exported Postman collection in this repository for easier testing.

---

## 🚀 Optional Improvements (Future Scope)

* Search tasks by title
* Role-based access control (Admin)
* Deployment on cloud platform (Render/Railway)
* Unit testing with Jest

---

## 👨‍💻 Author

Manmay Chakraborty
Backend Developer Intern Candidate

```

---
