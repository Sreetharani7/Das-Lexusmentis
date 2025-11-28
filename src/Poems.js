import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
function Poems() {
  const [poems, setPoems] = useState([]);
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://das-lexusmentis-backend-1.onrender.com/api/episodes")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch poems");
        return res.json();
      })
      .then((data) => setPoems(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    <div>
            <Navbar/>
        <header id="podcast" className="text-center py-5 border-bottom border-warning heading">
        <div className="heading-overlay"> 
            <img src="logo.png" alt="Podcast Logo" className="rounded shadow mb-3" style={{ width: "180px" }} /> 
            {/*<img src="anna6.png" alt="Podcast Logo" width="200" /> */} 
            <h1 className="fw-bold">POEMS</h1>
            
             </div> </header> 
    <div className="container py-5">
      <h2 className="text-warning">All Poems</h2>
      <div className="row g-4">
        {poems.map((poem, index) => (
          <div className="col-md-3" key={index} data-aos="zoom-in">
            <div
              className="card text-center poem-card"
              onClick={() => setSelectedPoem(poem)}
              style={{ cursor: "pointer" }}
            >
              <div className="card-body">
                <h5 className="card-title">{poem.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPoem && (
        <div className="poem-overlay" style={{ backgroundImage: `url(${selectedPoem.bg})` }}>
          <div className="poem-content">
            <h2 className="text-warning">{selectedPoem.title}</h2>
            <pre className="text-light">{selectedPoem.content}</pre>
            <button className="btn btn-gold mt-3" onClick={() => setSelectedPoem(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div></div>
   <section id="contact" className="container py-5 text-center heading-overlay" data-aos="fade-up"> 
        <h2 className="text-warning">Contact</h2> 
        <p className="text-light">dr.lexusmentis@gmail.com</p> 
        {/* Social Icons */}
         <div className="d-flex justify-content-center gap-4 mt-3 ">
             <a href="https://instagram.com/dr_lexusmentis" target="_blank" rel="noopener noreferrer" className="text-light fs-3" >
              <i className="fa-brands fa-instagram"></i>
               </a>
                <a href="https://www.youtube.com/@dr_lexusmentis" target="_blank" rel="noopener noreferrer" className="text-light fs-3" >
                 <i className="fa-brands fa-youtube"></i> </a> 
                 <a href="https://www.linkedin.com/in/hareesh-anandan-242263304/" target="_blank" rel="noopener noreferrer" className="text-light fs-3" > 
                 <i className="fa-brands fa-linkedin"></i> </a> </div> 
                 </section>
    <footer> <small className="text-light"> © 2025 Des Lexusmentis | All Rights Reserved </small> </footer> 
  </>
  );
}

export default Poems;
