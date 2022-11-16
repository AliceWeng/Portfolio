let sun = document.querySelector(".sun");
sun.addEventListener("click", () => {
    document.body.classList.toggle("night");
});

let bubble = document.querySelector(".bubble");
let pop = new Audio("./audio/pop.mp3");
bubble.onclick = () => pop.play();