import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h2 className="project-heading">Contact <span className="lime">Me</span></h2>
      <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon"><i className="bx bx-map" aria-hidden="true"></i></div>
            <h3>Address</h3>
            <p>No.483/B1, Jayaram Nagar,<br />Sholinghur, Ranipet 631102,<br />Tamil Nadu, India.</p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon"><i className="bx bx-envelope" aria-hidden="true"></i></div>
            <h3>Email &amp; Phone</h3>
            <p><a href="mailto:babaafrid7@gmail.com" className="contact-link">babaafrid7@gmail.com</a></p>
            <p><a href="tel:+919787832697" className="contact-link">+91 97878 32697</a></p>
          </div>
          <div className="contact-card">
            <div className="contact-card-icon"><i className="bx bx-share-alt" aria-hidden="true"></i></div>
            <h3>Social Media</h3>
            <div className="contact-socials">
              <a href="https://www.instagram.com/babaafrid7/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-social">
                <i className="bx bxl-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-social">
                <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="contact-social">
                <i className="bx bxl-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Contact;
