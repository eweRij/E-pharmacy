import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SearchedItems from "./SearchedItems";

const Prescriptions = ({ searchedDrugs }) => {
  if (searchedDrugs) {
    return <SearchedItems itemsToShow={searchedDrugs} />;
  } else {
    return (
      <>
        <h1>Prescriptions</h1>
      </>
    );
  }
};

export default Prescriptions;
