// Import useState Hook to store email and password
import { useState } from "react";

// Import useNavigate Hook to move to another page
import { useNavigate } from "react-router-dom";

// Import Axios instance
import api from "../services/api";

// Create Login Component
function Login() {

    // State variable for Email
    const [email, setEmail] = useState("");

    // State variable for Password
    const [password, setPassword] = useState("");

    // Hook used for page navigation
    const navigate = useNavigate();

    // Login Function
    const handleLogin = async () => {

        try {

            // Send login request to backend
            const response = await api.post("/auth/login", {
                email,
                password
            });

            // Store JWT Token
            localStorage.setItem("token", response.data.token);

            // Store User Role
            localStorage.setItem("role", response.data.role);

            // Store User Email (Optional)
            localStorage.setItem("email", response.data.email);

            console.log("Login Response:", response.data);

            // Navigate to Dashboard
            navigate("/dashboard");

        } catch (error) {

            console.log("Full Error:", error);

            // Backend returned error
            if (error.response) {

                console.log("Status:", error.response.status);

                console.log("Response:", error.response.data);

                alert("Status : " + error.response.status);

            }

            // No response from backend
            else if (error.request) {

                console.log("No response received:", error.request);

                alert("No response from server");

            }

            // Other JavaScript error
            else {

                console.log("Error message:", error.message);

                alert(error.message);

            }

        }

    };

    // UI
       return (
           <div className="login-page">
               <div className="container-box">

            <h1>Leave Management System</h1>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                className="btn btn-primary w-100"
                onClick={handleLogin}
            >
                Login
            </button>

                </div>
            </div>
        );
};

// Export Component
export default Login;