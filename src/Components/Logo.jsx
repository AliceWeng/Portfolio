import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link className="logo" to="/">
            <div className="star">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <title>Logo</title>
                <path d="M 20 95 l 30 -90l 30 90 l -75 -55" stroke="aliceblue" fill="transparent"/>
            </svg>
        </Link>
    )
}

export default Logo;