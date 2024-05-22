import React, { useState } from 'react';
import {Footer} from './Footer';
import '../style.css';
import items from '../data/items.json'

export function HomePage() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = items.filter(item => item.category.includes(filter));

  const filteredItems2 = filteredItems.map(item => (
    <div key={item.id} className="card">
      <img src={item.imgSrc} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  ));

  return (
    <div>
      <main>
        <section>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="category-dropdown">
            <select defaultValue="" onChange={handleFilterChange}>
              <option value="" disabled>Select Type</option>
              <option value="Croches">Crocheting</option>
              <option value="Custom Keycaps">Custom Keycaps</option>
              <option value="Clothing">Clothing</option>
              <option value="Bracelets">Bracelets</option>
            </select>
          </div>
        </section>
        <section className="card-container">
          {filteredItems2}
        </section>
    </main>
    <Footer />
    </div>
  );
}