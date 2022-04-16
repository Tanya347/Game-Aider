const API_KEY = 'api_key=35e8d3648fcb0632dee22097e9b13dad';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const searchURL = BASE_URL + 'search/movie?' + API_KEY
const findURL = BASE_URL + 'find/2/?' + API_KEY + '&language=en-US&external_source=imdb_id';
console.log(findURL);
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const random = document.getElementById('random')

// getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function generateMovie() {
    let index = Math.floor(Math.random() * 50);
    const URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&' + API_KEY + `&page=${index}`;
    fetch(URL).then(res => res.json()).then(data => {
        const i = Math.floor(Math.random() * 20)
        random.innerHTML = ""
        movie = data.results[i];

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL + movie.poster_path}"
                alt="${movie.title}">

            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>${movie.release_date}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${movie.overview}
            </div>
        `
        console.log(movieEl)
        random.appendChild(movieEl)
    })
}

function showMovies(data) {
    main.innerHTML = "";
    data.forEach(movie => {
        const { title, poster_path, release_date, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}"
                alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span>${release_date}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    console.log(searchURL);
    if (searchTerm) {
        getMovies(searchURL + '&query=' + searchTerm)
    } else {
        main.innerHTML = "";
    }
})



