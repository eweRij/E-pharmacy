import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
const LoggIn = () => {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <>
      <Link to="./signUp">Zaloguj się</Link>
      <Link to="./signIn">Zarejestruj się</Link>
      <Link to="./passwordReset">Zapomniałeś hasła?</Link>
    </>
  );
};
export default LoggIn;
