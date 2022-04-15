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