import { TMDB_KEY, TMDB_JWT } from "./keys.js";
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?API_KEY=${TMDB_KEY}&language=ko-KR`;
const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?API_KEY=${TMDB_KEY}&language=ko-KR`;

const genreList = document.querySelector(".genre-btns");
const movieList = document.querySelector(".movie-list");
const searchInput = document.querySelector("#search-input");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_JWT}`,
  },
};

const genreData = fetch(GENRE_URL, options);
const popularMoviesData = fetch(POPULAR_MOVIES_URL, options);

const selectGenre = (e) => {
  e.target.classList.add("active");
};
const showGenres = async () => {
  const { genres } = await (await genreData).json();
  const genreBtns = genres.map(
    (genre) => `<button id=${genre.id}>${genre.name}</button>`
  );
  genreList.innerHTML = `<button class="active">전체</button>${genreBtns.join(
    ""
  )}`;
  genreList.querySelectorAll("button").forEach((btn, _, btns) =>
    btn.addEventListener("click", (e) => {
      btns.forEach((el) => el.classList.remove("active"));
      selectGenre(e);
    })
  );
};

const showMovies = async () => {
  const { results } = await (await popularMoviesData).json();
  console.log(results);
};

showGenres();
showMovies();
