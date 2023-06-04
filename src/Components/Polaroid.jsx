import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import pfp from "../assets/pfp.png";

function Polaroid() {
    return (
        <div className="polaroid">
            <img src={pfp} alt="Alice's headshot."/>
            <ul>
                <li>
                    <Link to="https://github.com/aliceweng" target="_blank" rel="noreferrer" title="GitHub" aria-label="github">
                        <FaGithub/>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/alice-weng" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="linkedin">
                        <FaLinkedinIn/>                     
                    </Link>
                </li>
                <li>
                    <Link to="mailto:alicewengs@gmail.com" target="_blank" rel="noreferrer" title="Email" aria-label="email">
                        <SiGmail/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Polaroid;