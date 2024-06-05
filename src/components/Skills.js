import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skill-container">
      <h2 className="skill-heading">My <span className="lime">Skills</span></h2>
      <div className="skill-box">
        <span className="skill-title">Java</span>

        <div className="skill-bar">
          <span className="skill-per java">
            <span className="tooltip">85%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="skill-title">Python</span>

        <div className="skill-bar">
          <span className="skill-per python">
            <span className="tooltip">75%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="skill-title">Java Script</span>

        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="skill-title">ReactJs</span>

        <div className="skill-bar">
          <span className="skill-per react">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="skill-title">NodeJs</span>

        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="skill-title">Django</span>

        <div className="skill-bar">
          <span className="skill-per django">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="skill-title">MySQL</span>

        <div className="skill-bar">
          <span className="skill-per mysql">
            <span className="tooltip">75%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
