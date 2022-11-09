export function FavoritesIndex(props) {
  return (
    <div>
      <h1>ALL of Your Favorite Movies!</h1>
      <div className="row">
        {props.favorites.map((favorite) => (
          <div className="col-md-3 mb-4" key={favorite.id}>
            <div className="card">
              <img src={favorite.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{favorite.title}</h5>
                <p className="card-text">Favorite: {favorite.movie}</p>
                <a href="#" className="btn btn-primary" onClick={() => props.onSelectFavorite(favorite)}>
                  More info
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}