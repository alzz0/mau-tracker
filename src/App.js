import React, { useState, useEffect } from 'react';
import './app.css';
import Header from './components/header/Header';
import LineChart from './components/lineChart/LineChart';
import Goals from './components/goals/Goals';


function App() {
 
  const [width, setWidth] = useState(0.8 * window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  window.addEventListener('resize', update);

  function update() {
    if (window.innerWidth <= 1030) {
      setWidth(0.95 * window.innerWidth);
      setHeight(0.4 * window.innerHeight);
    } else {
      setWidth(0.8 * window.innerWidth);
      setHeight(window.innerHeight);
    }
  }


  useEffect(() => {
    if (window.innerWidth <= 1030) {
      setWidth(0.95 * window.innerWidth);
      setHeight(0.4 * window.innerHeight);
    } else {
      setWidth(0.8 * window.innerWidth);
      setHeight(window.innerHeight);
    }
  });




  if (width <= 1030) {
    return (
      <div className='main-container'>
        <Header />
        <LineChart  height={height} width={width} />
        <Goals />
      </div>
    );
  } else {
    return (
      <div className='main-container'>
        <Header />
        <Goals />
        <LineChart height={height} width={width} />
      </div>
    );
  }
}

export default App;
