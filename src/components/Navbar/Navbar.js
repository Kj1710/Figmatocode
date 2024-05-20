// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleLinkClick = (event) => {
    const links = document.querySelectorAll('.nav-links a');

    // Remove 'selected' class from all links
    links.forEach(link => link.classList.remove('selected'));

    // Add 'selected' class to the clicked link
    event.target.classList.add('selected');
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#overview" onClick={handleLinkClick}>Overview</a>
        <a href="#curriculum" onClick={handleLinkClick}>Curriculum</a>
        <a href="#refund" onClick={handleLinkClick}>Refund</a>
        <a href="#testimonials" onClick={handleLinkClick}>Testimonials</a>
      </div>
    </nav>
  );
}

export default Navbar;
