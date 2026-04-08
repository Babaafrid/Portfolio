import React from "react";
import "./ProjectCard.css";

function ProjectCard({ name, link, git, img, tags = [] }) {
  return (
    <div className="pcard">
      <div className="pcard-img-wrap">
        <img src={img} alt={name ? `${name} screenshot` : "project screenshot"} className="pcard-img" loading="lazy" decoding="async" />
        <div className="pcard-overlay">
          <div className="pcard-actions">
            {git && (
              <a href={git} target="_blank" rel="noopener noreferrer"
                 className="pcard-link" aria-label={`${name} GitHub`}>
                <i className="bx bxl-github" aria-hidden="true"></i>
                Code
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer"
                 className="pcard-link pcard-link--live" aria-label={`${name} live demo`}>
                <i className="bx bx-link-external" aria-hidden="true"></i>
                Live
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="pcard-footer">
        <p className="pcard-name">{name}</p>
        {tags.length > 0 && (
          <div className="pcard-tags">
            {tags.map(t => <span key={t} className="pcard-tag">{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
