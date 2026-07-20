# 🏢 Leave Management System

A modern, full-stack **Leave Management System** built using **Spring Boot**, **React**, **MySQL**, and **JWT Authentication**. The application streamlines employee leave management by providing secure role-based access for **Administrators** and **Employees**.

---

## 📖 Overview

The Leave Management System is designed to automate the leave request workflow within an organization. Employees can apply for leave and monitor their leave history, while administrators can efficiently manage employees and approve or reject leave requests through a secure and user-friendly interface.

---

## ✨ Key Features

### 🔐 Authentication & Security
- JWT-based Authentication
- Spring Security Integration
- Password Encryption using BCrypt
- Role-Based Authorization
- Secure REST APIs

---

### 👨‍💼 Admin Features

- Dashboard
- Employee Management
  - Add Employee
  - Update Employee
  - Delete Employee
  - View Employee Details
- View All Leave Requests
- Approve Leave Requests
- Reject Leave Requests
- Manage Employee Records

---

### 👨 Employee Features

- Secure Login
- Dashboard
- Apply Leave
- View Leave History
- Track Leave Status
- Logout

---

## 🛠️ Tech Stack

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA (Hibernate)
- JWT Authentication
- Maven
- MySQL

### Frontend

- React
- Vite
- Bootstrap 5
- Bootstrap Icons
- Axios
- React Router DOM

### Database

- MySQL

### Development Tools

- IntelliJ IDEA
- Visual Studio Code
- Postman
- Git
- GitHub

---

# 📸 Application Screenshots

## 🔐 Login Page

> Add Screenshot

```
screenshots/login.png
```

---

## 📊 Admin Dashboard

> Add Screenshot

```
screenshots/admin-dashboard.png
```

---

## 👤 Employee Dashboard

> Add Screenshot

```
screenshots/employee-dashboard.png
```

---

## 👥 Employee Management

> Add Screenshot

```
screenshots/employees.png
```

---

## 📝 Apply Leave

> Add Screenshot

```
screenshots/apply-leave.png
```

---

## 📋 My Leave History

> Add Screenshot

```
screenshots/my-leaves.png
```

---

## ✅ Admin Leave Management

> Add Screenshot

```
screenshots/admin-leaves.png
```

---

# 📂 Project Structure

```
Leave-Management-System
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sanjaykumar87/Leave-Management-System.git
```

---

## 2️⃣ Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Update your **application.properties**

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/leavemanagement
spring.datasource.username=root
spring.datasource.password=your_password
```

Run the application

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

## 3️⃣ Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start the React application

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🔑 User Roles

## 👨‍💼 Admin

- Employee Management
- View Employees
- Approve Leave
- Reject Leave
- View All Leave Requests

---

## 👨 Employee

- Apply Leave
- View Leave History
- Track Leave Status

---

# 📡 REST API Modules

- Authentication API
- Employee API
- Leave API

---

# 📈 Future Enhancements

- Forgot Password
- Email Notifications
- Leave Balance Calculation
- Search & Filter
- Pagination
- Export Reports (PDF / Excel)
- Employee Profile Management
- Cloud Deployment

---

# 🎯 Learning Outcomes

This project demonstrates practical knowledge of:

- Spring Boot REST APIs
- Spring Security
- JWT Authentication
- React Development
- State Management
- Axios API Integration
- MySQL Database Design
- CRUD Operations
- Role-Based Authorization
- Full-Stack Application Development

---

# 👨‍💻 Author

## Sanjay Kumar S

Computer Science and Engineering Student

GitHub:
https://github.com/Sanjaykumar87

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects.

---

## 📜 License

This project is developed for learning and educational purposes.
