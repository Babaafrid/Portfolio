import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import Resume from "../assets/Resume.pdf";

const NAV_LINKS = [
  { to: "/",               label: "Home",           end: true },
  { to: "/about",          label: "About" },
  { to: "/experience",     label: "Experience" },
  { to: "/projects",       label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact",        label: "Contact" },
];

function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="navbar">
        <NavLink to="/" className="logo" onClick={closeMenu} aria-label="Home">
          <img src={logo} alt="Baba Afrid" />
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className="links">
            {NAV_LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a href={Resume} download="Baba_Afrid_Resume.pdf" className="action-btn">
          <i className="bx bx-download" aria-hidden="true"></i>
          Resume
        </a>

        <button
          className="toggle-btn"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <i className={isOpen ? "bx bx-x" : "bx bx-menu-alt-left"} aria-hidden="true"></i>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`dropdown-menu${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul>
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => isActive ? "nav-link nav-active" : "nav-link"}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="mobile-resume">
            <a href={Resume} download="Baba_Afrid_Resume.pdf" className="action-btn">
              <i className="bx bx-download" aria-hidden="true"></i>
              Download Resume
            </a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="nav-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  );
}

export default Navbar;
