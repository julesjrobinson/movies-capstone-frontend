import axios from "axios";
import { useState, useEffect } from "react";

export function LoginPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [login, setLogin] = useState([]);

  const handleLogin = () => {
    console.log("Loggin in...");
    axios.get("http://localhost:3000/login.json").then((response) => {
      console.log(response);
      setLogin(response.data);
    });
  };

  useEffect(handleLogin, []);

  return (
    <div id="login">
      <h1>Login</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="titles" />
      <datalist id="titles">
        {login.map((login) => (
          <option key={login.id}>{login.title}</option>
        ))}
      </datalist>
      <div className="row">
        {login
          .filter((login) => login.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((login) => (
            <div className="col-md-3 mb-4" key={login.id}>
              <div className="card">
                <img src={login.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{login.title}</h5>
                  <p className="card-text">Chef: {login.chef}</p>
                  <a className="btn btn-primary" href={`/recipes/${login.id}`}>
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
