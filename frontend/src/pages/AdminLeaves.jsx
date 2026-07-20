import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminLeaves() {

    const navigate = useNavigate();

    const [leaves, setLeaves] = useState([]);

    useEffect(() => {

        const role = localStorage.getItem("role");

        if (role !== "ADMIN") {
            alert("Access Denied!");
            navigate("/dashboard");
            return;
        }

        fetchLeaves();

    }, []);

    const fetchLeaves = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/leaves/admin", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setLeaves(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to Load Leaves");

        }

    };

    const approveLeave = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await api.put(`/leaves/${id}/approve`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Leave Approved Successfully");

            fetchLeaves();

        } catch (error) {

            console.log(error);
            alert("Approval Failed");

        }

    };

    const rejectLeave = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await api.put(`/leaves/${id}/reject`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Leave Rejected Successfully");

            fetchLeaves();

        } catch (error) {

            console.log(error);
            alert("Reject Failed");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="card shadow p-4">

                    <h2 className="text-center text-primary mb-4">
                        <i className="bi bi-person-workspace me-2"></i>
                        Admin Leave Management
                    </h2>

                    <div className="table-responsive">

                        <table className="table table-striped table-bordered table-hover align-middle">

                            <thead className="table-primary text-center">

                                <tr>
                                    <th>ID</th>
                                    <th>Employee Name</th>
                                    <th>Email</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Reason</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                {leaves.map((leave) => (

                                    <tr key={leave.id}>

                                        <td className="text-center">{leave.id}</td>

                                        <td>{leave.employeeName}</td>

                                        <td className="text-start">
                                            {leave.employeeEmail}
                                        </td>

                                        <td>{leave.startDate}</td>

                                        <td>{leave.endDate}</td>

                                        <td className="text-start">
                                            {leave.reason}
                                        </td>

                                        <td className="text-center">

                                            {leave.status === "PENDING" && (
                                                <span className="badge bg-warning text-dark">
                                                    PENDING
                                                </span>
                                            )}

                                            {leave.status === "APPROVED" && (
                                                <span className="badge bg-success">
                                                    <i className="bi bi-check-circle-fill me-1"></i>
                                                    APPROVED
                                                </span>
                                            )}

                                            {leave.status === "REJECTED" && (
                                                <span className="badge bg-danger">
                                                    <i className="bi bi-x-circle-fill me-1"></i>
                                                    REJECTED
                                                </span>
                                            )}

                                        </td>
<td className="text-center">

    <div className="d-flex justify-content-center gap-2">

        <button
            className="btn btn-success btn-sm"
            onClick={() => approveLeave(leave.id)}
            disabled={leave.status !== "PENDING"}
        >
            <i className="bi bi-check-circle-fill me-1"></i>
            Approve
        </button>

        <button
            className="btn btn-danger btn-sm"
            onClick={() => rejectLeave(leave.id)}
            disabled={leave.status !== "PENDING"}
        >
            <i className="bi bi-x-circle-fill me-1"></i>
            Reject
        </button>

    </div>

</td>



                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    <div className="text-center mt-4">

                        <button
                            className="btn btn-secondary"
                            onClick={() => window.history.back()}
                        >
                            <i className="bi bi-arrow-left-circle me-2"></i>
                            Back
                        </button>

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default AdminLeaves;