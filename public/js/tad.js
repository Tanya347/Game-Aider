//Picking names

let nameArray = [];
const display = document.getElementById('display');

function pickName() {
    display.textContent = "";
    let names = document.getElementById("names").value;
    nameArray = names.split(',');
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = nameArray[i].trim();
    }
    let index = Math.floor(Math.random() * nameArray.length);
    display.textContent = nameArray[index];
}

//Truth

var truths = [
    "When was the last time you lied?",
    "When was the last time you cried?",
    "What's your biggest fear?",
    "What's your biggest fantasy?",
    "Do you have any fetishes?",
    "What's something you're glad your mum doesn't know about you?",
    "Have you ever cheated on someone?",
    "What's the worst thing you've ever done?",
    "What's a secret you've never told anyone?",
    "Do you have a hidden talent?",
    "Who was your first celebrity crush?",
    "What are your thoughts on polyamory?",
    "What's the worst intimate experience you've ever had?",
    "Have you ever cheated in an exam?",
    "What's the most drunk you've ever been?",
    "Have you ever broken the law?",
    "What's the most embarrassing thing you've ever done?",
    "What's your biggest insecurity?"
]

const questions = document.getElementById('truth-questions')

function togglePopup() {
    questions.innerHTML = " ";
    for (truth of truths) {
        const q = document.createElement("button");
        q.textContent = truth;
        questions.appendChild(q);
    }
    document.getElementById("popup-1").classList.toggle("active");
}

questions.addEventListener('click', (e) => {
    const text = e.target.textContent;
    const index = truths.indexOf(text);
    truths.splice(index, 1);
    questions.removeChild(e.target);
})

const generateButton = document.querySelector('.generate');

generateButton.addEventListener('click', () => {
    const display = document.getElementById('question');
    display.textContent = "";
    let index = Math.floor(Math.random() * truths.length)
    display.textContent = truths[index];
})

const input = document.getElementById("add");
const addQuestionButton = document.getElementById('submit-question')

addQuestionButton.addEventListener('click', () => {
    if (truths.includes(input.value) == 0) {
        truths.push(input.value);
        const q = document.createElement("button");
        q.textContent = input.value;
        questions.appendChild(q);
    }
    input.value = "";
})
