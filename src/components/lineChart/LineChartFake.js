import React, { useState, useEffect, } from 'react';
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import axios from 'axios';
import CustomToolTip from '../customToolTip/CustomToolTip';
import './lineChart.css';

function LineChartFake({ width, height }) {
  

  const placeholderData = [
    {
      name: 'Oct 20',
      current: 404652,
      target: 350000,
      amt: 24,
    },
    {
      name: 'Nov 20',
      current: 639674,
      target: 600000,
      amt: 22,
    },
    {
      name: 'Dec 20',
      current: 1598364,
      target: 1000000,
      amt: 22,
    },
    {
      name: 'Jan 21',
      current: 2690905,
      target: 2500000,
      amt: 20,
    },
    {
      name: 'Feb 21',
      current: 3752389,
      target: 3500000,
      amt: 21,
    },
    {
      name: 'Mar 21',
      current: 4989991,
      target: 3800000,
      amt: 25,
    },
    {
      name: 'Apr 21',
      current: 4500000,
      target: 4000000,
      amt: 21,
    },
    {
      name: 'may 21',
      current: 5338452,
      target: 5000000,
      amt: 21,
    },
    {
      name: 'Jun 21',
      current: 5133552,
      target: 5500000,
      amt: 210,
    },
    {
      name: 'Jul 21',
      current: 5500000,
      target: 6300000,
      amt: 63000000,
    },
    {
      name: 'Aug 21',
      current: 4500000,
      target: 5500000,
      amt: 55000000,
    },
    {
      name: 'Sep 21',
      current: 6502300,
      target: 6302300,
      amt: 21,
    },
    {
      name: 'Nov 21',
      current: 7023000,
      target: 7402000,
      amt: 21,
    },
    {
      name: 'Dec 21',
      current: 7802300,
      target: 8023000,
      amt: 21,
    },

   
  ];
  const [mauData, setMauData] = useState(placeholderData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    callData();
    randomizeData()

    //data call every two hours
    setInterval(randomizeData, 5000);
  }, []);

   function callData() {
   setMauData(placeholderData)
   setLoading(false)
  }

  function randomizeData(){
    let newData=[mauData]
    mauData.map(data=>{
       data.current=Math.round(Math.random()*15)
       data.target=Math.round(Math.random()*12)
       newData.push(data)
    })
    setMauData(newData)
 
}

  let strokeWidth = window.innerWidth <= 1030 ? 4 : 10;

  const formatXAxis = (tickItem) => {
    let strTick = tickItem.toString();

    if (strTick.length === 6) {
      let firstNum = strTick.slice(0, 1);
      let secondNum = strTick.slice(1, 2);
      
      let total = Number(`0.${firstNum}${secondNum} `);
      return (tickItem = total);
    } else {
      let firstNum = strTick.slice(0, 1);
      let secondNum = strTick.slice(1, 2);
    
      let total = Number(`${firstNum}.${secondNum} `);
      return (tickItem = total);
    }
  };

  const formatYAxis = (tickItem) => {
    let strTick = tickItem.toString();
 
    if (strTick.length === 6) {
      let firstNum = strTick.slice(0, 1);
      let secondNum = strTick.slice(1, 2);
     
      let total = Number(`0.${firstNum}${secondNum} `);
      return (tickItem = total);
    } else {
      let firstNum = strTick.slice(0, 1);
      let secondNum = strTick.slice(1, 2);
    
      let total = Number(`${firstNum}.${secondNum} `);
      return (tickItem = total);
    }
  };


  
  if (!loading)  {
    return (
      <div className='chart-container' >
        <CustomToolTip data={mauData} />
        <Chart
          radius={[0, 5, 5, 0]}
          width={width}
          height={height}
          data={mauData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeWidth={strokeWidth} stroke='#17153A' />
          <XAxis
            xAxisId={0}
            dy={-15}
            dx={0}
            style={{
              textAnchor: 'middle',
              fontWeight: 'bold',
              fill: '#018DBE',
              fontSize: '30px',
            }}
            label={{ value: '', angle: 0, position: 'bottom' }}
            dataKey='target'
            tickLine={false}
            interval={0}
            //tickCount={1}
            // tickFormatter={(tickValue) => `${tickValue}M`}
            //tickFormatter={formatXAxis}
          />
          <XAxis
            tickLine={false}
            xAxisId={1}
           // interval={0}
            style={{
              textAnchor: 'middle',
              fontWeight: 'bold',
              fill: '#CED0D1',
            }}
            dy={0}
            dx={-0}
            label={{ value: '', angle: 0, position: 'bottom' }}
            dataKey='name'
            tick={{ fontSize: 9, angle: 0 }}
          />

          <YAxis
          tickLine={false}
            dataKey='target'
            // tickFormatter={(tickValue) => `${tickValue}M`}
            //tickFormatter={formatYAxis}
            interval={0}
            tickCount={mauData.length}
            width={30}
            orientation='right'
            style={{ fontWeight: 'bold', fill: '#CED0D1' }}
          />
          <Tooltip />
         

          <Line
            dataKey='current'
            stroke='#00BDFF'
            style={{ strokeLinecap: 'round' }}
            strokeWidth={6}
            activeDot={{
              fill: '#fff',
              stroke: 'rgba(255, 255, 255,0.3)',
              strokeWidth: 44,
              r: 11,
              
            }}
            dot={false}
          />
          <Line
            strokeDasharray='25 25'
            strokeWidth={6}
            style={{ strokeLinecap: 'round', opacity: '0.7' }}
            dot={false}
            dataKey='target'
            stroke='#6B43C6'
          />
        </Chart>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default LineChartFake;


