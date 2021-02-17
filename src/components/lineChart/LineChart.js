import React,{useState, useEffect} from 'react'
import CustomToolTip from '../customToolTip/CustomToolTip'
import './lineChart.css'

import { LineChart as Chart,LabelList, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';



function LineChart(){
    const [width,setWidth]=useState(0.8 * window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight)
    window.addEventListener("resize", update)

    function update() {
        setWidth(0.8 * window.innerWidth)
        setHeight(window.innerHeight)
      };
    useEffect(()=>{
        setWidth(0.8*window.innerWidth)
        setHeight(window.innerHeight)

    })

    
    const data = [
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
      ]
   
      
  
       
      
return(
  <div className='chart-container'>
    <CustomToolTip/>
     
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
        <CartesianGrid strokeWidth={10} stroke="#17153A" />

        <XAxis
          xAxisId={0}
          dy={-15}
          dx={0}
          style={{
            textAnchor: 'middle',
            fontWeight: 'bold',
            fill: '#018DBE',
            fontSize:'20px',
         
          }}
          label={{ value: '', angle: 0, position: 'bottom' }}
          
          dataKey='target'
          tickLine={false}
          tickFormatter={(tickValue) => `${tickValue}M`}

        />
           <XAxis
          tickLine={true}
          xAxisId={1}
          style={{
            textAnchor: 'middle',
            fontWeight: 'bold',
            fill: '#CED0D1',
          }}
          dy={0}
          dx={-0}
          label={{ value: '', angle: 0, position: 'bottom' }}
          
          dataKey='name'
          tickLine={false}
          
          tick={{ fontSize: 9, angle: 0 }}
        />
        
        
        <YAxis dataKey="target"  tickFormatter={(tickValue) => `${tickValue }M`} interval={0} tickCount={data.length} orientation='right' style={{  fontWeight: 'bold', fill: '#CED0D1' }} />
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