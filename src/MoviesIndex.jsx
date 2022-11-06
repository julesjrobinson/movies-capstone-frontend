export function MoviesIndex(props) {
  return (
    <div>
      <h1>ALL MOVIES!</h1>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image_url} />
          <p>Description: {movie.description}</p>
          <p>Genre: {movie.genre}</p>
        </div>
      ))}
    </div>
  );
}
