import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function MoviesIndexPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  const handleIndexMovies = () => {
    console.log("Here's all of the movies...");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response);
      setMovies(response.data);
    });
  };
  const handleClick = (movie) => {
    console.log("handleClick", movie);
  };

  const handleCreateFavorite = (movie) => {
    console.log("handleCreateFavorite");
    axios.post("http://localhost:3000/favorites.json", { movie_id: movie.id }).then((response) => {
      window.location.href = "/";
    });
  };

  const handleShowMovies = (movie) => {
    console.log("handleShowMovies", movie);
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsMoviesShowVisible(false);
  };

  useEffect(handleIndexMovies, []);

  return (
    <div id="movies-index">
      <h1>All of the Movies!</h1>
      Search filter:{" "}
      <input
        className="form-control"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        type="text"
        list="names"
      />
      <datalist id="names">
        {movies.map((movie) => (
          <option key={movie.id}>{movie.name}</option>
        ))}
      </datalist>
      <div className="row mt-4">
        {movies
          .filter((movie) => movie.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                <img src={movie.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text"> {movie.movie}</p>

                  {/* <button className="btn btn-primary" onClick={() => handleClick(movie)}>
                    More info
                  </button> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <Modal show={true}>
        <h1>More Info</h1>
      </Modal> */}
    </div>
  );
}
