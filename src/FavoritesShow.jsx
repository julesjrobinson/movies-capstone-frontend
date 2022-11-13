export function FavoritesShow(props) {
  const handleClick = () => {
    props.onDestroyFavorite(props.favorite);
  };
  return (
    <div>
      <h1>Favorite Movie Info</h1>
      <p>Name: {props.favorite.name}</p>
      <p>Url: {props.favorite.url}</p>
      <p>Description: {props.favorite.description}</p>
      <p>Genre: {props.favorite.genre}</p>
      <button onClick={handleClick}>Remove Favorite</button>
    </div>
  );
}
