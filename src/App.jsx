import { useState } from 'react'
import './App.css'
import HeaderOrganism from './organisms/HeaderOrganism'
import MainOrganism from './organisms/MainOrganism'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderOrganism />
      <MainOrganism />
    </>
  )
}

export default App
