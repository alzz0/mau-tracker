import React,{useState} from 'react'
import {Filler} from './Filler'
import './progressbar.css'

function ProgressBar (){
const [progress,setProgress]=useState(60)
    
    return(
<div className='progress-bar'>
        <Filler progress={progress}/>
</div>
    )
}

export default ProgressBar