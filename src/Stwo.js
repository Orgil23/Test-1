import React, { useState } from 'react';
import './Stwo.css'

const Stwo = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#x002B;</span>
        <h2>{title}</h2>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Stwo;
