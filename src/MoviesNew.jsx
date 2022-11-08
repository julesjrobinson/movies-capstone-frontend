export function MoviesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMovie(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Url: <input name="url" type="text" />
        </div>
        <div>
          Description: <input description="description" type="text" />
        </div>
        <div>
          Genre: <input genre="genre" type="text" />
        </div>
        <button type="submit">Add New Movie</button>
      </form>
    </div>
  );
}

// stopped at react create function everything esle funtional back and front end!

// axioos is http requesr and the change is to convert to request from web request not fake data.

// question .. should line 10 be an <img/> tag? for image url? Image: <input image="url" type="text"/> ..does it even matter?
