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
              <h3>Freelancer</h3>
              <p>Mr Developer</p>
              <p>Jan 2024 - Present</p>
              <p>🌟 Developed and implemented a website for ISKCON Vijayawada</p>
              <p>🌟 Skilled in crafting portfolios, projects, and professional business sites, tailored to meet diverse client needs.</p>
              <p>🌟 Received positive feedback from clients for delivering projects on time and within budget, fostering long-term partnerships and referrals.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Student Peer Mentor</h3>
              <p>KL University</p>
              <p>Jul 2022 - Present</p>
              <p>🌟 Developed projects demonstrating proficiency in the respective courses(AIDS, Machine Learning, Deep Learning)</p>
              <p>🌟 Earned global certifications like TensorFlow and AWS Developer Associate showcasing dedication to continuous learning and skill development.</p>
              <p>🌟 Wrote articles and published them on LinkedIn and Medium, contributing to knowledge sharing and community engagement</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Web Master</h3>
              <p>HashInclude</p>
              <p>Feb 2023 - Mar 2024</p>
              <p>🌟 Successfully launched the #INCLUDE website after a month of dedicated effort, providing a vibrant platform for showcasing upcoming events and engaging our audience.</p>
              <p>🌟 Implemented effective strategies to ensure the website's functionality and accessibility across various devices and browsers, optimizing user experience for all visitors.</p>
              <p>🌟 Utilized innovative design elements and interactive features to captivate and engage the audience, fostering increased participation and interest in the college fest activities.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>FOCUS Alumni and IRP Director</h3>
              <p>FOCUS</p>
              <p>Oct 2023 - Apr 2024</p>
              <p>🌟 Oversaw the creation of personalized congratulations posters for successfully placed students</p>
              <p>🌟 Designed and Launched FOCUS official website</p>
              <p>🌟 Successfully Organized a Cybersecurity workshop with the Y18 Alumni of KL University</p>
              <p>🌟 Collaborated with all 16 technology clubs to empower them in developing and launching their own websites</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Chief Website Samyak</h3>
              <p>Samyak</p>
              <p>Sep 2023 - Oct 2023</p>
              <p>🌟 Contributed to the development of the Samyak website, leveraging technical expertise and creative insights to enhance its functionality and user experience.</p>
              <p>🌟 Collaborated with the team to provide valuable input and support throughout the website creation process.</p>
              <p>🌟 Acquired valuable insights and honed skills by immersing in the collaborative process of developing the Samyak website, gaining a deeper understanding of effective teamwork</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>FOCUS Alumni and IRP Lead</h3>
              <p>FOCUS</p>
              <p>Sep 2022 - Oct 2023</p>
              <p>🌟 Provided dedicated support to the director, actively assisting in various initiatives and tasks to ensure smooth operations and effective execution of FOCUS Alumni and IRP activities.</p>
              <p>🌟 Helped in recording video resumes for 1000+ students</p>
              <p>🌟 Learned how things work as a member of the student body by actively participating in the wing activities</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
