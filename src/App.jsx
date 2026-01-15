import { useState } from 'react'
import './App.css'
import Container from './componntes/Container'
import { Navbar } from './componntes/Navbar'
import Bennar from './componntes/Bennar'
import About from './componntes/About'
import Skills from './componntes/Skills'
import Portfolio from './componntes/Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="">
    <Navbar/>
    <Bennar/>
    <About/>
    <Skills/>
    <Portfolio/>
   </div>
    </>
  )
}

export default App
