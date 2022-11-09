import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Link to="/about">About</Link>
    </div>
  );
}
