// Home.js
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import photo from "../assets/baba.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Terminal from "../components/Terminal";

function Home() {
  const [showDetails, setShowDetails] = useState(false);

  // Simulating loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 3000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="content-container">
          <div className={`text-container ${showDetails && "fade-out"}`}>
            <h1 className="hacker-title">// Initializing Connection...</h1>
            <h1 className="hacker-title">Access granted.</h1>
          </div>
          <div className={`text-container ${!showDetails && "fade-in"}`}>
            <Terminal />
          </div>
        </div>
        <div className="additional-content">
          <h2 className={`additional-title ${!showDetails && "fade-in"}`}>Welcome to my <span className="lime">Portfolio!</span></h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
