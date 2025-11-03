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
                return "I'm a software engineer and computer science student graduating from Colby College in May 2026. \
                        Some of my interests include coding, music, Rubik's cubes, speedrunning, and content creation!"
            case buttonLabels[1]:
                return "I've loved music my whole life! I've been playing the trombone for 12 years. \
                        I also enjoy composing music and listening to music. \
                        My favorite genres are classical, jazz, indie rock, and shoegaze."
            case buttonLabels[2]:
                return "I'm a software engineer and computer science student graduating from Colby College in May 2026. \
                        Some of my interests include coding, music, Rubik's cubes, speedrunning, and content creation!"
            default:
                return "";
        }
    };

    return (
        <div>
            <h1 className="sectiontitle">About Me</h1>
            <p className={`sectionparagraph ${fadeState}`}>
                {getText()}
            </p>
            <input type="text" className="search-input" placeholder="Search..."/>
            <ButtonSelector 
                activeText={activeText}
                onClick={handleClick}
                buttonLabels={buttonLabels}
            />
        </div>
    );
}

export default About;