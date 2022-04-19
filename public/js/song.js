const song = document.querySelectorAll('.song')

const play = document.querySelectorAll('.play')

function mainPlay(s, p) {
    for (let i = 0; i < 5; i++) {
        if (song[i] == s)
            continue
        else {
            song[i].pause();
            play[i].src = "Assets/Song/play.png";
        }
    }

    if (s.paused) {
        s.play();
        p.src = "Assets/Song/pause.png";
    } else {
        s.pause();
        p.src = "Assets/Song/play.png";
    }

    let flag = 0;
    for (pl of play) {
        console.log(pl.src)
        if (pl.src === "http://localhost:4004/Assets/Song/pause.png") {
            // if (pl.src === "https://indoors-app.herokuapp.com/Assets/Song/pause.jpg") {
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
