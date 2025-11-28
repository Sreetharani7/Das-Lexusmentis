import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App2.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [episodes, setEpisodes] = useState([]);
  const [poems, setPoems] = useState([]);
  const [selectedPoem, setSelectedPoem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch("https://lexusmentis-backend.onrender.com/api/episodes")
      .then((res) => res.json())
      .then((data) => setEpisodes(data));

    fetch("https://lexusmentis-backend.onrender.com/api/poems")
      .then((res) => res.json())
      .then((data) => setPoems(data));
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-warning" href="#home">
            <img src="logo.png" alt="Podcast Logo" className="rounded shadow mb-3" style={{ width: "50px" }} /> 
            <i className="fa-solid me-2"></i> Lexusmentis
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/episodes">Podcast</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/poems">Poems</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#comingsoon">Coming Soon</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero + About remain same */}
      {/* Hero Section */} 
      <header id="home" className="text-center py-5 border-bottom border-warning heading">
        <div className="heading-overlay"> 
            <img src="logo.png" alt="Podcast Logo" className="rounded shadow mb-3" style={{ width: "180px" }} /> 
            {/*<img src="anna6.png" alt="Podcast Logo" width="200" /> */} 
            <h1 className="fw-bold">Des Lexusmentis</h1>
             <p className="lead text-light"> Podcast | Poems | Medicine | Ethics | Law | Art. </p>
             </div> </header> 
             
             {/* About Section */} 
             {/* About Section */}
<section id="about" className="container py-5" data-aos="fade-up">
  <div className="section-overlay">

        <h2 className="text-warning mb-3">About</h2>
        <img 
          src="photo.jpg" 
          alt="Dr. Hareesh Anandan" 
          className="rounded shadow mb-3" 
          style={{ width: "200px", height: "auto" }} 
        />
        <h5 className="text-light">Dr. Hareesh Anandan</h5>
        <p className="text-light small">
          Junior doctor. Interested in Health Care Research, Mental Health, Medical Law. <br />
          Debate speaker | Polyglot Arzt
        </p>
     
        <p className="text-light large">
          Junior doctor with a commitment to Psychiatry, planning to prepare for the FSP and KP exams in Niedersachsen, Germany. 
          My interests are in mental health, medical law, and ethics, with a focus on patient safety and reducing stigma in psychiatric care. 
          Open to research opportunities and collaborations in forensic psychiatry and legal aspects of mental health.
        </p>
     
  </div>
</section>


      {/* Episodes Preview */}
      <section id="episodes" className="container py-5">
        <h2 className="text-warning mb-4">Episodes</h2>
        <div className="row g-4">
          {episodes.slice(0, 2).map((ep, index) => (   // 👈 show only first 2
            <div className="col-md-6" key={index} data-aos="zoom-in">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">{ep.title}</h5>
                  <p className="card-text text-light">{ep.description}</p>
                  <a href={ep.link} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                    Listen
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-end mt-3">
          <Link to="/episodes" className="btn btn-gold">View All Episodes →</Link>
        </div>
      </section>

      {/* Poems Preview */}
      <section id="poems" className="container py-5" data-aos="fade-up">
        <h2 className="text-warning">Poems</h2>
        <div className="row g-4">
          {poems.slice(0, 3).map((poem, index) => (  // 👈 show only first 3
            <div className="col-md-4" key={index}>
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
        <div className="text-end mt-3">
          <Link to="/poems" className="btn btn-gold">View All Poems →</Link>
        </div>
      </section>

      {/* Coming Soon + Contact + Footer same as before */}

      {/* Poem overlay same as before */}
      {selectedPoem && (
        <div className="poem-overlay" style={{ backgroundImage: `url(${selectedPoem.bg})` }}>
          <div className="poem-content">
            <h2 className="text-warning">{selectedPoem.title}</h2>
            <pre className="text-light">{selectedPoem.content}</pre>
            <button className="btn btn-gold mt-3" onClick={() => setSelectedPoem(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Coming Soon Section */} <section id="comingsoon" className="container py-5" data-aos="fade-left">
         <h2 className="text-warning">Coming Soon</h2> 
         <div className="row g-4"> 
          <div className="col-md-6"> <div className="card text-center">
             <div className="card-body"> 
              <h5 className="card-title">📚 Books</h5> 
              <p className="card-text text-light"> Original books authored by Dr. Hareesh. </p> 
              </div> </div> </div> 
              
                    <div className="col-md-6"> 
                      <div className="card text-center"> 
                        <div className="card-body"> 
                          <h5 className="card-title">📰 Articles</h5>
                           <p className="card-text text-light"> Inspiring and thoughtful articles. </p> </div> </div> </div> </div>
                            </section>
      {/* Contact + Footer */} {/* Contact + Footer */} 
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

export default Home;
