import { Link } from "react-router-dom";

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li className="milestone">
                    <Link to="https://aliceweng.github.io/Rock-Paper-Scissors" target="_blank" rel="noreferrer">
                        <h3>Rock, Paper, Scissors</h3>
                    </Link>
                    <p></p>
                    <ul className="techstack">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </li>
                <li className="milestone">
                    <Link to="https://buck-it-seven.vercel.app" target="_blank" rel="noreferrer">
                        <h3>Buck It</h3>
                    </Link>
                    <p></p>
                    <ul className="techstack">
                        <li>PostgreSQL</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </li>
                <li className="milestone">
                    <Link to="https://helloworld.aliceweng.com" target="_blank" rel="noreferrer">
                        <h3>Hello World</h3>
                    </Link>
                    <p></p>
                    <ul className="techstack">
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Projects;