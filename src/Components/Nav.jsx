import { useState, useRef } from "react";
import { HashLink } from "react-router-hash-link";

function Nav() {
    const [open, setOpen] = useState(false);

    const hamburgerRef = useRef();

    return (
        <nav>
            <div className="bar">
                <button
                    className={`${open ? "close" : "open"} hamburger`}
                    aria-label={open ? "close menu" : "open menu"}
                    onClick={() => setOpen(!open)}
                    ref={hamburgerRef}>
                </button>
            </div>
            <ul className={open ? null : "hidden"}>
                <li>
                    <HashLink to="#about" onClick={() => setOpen(false)} smooth>About</HashLink>
                </li>
                <li>
                    <HashLink to="#experience" onClick={() => setOpen(false)} smooth>Experience</HashLink>
                </li>
                <li>
                    <HashLink to="#projects" onClick={() => setOpen(false)} smooth>Projects</HashLink>
                </li>
                {/* Found a solution for focus trap. - https://stackoverflow.com/a/75300986 */}
                <span tabIndex="0" aria-hidden="true" onFocus={() => hamburgerRef.current.focus()}></span>
            </ul>
        </nav>
    )
}

export default Nav;