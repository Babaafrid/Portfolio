import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Resume from "../assets/Resume.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="navbar">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Baba Afrid logo" />
        </NavLink>
        <ul className="links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Experience</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Certifications</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>

        <a href={Resume} download="Baba_Afrid_Resume.pdf" className="action-btn">
          Download Resume
        </a>

        <button
          className="toggle-btn"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <i className="bx bx-x" style={{ fontSize: '1.6rem', color: 'white' }} aria-hidden="true"></i>
          ) : (
            <i className="bx bx-menu-alt-left" style={{ fontSize: '1.6rem', color: 'white' }} aria-hidden="true"></i>
          )}
        </button>
      </div>

      <div className={isOpen ? "dropdown-menu open" : "dropdown-menu"}>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Experience</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Certifications</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : ""} onClick={closeMenu}>Contact</NavLink>
          </li>
          <li>
            <a href={Resume} download="Baba_Afrid_Resume.pdf" className="action-btn">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
