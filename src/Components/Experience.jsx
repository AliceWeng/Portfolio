import { Link } from "react-router-dom";
import certificate from "../images/certificate.png";

function Experience() {
    return (
        <section id="experience">
            <h2>Where I Learned To Code</h2>
            <div className="container">
                <h3>
                    <Link to="https://digitalskills.unlv.edu/software-development-bootcamp" target="_blank" rel="noopener noreferrer">
                        ThriveDX <span aria-label="and">&&</span> University of Las Vegas
                    </Link>
                </h3>
                <p>
                    I recently graduated from a software development bootcamp.
                    
                </p>
            </div>
            <img src={certificate} alt="certificate of completion"/>
        </section>
    )
}

export default Experience;