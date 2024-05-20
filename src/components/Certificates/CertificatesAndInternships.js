import React from "react";
import "./CertificatesAndInternships.css";

const CertificatesAndInternships = () => {
  return (
    <div className="certificates-internships-container">
      <h2 className="main-title-certificate">
        <span className="highlight-grey">Unlock</span>
        <span className="highlight-certificate"> 6 Certificates</span>
        <span className="highlight-grey"> &</span>
        <span className="highlight-certificate"> Internship Opportunities!</span>
      </h2>
      <div className="cards">
        <div className="card1">
          <h3 className="card-title">
            Get 6 Industry Recognized Certificates!
          </h3>
          <img src="certificate.png" alt="Certificate" className="card-image" />
          <div className="card-footer">
            <div className="footer-item">Official and Verified</div>
            <div className="footer-item">Enhances Credibility</div>
          </div>
        </div>
        <div className="card2">
          <h3 className="card-title">Bag Internship Opportunities!</h3>
          
          <p className="card-text">
            With every course, we make you not only industry-ready but also help
            you crack your first internship.
          </p>
         < img src="internship.png" alt="Internship" className="card-image" />
        </div>
      </div>
    </div>
  );
};

export default CertificatesAndInternships;
