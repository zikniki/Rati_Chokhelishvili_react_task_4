import React from 'react'
import './style.css'
import Item from '../assets/Rectangle.svg'
import Item1 from '../assets/Rectangle Copy.svg'
import Item2 from '../assets/Rectangle Copy 2.svg'
import Item3 from '../assets/Rectangle Copy 3.svg'
import Item4 from '../assets/Rectangle Copy 4.svg'



function MainLeftSide() {
    return (
        <div className='leftSide'>
            <div>
                <img src={Item} alt="" />
            </div>
            <div className='CopyImg'>
                <img src={Item1} alt="" />
                <img src={Item2} alt="" />
                <img src={Item3} alt="" />
                <img src={Item4} alt="" />
            </div>
        </div>
    )
}

export default MainLeftSide