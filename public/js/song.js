// const colourButton = document.getElementById("colour");
// const h1 = document.querySelector("h1");
// let colourtype;

// function generateColor() {
//     let r = Math.floor(Math.random() * 255) + 1;
//     let g = Math.floor(Math.random() * 255) + 1;
//     let b = Math.floor(Math.random() * 255) + 1;

//     const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
//     if (hsp > 127.5)
//         colourtype = "light";
//     else
//         colourtype = "dark";

//     return `rgb(${r}, ${g}, ${b})`;

// }

// colourButton.addEventListener("click", function () {
//     const newColor = generateColor();
//     document.body.style.backgroundColor = newColor;
//     h1.textContent = "The color is " + newColor;
//     if (colourtype === "dark")
//         document.body.style.color = "white";
//     else
//         document.body.style.color = "black";
// })

const s1 = document.getElementById("Song1")
const s2 = document.getElementById("Song2")
const s3 = document.getElementById("Song3")
const s4 = document.getElementById("Song4")
const s5 = document.getElementById("Song5")
const arr_song = [s1, s2, s3, s4, s5]

const p1 = document.getElementById("play1")
const p2 = document.getElementById("play2")
const p3 = document.getElementById("play3")
const p4 = document.getElementById("play4")
const p5 = document.getElementById("play5")
const arr_play = [p1, p2, p3, p4, p5]

function mainPlay(s, p) {
    for (let i = 0; i < 5; i++) {
        if (arr_song[i] == s)
            continue
        else {
            arr_song[i].pause();
            arr_play[i].src = "Assets/Song/play.jpg";
        }
    }

    document.querySelector("body").classList.toggle("change");
    if (s.paused) {
        s.play();
        p.src = "Assets/Song/pause.jpg";
    } else {
        s.pause();
        p.src = "Assets/Song/play.jpg";
    }
}

p1.addEventListener('click', () => {
    mainPlay(s1, p1);
})

p2.addEventListener('click', () => {
    mainPlay(s2, p2);
})

p3.addEventListener('click', () => {
    mainPlay(s3, p3);
})

p4.addEventListener('click', () => {
    mainPlay(s4, p4);
})

p5.addEventListener('click', () => {
    mainPlay(s5, p5);
})
