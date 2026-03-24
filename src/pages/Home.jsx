import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Terminal from "../components/Terminal";

function Home() {
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const timer = setTimeout(() => setPhase('main'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Intro hacker boot screen */}
      <div className={`intro-screen${phase === 'main' ? ' intro-exit' : ''}`}>
        <h1 className="hacker-title">{'// Initializing Connection...'}</h1>
        <h1 className="hacker-title">Access granted.</h1>
      </div>

      {/* Main content revealed after intro */}
      <div className={`main-home${phase === 'main' ? ' main-enter' : ''}`}>
        <div className="home-left">
          <h2 className="additional-title">
            Welcome to my <span className="lime">Portfolio!</span>
          </h2>
          <p className="home-subtitle">
            I'm <span className="lime">Baba Afrid S</span> — Full-Stack Developer &amp; Freelancer
          </p>
          <div className="home-actions">
            <Link to="/about" className="cta-btn">About Me</Link>
            <Link to="/projects" className="cta-btn cta-outline">View Projects</Link>
          </div>
        </div>
        <div className="home-right">
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default Home;
