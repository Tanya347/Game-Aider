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

const song = document.querySelectorAll('.song')

const play = document.querySelectorAll('.play')

function mainPlay(s, p) {
    for (let i = 0; i < 5; i++) {
        if (song[i] == s)
            continue
        else {
            song[i].pause();
            play[i].src = "Assets/Song/play.jpg";
        }
    }

    if (s.paused) {
        s.play();
        p.src = "Assets/Song/pause.jpg";
    } else {
        s.pause();
        p.src = "Assets/Song/play.jpg";
    }

    let flag = 0;
    for (pl of play) {
        if (pl.src === "http://localhost:4004/Assets/Song/pause.jpg") {
            flag = 1;
            document.querySelector("body").classList.add("change");
        }
    }

    if (flag === 0) {
        document.querySelector("body").classList.remove("change");
    }
}

play[0].addEventListener('click', () => {
    mainPlay(song[0], play[0]);
})

play[1].addEventListener('click', () => {
    mainPlay(song[1], play[1]);
})

play[2].addEventListener('click', () => {
    mainPlay(song[2], play[2]);
})

play[3].addEventListener('click', () => {
    mainPlay(song[3], play[3]);
})

play[4].addEventListener('click', () => {
    mainPlay(song[4], play[4]);
})
