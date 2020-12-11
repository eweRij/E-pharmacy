import React, { useState } from "react";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";

const SignUp = () => {
  // const [email, setEmail] = useState("");

  const [log, setLog] = useState({
    email: "",
    password: "",
    displayName: "",
    // displayName: "",
    // checkPassword: "",
  });
  // const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState([]);

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
      .createUserWithEmailAndPassword(log.email, log.password)
      .then(console.log("zarejestrowano"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Zarejestruj się</h1>
      <div className="signup">
        <form className="log-form" onSubmit={handleSubmit}>
          <label htmlFor="displayName" className="">
            Twoje imię:
          </label>
          <input
            type="text"
            className=""
            name="displayName"
            value={log.displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={handleChange}
          />
          <label htmlFor="userEmail" className="log-label">
            Email:
          </label>
          <input
            type="email"
            className="log-input"
            name="email"
            value={log.email}
            placeholder="n.pk coderslab@gmail.com"
            id="userEmail"
            onChange={handleChange}
          />
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
          {/* <button className="log btn">Zarejestruj się</button> */}
          <input className="log btn" type="submit" value="Załóż konto"></input>
        </form>
        <p>lub</p>
        <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
          className="log btn"
        >
          Zaloguj się z Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
