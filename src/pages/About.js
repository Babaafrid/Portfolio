// About.js
import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import AboutCard from "../components/AboutCard";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />
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
    <Footer />
    </div>
  );
}

export default About;
