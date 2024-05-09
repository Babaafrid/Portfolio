import React from "react";
import "./Terminal.css";
import { Link } from "react-router-dom";

function Terminal() {
  return (
    <div class="terminal-container">
      <div class="terminal_toolbar">
        <div class="butt">
          <button class="btn btn-color"></button>
          <button class="btn"></button>
          <button class="btn"></button>
        </div>
        <p class="user">babaafrid7@admin: ~</p>
        <div class="add_tab">+</div>
      </div>
      <div class="terminal_body">
        <div class="terminal_prompt">
          <span class="terminal_user">babaafrid7@admin:</span>
          <span class="terminal_location">~</span>
          <span class="terminal_bling">$</span>
          <span class="terminal_cursor"></span>
        </div>
        <div class="terminal_output">
          {/* <p className="hacker-text">Welcome to my Portfolio!</p> */}
            <p className="hacker-text myname">I'm <span className="lime">Baba Afrid S</span></p>
            <p className="hacker-text">
              Freelance Web Developer | Student Peer Mentor
            </p>
            <p className="hacker-text">
              Pursuing Btech at KL University 
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/babaafrid7/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <box-icon type="logo" name="instagram" color="limegreen"></box-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/babaafrid/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <box-icon name="linkedin-square" type="logo" color="limegreen"></box-icon>
              </a>
              <a
                href="https://github.com/babaafrid/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <box-icon name="github" type="logo" color="limegreen"></box-icon>
              </a>
            </div> 
        </div>
        <div class="terminal_input">
          <input
            placeholder="Type a command..."
            class="input_text"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
