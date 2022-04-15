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

function togglePopup() {
    const content = document.getElementById('truth-questions')
    content.innerHTML = " ";
    for (truth of truths) {
        const para = document.createElement("button");
        para.textContent = truth;
        content.appendChild(para);
    }
    document.getElementById("popup-1").classList.toggle("active");
}
const popup = document.querySelector('.content');

popup.addEventListener('click', (e) => {

    const list = document.getElementById('truth-questions');
    list.removeChild(e.target);
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
    if (truths.includes(input.value) == 0)
        truths.push(input.value);
    input.value = "";
})