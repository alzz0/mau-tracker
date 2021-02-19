import React from 'react';
import ProgressBar from '../progressbar/ProgressBar'
import './goals.css';
function Goals() {
  return (
    <div className='goals-container'>
      <div className='current-target'>
        <div className='current-tab goal-tab'>
          <span className='current-target-text'>
            <span className='goal-bullet'>&#8226;</span> CURRENT
          </span>
        </div>
        <div className='target-tab goal-tab'>
          <span className='current-target-text'>
            <span className='goal-bullet'>&#8226;</span> TARGET
          </span>
        </div>
      </div>
      <div className='goals-box'>
        <h1>GOALS</h1>
        <ProgressBar/>
      </div>
    </div>
  );
}

export default Goals;
