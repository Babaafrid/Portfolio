import React from 'react';
import Navbar from '../components/Navbar';
import './Experience.css';
import Footer from '../components/Footer';

function Experience() {
  return (
    <div>
      <Navbar />
      <div className="experience-container">
        <h2 className='project-heading'>My <span className='lime'>Experience</span></h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Job Title</h3>
              <p>Company Name</p>
              <p>Location</p>
              <p>Start Date - End Date</p>
              <p>Description of responsibilities and achievements.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Job Title</h3>
              <p>Company Name</p>
              <p>Location</p>
              <p>Start Date - End Date</p>
              <p>Description of responsibilities and achievements.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Job Title</h3>
              <p>Company Name</p>
              <p>Location</p>
              <p>Start Date - End Date</p>
              <p>Description of responsibilities and achievements.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
