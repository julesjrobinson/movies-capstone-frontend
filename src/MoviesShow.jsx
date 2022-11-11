export function MoviesShow(props) {
  const handleClick = () => {
    props.onDestroyMovie(props.movie);
  };
  return (
    <div>
      <h1>Movie Info</h1>
      <p>Name: {props.movie.name}</p>
      <p>Url: {props.movie.url}</p>
      <p>Description: {props.movie.description}</p>
      <p>Genre: {props.movie.genre}</p>
      <button onClick={handleClick}>Remove Movie</button>
    </div>
  );
}
