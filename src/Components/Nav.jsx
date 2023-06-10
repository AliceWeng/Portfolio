import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="bar">
                <button aria-label="" className={`${open ? "close" : "open"} hamburger`} onClick={() => setOpen(!open)}></button>
            </div>
            <ul className={!open && "hidden"}>
                <li>
                    <HashLink to="#about" onClick={() => setOpen(!open)} smooth>About</HashLink>
                </li>
                <li>
                    <HashLink to="#experience" onClick={() => setOpen(!open)} smooth>Experience</HashLink>
                </li>
                <li>
                    <HashLink to="#projects" onClick={() => setOpen(!open)} smooth>Projects</HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;