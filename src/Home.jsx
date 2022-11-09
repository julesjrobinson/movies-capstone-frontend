import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { MoviesIndex } from "./MoviesIndex";
import { FavoritesIndex } from "./FavoritesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { MoviesNew } from "./MoviesNew";
import { MoviesShow } from "./MoviesShow";
import { Modal } from "./Modal";

export function Home() {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const [isFavoritesShowVisible, setIsFavoritesShowVisible] = useState(false);

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const handleIndexFavorites = () => {
    console.log("handleFavorite");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log("favorites", response.data);
      setFavorites(response.data);
    });
  };

  const handleCreateFavorite = (params, successCallback) => {
    console.log("handleCreateFavorite", params);
    axios.post("http://localhost:3000/favorites.json", params).then((response) => {
      setFavorites([...PushSubscriptionOptions, response.data]);
      successCallback();
    });
  };

  const handleCreateMovie = (params, successCallback) => {
    console.log("handleCreateMovie", params);
    axios.post("http://localhost:3000/movies.json", params).then((response) => {
      setMovies([...movies, response.data]);
      successCallback();
    });
  };

  const handleShowMovie = (movie) => {
    console.log("handleshowMovie", movie);
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  };

  const handleClose = () => {
    console.log("handleCLose");
    setIsMoviesShowVisible(false);
  };

  const handleDestroyMovie = (movie) => {
    console.log("handleDestroyMovie", movie);
    axios.delete(`http://localhost:3000/movies/${movie.id}.json`).then((response) => {
      setMovies(movies.filter((p) => p.id !== movie.id));
      handleClose();
    });
  };

  useEffect(handleIndexMovies, []);
  useEffect(handleIndexFavorites, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <h1>Welcome to React!</h1>
      <MoviesNew onCreateMovie={handleCreateMovie} />
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />
      <FavoritesIndex favorites={favorites} />
      <FavoritesNew onCreateFavorite={handleCreateFavorite} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} onDestroyMovie={handleDestroyMovie} />
      </Modal>
    </div>
  );
}
