import React from 'react';
import '../style.css';

export function AboutPage() {
  return (
    <div className="page-container">
      <div className="left-column">
        <div className="image-container">
          <img src="img/aboutus1.jpg" alt="A picture of the maker fair" />
        </div>
        <div className="image-container">
          <img src="img/aboutus2.jpg" alt="A picture of the maker fair" />
        </div>
        <div className="image-container">
          <img src="img/aboutus5.jpg" alt="A picture of the maker fair" />
        </div>
      </div>
      <div className="content">
        <h2>About Us</h2>
        <ul>
          <li><a href="#what-is">What is UW Makers Exchange?</a></li>
          <li><a href="#missions">What are our missions?</a></li>
          <li><a href="#who-we-are">Who we are?</a></li>
        </ul>
        <div id="what-is">
          <h2>What is UW Makers Exchange?</h2>
          <p>UW Makers Exchange is an online platform...</p>
          <h3>How does it work?</h3>
          <p>UW Makers Exchange works as a centralized platform...</p>
        </div>
        <div id="missions">
          <h2>What is our mission?</h2>
          <p>The missions of UW Makers Exchange revolve around...</p>
        </div>
        <div id="who-we-are">
          <h2>Who we are</h2>
          <p>We are a group of 4 Informatics students...</p>
        </div>
      </div>
      <div className="right-column">
        <div className="image-container">
          <img src="img/aboutus3.jpg" alt="A picture of the maker fair" />
        </div>
        <div className="image-container">
          <img src="img/aboutus4.jpg" alt="A picture of the maker fair" />
        </div>
        <div className="image-container">
          <img src="img/aboutus6.webp" alt="A picture of the maker fair" />
        </div>
      </div>
    </div>
  );
}