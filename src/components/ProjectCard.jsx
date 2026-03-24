import React from "react";
import "./ProjectCard.css";

function ProjectCard({ name, link, git, img }) {
  return (
    <div className="projectcardBox">
      <div className="projectcard">
        <div className="projectcontent1">
          <p>{name}</p>
        </div>
        <br />
        <img src={img} alt={name ? `${name} screenshot` : "project screenshot"} />
        <div className="projectcontent">
          {git && (
            <a href={git} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name} repository`}>
              <i className="bx bxl-github" style={{ fontSize: '1.8rem', color: 'white' }} aria-hidden="true"></i>
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name} live site`}>
              <i className="bx bx-link-alt" style={{ fontSize: '1.8rem', color: 'white' }} aria-hidden="true"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
