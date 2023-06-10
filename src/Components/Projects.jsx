import { Link } from "react-router-dom";

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <Link to="https://aliceweng.github.io/Rock-Paper-Scissors" target="_blank" rel="noreferrer">
                        <h3>Rock, Paper, Scissors</h3>
                    </Link>
                </li>
                <li>
                    <Link to="https://buck-it-seven.vercel.app" target="_blank" rel="noreferrer">
                        <h3>Buck It</h3>
                    </Link>
                </li>
                <li>
                    <Link to="https://helloworld.aliceweng.com" target="_blank" rel="noreferrer">
                        <h3>Hello World</h3>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Projects;