import React from 'react';
import Stwo from './Stwo';
import './Stwop.css'

const App = () => {
  return (
    <div className="app">
        <div className="title">React Accordion</div>
        <div className="bracket">
        <Stwo
        title="Accordion Item 1"
        content="Content for Accordion Item 1"
      />
      <Stwo
        title="Accordion Item 2"
        content="Content for Accordion Item 2"
      />
      <Stwo
        title="Accordion Item 3"
        content="Content for Accordion Item 3"
      />
      <Stwo
        title="Accordion Item 4"
        content="Content for Accordion Item 4"
      />
        </div>
      
    </div>
  );
};

export default App;
