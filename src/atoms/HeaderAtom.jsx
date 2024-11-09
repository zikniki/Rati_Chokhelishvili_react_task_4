import React from 'react'
import Logo from '../assets/logo.svg'
import './style.css'

function HeaderAtom(props) {

    return (
        <div className='Navbar'>
            <img src={Logo} alt="" />
            <div>{props.navbar1}</div>
            <div>{props.navbar2}</div>
            <div>{props.navbar3}</div>
            <div>{props.navbar4}</div>
            <div>{props.navbar5}</div>
        </div>
    )
}

export default HeaderAtom