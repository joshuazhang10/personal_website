import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about'
import Hero from './components/hero'
import Preloader from './components/preloader'

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <>
                {loading && <Preloader onFinish={() => setLoading(false)} />}
            <Hero />
            <About />
        </>
    )
}

export default App
