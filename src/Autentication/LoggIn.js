import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
const LoggIn = () => {
  const user = null;
  console.log(user);
  return user ? (
    <ProfilePage />
  ) : (
    <>
      <Link to="/signIn">Zaloguj się</Link>
      <Link to="/signUp">Zarejestruj się </Link>
      <Link to="/passwordReset">Zresetuj hasło</Link>
    </>
  );
};
export default LoggIn;
