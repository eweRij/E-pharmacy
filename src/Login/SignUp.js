import React, { useState } from "react";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Coś poszło nie tak! Spróbuj jeszcze raz...");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div>
      <h1>Zarejestruj się</h1>
      <div className="signup">
        {error !== null && <div className="">{error}</div>}
        <form className="log-form">
          <label htmlFor="displayName" className="log-label">
            Twoje imię:
          </label>
          <input
            type="text"
            className="log-input"
            name="displayName"
            value={displayName}
            placeholder="np. Dżesika"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userEmail" className="log-label">
            Email:
          </label>
          <input
            type="email"
            className="log-input"
            name="userEmail"
            value={email}
            placeholder="n.pk coderslab@gmail.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
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
          <button
            className="log btn"
            onClick={(event) => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Zarejestruj się
          </button>
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
