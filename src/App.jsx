import { useState } from 'react'
import './App.css'
import Container from './componntes/Container'
import { Navbar } from './componntes/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="">
    <Navbar/>
   </div>
    </>
  )
}

export default App
