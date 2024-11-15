import React, { useState } from 'react'
import './style.css'
import MainPricePart from '../atoms/MainPricePart'
import MainButton from '../atoms/MainButton'


function MainRightSide({ plusItem, minusItem, addToCart, cartCount, count }) {


    return (
        <div className='RightSide'>
            <div className='Company'>Sneaker Company</div>
            <div className='Title'>Fall Limited Edition Sneakers</div>
            <div className='Text'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
            <div>
                <MainPricePart />
            </div>
            <div>
                <MainButton onIncrement={plusItem} onDecrement={minusItem} addToCart={addToCart} cartCount={cartCount} count={count} />
            </div>
        </div>
    )
}

export default MainRightSide