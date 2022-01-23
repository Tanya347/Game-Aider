const express = require('express');
const app = express();
const path = require('path');
const port = 4004;

//view engine setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/number', (req, res) => {
    res.render('number');
})

app.get('/colour', (req, res) => {
    res.render('colour');
})

app.get('/photo', (req, res) => {
    res.render('photos');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})