import React, { useState } from 'react'
import MainLeftSide from '../molecules/MainLeftSide'
import MainRightSide from '../molecules/MainRightSide'

function MainOrganism({ plusItem, minusItem, addToCart, cartCount, count }) {

    return (
        <div className='MainSection'>
            <MainLeftSide />
            <MainRightSide onIncrement={plusItem} onDecrement={minusItem} addToCart={addToCart} cartCount={cartCount} count={count} />
        </div>
    )
}

export default MainOrganism
