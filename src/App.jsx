import { useState } from 'react'
import './App.css'
import HeaderOrganism from './organisms/HeaderOrganism'
import MainOrganism from './organisms/MainOrganism'


function App() {
  const [count, setCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  function minusItem() {
    setCount(count > 0 ? count - 1 : 0)
  }
  function plusItem() {
    setCount(count + 1)
    console.log(count);
  }

  function addToCart() {
    setCartCount(count)
    setCount(0)
  }


  return (
    <>
      <HeaderOrganism count={count}/>
      <MainOrganism onIncrement={plusItem} onDecrement={minusItem} addToCart={addToCart} cartCount={cartCount} count={count} />
    </>
  )
}

export default App
