import React from "react";
// import { Router } from "@reach/router";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
// import PasswordReset from "./PasswordReset";
const LoggInn = () => {
  const user = null;
  return user ? <ProfilePage /> : <SignIn />;
};
export default LoggInn;
