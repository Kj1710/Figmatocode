// Overview.js
import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <section className="hero-section" id="overview">
      <div className="hero-content">
        <div className="badge">
          🎓 An <span className="bold">IIT Delhi</span> Alumni Initiative
        </div>
        <h1>
          <span className="grey-text">Become an Expert in the</span>
          field of <span className="highlight-text"> Data Science </span>
          <br />
          <span className="highlight-text">With 6 courses! </span>
        </h1>
        <p>
          A specially crafted Tech Kickstarter, with 5+ extensive online courses.
        </p>
        <div className="features">
          <div className="feature-item">
            <img className="image" src="image.png" alt="Personal Mentorship" />
            Personal Mentorship
          </div>
          <div className="feature-item">
            <img className="image" src="image.png" alt="Internship Assistance" />
            Internship Assistance
          </div>
          <div className="feature-item">
            <img className="image" src="image.png" alt="Industry Certified Courses" />
            Industry Certified Courses
          </div>
        </div>
        <div className="cta-buttons">
          <button className="enroll-button">
            Enroll Now  
            <img className="enroll-image" src="explore.png" alt="Enroll Now" />
          </button>
          <button className="know-more-button">
            Know More
            <img className="know-image" src="question mark.png" alt="Know More" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Overview;
