import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Logo from "./Logo";

function Loader({setLoading}) {
    useEffect(() => {
        animate();
    }, []);

    const animate = () => {
        const logo = anime.timeline({
            complete: () => setLoading(false)
        });
        logo
        .add({
            targets: ".star div:nth-child(1)",
            opacity: 1,
            delay: 400
        })
        .add({
            targets: ".star div:nth-child(2)",
            opacity: 1
        }, "-=800")
        .add({
            targets: ".star div:nth-child(3)",
            opacity: 1
        }, "-=800")
        .add({
            targets: ".star div:nth-child(4)",
            opacity: 1
        }, "-=800")
        .add({
            targets: ".star div:nth-child(5)",
            opacity: 1
        }, "-=800")
        .add({
            targets: ".logo path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutQuart",
            duration: 1500
        }, "-=1000")
        .add({
            targets: ".star",
            easing: "easeInOutQuart",
            opacity: 0
        }, "-=700")
        .add({
            targets: ".star + svg",
            easing: "easeInOutQuart",
            opacity: 0
        }, "-=1000")
        .add({
            targets: ".loader",
            easing: "easeInOutQuart",
            opacity: 0
        })
    };

    return (
        <div className="loader">
            <Logo/>
        </div>
    )
}

export default Loader;