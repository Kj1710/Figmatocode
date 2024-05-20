import React from 'react';
import './CertificatesAndInternships.css';
// Example image path

const CertificatesAndInternships = () => {
    return (
        <div className="certificates-internships-container">
            <h2 className="main-title">Unlock <span className="highlight">6 Certificates</span> & Internship Opportunities!</h2>
            <div className="cards">
                <div className="card">
                    <h3 className="card-title">Get 6 Industry Recognized Certificates!</h3>
                    <img src="certificate.png" alt="Certificate" className="card-image" />
                    <div className="card-footer">
                        <div className="footer-item">Official and Verified</div>
                        <div className="footer-item">Enhances Credibility</div>
                    </div>
                </div>
                <div className="card">
                    <h3 className="card-title">Bag Internship Opportunities!</h3>
                    <img src="internship.png" alt="Internship" className="card-image" />
                    <p className="card-text">
                        With every course, we make you not only industry-ready but also help you crack your first internship.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CertificatesAndInternships;
