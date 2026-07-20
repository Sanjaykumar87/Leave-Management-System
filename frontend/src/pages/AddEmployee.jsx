import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";



function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        department: "",
        designation: "",
        salary: "",
        role: ""
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post("/employees", employee);

            alert("Employee Added Successfully");

            navigate("/employees");

        }
    catch (error) {

        console.log("Full Error:", error);

        if (error.response) {
            console.log("Status:", error.response.status);
            console.log("Response:", error.response.data);

            alert("Status : " + error.response.status);
        } else if (error.request) {
            alert("No response from server");
        } else {
            alert(error.message);
        }
    }
const navigate = useNavigate();

useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "ADMIN") {
        alert("Access Denied!");
        navigate("/dashboard");
    }
}, []);

    };

    return (
        <>
        <Navbar/>
        <div className="container mt-5">

            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>

                <h2 className="text-center text-primary mb-4">
                    <i className="bi bi-person-plus-fill me-2"></i>
                    Add Employee
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter Password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <input
                            type="text"
                            name="department"
                            className="form-control"
                            placeholder="Enter Department"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            className="form-control"
                            placeholder="Enter Designation"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input
                            type="number"
                            name="salary"
                            className="form-control"
                            placeholder="Enter Salary"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Role</label>

                        <select
                            name="role"
                            className="form-select"
                            onChange={handleChange}
                        >
                            <option value="">Select Role</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="EMPLOYEE">EMPLOYEE</option>
                        </select>
                    </div>

                    <div className="d-flex justify-content-between">

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate("/employees")}
                        >
                        <i className="bi bi-arrow-left-circle me-2"></i>
                            Back
                        </button>

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                         <i className="bi bi-save me-2"></i>
                            Save Employee
                        </button>

                    </div>

                </form>

            </div>

        </div>

        <Footer/>

        </>
    );
}

export default AddEmployee;