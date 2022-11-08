export function FavoritesIndex(props) {
  return (
    <div>
      <h1>All Favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.name}</h2>
          <img src={favorite.url} />
          <p>Description: {favorite.description}</p> <p>Genre: {favorite.genre}</p>
        </div>
      ))}
    </div>
  );
}
