import React, { useState } from "react";
// import { Link } from "@reach/router";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [logged, setLogged] = useState(false); // to do propsów!

  if (logged) {
    console.log("zalogowany");
  } else {
    console.log("nizealogowany");
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(setLogged((prev) => !prev))
      .catch((error) => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Zaloguj się</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <form className="">
          <label htmlFor="userEmail" className="block">
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
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Zaloguj się
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
          onClick={signInWithGoogle}
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
        >
          Zaloguj się z google Google
        </button>
        <p className="text-center my-3">
          Nie masz konta?{" "}
          <Link to="/signUp" className="text-blue-500 hover:text-blue-600">
            Zarejestruj się tutaj
          </Link>{" "}
          <br />{" "}
          <Link
            to="/passwordReset"
            className="text-blue-500 hover:text-blue-600"
          >
            Zapomniałeś hasła?
          </Link>
        </p>
      </div>
      <Link to="/profile">Profil</Link>
    </div>
  );
};
export default SignIn;
