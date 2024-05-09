import React from 'react'
import Navbar from '../components/Navbar'
import CertificationCard from '../components/CertificationCard'
import "./Certification.css";
import Footer from '../components/Footer';
import tensorflow from "../assets/tensorflow.png"
import redhat from "../assets/redhat.png"
import awsda from "../assets/aswda.png"
import awscp from "../assets/awscp.png"
import az900 from "../assets/az900.png"
import ai900 from "../assets/ai900.png"
import oracle from "../assets/oracle.png"

function Certifications() {
  return (
    <div>
        <Navbar />
        <h2 className='project-heading'>My <span className='lime'>Certifications</span></h2>
        <div className='cert-container'>
        <CertificationCard name="TensorFlow Developer" image={tensorflow} />
        <CertificationCard name="RedHat Developer" image={redhat} />
        <CertificationCard name="AWS Developer Associate" image={awsda} />
        <CertificationCard name="AWS Cloud Practitioner" image={awscp} />
        <CertificationCard name="Microsoft AZ900" image={az900} />
        <CertificationCard name="Microsoft AI900" image={ai900} />
        <CertificationCard name="Oracle Foundations Associate" image={oracle} />
        </div>
        <Footer />
    </div>
  )
}

export default Certifications