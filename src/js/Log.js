import React, { useEffect, useState, useContext } from "react";
// import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
// import { UserContext } from "../providers/UserProvider";
// import SignIn from "../Login/SignIn";
// import SignUp from "../Login/SignUp";
import LoggIn from "../Login/LoggIn";
import UserProvider from "../providers/UserProvider";
// import ProfilePage from "../Login/ProfilePage";
const Log = () => {
  return (
    <UserProvider>
      <LoggIn />
    </UserProvider>
  );
};
export default Log;
//ok
