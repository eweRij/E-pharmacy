import React, { useState } from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div className="signIn__container">
      <h1 className="">Zaloguj się</h1>
      <div className="log">
        {error !== null && <div className="">{error}</div>}
        <form className="log-form">
          <div className="email">
            <label htmlFor="userEmail" className="log-label">
              Email:
            </label>
            <input
              type="email"
              className="log-input"
              name="userEmail"
              value={email}
              placeholder="np. coderslab@gmail.com"
              id="userEmail"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div className="password">
            <label htmlFor="userPassword" className="log-label">
              Hasło:
            </label>
            <input
              type="password"
              className="log-input"
              name="userPassword"
              value={password}
              placeholder="Twoje hasło"
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <button
            className="log-btn"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Zaloguj się
          </button>
        </form>
        <p className="">lub</p>
        <button
          className="log-btn"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Zaloguj się z Google
        </button>
        {/* <p className="">
          Nie masz jeszcze konta?{" "}
          <Link to="/log/signUp" className="">
            Zarejestruj się tutaj
          </Link>{" "}
          <br />{" "}
          <Link to="/log/passwordReset" className="">
            Zapomniałeś hasła?
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default SignIn;
