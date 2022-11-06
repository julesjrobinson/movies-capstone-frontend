import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { MoviesIndex } from "./MoviesIndex";

export function Home() {
  const [movies, setMovies] = useState([]);

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };
  useEffect(handleIndexMovies, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <h1>Welcome to React!</h1>
      <MoviesIndex movies={movies} />
    </div>
  );
}
