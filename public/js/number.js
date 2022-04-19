let images = ["Assets/Dice/1.svg",
    "Assets/Dice/2.svg",
    "Assets/Dice/3.svg",
    "Assets/Dice/4.svg",
    "Assets/Dice/5.svg",
    "Assets/Dice/6.svg",
]

let dice = document.getElementById("SingleDice");

function roll1() {

    dice.classList.add("shake");

    setTimeout(function () {

        dice.classList.remove("shake");

        let value = Math.floor(Math.random() * 6);
        console.log(value);
        document.querySelector("#SingleDice").setAttribute("src", images[value]);
        document.querySelector("#result1").innerHTML += value + 1;
    }, 1000
    );
}

let die = document.querySelectorAll(".twoDie");
function roll2() {

    die.forEach(function (d) {
        d.classList.add("shake");
    })

    setTimeout(function () {

        die.forEach(function (d) {
            d.classList.remove("shake");
        })

        let value1 = Math.floor(Math.random() * 6);
        let value2 = Math.floor(Math.random() * 6);
        console.log(value1, value2);
        die[0].setAttribute("src", images[value1]);
        die[1].setAttribute("src", images[value2]);
        document.querySelector("#result2").innerHTML += ((value1 + 1) + (value2 + 1));
    }, 1000
    );
}

const numberButton = document.getElementById("numberButton");
let lower = document.getElementById("si");
let upper = document.getElementById("ei");
const answer = document.getElementById("answer");
const refresh = document.getElementById("refresh");

function randomGenerator(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(number);
    answer.append(number);
}

numberButton.addEventListener('click', () => {
    answer.textContent = " ";
    randomGenerator(parseInt(lower.value), parseInt(upper.value));
})

