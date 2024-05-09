import React from 'react'
import "./AboutCard.css"
import photo from "../assets/baba.jpg";

function AboutCard() {
  return (
    <div className="aboutcard">
    <div className="aboutimg">
      <img className="aboutimg" src={photo}></img>
    </div>
    <span>Baba Afrid S</span>
    <p className="aboutinfo">
      BTech CSE(Hons) student at KL University, passionate about coding and building projects from scratch.<br></br><br></br>Freelancer and full-stack developer with a love for continuous learning and embracing new technologies.
    </p>
    <div className="aboutshare">
      <a href="https://github.com/babaafrid/" target="_blank" rel="noopener noreferrer">
      <box-icon type="logo" name="github" color="white"></box-icon>
      </a>
      <a href="https://www.instagram.com/babaafrid7/" target="_blank" rel="noopener noreferrer">
      <box-icon type="logo" name="instagram" color="white"></box-icon>
      </a>
      <a href="https://www.linkedin.com/in/babaafrid/" target="_blank" rel="noopener noreferrer">
      <box-icon type="logo" name="linkedin-square" color="white"></box-icon>
      </a>
    </div>
    <button>Download Resume</button>
  </div>
  )
}

export default AboutCard