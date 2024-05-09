import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div class="skill-container">
      <h2 className="skill-heading">My <span className="lime">Skills</span></h2>
      <div class="skill-box">
        <span class="skill-title">Python</span>

        <div class="skill-bar">
          <span class="skill-per html">
            <span class="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div class="skill-box">
        <span class="skill-title">Php</span>

        <div class="skill-bar">
          <span class="skill-per css">
            <span class="tooltip">30%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="skill-title">Java</span>

        <div class="skill-bar">
          <span class="skill-per javascript">
            <span class="tooltip">40%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="skill-title">C++</span>

        <div class="skill-bar">
          <span class="skill-per nodejs">
            <span class="tooltip">60%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
