import React from "react";
import "./About.css";
import AboutCard from "../components/AboutCard";
import Skills from "../components/Skills";

function About() {
  return (
    <div>
      <h2 className="project-heading">About <span className="lime">Me</span></h2>
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <AboutCard />
          </div>
          <div className="about-right">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
