import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Image from "./Image";

const SearchedItems = ({ onList }) => {
  console.log(onList);
  const [price, setPrice] = useState("");
  useEffect(() => {
    setPrice(Math.floor(Math.random() * (100 - 0, 50 + 1)) + 0, 50);
  }, []);

  if (onList) {
    return (
      <>
        <h2 className="container" style={{ textAlign: "center" }}>
          Znaleziono:
        </h2>
        <ul className="item-list ">
          {onList.map((item, index) => {
            return (
              <li key={index}>
                <div className="item">
                  <Image />
                  <div className="item__name">
                    {item.nazwa}
                    <span>({item.nazPowStos}),</span> {item.dawka},{item.postac}
                  </div>
                  <div
                    className="item__producer"
                    style={{ textAlign: "center" }}
                  >
                    {item.podmOdpow}
                  </div>
                  <div className="item__manager">
                    <div className="item__manager__price">{price} zł</div>
                    <div className="item__manager__buy">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return <h2></h2>;
  }
};

export default SearchedItems;
