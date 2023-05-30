import { useEffect } from "react";
import "./Loader.css";
import anime from "animejs/lib/anime.es.js";

function Loader() {
    useEffect(() => {
        animate();
    }, []);

    const animate = () => {
        const loader = anime.timeline();
        loader
        .add({
            targets: ".star div:nth-child(1)",
            opacity: 1,
            delay: 300
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
            targets: ".one",
            easing: "easeInOutQuart",
            strokeDashoffset: [anime.setDashoffset, 0]
        }, "-=1000")
        .add({
            targets: ".two",
            easing: "easeInOutQuart",
            strokeDashoffset: [anime.setDashoffset, 0]
        }, "-=600")
        .add({
            targets: ".three",
            easing: "easeInOutQuart",
            strokeDashoffset: [anime.setDashoffset, 0]
        }, "-=600")
        .add({
            targets: ".star",
            easing: "easeInOutQuart",
            scale: 0
        })
        .add({
            targets: "svg",
            easing: "easeInOutQuart",
            opacity: 0
        }, "-=1000")
        .add({
            targets: ".loader",
            easing: "easeInOutQuart",
            opacity: 0
        }, "-=800")
    };

    return (
        <div className="loader">
            <div className="star">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <title>Logo</title>
                <path className="one" d="M 20 95 l 30 -90" stroke="aliceblue"/>
                <path className="two" d="M 50 5 l 30 90" stroke="aliceblue"/>
                <path className="three" d="M 80 95 l -75 -55" stroke="aliceblue"/>
            </svg>
        </div>
    )
}

export default Loader;