import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ApplyLeave() {

    const [leave, setLeave] = useState({
        startDate: "",
        endDate: "",
        reason: ""
    });

    const applyLeave = async () => {

        try {

            const token = localStorage.getItem("token");

            await api.post("/leaves", leave, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Leave Applied Successfully");

            setLeave({
                startDate: "",
                endDate: "",
                reason: ""
            });

        } catch (error) {
            console.log(error);
            alert("Failed to Apply Leave");
        }
    };

    return (
        <>
        <Navbar/>
        <div className="container mt-5">

            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>

                <h2 className="text-center text-primary mb-4">
                    <i className="bi bi-calendar-check me-2"></i>
                    Apply Leave
                </h2>

                <div className="mb-3">
                    <label className="form-label">Start Date</label>

                    <input
                        type="date"
                        className="form-control"
                        value={leave.startDate}
                        onChange={(e) =>
                            setLeave({ ...leave, startDate: e.target.value })
                        }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">End Date</label>

                    <input
                        type="date"
                        className="form-control"
                        value={leave.endDate}
                        onChange={(e) =>
                            setLeave({ ...leave, endDate: e.target.value })
                        }
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">Reason</label>

                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Enter Leave Reason"
                        value={leave.reason}
                        onChange={(e) =>
                            setLeave({ ...leave, reason: e.target.value })
                        }
                    ></textarea>
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
                        onClick={applyLeave}
                    >
                     <i className="bi bi-calendar-check me-2"></i>
                        Apply Leave
                    </button>

                </div>

            </div>

        </div>
        <Footer/>
        </>
    );
}

export default ApplyLeave;