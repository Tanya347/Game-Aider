const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4004

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

app.get('/song', (req, res) => {
    res.render('song');
})

app.get('/movie', (req, res) => {
    res.render('movie');
})

app.get('/tad', (req, res) => {
    res.render('tad');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})