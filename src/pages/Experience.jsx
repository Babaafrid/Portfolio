import React, { useState } from "react";
import "./Experience.css";

const EXPERIENCES = [
  {
    role: "Freelancer",
    org: "Mr Developer",
    period: "Jan 2024 – Present",
    icon: "bx-laptop",
    badge: "current",
    highlights: [
      "Designed and launched a website for ISKCON Vijayawada",
      "Crafted portfolios, business sites, and full-stack apps to meet diverse client needs",
      "Delivered projects on time and within budget, fostering long-term partnerships",
    ],
  },
  {
    role: "Student Peer Mentor",
    org: "KL University",
    period: "Jul 2022 – Present",
    icon: "bx-chalkboard",
    badge: "current",
    highlights: [
      "Built projects showcasing proficiency in AI/DS, Machine Learning and Deep Learning",
      "Earned global certifications: TensorFlow Developer, AWS Developer Associate",
      "Published technical articles on LinkedIn and Medium for knowledge sharing",
    ],
  },
  {
    role: "Web Master",
    org: "HashInclude",
    period: "Feb 2023 – Mar 2024",
    icon: "bx-code-alt",
    highlights: [
      "Successfully launched the HashInclude website after a month of dedicated effort",
      "Ensured functionality and accessibility across all devices and browsers",
      "Incorporated interactive features to captivate and engage the audience",
    ],
  },
  {
    role: "Alumni & IRP Director",
    org: "FOCUS",
    period: "Oct 2023 – Apr 2024",
    icon: "bx-group",
    highlights: [
      "Designed and launched the FOCUS official website",
      "Organized a Cybersecurity workshop with Y18 Alumni of KL University",
      "Collaborated with 16 tech clubs to develop and launch their own websites",
    ],
  },
  {
    role: "Chief Website Developer",
    org: "Samyak",
    period: "Sep 2023 – Oct 2023",
    icon: "bx-globe",
    highlights: [
      "Contributed to the development of the Samyak annual fest website",
      "Collaborated with the team providing input and support throughout the process",
    ],
  },
  {
    role: "Alumni & IRP Lead",
    org: "FOCUS",
    period: "Sep 2022 – Oct 2023",
    icon: "bx-user-check",
    highlights: [
      "Supported the director in various initiatives and wing activities",
      "Helped record video resumes for 1000+ students",
    ],
  },
];

function Experience() {
  return (
    <div className="experience-page">
      <h2 className="project-heading">My <span className="lime">Experience</span></h2>
      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-icon-wrap">
              <span className="tl-icon"><i className={`bx ${exp.icon}`} aria-hidden="true"></i></span>
            </div>
            <div className="tl-content">
              <div className="tl-header">
                <div>
                  <h3 className="tl-role">{exp.role}</h3>
                  <p className="tl-org">{exp.org}</p>
                </div>
                <span className={`tl-period${exp.badge === "current" ? " tl-period--current" : ""}`}>
                  {exp.period}
                </span>
              </div>
              <ul className="tl-highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
