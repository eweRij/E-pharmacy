import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "./App.scss";
import UserProvider from "./providers/UserProvider";
import Layout from "./js/Layout";

const App = () => {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
};
export default App;
