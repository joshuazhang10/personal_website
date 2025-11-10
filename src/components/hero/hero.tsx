import joshuaImg1 from '../../assets/joshua_1.png'
import { ReactComponent as HelloSvg } from '../../assets/hello.svg';
import './hero.css'
import { useEffect } from 'react';
import Socials from '../socials/socials';

// https://akashraj9828.github.io/svg-text-animation-generator/
function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    const svg = document.querySelector('.hero-svg');
    svg.classList.add('visible');
    
    const originalPath = svg.querySelector("path");
    const d = originalPath.getAttribute("d");
    
    // Split the path data on "M" commands (start of each subpath)
    const parts = d.split(/(?=M)/g).filter(Boolean);
    
    parts.forEach(part => {
        const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        newPath.setAttribute("d", part.trim());
        newPath.setAttribute("fill", "none");
        newPath.setAttribute("stroke", strokeColor);
        newPath.setAttribute("stroke-width", strokeWidth);
        svg.appendChild(newPath);
    });
    
    originalPath.remove(); 

    let paths = document.querySelectorAll("path");
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}

function setSocialsAnimation() {
    const socials = document.querySelector('.socials-container');
    socials?.classList.add('visible');
}

function Hero() {
    useEffect(() => {
        const timer = setTimeout(() => {
            setTextAnimation(0.2, 6.3, 2, 'ease-out', '#ffffff', false);

            setTimeout(() => { // Load socials after text animation
                setSocialsAnimation();
            }, 2000);

        }, 500); // Give user a second to process the website before text loads
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="hero">
            <div className="hero-image-container">
                <img className="hero-image" src={joshuaImg1}/>
                <div className="hero-image-gradient"></div>
                <div className="hero-background-gradient"></div>
            </div>
            <div>
                <HelloSvg className="hero-svg"/>
            </div>
            <div className="socials">
                <Socials />
            </div>
        </div>
    );
}

export default Hero