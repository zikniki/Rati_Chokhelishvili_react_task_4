import React from 'react'
import './style.css'
import OldPrice from '../assets/$250.00.svg'

function MainPricePart(props) {

    return (
        <div className='PricePart'>
            <div className='NewPricePart'>
                <div className='NewPrice'>$125.00</div>
                <div className='Salle'>50%</div>
            </div>
            <img src={OldPrice} alt="" />
        </div>
    )
}

export default MainPricePart