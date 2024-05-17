import React, { useState } from 'react';
import '../style.css';

const items = [
  { id: 1, title: 'Item 1 Title', description: 'Short description of Item 1', category: 'Shirts', imgSrc: 'img/shirt.jpg' },
  { id: 2, title: 'Item 2 Title', description: 'Short description of Item 2', category: 'Bracelets', imgSrc: 'img/bracelet.webp' },
  { id: 3, title: 'Item 3 Title', description: 'Short description of Item 3', category: 'Custom Keycaps', imgSrc: 'img/keycaps2.webp' },
  { id: 4, title: 'Item 4 Title', description: 'Short description of Item 4', category: 'Croches', imgSrc: 'img/crochet2.jpeg' },
];    // we can add more items besides these 4

export function HomePage() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = items.filter(item => item.category.includes(filter));

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="category-dropdown">
        <select defaultValue="" onChange={handleFilterChange}>
          <option value="" disabled>Select Type</option>
          <option value="Croches">Crocheting</option>
          <option value="Custom Keycaps">Custom Keycaps</option>
          <option value="Shirts">Shirts</option>
          <option value="Bracelets">Bracelets</option>
        </select>
      </div>
      <div className="card-container">
        {filteredItems.map(item => (
          <div key={item.id} className="card">
            <img src={item.imgSrc} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}