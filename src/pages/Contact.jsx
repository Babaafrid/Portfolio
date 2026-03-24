import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h2 className='project-heading'>Contact <span className='lime'>Me</span></h2>
      <div className="contact-container">
        <div className="contact-card">
          <h2>Address</h2>
          <p>No.483/B1, Jayaram Nagar, Arakkonam Road,<br />Pandianellore, Sholinghur</p>
          <p>Ranipet, 631102, Tamil Nadu.</p>
        </div>
        <div className="contact-card">
          <h2>Email &amp; Phone</h2>
          <p>Email:<br /><a href="mailto:babaafrid7@gmail.com" className="contact-link">babaafrid7@gmail.com</a></p>
          <p>Phone:<br /><a href="tel:+919787832697" className="contact-link">+91-9787832697</a></p>
        </div>
        <div className="contact-card">
          <h2>Social Media</h2>
          <div className="contact-socials">
            <a href="https://www.instagram.com/babaafrid7/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bx bxl-instagram" style={{ fontSize: '2rem', color: 'limegreen' }} aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="bx bxl-linkedin-square" style={{ fontSize: '2rem', color: 'limegreen' }} aria-hidden="true"></i>
            </a>
            <a href="https://github.com/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bx bxl-github" style={{ fontSize: '2rem', color: 'limegreen' }} aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
