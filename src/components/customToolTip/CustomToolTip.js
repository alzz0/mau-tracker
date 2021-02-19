import React,{useEffect,useState} from 'react'
import './customToolTip.css'
function CustomToolTip ({data}){
    const [date,setDate]= useState()
    const[mau,setMau]=useState()
    console.log(data)

 useEffect(()=>{
     createDate()
     createGoal()
 })

function createGoal(){
    let currentData=data.slice(-1)[0].current;
    let strData=currentData.toString()
    let firstDecPlace=strData.slice(0,2)
    let tenthDecPlace=strData.slice(2,4)
    let total=Number(`${firstDecPlace}.${tenthDecPlace}`)
    setMau(total)
    console.log(total)
    console.log(typeof total)
    
}
function createDate(){
    var d = new Date();
    var year = d.getFullYear();
    let currentMonthData=data.slice(-1)[0].name;
    let mauDate=`${currentMonthData}, ${year}`
    setDate(mauDate)
}
       
    
    

    return(
        <div className='custom-tool-tip-container'>
            <h3>{date && date }</h3>
            <h1>{mau && mau}<br/> MILLION</h1>
        </div>
    )
}

export default CustomToolTip