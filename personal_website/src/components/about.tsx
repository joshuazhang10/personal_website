import { useState } from 'react';
import './about.css'

export interface ButtonSelectorProps {
    activeText: string;
    onClick: (label: string) => void;
    buttonLabels: readonly string[]
}

const ButtonSelector = ({ activeText, onClick, buttonLabels }: ButtonSelectorProps) => {
    return (
        <>
            <div className="button-about-group">
                {buttonLabels.map((label: string) => (
                    <Button 
                        key={label}
                        isActive={activeText === label}
                        label={label}
                        onClick={() => onClick(label)}
                    />
                ))}
            </div>
        </>
    );
};

export interface ButtonProps {
    isActive: boolean;
    label: string;
    onClick: (label: string) => void;
}

const Button = ({ isActive, label, onClick }: ButtonProps) => {
    return (
        <button className={isActive ? "active" : "normal"} onClick={() => onClick(label)}>
            {label}
        </button>
    );
};

function About() {
    const buttonLabels: readonly string[] = ["Coding", "Music", "Other"];

    const [activeText, setActiveText] = useState(buttonLabels[0]);
    const [visibleText, setVisibleText] = useState(buttonLabels[0]); 
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

    const handleClick = (newText: string) => {
        if (newText === visibleText) return;

        setActiveText(newText); // Change without delay so the button click changes immediately
        setFadeState('fade-out'); 
        setTimeout(() => {
            setVisibleText(newText);
            setFadeState('fade-in');
        }, 300);
    };

    const getText = () => {
        switch (visibleText) {
            case buttonLabels[0]:
                return "I'm a software engineer and computer science student graduating from Colby College in May 2026.\n \
                        My favorite programming languages, tools, and technologies include Python, React, C#, and SQL.\n \
                        I'm also interested in AI and web development.\n \
                        This past summer, I interned at Salary.com doing full-stack development!"
            case buttonLabels[1]:
                return "I've loved music my whole life! I've been playing the trombone for 12 years.\n \
                        I also enjoy composing and listening to music.\n \
                        My favorite genres are classical, jazz, indie rock, and shoegaze.\n \
                        I also like record collecting."
            case buttonLabels[2]:
                return "Some of my other interests include Rubik's cubes, speedrunning, and content creation!\n \
                        Top 1% World speedcuber (3x3 sub-9 ao5 PR).\n \
                        Multiple-time world record holder in one of the best-selling games of all time (IYKYK).\n \
                        6k+ Twitch followers, 3k+ YouTube subscribers."
            default:
                return "";
        }
    };

    return (
        <div className="section-container">
            <h1 className="section-title">About Me</h1>
            <p className={`section-paragraph ${fadeState}`}>
                {getText()}
            </p>
            {/* <input type="text" className="search-input" placeholder="Search..."/> */}
            <ButtonSelector
                activeText={activeText}
                onClick={handleClick}
                buttonLabels={buttonLabels}
            />
        </div>
    );
}

export default About;