import React,{useState, useEffect} from 'react'
import '../App.css';

import { LineChart as Chart,LabelList, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';



function LineChart(){
    const [width,setWidth]=useState(0.7 * window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight)
    window.addEventListener("resize", update)

    function update() {
        setWidth(0.7 * window.innerWidth)
        setHeight(window.innerHeight)
      };
    useEffect(()=>{
        setWidth(0.7*window.innerWidth)
        setHeight(window.innerHeight)

    })

    
    const data = [
        {
          name: 'Oct 20',
          current: 2000,
          target: 2400,
          amt: 2400,
        },
        {
          name: 'Nov 20',
          current: 2600,
          target: 2800,
          amt: 2210,
        },
        {
          name: 'Dec 20',
          current: 3500,
          target: 3200,
          amt: 2290,
        },
        {
          name: 'Jan 21',
          current: 3600,
          target: 3400,
          amt: 2000,
        },
        {
          name: 'Feb 21',
          current: 4000,
          target: 3600,
          amt: 2181,
        },
        {
          name: 'Mar 21',
          current: null,
          target: 3800,
          amt: 2500,
        },
        {
          name: 'Apr 21',
          current: null,
          target: 4000,
          amt: 2100,
        },
        {
            name: 'may 21',
            current: null,
            target: 4400,
            amt: 2100,
          },
          {
            name: 'Jun 21',
            current: null,
            target: 4900,
            amt: 2100,
          },
          {
            name: 'Jul 21',
            current: null,
            target: 5100,
            amt: 2100,
          },
          {
            name: 'Aug 21',
            current: null,
            target: 5800,
            amt: 2100,
          },
          {
            name: 'Sep 21',
            current: null,
            target: 7000,
            amt: 2100,
          },
          {
            name: 'Nov 21',
            current: null,
            target: 7300,
            amt: 2100,
          },
          {
            name: 'Dec 21',
            current: null,
            target: 7500,
            amt: 2100,
          },
      ]
      
      
  
       
      
return(
  <div className='chart-container'>
     
  {/* <ResponsiveContainer> */}
  <Chart
        width={width} 
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeWidth={14} stroke="#17153A" />
        <XAxis dataKey="name" XAxisId={0}  style={{ textAnchor: 'middle', fontWeight: 'bold', fill: 'rgba(255,255,255, 0.9)' }}/>
        
        
        <YAxis  orientation='right'style={{  fontWeight: 'bold', fill: 'rgba(255,255,255, 0.9)' }} />
        <Tooltip/>
        <Legend />
        
        <Line   dataKey="current" stroke="#00BDFF"  strokeWidth={6} activeDot={{ fill: '#3F99F7', stroke:'#fff', strokeWidth: 3, r: 11, className: "boxShadow" }}
          dot={false} />
        <Line  strokeDasharray="25 25" strokeWidth={6}   dot={false}dataKey="target" stroke="#6B43C6" />
      </Chart>
      {/* </ResponsiveContainer> */}
      </div>
   
)
}

export default LineChart



// parameters

// inside Line type="monotone" makes line soft instead of sharp