import { faGithubSquare, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../components/socials.css'
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons';
import JoshuaZhangResume from '../assets/Joshua_Zhang_Resume_2025.pdf'

const SocialsButton = ({ icon, text, link }) => {
    return (
        <div className="button-container">
            <a href={link} target="_blank" rel="noopener noreferrer" className="socials-button">
                <FontAwesomeIcon icon={icon} size="3x" />
            </a>
            <h6 className="button-text">{text}</h6>
        </div>
    );
};

function Socials() {
    return (
        <div className="socials-container">
            <SocialsButton icon={faSquareLinkedin} text="Let's connect!" link="https://linkedin.com/in/joshua-zhang-8bb7b4283/"/>
            <SocialsButton icon={faGithubSquare} text="View my projects" link="https://github.com/joshuazhang10"/>
            <SocialsButton icon={faEnvelope} text="Send me an email" link="mailto:jszhan26@colby.edu"/>
            <SocialsButton icon={faFileLines} text="View resume" link={JoshuaZhangResume}/>
        </div>
    );
}

export default Socials;