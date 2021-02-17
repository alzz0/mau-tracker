import React from 'react';
import './goals.css';
function Goals() {
  return <div className='goals-container'>

      <div className='current-target'>
        <div className='current-tab goal-tab'>CURRENT</div>
        <div className='target-tab goal-tab'>TARGET</div>
      </div>

      <div className='goals-box'>
          <h1>GOALS</h1>
      </div>
  </div>;
}

export default Goals;
