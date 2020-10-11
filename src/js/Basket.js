import React, { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SearchedItems from "./SearchedItems";

const Basket = ({
  itemsToShow,
  imageToShow,
  onBuy,
  // showBasket,
  // price,
  pay,
  quantity,
  changeQuantityAdd,
  changeQuantitySubstract,
}) => {
  const API = "http://localhost:8000/basket";
  const [basketItems, setBasketItems] = useState(false);
  // const [pay, setPay] = useState(0);
  let price = 15;

  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => {
        setBasketItems(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(basketItems);
  // useEffect(() => setPay((prev) => prev + price), [basketItems]);

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
  } else if (basketItems) {
    return (
      <>
        <h1>Twój koszyk:</h1>
        <div>
          <ul>
            {basketItems.map((item, index) => {
              return (
                <li key={index}>
                  <span>
                    {item.name} {item.dose} {item.form}
                  </span>
                  <span>{price} zł</span>
                  {/* <input
                    onChange={(e) => {
                      changeQuantity(e);
                    }}
                    type="number"
                    value={quantity}
                    name="quantity"
                  ></input> */}
                  <button
                    onClick={(event) => {
                      changeQuantitySubstract(price, index, event);
                    }}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={(event) => {
                      changeQuantityAdd(price, event);
                    }}
                  >
                    +
                  </button>
                </li>
              );
            })}
          </ul>
          <div>Kwota do zapłaty :{pay} zł</div>
        </div>
      </>
    );
  } else {
    return <h1>Trwa ładowanie strony...</h1>;
  }
};

export default Basket;
