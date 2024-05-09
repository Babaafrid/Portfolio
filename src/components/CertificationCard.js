import React from 'react'
import "./CertificationCard.css";

function CertificationCard({name,image}) {
  return (
    <div className="certcardbox">
      <div className="certcard">
        <div className="certcontent">
          <p>{name}</p>
        </div>
        <br></br>
        <img src={image} alt='certificate'></img>
      </div>
    </div>
  )
}

export default CertificationCard