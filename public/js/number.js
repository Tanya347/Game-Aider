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

