import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import LoggInn from "./Form/LoggIn";
import UserProvider from "../providers/UserProvider";

const Basket = () => {
  return (
    <>
      <h1>Basket</h1>
      <UserProvider>
        <LoggInn />
      </UserProvider>
    </>
  );
};

export default Basket;
