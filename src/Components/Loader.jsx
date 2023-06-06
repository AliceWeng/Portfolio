import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function Loader() {
    useEffect(() => {
        animate();
    }, []);

    const animate = () => {
        const intro = anime.timeline();
        intro
        .add({
            targets: ".loader",
            easing: "easeInOutQuart",
            opacity: 0,
            zIndex: -1
        })
        .add({
            targets: "#name path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            duration: 5000
        })
    };

    return (
        <div className="loader"></div>
    )
}

export default Loader;