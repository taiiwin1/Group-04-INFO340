import React from 'react';
import '../style.css';
import {Footer} from './Footer';

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
          <p> 
            UW Makers Exchange is an online platform created by and for students at the 
            University of Washington who are passionate about creating and sharing their handmade 
            crafts. It serves as a marketplace where UW students can buy, sell, and trade their unique creations, 
            fostering a community of makers within the university.
          </p>
          <h3>How does it work?</h3>
          <p>
            UW Makers Exchange works as a centralized platform where students can showcase their handmade products, 
            ranging from crocheted items and paintings to custom keycaps and other artisan crafts. Users can create accounts, 
            list their items for sale, browse products created by other students, and engage in transactions directly through 
            the platform. The exchange facilitates connections between makers and buyers, promoting creativity, collaboration, 
            and entrepreneurship within the UW community</p>
        </div>
        <div id="missions">
          <h2>What is our mission?</h2>
          <p>
            The missions of UW Makers Exchange revolve around promoting creativity, sustainability, and community engagement among students. 
            Some key objectives include providing students with a platform to showcase and monetize their creative talents, fostering a culture 
            of sustainability by encouraging the reuse and repurposing of materials in handmade crafts, and building a supportive community where 
            students can connect, collaborate, and share their passion for making. Additionally, the exchange aims to empower students to explore 
            entrepreneurship and develop valuable skills in marketing, sales, and product management through their participation in the platform.
            A huge aspect of our idea comes out of the existing UW Makers Fair itself! However as you may know, the fair only happens once a quarter,
            which leaves so untouch potential for these talented students... which is where we come in! Out platform will operate year around, and be
            a safe home for students; this is the heart of UW Makers Exchange.</p>
        </div>
        <div id="who-we-are">
          <h2>Who we are</h2>
          <p>
            We are a group of 4 Informatics students: William, Billy, Yaphet, and Tai. Our idea originally bloomed out of taking the course INFO 340
            and working on it as a basis for our group project. However. each of us are individually passionate about out missions and are ready to 
            continuously put in effort to make UW Makers Exchange into the best it can be. </p>
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
      <Footer />
    </div>
  );
}