import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-content">
        <div className="logo">LOGO</div>
        <div className="auth-links">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
