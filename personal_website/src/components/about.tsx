import { useState } from 'react';
import './about.css'

const ButtonSelector = ({ displayText, setDisplayText }) => {
    return (
        <>
            <div className="button-about-group">
                <Button
                    isActive={displayText === "Coding"}
                    onClick={() => setDisplayText("Coding")}
                >
                    Coding
                </Button>
                <Button
                    isActive={displayText === "Music"}
                    onClick={() => setDisplayText("Music")}
                >
                    Music
                </Button>
                <Button
                    isActive={displayText === "Other"}
                    onClick={() => setDisplayText("Other")}
                >
                    Other
                </Button>
            </div>
        </>
    );
};

const Button = ({ isActive, onClick, children }) => {
    return (
        <button className={isActive ? "active" : "normal"} onClick={onClick}>
            {children}
        </button>
    );
};

function About() {
    const [displayText, setDisplayText] = useState("Coding"); 

    return (
        <div>
            <h1 className="sectiontitle">About Me</h1>
            {displayText === "Coding" && (
                <p className="sectionparagraph">
                    I'm a software engineer and computer science student graduating from Colby College in May 2026. <br />
                    Some of my interests include coding, music, Rubik's cubes, speedrunning, and content creation!
                </p>
            )} 
            {displayText === "Music" && (
                <p className="sectionparagraph">
                    I've loved music my whole life! I've been playing the trombone for 12 years. <br />
                    I also enjoy composing music and listening to music. <br />
                    My favorite genres are classical, jazz, indie rock, and shoegaze.
                </p>
            )} 
            {displayText === "Other" && (
                <p className="sectionparagraph">
                    I'm a software engineer and computer science student graduating from Colby College in May 2026. <br />
                    Some of my interests include coding, music, Rubik's cubes, speedrunning, and content creation!
                </p>
            )} 
            <input type="text" className="search-input" placeholder="Search..."/>
            <ButtonSelector 
                displayText={displayText}
                setDisplayText={setDisplayText}
            />
        </div>
    );
}

export default About;