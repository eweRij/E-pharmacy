import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const SearchedItems = ({ itemsToShow }) => {
  if (itemsToShow) {
    console.log("test sercza");
    console.log(itemsToShow);
    return (
      <>
        <ul>
          {itemsToShow.map((item, index) => {
            return (
              <li key={index}>
                {item.nazwa} ({item.nazPowStos}), {item.dawka}, {item.postac},{" "}
                {item.podmOdpow}
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    console.log("test sercza 2");
    return <h1>Test searcha</h1>;
  }
};

export default SearchedItems;
