// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#overview">Overview</a>
        <a href="#curriculum">Curriculum</a>
        <a href="#refund">Refund</a>
        <a href="#testimonials">Testimonials</a>
      </div>
    </nav>
  );
}

export default Navbar;
