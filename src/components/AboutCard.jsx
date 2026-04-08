import React from "react";
import "./AboutCard.css";
import photo from "../assets/baba.jpg";
import Resume from "../assets/Resume.pdf";

function AboutCard() {
  return (
    <div className="aboutcard">
      <div className="aboutcard-top">
        <div className="aboutcard-photo-wrap">
          <img className="aboutcard-photo" src={photo} alt="Baba Afrid S" loading="eager" decoding="async" />
        </div>
      </div>
      <div className="aboutcard-body">
        <h2 className="aboutcard-name">Baba Afrid S</h2>
        <p className="aboutcard-title">Full-Stack Developer &amp; Freelancer</p>
        <p className="aboutcard-bio">
          BTech CSE(Hons) student at KL University, passionate about building
          projects from scratch.
        </p>
        <div className="aboutcard-stats">
          <div className="stat"><span className="stat-val">3+</span><span className="stat-label">Years Coding</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-val">14+</span><span className="stat-label">Projects</span></div>
          <div className="stat-divider"></div>
          <div className="stat"><span className="stat-val">6</span><span className="stat-label">Certifications</span></div>
        </div>
        <div className="aboutcard-socials">
          <a href="https://github.com/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="aboutcard-social">
            <i className="bx bxl-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="aboutcard-social">
            <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/babaafrid7/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="aboutcard-social">
            <i className="bx bxl-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <a href={Resume} download="Baba_Afrid_Resume.pdf" className="aboutcard-btn">
          <i className="bx bx-download" aria-hidden="true"></i>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default AboutCard;
