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

const songs = ["Assets/Song/Baepsae.mp3",
    "Assets/Song/134340.mp3",
    "Assets/Song/DNA.mp3",
    "Assets/Song/Ddaeng.mp3",
    "Assets/Song/Look Here.mp3"
]

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

function playSong1() {
    for (let i = 0; i < 5; i++) {
        if (arr_song[i] == s1)
            continue
        else {
            arr_song[i].pause();
            arr_play[i].src = "Assets/Song/play.jpg";
        }
    }

    if (s1.paused) {
        s1.play();
        p1.src = "Assets/Song/pause.jpg";
    } else {
        s1.pause();
        p1.src = "Assets/Song/play.jpg";
    }
}

function playSong2() {
    for (let i = 0; i < 5; i++) {
        if (arr_song[i] == s2)
            continue
        else {
            arr_song[i].pause();
            arr_play[i].src = "Assets/Song/play.jpg";
        }
    }

    if (s2.paused) {
        s2.play();
        p2.src = "Assets/Song/pause.jpg";
    } else {
        s2.pause();
        p2.src = "Assets/Song/play.jpg";
    }
}

function playSong3() {
    for (let i = 0; i < 5; i++) {
        if (arr_song[i] == s3)
            continue
        else {
            arr_song[i].pause();
            arr_play[i].src = "Assets/Song/play.jpg";
        }
    }

    if (s3.paused) {
        s3.play();
        p3.src = "Assets/Song/pause.jpg";
    } else {
        s3.pause();
        p3.src = "Assets/Song/play.jpg";
    }
}

function playSong4() {
    for (let i = 0; i < 5; i++) {
        if (arr_song[i] == s4)
            continue
        else {
            arr_song[i].pause();
            arr_play[i].src = "Assets/Song/play.jpg";
        }
    }

    if (s4.paused) {
        s4.play();
        p4.src = "Assets/Song/pause.jpg";
    } else {
        s4.pause();
        p4.src = "Assets/Song/play.jpg";
    }
}

function playSong5() {
    for (let i = 0; i < 5; i++) {
        if (arr_song[i] == s5)
            continue
        else {
            arr_song[i].pause();
            arr_play[i].src = "Assets/Song/play.jpg";
        }
    }

    if (s5.paused) {
        s5.play();
        p5.src = "Assets/Song/pause.jpg";
    } else {
        s5.pause();
        p5.src = "Assets/Song/play.jpg";
    }
}