const api_KEY = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const img_PATH = 'https://image.tmdb.org/t/p/w1280';
const search_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(api_KEY);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach(movie => {
    const {poster_path, title, vote_average, overview} = movie;

    const movieEle = document.createElement('div');
    movieEle.classList.add('movie')
    movieEle.innerHTML = `
      <img src="${img_PATH + poster_path} " alt="${title}"></img>
      <div class="movies-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>       
      </div>
      <div class='overview'>
        <h3>Overview</h3>
        ${overview}
      </div>
    `;

    main.appendChild(movieEle);
  })


  function getColor(vote) {
    if(vote >= 8) {      
      return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
      return 'red'
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = search.value;
    if(value && value !== '') {
      getMovies(search_API + value);

      search.value = '';
    } else {
      window.location.reload();
    }
  })
  
 
}