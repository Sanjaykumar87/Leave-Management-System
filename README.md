# 🏢 Leave Management System

A full-stack **Leave Management System** built using **Spring Boot**, **React**, **MySQL**, and **JWT Authentication**. The application provides secure role-based access for **Admins** and **Employees**, allowing employees to apply for leave and administrators to manage employees and approve or reject leave requests.

---

## 📌 Project Description

The Leave Management System is a web application designed to simplify the employee leave process within an organization.

The system provides secure authentication using JWT and supports two user roles:

- **Admin**
- **Employee**

Employees can apply for leave and track the status of their requests, while administrators can manage employee records and approve or reject leave applications.

---

## ✨ Features

### 👨‍💼 Admin

- Secure Login
- Dashboard
- Employee Management
  - Add Employee
  - Update Employee
  - Delete Employee
  - View Employees
- View All Leave Requests
- Approve Leave
- Reject Leave
- Role-Based Authorization

### 👨 Employee

- Secure Login
- Dashboard
- Apply Leave
- View My Leave History
- Track Leave Status
- Logout

---

## 🛠️ Technologies Used

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Hibernate
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

### Tools

- IntelliJ IDEA
- Visual Studio Code
- Postman
- Git
- GitHub

---

## 📷 Screenshots

### Login Page

> Add screenshot here

```
screenshots/login.png
```

---

### Admin Dashboard

> Add screenshot here

```
screenshots/admin-dashboard.png
```

---

### Employee Dashboard

> Add screenshot here

```
screenshots/employee-dashboard.png
```

---

### Employee Management

> Add screenshot here

```
screenshots/employees.png
```

---

### Apply Leave

> Add screenshot here

```
screenshots/apply-leave.png
```

---

### My Leaves

> Add screenshot here

```
screenshots/my-leaves.png
```

---

### Admin Leave Management

> Add screenshot here

```
screenshots/admin-leaves.png
```

---

## 🚀 Installation Steps

### Clone Repository

```bash
git clone https://github.com/Sanjaykumar87/Leave-Management-System.git
```

---

### Backend Setup

```bash
cd backend
```

Configure your **application.properties**

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/leavemanagement
spring.datasource.username=root
spring.datasource.password=yourpassword
```

Run

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8080
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📂 Project Structure

```
Leave-Management-System
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 🔐 User Roles

### Admin

- Employee Management
- View Employees
- Approve Leave
- Reject Leave
- View All Leave Requests

### Employee

- Apply Leave
- View My Leaves
- Track Leave Status

---

## 📌 Future Enhancements

- Email Notifications
- Leave Balance Management
- Forgot Password
- Profile Management
- Search & Filter
- Reports & Analytics
- Pagination
- File Upload for Leave Documents

---

## 👨‍💻 Author

**Sanjay Kumar S**

- GitHub: https://github.com/Sanjaykumar87

---

## ⭐ Support

If you like this project, don't forget to **Star ⭐ the repository**.
