import { useEffect, useState } from 'react'
import './preloader.css'

function Preloader({ onFinish }) {
    const [fadeOut, setFadeOut] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 100);
        const finish = setTimeout(() => onFinish(), 1000);
        return () => {
            clearTimeout(timer);
            clearTimeout(finish);
        };
    }, [onFinish]);

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}/>
    );
}

export default Preloader;