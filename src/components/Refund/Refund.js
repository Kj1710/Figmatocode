// Refund.js
import React from 'react';
import './Refund.css';

const Refund = () => {
  return (
    <section className="promo-section" id="refund">
      <h1>
        Don’t miss out on this <span className="highlight">limited-time opportunity</span> to learn for <span className="highlight">Free</span>!
      </h1>
      <div className="offer-card">
        <h2>100% Refund Offer 😎</h2>
        <div className="seats-left">20 Seats Left</div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="offer-timer">Offer ends in 10:00 Mins</div>
      </div>
      <section className="how-it-works">
        <h2>How does it work?</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">Step 1</div>
            <h3>Enroll into your favorite course for only ₹1,499</h3>
            <p>Start Learning with <strong>Lifetime Course Access.</strong></p>
          </div>
          <div className="step">
            <div className="step-number">Step 2</div>
            <h3>Complete Course & Assignments within 2 Years!</h3>
            <p>Finish the course within <strong>2 Years</strong> to Qualify for Refund.</p>
          </div>
          <div className="step">
            <div className="step-number">Step 3</div>
            <h3>Receive 100% Refund upon completion</h3>
            <p>Upon Course Completion within <strong>2 Years</strong>, Get Your ₹1,499 Back.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Refund;
