import { useState } from 'react'
import './App.css'
import Container from './componntes/Container'
import { Navbar } from './componntes/Navbar'
import Bennar from './componntes/Bennar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="">
    <Navbar/>
    <Bennar/>
   </div>
    </>
  )
}

export default App
