import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { Link } from "@reach/router";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div>
      <h1>Zresetuj swoje hasło</h1>
      <div>
        <form className="log-form">
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <div>{error}</div>}
          <div className="email">
            {" "}
            <label className="log-label" htmlFor="userEmail">
              Email:
            </label>
            <input
              className="log-input"
              type="email"
              name="userEmail"
              id="userEmail"
              value={email}
              placeholder="Input your email"
              onChange={onChangeHandler}
            />
          </div>

          <button
            style={{ width: "25vw" }}
            className="log btn"
            onClick={(event) => {
              sendResetEmail(event);
            }}
          >
            Wyślij link z nowym hasłem.
          </button>
        </form>

        <Link to="/log/signIn" className="log_links">
          &larr; powrót do strony z logowaniem
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;
//ok
