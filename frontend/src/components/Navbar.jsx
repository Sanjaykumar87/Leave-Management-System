import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/dashboard">
                    🏢 Leave Management System
                </Link>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav me-auto">

                        {/* Employees - Admin Only */}
                        {role === "ADMIN" && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/employees">
                                    <i className="bi bi-people-fill me-2"></i>
                                    Employees
                                </Link>
                            </li>
                        )}

                        {/* Apply Leave - Everyone */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/apply-leave">
                                <i className="bi bi-calendar-check me-2"></i>
                                Apply Leave
                            </Link>
                        </li>

                        {/* My Leaves - Everyone */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-leaves">
                                <i className="bi bi-card-checklist me-2"></i>
                                My Leaves
                            </Link>
                        </li>

                        {/* Admin Leave - Admin Only */}
                        {role === "ADMIN" && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin-leaves">
                                    <i className="bi bi-person-workspace me-2"></i>
                                    Admin Leave
                                </Link>
                            </li>
                        )}

                    </ul>

                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </button>

                </div>

            </div>
        </nav>
    );
}


export default Navbar;