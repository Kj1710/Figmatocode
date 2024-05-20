// Curriculum.js

import React from "react";
import "./Curriculum.css";

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

const Curriculum = () => {
  return (
    <section className="full-screen" id="curriculum">
      <div className="curriculum-section">
        <div className="curriculum-container">
          <div className="container">
            <div className="learning-path">
              DATASCIENCE COURSE LEARNING PATH
            </div>
            <h1 className="title">
              <span className="gradient-text">Data Science</span>
              <span className="normal-text"> Course Curriculum</span>
            </h1>
            <div className="courses-container">
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
                    <img className="eyeimage" src="eye.png" alt="" srcset="" />
                    <span>View Curriculum</span>
                  </button>
                </div>
              ))}
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
