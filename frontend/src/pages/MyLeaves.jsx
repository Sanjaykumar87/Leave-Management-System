import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyLeaves() {

    const [leaves, setLeaves] = useState([]);
    const role = localStorage.getItem("role");


    useEffect(() => {
        fetchLeaves();
    }, []);

    const fetchLeaves = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/leaves", {
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

   return (
       <>
       <Navbar/>

       <div className="container mt-5">

           <div className="card shadow p-4">

               <h2 className="text-center text-primary mb-4">
                   <i className="bi bi-card-checklist me-2"></i>
                   My Leave History
               </h2>

               {role === "EMPLOYEE" && leaves.length > 0 && (
                   <div className="alert alert-info text-center shadow-sm mb-4">
                       <h5 className="mb-1">
                           <i className="bi bi-person-circle me-2"></i>
                           {leaves[0].employeeName}
                       </h5>

                       <small>
                           <i className="bi bi-envelope-fill me-2"></i>
                           {leaves[0].employeeEmail}
                       </small>
                   </div>
               )}


               <table className="table table-bordered table-hover text-center align-middle">

                   <thead className="table-primary text-center">
                       <tr>
                           <th>ID</th>
                           <th>Employee Name</th>
                           <th>Email</th>
                           <th>Start Date</th>
                           <th>End Date</th>
                           <th>Reason</th>
                           <th>Status</th>
                       </tr>
                   </thead>


                   <tbody>

                       {leaves.map((leave) => (

                           <tr key={leave.id}>

                               <td>{leave.id}</td>

                               <td>{leave.employeeName}</td>

                               <td>{leave.employeeEmail}</td>

                               <td>{leave.startDate}</td>

                               <td>{leave.endDate}</td>

                               <td>{leave.reason}</td>

                               <td>

                                   {leave.status === "PENDING" && (
                                       <span className="badge bg-warning text-dark">
                                           PENDING
                                       </span>
                                   )}

                                   {leave.status === "APPROVED" && (
                                       <span className="badge bg-success">
                                           APPROVED
                                       </span>
                                   )}

                                   {leave.status === "REJECTED" && (
                                       <span className="badge bg-danger">
                                           REJECTED
                                       </span>
                                   )}

                               </td>

                           </tr>
                       ))}

                   </tbody>

               </table>

               <div className="text-center mt-3">

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
       <Footer/>
       </>
   );
}

export default MyLeaves;
