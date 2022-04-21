//Picking names

let nameArray = [];
const display = document.getElementById('display');
const spinner = document.getElementById('rotate');

function pickName() {
    var x = 1024;
    var b = 9999;
    var dgre = Math.floor(Math.random() * (x - b)) + b
    spinner.style.transform = "rotate(" + dgre + "deg)";
    display.textContent = "";
    let names = document.getElementById("names").value;
    nameArray = names.split(',');
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = nameArray[i].trim();
    }
    let index = Math.floor(Math.random() * nameArray.length);
    display.textContent = nameArray[index];
    setTimeout(() => {
        const popup = document.getElementById('names-popup')
        popup.classList.toggle("active");
    }, 3000)
}

function toggleAnswer() {
    const popup = document.getElementById('names-popup')
    popup.classList.toggle("active");
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

var dares = [
    "Show the most embarrassing photo on your phone",
    "Show the last five people you texted and what the messages said",
    "Let the rest of the group DM someone from your Instagram account",
    "Eat a raw piece of garlic",
    "Do 100 squats",
    "Keep three ice cubes in your mouth until they melt",
    "Say something dirty to the person on your left",
    "Give a foot massage to the person on your right",
    "Put 10 different available liquids into a cup and drink it",
    "Yell out the first word that comes to your mind",
    "Give a lap dance to someone of your choice",
    "Remove four items of clothing",
    "Like the first 15 posts on your Facebook newsfeed",
    "Eat a spoonful of mustard",
    "Keep your eyes closed until it's your go again",
    "Empty out your wallet/purse and show everyone what's inside",
    "Pretend to be the person to your right for 10 minutes",
    "Eat a snack without using your hands"
]

var nevers = [
    "Never have I ever played hooky from school or work",
    "Never have I ever stolen anything",
    "Never have I ever missed a flight",
    "Never have I ever drunk-dialed my ex",
    "Never have I ever rode a motorcycle",
    "Never have I ever lost a bet",
    "Never have I ever gotten lost alone in a foreign country",
    "Never have I ever bribed someone",
    "Never have I ever gone skinny-dipping",
    "Never have I ever cheated on someone",
    "Never have I ever sang karaoke",
    "Never have I ever broken a bone",
    "Never have I ever lived alone",
    "Never have I ever been on a yacht",
    "Never have I ever been on TV",
    "Never have I ever been on a blind date",
    "Never have I ever lied to law enforcement",
    "Never have I ever gotten a tattoo"
]

const questions = document.getElementById('truth-questions')
const dareTasks = document.getElementById('dares')
const neverHave = document.getElementById('never-questions')

/**************  POP UP DISPLAY FUNCTIONS  ***************/

//truth questions 

function toggle(popup, entity, array) {
    entity.innerHTML = " ";
    for (a of array) {
        const q = document.createElement("button");
        q.textContent = a;
        entity.appendChild(q);
        q.classList.add("elements");
    }
    popup.classList.toggle("active");
}

//truth
function toggleTruth() {
    toggle(document.getElementById("truth"), questions, truths);
}

//dare
function toggleDare() {
    toggle(document.getElementById("dare"), dareTasks, dares);
}

//never have I evers
function toggleNever() {
    toggle(document.getElementById("never"), neverHave, nevers);
}

/****************  DELETE OPTIONS  *****************/

function deleteElement(target, entity, array) {
    const index = array.indexOf(target.textContent);
    array.splice(index, 1);
    entity.removeChild(target);
}

//truth
questions.addEventListener('click', (e) => {
    deleteElement(e.target, questions, truths);
})

//dare
dareTasks.addEventListener('click', (e) => {
    deleteElement(e.target, dareTasks, dares);
})

//never have I evers
neverHave.addEventListener('click', (e) => {
    deleteElement(e.target, neverHave, nevers);
})

/********************  GENERATOR FUNCTIONS  *********************/

function generate(display, array) {
    display.textContent = "";
    let index = Math.floor(Math.random() * array.length)
    display.textContent = array[index];
}

//truth
function generateTruth() {
    generate(document.getElementById('question'), truths);
}

//Dare
function generateDare() {
    generate(document.getElementById('task'), dares);
}

//Never Have I ever
function generateNever() {
    generate(document.getElementById('question'), nevers);
}

/*********************  CUSTOM ADDERS  ***********************/

function add(input, array, entity) {
    if (array.includes(input.value) == 0) {
        array.push(input.value);
        const q = document.createElement("button");
        q.textContent = input.value;
        entity.appendChild(q);
        q.classList.add("elements")
    }
    input.value = "";
}

//truth
function addQuestion() {
    add(document.getElementById("addTruth"), truths, questions)
}

//dare
function addTask() {
    add(document.getElementById("addTask"), dares, dareTasks)
}

//never have I ever
function addNever() {
    add(document.getElementById("addNever"), nevers, neverHave)
}
