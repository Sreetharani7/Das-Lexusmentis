import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { Link } from "react-router-dom";
function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    fetch("http://10.144.202.69:5000/api/episodes")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch episodes");
        return res.json();
      })
      .then((data) => setEpisodes(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    <div>
        <Navbar/>
    </div>
     <header id="podcast" className="text-center py-5 border-bottom border-warning heading">
        <div className="heading-overlay"> 
            <img src="logo.png" alt="Podcast Logo" className="rounded shadow mb-3" style={{ width: "180px" }} /> 
            {/*<img src="anna6.png" alt="Podcast Logo" width="200" /> */} 
            <h1 className="fw-bold">PODCAST</h1>
            
             </div> </header> 


             <section id="about" className="container py-5" data-aos="fade-up">
                 <div className="section-overlay"> 
                    <h2 className="text-warning">📖 About the Podcast</h2>
                  <p className="text-light"> Das Studio des Lexusmentis by Dr. Hareesh Anandan is for thoughtful minds fatigued by short-form noise. It invites you to slow down, reflect, and engage with nuanced discussions at the intersection of medicine, ethics, and lived experience. Episodes explore provocative questions in Indian healthcare, through stories from government hospitals seen by an intern. </p>
                  </div> </section>
                  
    <div className="container py-5">
      <h2 className="text-warning">All Episodes</h2>
      <div className="row g-4">
        {episodes.map((ep, index) => (
          <div className="col-md-6" key={index} data-aos="zoom-in">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">{ep.title}</h5>
                <p className="card-text">{ep.description}</p>
                <a href={ep.link} target="_blank" rel="noopener noreferrer" className="btn btn-gold me-4">
                  Listen
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
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

export default Episodes;
