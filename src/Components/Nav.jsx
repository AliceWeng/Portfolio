import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="bar">
                <button className={`${open ? "close" : "open"} hamburger`} onClick={() => setOpen(!open)}></button>
            </div>
            <ul className={!open && "hidden"}>
                <Link onClick={() => setOpen(false)}>
                    <li>About</li>
                </Link>
                <Link onClick={() => setOpen(false)}>
                    <li>Experience</li>
                </Link>
                <Link onClick={() => setOpen(false)}>
                    <li>Projects</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;