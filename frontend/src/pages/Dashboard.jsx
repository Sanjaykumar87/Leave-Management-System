import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {

    const role = localStorage.getItem("role");

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        window.location.href = "/";
    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-center mb-4">
                    <i className="bi bi-speedometer2 me-2"></i>
                    Leave Management Dashboard
                </h2>

                <div className="row justify-content-center">

                    {/* Employee Management - Admin Only */}
                    {role === "ADMIN" && (
                        <div className="col-md-5 mb-4">
                            <div className="card shadow h-100 p-3">
                                <h4>
                                    <i className="bi bi-people-fill me-2"></i>
                                    Employee Management
                                </h4>

                                <p>
                                    Add, Edit and Delete Employees.
                                </p>

                                <Link to="/employees">
                                    <button className="btn btn-primary">
                                        Open
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Apply Leave */}
                    <div className="col-md-5 mb-4">
                        <div className="card shadow h-100 p-3">
                            <h4>
                                <i className="bi bi-calendar-check me-2"></i>
                                Apply Leave
                            </h4>

                            <p>
                                Submit a new leave request.
                            </p>

                            <Link to="/apply-leave">
                                <button className="btn btn-success">
                                    Apply
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* My Leaves */}
                    <div className="col-md-5 mb-4">
                        <div className="card shadow h-100 p-3">
                            <h4>
                                <i className="bi bi-card-checklist me-2"></i>
                                My Leaves
                            </h4>

                            <p>
                                View your leave history.
                            </p>

                            <Link to="/my-leaves">
                                <button className="btn btn-warning text-white">
                                    View
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Admin Leave Management - Admin Only */}
                    {role === "ADMIN" && (
                        <div className="col-md-5 mb-4">
                            <div className="card shadow h-100 p-3">
                                <h4>
                                    <i className="bi bi-person-workspace me-2"></i>
                                    Admin Leave Management
                                </h4>

                                <p>
                                    Approve or Reject Leave Requests.
                                </p>

                                <Link to="/admin-leaves">
                                    <button className="btn btn-info text-white">
                                        Manage
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                </div>

                <div className="text-center mt-4 mb-5">
                    <button
                        className="btn btn-danger px-4"
                        onClick={logout}
                    >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </button>
                </div>

            </div>

            <Footer />
        </>
    );
}

export default Dashboard;