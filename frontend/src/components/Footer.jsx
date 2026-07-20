function Footer() {
    return (

     <footer
         className="text-white text-center py-3 mt-5"
         style={{ backgroundColor: "#3c4043" }}
     >
          <p
                 className="mb-0"
                 style={{
                     fontSize: "16px",
                     fontWeight: "500",
                     letterSpacing: "0.5px"
                 }}
             >
                 <i className="bi bi-c-circle me-1"></i>
                 2026 <strong>Leave Management System</strong>
                 <span className="mx-2">|</span>
                 <i className="bi bi-person-fill me-1"></i>
                 Developed by <strong>Sanjay Kumar</strong>
             </p>
     </footer>
    );
}

export default Footer;