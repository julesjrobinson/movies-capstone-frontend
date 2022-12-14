import axios from "axios";
import { useState } from "react";
export function MoviesSearch(props) {
  const [movies, setMovies] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.get(`http://localhost:3000/movies/search.json?t=${params.get("name")}`).then((response) => {
      console.log(response);
      setMovies([response.data]);
    });
  };
  const handleClick = (movie) => {
    console.log("handleClick", movie);
    const params = {
      name: movie.Title,
      image_url: movie.Poster,
      description: movie.Plot,
      genre: movie.Genre,
    };
    axios.post("http://localhost:3000/movies.json", params).then((response) => {
      const params = { movie_id: response.data.id };
      axios.post("http://localhost:3000/favorites.json", params).then((response) => {
        window.location.href = "/";
      });
    });
  };
  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Search: <input name="name" className="form-control" />
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Search
        </button>
      </form>
      {movies.map((movie) => (
        <div className="col-md-3 mb-4" key={movie.imdbID}>
          <div className="card">
            <img src={movie.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">Starring: {movie.Actors}</p>
              <p className="card-text">Year: {movie.Year}</p>
              <p className="card-text">Genre: {movie.Genre}</p>
              <p className="card-text">Rating: {movie.Rated}</p>
              <p className="card-text">Plot: {movie.Plot}</p>
              <button className="btn btn-primary mt-4" onClick={() => handleClick(movie)}>
                Add to Favorites!
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
