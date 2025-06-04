import axios from "axios";
import React, { useEffect, useState } from "react";

console.log(process.env.REACT_APP_TMDB_API_KEY);

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
        {
          params: {
            language: "ko-KR",
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <h2>인기영화</h2>
      <ul className="movie-list">
        {loading && <div>Loading...</div>}
        {movies.map((movie) => {
          return (
            <li key={movie.id} className="movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <p>{movie.vote_average}</p>
            </li>
          );
        })}
        {error && <div>Error: {error.message}</div>}
      </ul>
    </div>
  );
};

export default Movie;
