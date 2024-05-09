import React from 'react';
import Navbar from '../components/Navbar';
import "./Contact.css";
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
      <Navbar />
      <h2 className='project-heading'>Contact <span className='lime'>Me</span></h2>
      <div className="contact-container">
        <div className="contact-card">
          <h2>Address</h2>
          <br></br>
          <p>No.483/B1, Jayaram Nagar, Arakkonam Road, Pandianellore, Sholinghur</p>
          <p>Ranipet,631102,Tamil Nadu.</p>
        </div>
        <div className="contact-card">
          <h2>Email & Phone</h2>
          <br></br>
          <p>Email: babaafrid7@gmail.com</p>
          <br></br>
          <p>Phone: +91-9787832697</p>
        </div>
        <div className="contact-card">
          <h2>Social Media Handles</h2>
          <a
                href="https://www.instagram.com/babaafrid7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon type="logo" name="instagram" color="limegreen" size="md"></box-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/babaafrid/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon name="linkedin-square" type="logo" color="limegreen" size="md"></box-icon>
              </a>
              <a
                href="https://github.com/babaafrid/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon name="github" type="logo" color="limegreen" size="md"></box-icon>
              </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
