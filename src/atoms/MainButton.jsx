import React, { useState } from 'react'
import './style.css'
import Shape from '../assets/Shape.svg'

function MainButton({onDecrement, onIncrement, addToCart, cartCount, count}) {

    return (
        <>
            <div className='Buttons'>
                <div className='Counter'>
                    <button className='countButton' onClick={onDecrement}> - </button>
                    <div className='countedNumber'>{count}</div>
                    <button className='countButton' onClick={onIncrement}> + </button>
                </div>
                <div>
                    <button className='addToCart' onClick={addToCart}>
                        <img src={Shape} alt="" />
                        Add to cart
                    </button>
                </div>
            </div>

            <div>
                {cartCount}
            </div>
        </>
    )
}

export default MainButton