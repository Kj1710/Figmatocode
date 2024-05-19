import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <div className="logo">LOGO</div>
          <div className="auth-links">
            <button className="login-button">Login</button>
            <button className="signup-button">Signup</button>
          </div>
        </div>
      </header>
      <nav className="navbar">
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#refund">Refund</a>
          <a href="#testimonials">Testimonials</a>
        </div>
      </nav>
      <main>
        <section className="hero-section">
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
                <img src="path_to_enroll_now_icon" alt="Enroll Now" />
                Enroll Now
              </button>
              <button className="know-more-button">
                <img src="path_to_know_more_icon" alt="Know More" />
                Know More
              </button>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats-item">
            <div className="stats-number">24</div>
            <div className="stats-label">Courses</div>
          </div>
          <div className="stats-item">
            <div className="stats-number">30k+</div>
            <div className="stats-label">Learners</div>
          </div>
          <div className="stats-item">
            <div className="stats-number">100k+</div>
            <div className="stats-label">Doubts Solved</div>
          </div>
          <div className="stats-item">
            <div className="stats-number">10k+</div>
            <div className="stats-label">Student Projects</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
