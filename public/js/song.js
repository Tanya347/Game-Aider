const colourButton = document.getElementById("colour");
const h1 = document.querySelector("h1");
let colourtype;

function generateColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    if (hsp > 127.5)
        colourtype = "light";
    else
        colourtype = "dark";

    return `rgb(${r}, ${g}, ${b})`;

}

colourButton.addEventListener("click", function () {
    const newColor = generateColor();
    document.body.style.backgroundColor = newColor;
    h1.textContent = "The color is " + newColor;
    if (colourtype === "dark")
        document.body.style.color = "white";
    else
        document.body.style.color = "black";
})


/**************** Song 1 ****************/
const Song = document.getElementById("Song")
const play = document.getElementById("play")
play.addEventListener('click', () => {
    if (Song.paused) {
        Song.play();
        play.src = "Assets/Song/pause.jpg";
    } else {
        Song.pause();
        play.src = "Assets/Song/play.jpg";
    }
})