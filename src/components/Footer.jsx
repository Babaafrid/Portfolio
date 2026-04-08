import React from "react";
import "./Footer.css";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-socials">
        <a href="https://github.com/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link">
          <i className="bx bxl-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
          <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/babaafrid7/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
          <i className="bx bxl-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <p className="footer-copy">
        Built by <span className="footer-name">Baba Afrid S</span> &mdash; All rights reserved &copy; {new Date().getFullYear()}
      </p>
      <button className="footer-top-btn" onClick={scrollToTop} aria-label="Back to top">
        <i className="bx bx-chevron-up" aria-hidden="true"></i>
      </button>
    </div>
  </footer>
);

export default Footer;
