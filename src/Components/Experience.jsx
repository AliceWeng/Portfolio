import { Link } from "react-router-dom";
import certificate from "../images/certificate.png";

function Experience() {
    return (
        <section id="experience">
            <h2>Where I Learned To Code</h2>
            <div className="container">
                <h3>
                    <Link to="https://digitalskills.unlv.edu/software-development-bootcamp" target="_blank" rel="noopener noreferrer">
                        ThriveDX, University of Las Vegas
                    </Link>
                    <span aria-label="2022 to 2023">2022 - 2023</span>
                </h3>
                <p>
                    I recently graduated from a software development bootcamp after 10 months spent learning a wide assortment of technologies and languages.
                    During my time there, I made 3 milestone projects which can be found down below.
                </p>
            </div>
            <img src={certificate} alt="certificate of completion" width="668" height="516.41"/>
        </section>
    )
}

export default Experience;