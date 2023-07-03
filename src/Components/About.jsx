import { Link } from "react-router-dom";

function About() {
    return (
        <section id="about">
            <h2>Introduction</h2>
            <div className="container">
                <p>
                    Hello, my name is Alice Weng.
                    I'm an aspiring software developer.
                    In 2021, I built a <Link to="https://pcpartpicker.com/list/8jNcXb" target="_blank" rel="noopener noreferrer">PC</Link> for the first time.
                    I didn't know how to, so I Google searched and watched YouTube videos until I did.
                    The same applies to coding.
                    I look stuff up and try it out.
                </p>
            </div>
        </section>
    )
}

export default About;