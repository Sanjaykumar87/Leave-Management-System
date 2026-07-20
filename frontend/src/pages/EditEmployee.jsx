import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function EditEmployee() {

    const { id } = useParams();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        department: "",
        designation: "",
        salary: "",
        role: ""
    });

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get(`/employees/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setEmployee({
                ...response.data,
                password: ""
            });

        } catch (error) {
            console.log(error);
            alert("Failed to load employee");
        }
    };

    const updateEmployee = async () => {
        try {
            const token = localStorage.getItem("token");

            await api.put(`/employees/${id}`, employee, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Employee Updated Successfully");

        } catch (error) {
            console.log(error);
            alert("Failed to Update Employee");
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
                    <i className="bi bi-pencil-square me-2"></i>
                    Edit Employee
                </h2>

                <p className="text-center fw-bold">
                    Employee ID : {id}
                </p>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={employee.name}
                        onChange={(e) =>
                            setEmployee({ ...employee, name: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={employee.email}
                        onChange={(e) =>
                            setEmployee({ ...employee, email: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={employee.password}
                        placeholder="Enter New Password"
                        onChange={(e) =>
                            setEmployee({ ...employee, password: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input
                        type="text"
                        className="form-control"
                        value={employee.department}
                        onChange={(e) =>
                            setEmployee({ ...employee, department: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Designation</label>
                    <input
                        type="text"
                        className="form-control"
                        value={employee.designation}
                        onChange={(e) =>
                            setEmployee({ ...employee, designation: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input
                        type="number"
                        className="form-control"
                        value={employee.salary}
                        onChange={(e) =>
                            setEmployee({ ...employee, salary: e.target.value })
                        }
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">Role</label>

                    <select
                        className="form-select"
                        value={employee.role}
                        onChange={(e) =>
                            setEmployee({ ...employee, role: e.target.value })
                        }
                    >
                        <option value="ADMIN">ADMIN</option>
                        <option value="EMPLOYEE">EMPLOYEE</option>
                    </select>

                </div>

                <div className="d-flex justify-content-between">

                    <button
                        className="btn btn-secondary"
                        onClick={() => window.history.back()}
                    >
                    <i className="bi bi-arrow-left-circle me-2"></i>
                        Back
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={updateEmployee}
                    >
                    <i className="bi bi-pencil-square me-2"></i>
                        Update Employee
                    </button>

                </div>

            </div>

        </div>
        <Footer/>
        </>
    );
}

export default EditEmployee;