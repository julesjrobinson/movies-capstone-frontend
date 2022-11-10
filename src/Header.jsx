import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="movies">Movies</Link>
    </div>
  );
}
// To Do ..finished routers don't think it's working.
// make signup login etc seperate pages.
