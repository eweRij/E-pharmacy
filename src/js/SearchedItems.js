import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const SearchedItems = ({ onList }) => {
  console.log(onList);

  if (onList) {
    return (
      <>
        <h2>Znaleziono:</h2>
        <ul>
          {onList.map((item, index) => {
            return <li key={index}>{item.nazwa}</li>;
          })}
        </ul>
      </>
    );
  } else {
    return <h2></h2>;
  }
};

export default SearchedItems;
