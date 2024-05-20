import React, { useState, useEffect } from 'react';
import './InternshipProgram.css';




const InternshipProgram = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); 
        };
        
        handleResize();
       
        window.addEventListener('resize', handleResize);
 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="internship-program-container">
            <h2 className="main-title-certificate">How does the Internship Program work?</h2>
            <div className="steps-container">
                <img src={isSmallScreen ? "last3.png" : "last2.png"} alt="Internship" className='last' />
            </div>
            <button className="apply-button">Apply now for ₹ 2999</button>
        </div>
    );
};

export default InternshipProgram;
