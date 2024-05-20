import React from "react";
import "./TopCompanies.css";

const TopCompanies = () => {
  return (
    <div className="top-companies-container">
      <h2 className="top-companies-title">
        Top Companies Hiring <span className="highlight">Data Scientist</span>
      </h2>
      <div className="logos">
        <img src="logo1.png" alt="Company 1 Logo" className="logo" />
        <img src="logo2.png" alt="Company 2 Logo" className="logo" />
        <img src="logo3.png" alt="Company 3 Logo" className="logo" />
        <img src="logo4.png" alt="Company 4 Logo" className="logo" />
        <img src="logo5.png" alt="Company 5 Logo" className="logo" />
      
      </div>
    </div>
  );
};

export default TopCompanies;
