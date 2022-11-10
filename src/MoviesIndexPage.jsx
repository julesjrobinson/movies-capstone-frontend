import axios from "axios";
import { useState, useEffect } from "react";

export function MoviesIndexPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [movies, setMovies] = useState([]);

  const handleIndexMovies = () => {
    console.log("Here's all of the movies...");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response);
      setMovies(response.data);
    });
  };

  useEffect(handleIndexMovies, []);

  return (
    <div id="movies-index">
      <h1>All MOVIES</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="names" />
      <datalist id="names">
        {movies.map((movie) => (
          <option key={movie.id}>{movie.name}</option>
        ))}
      </datalist>
      <div className="row">
        {movies
          .filter((movie) => movie.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div className="card">
                <img src={movie.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text">Movie: {movie.movie}</p>
                  <a className="btn btn-primary" href={`/movies/${movie.id}`}>
                    Go to show page
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
