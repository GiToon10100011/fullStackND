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

// 전역 변수로 데이터 저장
let allGenres = [];
let allMovies = [];

// 초기 데이터 로딩 함수
const loadInitialData = async () => {
  const genreResponse = await fetch(GENRE_URL, options);
  const genreData = await genreResponse.json();
  allGenres = genreData.genres;

  const moviesResponse = await fetch(POPULAR_MOVIES_URL, options);
  const moviesData = await moviesResponse.json();
  allMovies = moviesData.results;

  showGenres();
  showMovies();
};

const htmlMapper = (movies) => {
  return movies.map(
    (movie) =>
      `<li>
     <div><img src="https://media.themoviedb.org/t/p/w500${
       movie.poster_path
     }" alt="${movie.title} poster" class="poster-img"></div>
              <div><strong>${
                movie.title
              }</strong><span>${movie.vote_average.toFixed(1)}점</span></div>
    </li>`
  );
};

const searchMovies = (e) => {
  let searchedMovies = [...allMovies];
  searchedMovies = searchedMovies.filter((movie) =>
    movie.title.includes(e.target.value)
  );
  movieList.innerHTML = htmlMapper(searchedMovies).join("");
};

const selectGenre = (e) => {
  e.target.classList.add("active");
  showMovies(Number(e.target.id));
};

const showGenres = () => {
  const genreBtns = allGenres.map(
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

const showMovies = (id) => {
  movieList.innerHTML = "";
  let filteredMovies = [...allMovies];

  if (id) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.genre_ids.includes(id)
    );
  }

  const movieItems = htmlMapper(filteredMovies);
  movieList.innerHTML = movieItems.join("");
};

searchInput.addEventListener("input", searchMovies);

loadInitialData();
