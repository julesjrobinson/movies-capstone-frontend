import axios from "axios";
import { useState, useEffect } from "react";

export function SignupPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [signup, setSignup] = useState([]);

  const handleSignup = () => {
    console.log("New signup...");
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response);
      setSignup(response.data);
    });
  };

  useEffect(handleSignup, []);

  return (
    <div id="signup">
      <h1>Signup</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="titles" />
      <datalist id="titles">
        {signup.map((signup) => (
          <option key={signup.id}>{signup.title}</option>
        ))}
      </datalist>
      <div className="row">
        {signup
          .filter((signup) => signup.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((signup) => (
            <div className="col-md-3 mb-4" key={signup.id}>
              <div className="card">
                <img src={signup.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{signup.title}</h5>
                  <p className="card-text">Signup: {signup.signup}</p>
                  <a className="btn btn-primary" href={`/signup/${signup.id}`}>
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
