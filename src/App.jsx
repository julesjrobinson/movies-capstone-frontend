import { Header } from "./Header";
import { FavoritesIndexPage } from "./FavoritesIndexPage";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { MoviesIndexPage } from "./MoviesIndexPage";
import { MoviesSearch } from "./MoviesSearch";
import { StreamingSearch } from "./StreamingSearch";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<FavoritesIndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies" element={<MoviesIndexPage />} />
          <Route path="/moviessearch" element={<MoviesSearch />} />
          <Route path="/streaming" element={<StreamingSearch />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
