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

function Certifications() {
  return (
    <div>
        <Navbar />
        <h2 className='project-heading'>My <span className='lime'>Certifications</span></h2>
        <div className='cert-container'>
        <CertificationCard name="TensorFlow Developer" image={tensorflow} link="https://www.credential.net/a3ffb2c6-6ebb-40bf-91f7-d40cbd699df6"/>
        <CertificationCard name="RedHat Developer" image={redhat} link="https://www.credly.com/badges/7461ab88-77bc-4757-8760-b3d7fb22c8da/public_url"/>
        <CertificationCard name="AWS Developer Associate" image={awsda} link="https://www.credly.com/badges/1e1b121d-8b6e-4e78-9cb2-656324adde7f/public_url" />
        <CertificationCard name="AWS Cloud Practitioner" image={awscp} link="https://www.credly.com/badges/2ee4642a-15c6-4273-b43b-a2722acd79bc/public_url" />
        <CertificationCard name="Microsoft AZ900" image={az900} link="https://www.credly.com/badges/521a7448-5162-4118-be3b-8cfc67afa531/public_url" />
        <CertificationCard name="Microsoft AI900" image={ai900} link="https://www.credly.com/badges/aab2c696-7d6d-4a5a-be2d-98014b1d5f19/public_url"/>
        </div>
        <Footer />
    </div>
  )
}

export default Certifications