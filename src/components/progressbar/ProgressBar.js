import React, { useState,useEffect } from 'react'
import { Filler } from './Filler'
import './progressbar.css'

function ProgressBar() {
    const [progress, setProgress] = useState(50)



    //delete this

    // useEffect(()=>{
    //     setInterval(setFiller,5000)
    // },[])
    // function setFiller(){
    //     setProgress(Math.floor(Math.random()*99))
    // }
    return (
        <div className='progress-bar'>
            <Filler progress={progress} />
        </div>
    )
}

export default ProgressBar