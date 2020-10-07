import React, { useContext } from "react";
import { Router, Link } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
function LoggIn() {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <SignUp path="log/signUp" />
      <SignIn path="/log" />
      <PasswordReset path="log/passwordReset" />
    </Router>
  );
}

export default LoggIn;
//routy działają
