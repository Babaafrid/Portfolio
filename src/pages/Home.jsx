import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Terminal from "../components/Terminal";

const ROLES = [
  "Full-Stack Developer",
  "Freelance Web Developer",
  "React Enthusiast",
  "Open-Source Builder",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [s, setS] = useState({ wi: 0, ci: 0, del: false, text: "" });
  useEffect(() => {
    const current = words[s.wi % words.length];
    let delay = s.del ? Math.floor(speed / 2) : speed;
    if (!s.del && s.ci === current.length) delay = pause;
    const t = setTimeout(() => {
      if (!s.del && s.ci < current.length) {
        setS(p => ({ ...p, ci: p.ci + 1, text: current.slice(0, p.ci + 1) }));
      } else if (!s.del && s.ci === current.length) {
        setS(p => ({ ...p, del: true }));
      } else if (s.del && s.ci > 0) {
        setS(p => ({ ...p, ci: p.ci - 1, text: current.slice(0, p.ci - 1) }));
      } else {
        setS({ wi: (s.wi + 1) % words.length, ci: 0, del: false, text: "" });
      }
    }, delay);
    return () => clearTimeout(t);
  }, [s, words, speed, pause]);
  return s.text;
}

function Home() {
  const [phase, setPhase] = useState("loading");
  const role = useTypewriter(ROLES);

  useEffect(() => {
    const t = setTimeout(() => setPhase("main"), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="home-container">
      {phase === "loading" && (
        <div className="intro-screen" aria-live="polite">
          <span className="intro-prompt">&gt;</span>
          <span className="intro-text">Initializing</span>
          <span className="intro-dots" aria-hidden="true"></span>
        </div>
      )}

      <div className={`main-home${phase === "main" ? " main-enter" : ""}`}>
        <div className="home-left">
          <p className="home-greeting">Hi, I'm</p>
          <h1 className="home-name">Baba Afrid S</h1>
          <h2 className="home-role">
            <span className="role-text">{role || "\u00a0"}</span>
            <span className="role-cursor" aria-hidden="true">|</span>
          </h2>
          <p className="home-bio">
            BTech CSE(Hons) student at KL University. I build performant,
            accessible web experiences &mdash; from idea to deployment.
          </p>
          <div className="home-actions">
            <Link to="/about" className="cta-btn">About Me</Link>
            <Link to="/projects" className="cta-btn cta-outline">View Projects</Link>
          </div>
          <div className="home-socials">
            <a href="https://github.com/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="home-social">
              <i className="bx bxl-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/babaafrid/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="home-social">
              <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="mailto:babaafrid7@gmail.com" aria-label="Email" className="home-social">
              <i className="bx bx-envelope" aria-hidden="true"></i>
            </a>
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
