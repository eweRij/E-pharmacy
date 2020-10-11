import { prettyDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Search } from "./Layout";

import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SearchedItems from "./SearchedItems";
import Slider from "./Slider";

const Main = ({ itemsToShow, imageToShow, onBuy }) => {
  if (itemsToShow.length > 0) {
    //jak wyczyscic ustawienia po ponownym wyrenderowaniu?

    return (
      <SearchedItems
        onList={itemsToShow}
        imageToShow={imageToShow}
        onBuy={onBuy}
      ></SearchedItems>
    );
  } else {
    return (
      <>
        <Slider />
      </>
    );
  }
};

export default Main;
