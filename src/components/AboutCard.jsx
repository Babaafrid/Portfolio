import React from "react";
import "./AboutCard.css";
import photo from "../assets/baba.jpg";
import Resume from "../assets/Resume.pdf";

function AboutCard() {
  return (
    <div className="aboutcard">
      <div className="img">
        <img className="about-photo" src={photo} alt="Baba Afrid" />
      </div>
      <span>Baba Afrid S</span>
      <p className="aboutinfo">
        BTech CSE(Hons) student at KL University, passionate about coding and
        building projects from scratch.
        <br />
        <br />Freelancer and full-stack developer with a love for continuous
        learning and embracing new technologies.
      </p>
      <div className="aboutshare">
        <a
          href="https://github.com/babaafrid/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
        >
          <i className="bx bxl-github" style={{ fontSize: '1.8rem', color: 'white' }} aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/babaafrid7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Instagram profile"
        >
          <i className="bx bxl-instagram" style={{ fontSize: '1.8rem', color: 'white' }} aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/babaafrid/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
        >
          <i className="bx bxl-linkedin-square" style={{ fontSize: '1.8rem', color: 'white' }} aria-hidden="true"></i>
        </a>
      </div>
      <a href={Resume} download="Baba_Afrid_Resume.pdf">
        <button className="about-btn">Download Resume</button>
      </a>
    </div>
  );
}

export default AboutCard;