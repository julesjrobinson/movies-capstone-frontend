import axios from "axios";
import { useState, useEffect } from "react";

export function FavoritesIndexPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleIndexFavorites = () => {
    console.log("Going to get all of your favorites...");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response);
      setFavorites(response.data);
    });
  };

  useEffect(handleIndexFavorites, []);

  return (
    <div id="favorites-index">
      <h1>Your Favorite Movies!</h1>
      Search filter:{" "}
      <input
        className="form-control"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        type="text"
        list="names"
      />
      <datalist id="names">
        {favorites.map((favorite) => (
          <option key={favorite.id}>{favorite.name}</option>
        ))}
      </datalist>
      <div className="row">
        {favorites
          .filter((favorite) => favorite.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((favorite) => (
            <div className="col-md-3 mb-4" key={favorite.id}>
              <div className="card">
                <img src={favorite.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{favorite.name}</h5>

                  <a className="btn btn-primary" href={`/favorites/${favorite.id}`}>
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
