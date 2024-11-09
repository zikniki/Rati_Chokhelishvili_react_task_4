import React, { useState } from 'react'
import './style.css'
import Shape from '../assets/Shape.svg'

function MainButton() {
    const [count, setCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    function minusItem() {
        setCount(count > 0 ? count - 1 : 0)
    }
    function plusItem() {
        setCount(count + 1)
    }

    function addToCart() {
        setCartCount(count)
        setCount(0)
    }

    return (
        <>
            <div className='Buttons'>
                <div className='Counter'>
                    <button className='countButton' onClick={minusItem}> - </button>
                    <div className='countedNumber'>{count}</div>
                    <button className='countButton' onClick={plusItem}> + </button>
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