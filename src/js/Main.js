import { prettyDOM } from "@testing-library/react";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SearchedItems from "./SearchedItems";
import Slider from "./Slider";

const Main = () => {
  return (
    <>
      <Slider />
    </>
  );
};

export default Main;
