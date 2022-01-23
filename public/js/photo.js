const randomButton = document.getElementById("Random");
const randomImage = document.getElementById("randomImage");

randomButton.addEventListener('click', function () {
    //let url = 'https://source.unsplash.com/random';
    randomImage.innerHTML = ' ';
    randomImage.innerHTML = '<img src="https://source.unsplash.com/random/">'
})