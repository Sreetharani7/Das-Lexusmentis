import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="page-container">
      <Navbar />
<br></br>
      <main className="content-wrap">
        <section
          id="contact"
          className="container py-5 text-center heading-overlay"
          data-aos="fade-up"
        >
          <h2 className="text-warning">Contact</h2>
          <p className="text-light">dr.lexusmentis@gmail.com</p>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-3 ">
            <a
              href="https://instagram.com/dr_lexusmentis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-3"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@dr_lexusmentis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-3"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hareesh-anandan-242263304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-3"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <small className="text-light">
          © 2025 Des Lexusmentis| All Rights Reserved
        </small>
      </footer>
    </div>
  );
}

export default Contact;
