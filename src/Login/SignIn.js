import React, { useState } from "react";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";

const SignIn = () => {
  // const user = useContext(UserContext);
  const [error, setError] = useState([]);
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLog((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(log.email, log.password) //logowanie z firebase
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        setError(error);
        // alert("Błędny login lub hasło!");
      });
  };

  return (
    <div className="signIn__container">
      <h1>Zaloguj się</h1>
      <div className="loggin">
        {error !== [] && <div>{error}</div>}
        <form className="log-form" onSubmit={handleSubmit}>
          <div className="email">
            <label htmlFor="userEmail" className="log-label">
              Email:
            </label>
            <input
              type="email"
              className="log-input"
              name="email"
              value={log.email}
              placeholder="np. coderslab@gmail.com"
              id="userEmail"
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label htmlFor="userPassword" className="log-label">
              Hasło:
            </label>
            <input
              type="password"
              className="log-input"
              name="password"
              value={log.password}
              placeholder="Twoje hasło"
              id="userPassword"
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Zaloguj się" className="log btn"></input>
        </form>
        <p className="">lub</p>
        <button
          className="log btn"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Zaloguj się z Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
//okej
