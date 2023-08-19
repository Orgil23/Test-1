import React from 'react';
import ImageSlider from './ImageSlider';
import './App.css';

const App = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="app" style={{width: 600}}>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
