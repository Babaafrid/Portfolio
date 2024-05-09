import React from "react";
import "./ProjectCard.css";

function ProjectCard() {
  return (
    <div class="projectcardBox">
      <div class="projectcard">
        <div class="projectcontent1">
          <p>Project Name</p>
        </div>
        <img src="https://i.pinimg.com/originals/1e/e7/06/1ee706a1aa659e5bc431e9472e95f39e.jpg"></img>
        <div class="projectcontent">
        <p>Project Desc: </p>
        </div>
        <div class="projectcontent">
          <box-icon name="github" type="logo" color="white"></box-icon>
          <box-icon name="github" type="logo" color="white"></box-icon>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
