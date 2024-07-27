import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", {
        name,
        email,
        password,
        secret,
      })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };
  return (
    <div className="container-fluid">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h2>Register</h2>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offest-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group py-2">
              <label className="text-muted">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group py-2">
              <label className="text-muted">Your Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group py-2">
              <label className="text-muted">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Passowrd"
              />
            </div>
            <div className="form-group pt-2">
              <label className="text-muted">Pick a Question</label>
              <select className="form-control">
                <option value="">Which city were you born?</option>
                <option value="">What is the name of your first pet?</option>
                <option value="">Who is your favorite pornstar?</option>
              </select>
              <small className="text-muted">
                This can help in recovery of password
              </small>
            </div>
            <div className="form-group pb-2">
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Answer"
              />
            </div>
            <div className="form-group py-2">
              <button className="btn btn-primary col-12">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
