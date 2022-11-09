export function MoviesIndex(props) {
  return (
    <div>
      <h1>ALL MOVIES!</h1>
      <div className="row">
        {props.movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <div className="card">
              <img src={movie.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Movie: {movie.movie}</p>
                <a href="#" className="btn btn-primary" onClick={() => props.onSelectMovie(movie)}>
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
