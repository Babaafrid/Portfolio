import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
        <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo}></img>
      </Link>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <a href="" className="action-btn">Download Resume</a>
      <div className="toggle-btn" onClick={toggleMenu}>
          {isOpen ? (
            <box-icon name="x" color="white"></box-icon>
          ) : (
            <box-icon name="menu-alt-left" color="white"></box-icon>
          )}
        </div>
    </div>
    <div className={isOpen ? "dropdown-menu open" : "dropdown-menu"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/certifications">Certifications</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="" className="action-btn">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
