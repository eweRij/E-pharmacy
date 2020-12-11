import React, { useContext } from "react";
import { Router, Link } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";

function LoggIn() {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <>
      <div className="log__container wraper container">
        <div className="links__container">
          <Link className="log_links" to="/log/signIn">
            Zaloguj się
          </Link>
          <Link className="log_links" to="/log/signUp">
            Zarejestruj się!
          </Link>
          <Link className="log_links" to="/log/passwordReset">
            Zresetuj hasło
          </Link>
        </div>
        <Router className="log-router__container">
          <SignUp path="/log/signUp" />
          <SignIn path="/log/signIn" />
          <ProfilePage path="/log/profilePage" />
          <PasswordReset path="/log/passwordReset" />
        </Router>
      </div>
    </>
  );
}

export default LoggIn;
//routy działają
