import React, {useState} from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let navigationClass = 'navigation';
  if (menuOpen) {
    navigationClass += ' active';
  }

  return (
    <header>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src="img/hamburger123.png" alt="the hamburger menu icon" />
      </div>
      <div className={navigationClass}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
        <Link to="/login" onClick={toggleMenu}>Login</Link>
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