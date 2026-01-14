import { useState } from 'react'
import './App.css'
import Container from './componntes/Container'
import { Navbar } from './componntes/Navbar'
import Bennar from './componntes/Bennar'
import About from './componntes/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="">
    <Navbar/>
    <Bennar/>
    <About/>
   </div>
    </>
  )
}

export default App
