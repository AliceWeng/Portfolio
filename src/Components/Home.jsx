import { Link } from "react-router-dom";
import Polaroid from "./Polaroid";
import Nav from "./Nav";
import certificate from "../assets/certificate.png";

function Home() {
    return (
        <main>
            <div className="home">
                <Polaroid/>
                <div className="stickynote">
                    <Nav/>
                    <div className="content">
                        <p>I recently graduated from <Link to="https://digitalskills.unlv.edu/software-development-bootcamp" target="_blank" rel="noreferrer">UNLV's software development bootcamp</Link>.</p>
                        <img src={certificate} alt="Alice's certificate."/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;