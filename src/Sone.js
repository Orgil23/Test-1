import React, { useState } from 'react';
import './Sone.css'

const Sone = () => {
  const itemList = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
    "Pineapple"
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(itemList);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    const filteredList = itemList.filter(item =>
      item.toLowerCase().includes(query)
    );

    setFilteredItems(filteredList);
  };

  return (
    <div className="filtered-search">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search items..."
        />
      </div>
      <div className="item-list">
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sone;
