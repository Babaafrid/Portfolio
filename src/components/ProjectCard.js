import React from "react";
import "./ProjectCard.css";

function ProjectCard({ name, link, git,img }) {
  return (
    <div className="projectcardBox">
      <div className="projectcard">
        <div className="projectcontent1">
          <p>{name}</p>
        </div>
        <br></br>
        <img src={img} alt=""></img>
        <div className="projectcontent">
        {git && (
            <a href={git} target="_blank" rel="noopener noreferrer">
              <box-icon name="github" type="logo" color="white"></box-icon>
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <box-icon name='link-alt' color="white"></box-icon>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
