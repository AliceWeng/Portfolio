import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Nav() {
    const [active, setActive] = useState(false);

    return (
        <nav>
            <button
                className={`${active ? "close" : "open"} hamburger`}
                aria-label={`${active ? "close" : "open"} menu`}
                onClick={() => setActive(!active)}>
            </button>
            <ul className={active ? null : "hidden"} aria-label="jump to section of page">
                <li>
                    <HashLink to="#about" onClick={() => setActive(false)} smooth>About</HashLink>
                </li>
                <li>
                    <HashLink to="#experience" onClick={() => setActive(false)} smooth>Experience</HashLink>
                </li>
                <li>
                    <HashLink to="#projects" onClick={() => setActive(false)} smooth>Projects</HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;