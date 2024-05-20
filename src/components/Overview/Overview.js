// Overview.js
import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <>
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
              A specially crafted Tech Kickstarter, with 5+ extensive online
              courses.
            </p>
            <div className="features">
              <div className="feature-item">
                <img
                  className="image"
                  src="image.png"
                  alt="Personal Mentorship"
                />
                Personal Mentorship
              </div>
              <div className="feature-item">
                <img
                  className="image"
                  src="image.png"
                  alt="Internship Assistance"
                />
                Internship Assistance
              </div>
              <div className="feature-item">
                <img
                  className="image"
                  src="image.png"
                  alt="Industry Certified Courses"
                />
                Industry Certified Courses
              </div>
            </div>
            <div className="cta-buttons">
              <button className="enroll-button">
                Enroll Now
                <img
                  className="enroll-image"
                  src="explore.png"
                  alt="Enroll Now"
                />
              </button>
              <button className="know-more-button">
                Know More
                <img
                  className="know-image"
                  src="question.png"
                  alt="Know More"
                />
              </button>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats-container">
            <div className="stats-item">
              <img
                className="stats-image"
                src="degree.png"
                alt="CoursesImage"
              />
              <div className="stats-info">
                <div className="stats-number">24</div>
                <div className="stats-label">Courses</div>
              </div>
            </div>
            <div className="separator">|</div>
            <div className="stats-item">
              <img
                className="stats-image"
                src="Learners.png"
                alt="LearnersImage"
              />
              <div className="stats-info">
                <div className="stats-number">30k+</div>
                <div className="stats-label">Learners</div>
              </div>
            </div>
            <div className="separator">|</div>
            <div className="stats-item">
              <img className="stats-image" src="doubt.png" alt="DoubtImage" />
              <div className="stats-info">
                <div className="stats-number">100k+</div>
                <div className="stats-label">Doubts Solved</div>
              </div>
            </div>
            <div className="separator"> | </div>
            <div className="stats-item">
              <img
                className="stats-image"
                src="project.png"
                alt="ProjectImage"
              />
              <div className="stats-info">
                <div className="stats-number">10k+</div>
                <div className="stats-label">Student Projects</div>
              </div>
            </div>
          </div>
        </section>
  </>
  );
}

export default Overview;
