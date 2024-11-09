import React from 'react'
import Shop from '../assets/Group 14.svg'
import Icon from '../assets/Oval.svg'
import './style.css'



function HeaderIconPart() {

    return (
        <div className='IconPart'>
            <div>
                <img className='ItemIcon' src={Shop} alt="" />
                <div className='ItemNumber'></div>
            </div>
            <img src={Icon} alt="" />
        </div>
    )
}

export default HeaderIconPart