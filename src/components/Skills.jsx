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
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`skill-container${animated ? " skills-animated" : ""}`} ref={ref}>
      <h3 className="skill-heading">My <span className="lime">Skills</span></h3>
      {SKILLS.map(({ name, cls, pct }) => (
        <div className="skill-box" key={name}>
          <div className="skill-header">
            <span className="skill-title">{name}</span>
            <span className="skill-pct">{pct}</span>
          </div>
          <div className="skill-bar">
            <div className={`skill-fill ${cls}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
