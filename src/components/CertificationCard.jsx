import React from 'react'
import "./CertificationCard.css";

function CertificationCard({name,image,link}) {
  return (
    <div className="certcardbox">
      <div className="certcard">
        <div className="certcontent">
          <p>{name}</p>
        </div>
        <br></br>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt='certificate'></img>
        </a>
      </div>
    </div>
  )
}

export default CertificationCard