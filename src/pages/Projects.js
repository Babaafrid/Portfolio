import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import "./Projects.css"; // Import CSS file for Projects component
import Footer from '../components/Footer';

import hashinclude from "../assets/hashinclude.png"
import focus from "../assets/focus.png"
import carrental from "../assets/car-rental.png"
import hli from "../assets/hli.png"
import movie from "../assets/movie.png";
import google from "../assets/google.png"
import bg from "../assets/bg.png"
import qr from "../assets/qr.png"
import ai from "../assets/ai.png"
import snake from "../assets/snake.png"
import tictactoe from "../assets/tictactoe.png"
import spotify from "../assets/spotify.png"
import scm from "../assets/scm.jpg"
import sort from "../assets/sort.png";

function Projects() {
  return (
    <div>
      <Navbar />
      <h2 className='project-heading'>My <span className='lime'>Projects</span></h2>
      <div className="projectsContainer">
        <ProjectCard img={hashinclude} name="HashInclude 2k24" link="https://klhashinclude.in/" />
        <ProjectCard img={focus} name="FOCUS" link="https://klfocus.netlify.app/" />
        <ProjectCard img={carrental} name="Car Rental System" git="https://github.com/Babaafrid/Car_Rental" />
        <ProjectCard img={hli} name="Health and Life Insurance System" git="https://github.com/Babaafrid/HLI" />
        <ProjectCard img={movie} name="Movie Library Web Application" git="https://github.com/Babaafrid/movie-library-frontend/" link="https://dev-movie-library.netlify.app/" />
        <ProjectCard img={scm} name="Supply Chain Management" git="https://github.com/Babaafrid/Supply-Chain-Management" />
        <ProjectCard img={sort} name="Sorting Visualizer" git="https://github.com/Babaafrid/sorting-visualizer" link="https://dev-sorting-visualizer.netlify.app/" />
        <ProjectCard img={google} name="Google Clone" git="https://github.com/Babaafrid/google_clone" link="https://googleclone7.netlify.app/" />
        <ProjectCard img={bg} name="Background Image Remover" git="https://github.com/Babaafrid/bg-remover" link="https://afrid-bgremover.netlify.app/" />
        <ProjectCard img={qr} name="QR Code Generator" git="https://github.com/Babaafrid/qrcode" link="https://afrid-qrcode.netlify.app/" />
        <ProjectCard img={ai} name="AI Assistant" git="https://github.com/Babaafrid/AI_Assistant" />
        <ProjectCard img={snake} name="Snake Mania" git="https://github.com/Babaafrid/snakemania" link="https://babaafrid.github.io/snakemania/" />
        <ProjectCard img={tictactoe} name="Tic Tac Toe" git="https://github.com/Babaafrid/tictactoe" link="https://babaafrid.github.io/tictactoe/" />
        <ProjectCard img={spotify} name="Spotify Clone" git="https://github.com/Babaafrid/spotify_clone" link="https://babaafrid.github.io/spotify_clone/" />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
