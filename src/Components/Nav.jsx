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
                <li>
                    <Link>
                        Home
                    </Link>
                </li>
                <li>
                    <Link>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link>
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;