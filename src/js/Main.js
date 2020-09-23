import { prettyDOM } from "@testing-library/react";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Slider from "./Slider";

const Main = ({ searchedDrugs }) => {
  console.log(searchedDrugs);
  if (searchedDrugs) {
    return (
      <>
        <h1>Main + slider</h1>
        <ul>
          {searchedDrugs.map((drug, index) => {
            return (
              <li key={index}>
                {drug.nazwa} ({drug.nazPowStos}), {drug.dawka}, {drug.postac},{" "}
                {drug.podmOdpow}
              </li>
            );
          })}
        </ul>
        <Slider />
      </>
    );
  } else {
    return (
      <>
        <h1>
          Niestety nie odnaleźliśmy poszukiwanego produktu, spróbuj jeszcze raz!
        </h1>
        <Slider />
      </>
    );
  }
};

export default Main;
