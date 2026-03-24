import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const SKILLS = [
  { name: "Java",       cls: "java",       pct: "85%" },
  { name: "Python",     cls: "python",     pct: "75%" },
  { name: "JavaScript", cls: "javascript", pct: "80%" },
  { name: "ReactJS",    cls: "react",      pct: "90%" },
  { name: "NodeJS",     cls: "nodejs",     pct: "80%" },
  { name: "Django",     cls: "django",     pct: "70%" },
  { name: "MySQL",      cls: "mysql",      pct: "75%" },
];

function Skills() {
  const containerRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`skill-container${animated ? " skills-animated" : ""}`}
      ref={containerRef}
    >
      <h2 className="skill-heading">
        My <span className="lime">Skills</span>
      </h2>
      {SKILLS.map(({ name, cls, pct }) => (
        <div className="skill-box" key={name}>
          <span className="skill-title">{name}</span>
          <div className="skill-bar">
            <span className={`skill-per ${cls}`}>
              <span className="tooltip">{pct}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;

