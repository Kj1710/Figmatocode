// Curriculum.js
import React from 'react';
import './Curriculum.css';

const courses = [
  {
    title: 'C++',
    description: 'Learn C++ for strong programming fundamentals.',
  },
  {
    title: 'MERN Stack',
    description: 'Master the MERN stack for high-demand projects.',
  },
  {
    title: 'Data Structure & Algorithm',
    description: 'Excel in Data Structures and Algorithms for interview success.',
    highlight: 'Akshay bhasin',
  },
  {
    title: 'Competitive Programming',
    description: 'Excel in Data Structures and Algorithms for interview success.',
  },
];

const Curriculum = () => {
  return (
    <section className="full-screen">
      <div id="curriculum" className="curriculum-section">
        <div className="curriculum-container">
          <div className="container">
            <div className="learning-path">DATASCIENCE COURSE LEARNING PATH</div>
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
                <button className="view-curriculum-btn">View Curriculum</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
