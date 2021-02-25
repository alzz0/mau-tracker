import React from 'react';
import ProgressBar from '../progressbar/ProgressBar'
import './goals.css';
function Goals({width}) {
  return (
    <div className='goals-container'>
      <div className='current-target'>
        <div className='current-tab goal-tab'>
          <span className='current-target-text'>
            <span className='goal-bullet goal-bullet-current'>&#8226;</span> CURRENT
          </span>
        </div>
        <div className='target-tab goal-tab'>
          <span className='current-target-text'>
            <span className='goal-bullet goal-bullet-target'>&#8226;</span> TARGET
          </span>
        </div>
      </div>
      
      <div className='goals-box'>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <img width={95} height={95} alt='six eyed monster'className='sixEyedMonster'src={process.env.PUBLIC_URL + '/images/6eyes.png'} /> 
      {width>=1030 && <img  alt='play monster'className='playMonster'src={process.env.PUBLIC_URL + '/images/playMonster.png'} /> }
      
        <h1>GOALS</h1>
        <ProgressBar/>
          <div className='goals-label'>
            <ul>
              <li>2019 <span>8 MILLION</span></li>
              <li>2020 <span>10 MILLION</span></li>
              <li>2021 <span>15 MILLION</span></li>
              <li>2022 <span>30 MILLION</span></li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Goals;
