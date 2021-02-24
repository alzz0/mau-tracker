import React from 'react'
import './header.css'
function Header (){
    return(
<div className='header-container'>


    <img alt='logo' width={180} height={28.66} src='https://prodcdn.kidoodle.tv/kidoodle-2019-update/images/kidoodle-logo-2020-White.png'/>
    <h1>
        <span>M</span>onthly
        <br/>
        <span>A</span>ctive 
        <br/>
        <span>U</span>sers
    </h1>
</div>
    )
}

export default Header