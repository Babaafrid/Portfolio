import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div class="skill-container">
      <h2 className="skill-heading">My <span className="lime">Skills</span></h2>
      <div class="skill-box">
        <span class="skill-title">Java</span>

        <div class="skill-bar">
          <span class="skill-per java">
            <span class="tooltip">85%</span>
          </span>
        </div>
      </div>

      <div class="skill-box">
        <span class="skill-title">Python</span>

        <div class="skill-bar">
          <span class="skill-per python">
            <span class="tooltip">75%</span>
          </span>
        </div>
      </div>

      <div class="skill-box">
        <span class="skill-title">Java Script</span>

        <div class="skill-bar">
          <span class="skill-per javascript">
            <span class="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div class="skill-box">
        <span class="skill-title">ReactJs</span>

        <div class="skill-bar">
          <span class="skill-per react">
            <span class="tooltip">90%</span>
          </span>
        </div>
      </div>

      <div class="skill-box">
        <span class="skill-title">NodeJs</span>

        <div class="skill-bar">
          <span class="skill-per nodejs">
            <span class="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div class="skill-box">
        <span class="skill-title">Django</span>

        <div class="skill-bar">
          <span class="skill-per django">
            <span class="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div class="skill-box">
        <span class="skill-title">MySQL</span>

        <div class="skill-bar">
          <span class="skill-per mysql">
            <span class="tooltip">75%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
