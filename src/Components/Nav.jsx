import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="bar">
                <button aria-label={open ? "close menu" : "open menu"} className={`${open ? "close" : "open"} hamburger`} onClick={() => setOpen(!open)}></button>
            </div>
            <ul className={!open && "hidden"}>
                <li>
                    <HashLink to="#about" onClick={() => setOpen(false)} smooth>About</HashLink>
                </li>
                <li>
                    <HashLink to="#experience" onClick={() => setOpen(false)} smooth>Experience</HashLink>
                </li>
                <li>
                    <HashLink to="#projects" onClick={() => setOpen(false)} smooth>Projects</HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;