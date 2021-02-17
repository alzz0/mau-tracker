import React from 'react'
import './app.css'
import Header from './components/header/Header'
import LineChart from './components/lineChart/LineChart'
import Goals from './components/goals/Goals'


function App() {
  return (
    <div className='main-container'>
      <Header/>
      <Goals/>
      <LineChart/>
      
    </div>
  );
}

export default App;
