import React from 'react';
import '../style.css';

export function Header() {
  return (
    <header>
      <div className="menu-icon">
        <img src="img/hamburger123.png" alt="the hamburger menu icon" />
      </div>
      <div className="navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="login.html">Login</a>
      </div>
      <div className="title">
        <h1>UW Makers Exchange</h1>
      </div>
      <div className="mascot">
        <img src="img/huskyINFO340.png" alt="UW Husky Mascot" />
      </div>
    </header>
  );
}