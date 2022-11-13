export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add Your Favorite Movie!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          MovieID:
          <select name="movie_id">
            {props.movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div>
          UserID: <input user_id="user_id" type="text" />
        </div> */}

        <button className="btn btn-primary" type="submit">
          Create Favorite
        </button>
      </form>
    </div>
  );
}
