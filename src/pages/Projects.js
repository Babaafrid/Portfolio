import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import "./Projects.css"; // Import CSS file for Projects component
import Footer from '../components/Footer';

function Projects() {
  return (
    <div>
      <Navbar />
      <h2 className='project-heading'>My <span className='lime'>Projects</span></h2>
      <div className="projectsContainer">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
