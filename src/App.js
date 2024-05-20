import React from "react";
import "./App.css";

function App() {
  const courses = [
    {
      title: "C++",
      description: "Learn C++ for strong programming fundamentals.",
    },
    {
      title: "MERN Stack",
      description: "Master the MERN stack for high-demand projects.",
    },
    {
      title: "Data Structure & Algorithm",
      description:
        "Excel in Data Structures and Algorithms for interview success.",
    },
    {
      title: "Competitive Programming",
      description:
        "Excel in Data Structures and Algorithms for interview success.",
    },
  ];

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
                  src="question mark.png"
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
        <br />

        <section className="full-screen">
          <div id="curriculum" className="curriculum-section">
            <div className="curriculum-container">
              <div className="container">
                <div className="learning-path">
                  DATASCIENCE COURSE LEARNING PATH
                </div>
                <h1 className="title">Data Science Course Curriculum</h1>
                {courses.map((course, index) => (
                  <div key={index} className="course-card">
                    <div className="course-info">
                      <h2>{course.title}</h2>
                      <p>
                        {course.description}
                        {course.highlight && (
                          <span className="highlight"> {course.highlight}</span>
                        )}
                      </p>
                    </div>

                    <button className="view-curriculum-btn">
                      {" "}
                      <img
                        className="eyeimage"
                        src="eye.png"
                        alt=""
                        srcset=""
                      />
                      View Curriculum
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="refund">
          <div className="app">
            <section className="promo-section">
              <h1>
                Don’t miss out on this{" "}
                <span className="highlight">limited-time opportunity</span> to
                learn for <span className="highlight">Free</span>!
              </h1>
              <div className="offer-card">
                <h2>100% Refund Offer 😎</h2>
                <div className="seats-left">20 Seats Left</div>
                <div className="progress-bar">
                  <div className="progress"></div>
                </div>
                <div className="offer-timer">Offer ends in 10:00 Mins</div>
              </div>
            </section>
            <section className="how-it-works">
              <h2>How does it work?</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">Step 1</div>
                  <h3>Enroll into your favorite course for only ₹1,499</h3>
                  <p>
                    Start Learning with <strong>Lifetime Course Access.</strong>
                  </p>
                </div>
                <div className="step">
                  <div className="step-number">Step 2</div>
                  <h3>Complete Course & Assignments within 2 Years!</h3>
                  <p>
                    Finish the course within <strong>2 Years</strong> to Qualify
                    for Refund.
                  </p>
                </div>
                <div className="step">
                  <div className="step-number">Step 3</div>
                  <h3>Receive 100% Refund upon completion</h3>
                  <p>
                    Upon Course Completion within <strong>2 Years</strong>, Get
                    Your ₹1,499 Back.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
