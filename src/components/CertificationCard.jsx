import React from "react";
import "./CertificationCard.css";

function CertificationCard({ name, image, link }) {
  return (
    <a
      className="certcard"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name} certificate`}
    >
      <div className="certcard-img-wrap">
        <img src={image} alt={`${name} certificate`} className="certcard-img" />
        <div className="certcard-overlay">
          <span className="certcard-view">
            <i className="bx bx-link-external" aria-hidden="true"></i>
            View Credential
          </span>
        </div>
      </div>
      <p className="certcard-name">{name}</p>
    </a>
  );
}

export default CertificationCard;
