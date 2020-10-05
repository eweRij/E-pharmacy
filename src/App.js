import React from "react";
import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "./App.scss";
import Layout from "./js/Layout";
import UserProvider from "./provider/UserProvider";

const App = () => {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}; //nie wiem czy tu moze byc wrapowanie contextu:/

export default App;
