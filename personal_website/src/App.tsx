import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about/about'
import Hero from './components/hero/hero'
import Preloader from './components/preloader/preloader'

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
