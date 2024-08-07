let form = document.querySelector(".movie-form");
let searchMovieInput = document.querySelector(".movie-search");
searchMovieInput.focus();

let movieContainer = document.querySelector(".movie-container");

let movieName = document.querySelector(".movie-name");
let moviePoster = document.querySelector(".movie-poster");
let movieYear = document.querySelector(".movie-year");

// More info
let moreInfoContainer = document.querySelector(".more-info-container");
let moreInfoBtn = document.querySelector(".more-info-btn");
let moviePlot = document.querySelector(".movie-plot");
let movieDirector = document.querySelector(".movie-director");
let movieActors = document.querySelector(".movie-actors");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let OMDb_API = `http://www.omdbapi.com/?t=${searchMovieInput.value}&apikey=59943900`;
  fetch(OMDb_API)
    .then((res) => res.json())
    .then((data) => {
      movieDetails(data);
      moreInfo(data);
    })
    .catch((err) => {
      movieContainer.innerHTML = `<h2>Movie not found..${err.message}</h2>`;
    });
});

function movieDetails(data) {
  movieName.textContent = data.Title;
  moviePoster.src = data.Poster;
  movieYear.textContent = `Released on year: ${data.Year}`;

  moreInfoBtn.classList.toggle('hidden')
  console.log(data);
}

function moreInfo(data) {
  moviePlot.textContent = `Plot:- ${data.Plot}`;
  movieDirector.textContent = `Direcotr:- ${data.Director}`;
  movieActors.textContent = `Actors:- ${data.Actors}`;
}

moreInfoBtn.addEventListener("click", () => {
    moreInfoContainer.classList.toggle('hidden')
});
