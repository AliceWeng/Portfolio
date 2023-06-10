import { Link } from "react-router-dom";
import certificate from "../images/certificate.png";

function Experience() {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <p>I recently graduated from <Link to="https://digitalskills.unlv.edu/software-development-bootcamp" target="_blank" rel="noreferrer">UNLV's software development bootcamp</Link>.</p>
            <img src={certificate} alt="Alice's certificate."/>
        </section>
    )
}

export default Experience;