import { Link } from "react-router-dom";

function Projects() {
    return (
        <section id="projects">
            <h2>Things I've Built</h2>
            <ul>
                <li className="container">
                    <h3>
                        <Link to="https://helloworld.aliceweng.com" target="_blank" rel="noopener noreferrer">
                            Hello World
                        </Link>
                    </h3>
                    <div>
                        <p>
                            I implemented user authentication and authorization.
                            It's a social networking site.
                        </p>
                        <ul className="stack" aria-label="technologies used">
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Vercel</li>
                        </ul>
                    </div>
                </li>
                <li className="container">
                    <h3>
                        <Link to="https://buck-it-seven.vercel.app" target="_blank" rel="noopener noreferrer">
                            Buck It
                        </Link>
                    </h3>
                    <div>
                        <p>
                            I collaborated with a team to create wireframes and translate design specifications into reusable components.
                            It's a forum for bucket list ideas.
                        </p>
                        <ul className="stack" aria-label="technologies used">
                            <li>PostgreSQL</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Vercel</li>
                        </ul>
                    </div>
                </li>
                <li className="container">
                    <h3>
                        <Link to="https://aliceweng.github.io/Rock-Paper-Scissors" target="_blank" rel="noopener noreferrer">
                            Rock, Paper, Scissors
                        </Link>
                    </h3>
                    <div>
                        <p>
                            I used imperative programming to build a front-end browser game.
                            It's a dynamic single-page application composed of promises to progress changes in state.
                        </p>
                        <ul className="stack" aria-label="technologies used">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>GitHub Pages</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Projects;