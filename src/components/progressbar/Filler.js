import './progressbar.css'

export const Filler=({progress})=>{

    return <div className='filler' style={{height:`${progress}%`}}>
<div className={`marker marker-one  filled` } ></div>
<div className={`marker marker-two ${progress>=50? 'filled':""}`} ></div>
<div className={`marker marker-three ${progress>=75? 'filled':""}`} ></div>
<div className={`marker marker-four ${progress>=100? 'filled':""}`} ></div>
    </div>
}