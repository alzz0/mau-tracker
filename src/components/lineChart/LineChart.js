import React, { useState, useEffect } from 'react';
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

function LineChart({ width, height }) {
  const placeholderData = [
    {
      name: 'Oct 20',
      current: 20,
      target: 24,
      amt: 24,
    },
    {
      name: 'Nov 20',
      current: 26,
      target: 28,
      amt: 22,
    },
    {
      name: 'Dec 20',
      current: 35,
      target: 32,
      amt: 22,
    },
    {
      name: 'Jan 21',
      current: 36,
      target: 34,
      amt: 20,
    },
    {
      name: 'Feb 21',
      current: 40,
      target: 36,
      amt: 21,
    },
    {
      name: 'Mar 21',
      current: null,
      target: 38,
      amt: 25,
    },
    {
      name: 'Apr 21',
      current: null,
      target: 40,
      amt: 21,
    },
    {
      name: 'may 21',
      current: null,
      target: 44,
      amt: 21,
    },
    {
      name: 'Jun 21',
      current: null,
      target: 49,
      amt: 210,
    },
    {
      name: 'Jul 21',
      current: null,
      target: 51,
      amt: 21,
    },
    {
      name: 'Aug 21',
      current: null,
      target: 58,
      amt: 21,
    },
    {
      name: 'Sep 21',
      current: null,
      target: 70,
      amt: 21,
    },
    {
      name: 'Nov 21',
      current: null,
      target: 73,
      amt: 21,
    },
    {
      name: 'Dec 21',
      current: null,
      target: 75,
      amt: 21,
    },
  ];
  const [mauData, setMauData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    callData();

    //data call every two hours
    setInterval(callData, 7200000);
  }, []);

  async function callData() {
    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Key': 'M60PnJQAjw3a6ITNE2Pae949A6kQ82Eg946d4QQ4',
    };
    axios
      .get('https://metrics.kidoodle.tv/v1-dev/office/', {
        headers,
      })
      .then((res) => {

        setMauData(res.data.MAUs);

        setLoading(false);
      });
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


  
  if (!loading) {
    return (
      <div className='chart-container'>
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
            //interval={0}
            //tickCount={1}
            // tickFormatter={(tickValue) => `${tickValue}M`}
            tickFormatter={formatXAxis}
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
            tickFormatter={formatYAxis}
            interval={0}
            tickCount={mauData.length}
            orientation='right'
            style={{ fontWeight: 'bold', fill: '#CED0D1' }}
          />
          <Tooltip />
          <Legend />

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

export default LineChart;

// parameters

// inside Line type="monotone" makes line soft instead of sharp
