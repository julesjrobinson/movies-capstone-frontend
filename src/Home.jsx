import axios from "axios";
import { useState, useEffect } from "react";

import { LogoutLink } from "./LogoutLink";
import { MoviesIndex } from "./MoviesIndex";
import { FavoritesIndex } from "./FavoritesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { MoviesNew } from "./MoviesNew";

import { MoviesShow } from "./MoviesShow";
import { FavoritesShow } from "./FavoritesShow";
import { Modal } from "./Modal";

export function Home() {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const [isFavoritesShowVisible, setIsFavoritesShowVisible] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState({});

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

  const handleShowFavorite = (favorite) => {
    console.log("handleshowFavorite", favorite);
    setIsFavoritesShowVisible(true);
    setCurrentFavorite(favorite);
  };
  const handleCloseFavorite = () => {
    console.log("handleCLose");
    setIsFavoritesShowVisible(false);
  };

  const handleDestroyMovie = (movie) => {
    console.log("handleDestroyMovie", movie);
    axios.delete(`http://localhost:3000/movies/${movie.id}.json`).then((response) => {
      setMovies(movies.filter((p) => p.id !== movie.id));
      handleClose();
    });
  };

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyfavorite", favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`).then((response) => {
      setFavorites(favorites.filter((p) => p.id !== favorite.id));
      handleClose();
    });
  };

  useEffect(handleIndexMovies, []);
  useEffect(handleIndexFavorites, []);

  return (
    <div>
      <LogoutLink />
      <h1>Welcome to Pick-a-Flick!</h1>
      <MoviesNew onCreateMovie={handleCreateMovie} />
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />

      <FavoritesIndex favorites={favorites} onShowFavorite={handleShowFavorite} />
      <FavoritesNew movies={movies} onCreateFavorite={handleCreateFavorite} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} onDestroyMovie={handleDestroyMovie} />
      </Modal>
      <Modal show={isFavoritesShowVisible} onClose={handleCloseFavorite}>
        <FavoritesShow favorite={currentFavorite} onDestroyFavorite={handleDestroyFavorite} />
      </Modal>
    </div>
  );
}
