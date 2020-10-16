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
    <div className="">
      <h1 className="">Zaloguj się</h1>
      <div className="">
        {error !== null && <div className="">{error}</div>}
        <form className="">
          <label htmlFor="userEmail" className="">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Hasło:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            className=""
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Zaloguj się
          </button>
        </form>
        <p className="">lub</p>
        <button
          className=""
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Zaloguj się z Google
        </button>
        <p className="">
          Nie masz jeszcze konta?{" "}
          <Link to="/log/signUp" className="">
            Zarejestruj się tutaj
          </Link>{" "}
          <br />{" "}
          <Link to="/log/passwordReset" className="">
            Zapomniałeś hasła?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
