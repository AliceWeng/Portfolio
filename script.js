let sun = document.querySelector(".sun");

sun.addEventListener("click", () => {
    document.body.classList.toggle("night");
});

let main = document.querySelector("main");
let pop = new Audio("./audio/pop.mp3");

let createBubble = () => {
    let bubble = document.createElement("div");
    bubble.className = "bubble";
    let moveBubble = () => {
        bubble.style.left = Math.floor(Math.random() * ((document.body.clientWidth - 50) - 50 + 1) + 50) + "px";
    }
    moveBubble();
    let clicked = false;
    bubble.addEventListener("click", () => {
        clicked = true;
        pop.play();
        bubble.remove();
        createBubble();
    });
    setTimeout(() => {
        if(!clicked) {
            moveBubble();
        }
    }, 8000);
    main.append(bubble);
}

for(let i = 0; i < 5; i++) {
     setTimeout(() => {
        createBubble();
    }, i * 1600)
}

