import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e200e0a7-9c17-4e2a-9b0c-e07acaa10294/dfb7lan-d4e22dd8-ddcd-4064-97b4-ca21274f924e.png/v1/fill/w_938,h_541,strp/red_vhs_tape_asset_by_ryanandradedeabreu_dfb7lan-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQxIiwicGF0aCI6IlwvZlwvZTIwMGUwYTctOWMxNy00ZTJhLTliMGMtZTA3YWNhYTEwMjk0XC9kZmI3bGFuLWQ0ZTIyZGQ4LWRkY2QtNDA2NC05N2I0LWNhMjEyNzRmOTI0ZS5wbmciLCJ3aWR0aCI6Ijw9OTM4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I26lQQhwSyDsSS80H-by1ZDBtXI29kfFqeJ-OetDYtw"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top mx-2"
            />
            Pick-a-Flick
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/favorites">
                  Favorites
                </a>
              </li>
              <li className="nav-item"> */}
                <a className="nav-link" href="/movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/moviessearch">
                  Search Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">
                  Logout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Link to="/">Home</Link> */}

      {/* <Link to="/about">About</Link> */}
      {/* <Link to="/favorites">Favorites</Link> */}
      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/signup">Signup</Link> */}
      {/* <Link to="/movies">Movies</Link> */}
      {/* <Link to="/moviessearch">MoviesSearch</Link> */}
      {/* <Link to="/streaming">StreamingSearch</Link> */}
      {/* <LogoutLink /> */}
    </div>
  );
}
