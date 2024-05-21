import React, {useState} from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className="menu-icon" onClick={toggleDropdown}>
        <img src="img/hamburger123.png" alt="the hamburger menu icon" />
      </div>
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleDropdown}>Home</Link>
        <Link to="/about" onClick={toggleDropdown}>About Us</Link>
        <Link to="/login" onClick={toggleDropdown}>Login</Link>
      </div>
      <div className="title">
        <h1>UW Makers Exchange</h1>
      </div>
      <div className="mascot">
        <img src="img/huskyINFO340.png" alt="UW Husky Mascot" />
      </div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
} 