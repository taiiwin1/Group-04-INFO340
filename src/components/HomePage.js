import React from 'react';
import '../style.css';

export function HomePage() {

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="category-dropdown">
        <select>
          <option value="" selected disabled>Select Type</option>
          <option value="Croches">Crocheting</option>
          <option value="Custom Keycaps">Yarn Crafts</option>
          <option value="Shirts">Shirts</option>
          <option value="Bracelets">Bracelets</option>
        </select>
      </div>
      <div className="card-container">
        <div className="card">
          <img src="img/shirt.jpg" alt="Item 1" />
          <h2>Item 1 Title</h2>
          <p>Short description of Item 1</p>
        </div>
        <div className="card">
          <img src="img/bracelet.webp" alt="Item 2" />
          <h2>Item 2 Title</h2>
          <p>Short description of Item 2</p>
        </div>
        <div className="card">
            <img src="img/keycaps2.webp" alt="Item 2" />
            <h2>Item 2 Title</h2>
            <p>Short description of Item 2</p>
        </div>
        <div className="card">
            <img src="img/crochet2.jpeg" alt="Item 2" />
            <h2>Item 2 Title</h2>
            <p>Short description of Item 2</p>
        </div>
        <div className="card">
          <img src="img/crochet2.jpeg" alt="Item 2" />
          <h2>Item 2 Title</h2>
          <p>Short description of Item 2</p>
        </div>
        <div className="card">
          <img src="img/crochet2.jpeg" alt="Item 2" />
          <h2>Item 2 Title</h2>
          <p>Short description of Item 2</p>
        </div>
      </div>
    </div>
  );
}