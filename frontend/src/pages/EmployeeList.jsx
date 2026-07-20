import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/employees", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setEmployees(response.data);

        } catch (error) {
            console.log(error);
            alert("Failed to fetch employees");
        }
    };
const deleteEmployee = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        const token = localStorage.getItem("token");

        await api.delete(`/employees/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        alert("Employee Deleted Successfully");

        fetchEmployees();

    } catch (error) {
        console.log(error);
        alert("Failed to Delete Employee");
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

           <div className="d-flex justify-content-between align-items-center mb-5">

                  <div>

                      <Link to="/dashboard">
                          <button className="btn btn-secondary btn-lg me-3">
                              ← Dashboard
                          </button>
                      </Link>

                      <h2 className="d-inline text-primary fw-bold mb-0">
                          Employee Management
                      </h2>

                  </div>

                  <Link to="/add-employee">
                      <button className="btn btn-success btn-lg">
                          + Add Employee
                      </button>
                  </Link>

              </div>

              <table className="table table-bordered table-hover shadow text-center align-middle">
               <thead className="table-primary">

                   <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Department</th>
                       <th>Designation</th>
                       <th>Actions</th>
                   </tr>

               </thead>

               <tbody>
                   {employees.map((employee) => (
                       <tr key={employee.id}>

                           <td>{employee.id}</td>

                           <td>{employee.name}</td>

                           <td>{employee.email}</td>

                           <td>{employee.department}</td>

                           <td>{employee.designation}</td>

                           <td>

                               <Link to={`/edit-employee/${employee.id}`}>
                                   <button className="btn btn-warning btn-sm me-2">
                                       Edit
                                   </button>
                               </Link>

                               <button
                                   className="btn btn-danger btn-sm"
                                   onClick={() => deleteEmployee(employee.id)}
                               >
                                   Delete
                               </button>

                           </td>

                       </tr>
                   ))}
               </tbody>

           </table>

       </div>
       <Footer/>
       </>
   );
   }

export default EmployeeList;
