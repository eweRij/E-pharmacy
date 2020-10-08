import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SearchedItems from "./SearchedItems";

const Basket = ({
  itemsToShow,
  imageToShow,
  onBuy,
  showBasket,
  price,
  pay,
  quantity,
  changeQuantity,
}) => {
  //ustawianie liczby itemów
  // const [quantity, setQuantity] = useState(1);

  // const handleQuantity = (e) => {
  //   e.preventDefault();
  //   setQuantity(e.target.value);
  // };
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
        <h1>Twój koszyk:</h1>
        <div>
          <ul>
            {showBasket.map((item, index) => {
              return (
                <li key={index}>
                  <span>
                    {item.nazwa} {item.dawka} {item.postac}
                  </span>
                  <span>{price} zł</span>
                  <input
                    onChange={(e) => {
                      changeQuantity(e);
                    }}
                    type="number"
                    value={quantity}
                    name="quantity"
                  ></input>
                </li>
              );
            })}
          </ul>
          <div>Kwota do zapłaty :{pay} zł</div>
        </div>
      </>
    );
  }
};

export default Basket;
