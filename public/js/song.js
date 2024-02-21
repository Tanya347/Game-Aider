
const songContainer = document.querySelector('.song-container')
const s = document.querySelectorAll(".s");

let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');

dropdownBtn.addEventListener('click', () => {
    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
    }
})

let songs = [
    "Assets/Song/Ddaeng.mp3",
    "Assets/Song/DNA.mp3",
    "Assets/Song/134340.mp3",
    "Assets/Song/LookHere.mp3",
    "Assets/Song/Baepsae.mp3"
]

function changeSong(index) {
    console.log('hi')
    songContainer.innerHTML = `
    <img src = "Assets/Song/play.png" alt = "" class="play" onclick="playSong()">
    <audio class="song">
        <source src=${songs[index]} type="audio/mp3">
    </audio>`
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')

    // if (play.src === "http://localhost:4004/Assets/Song/pause.png") {
    if (play.src === "https://game-aider.herokuapp.com/Assets/Song/pause.png") {
        document.querySelector("body").classList.add("change");
    }
    else {
        document.querySelector("body").classList.remove("change");
    }
}

s[0].addEventListener('click', () => {
    changeSong(0)
    menuContent.style.display = "";
})

s[1].addEventListener('click', () => {
    changeSong(1)
    menuContent.style.display = "";
})

s[2].addEventListener('click', () => {
    changeSong(2)
    menuContent.style.display = "";
})

s[3].addEventListener('click', () => {
    changeSong(3)
    menuContent.style.display = "";
})

s[4].addEventListener('click', () => {
    changeSong(4)
    menuContent.style.display = "";
})

function playSong() {
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    console.log("hi")
    if (song.paused) {
        song.play();
        play.src = "Assets/Song/pause.png";
    } else {
        song.pause();
        play.src = "Assets/Song/play.png";
    }


    // if (play.src === "http://localhost:4004/Assets/Song/pause.png") {
    if (play.src === "https://game-aider.herokuapp.com/Assets/Song/pause.png") {
        document.querySelector("body").classList.add("change");
    }
    else {
        document.querySelector("body").classList.remove("change");
    }
}


