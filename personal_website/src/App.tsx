import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about'
import Hero from './components/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Hero />
        <About />
    </>
  )
}

export default App
