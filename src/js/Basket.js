import React, { useEffect, useState, useContext } from "react";
// import { useState } from "react";
// import ReactDOM from "react-dom";
// import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SearchedItems from "./SearchedItems";
import ItemToBuy from "./ItemToBuy";
import OnBuy from "./OnBuy";
import Log from "./Log";
import { UserContext } from "../providers/UserProvider";

const Basket = ({
  itemsToShow,
  imageToShow,
  onBuy,
  // showBasket,
  // price,
  pay,
  // quantity,
  remove,
  changeQuantityAdd,
  changeQuantitySubstract,
}) => {
  const API = "http://localhost:8000/basket";
  const [basketItems, setBasketItems] = useState(false);
  // const [pay, setPay] = useState(0);
  const user = useContext(UserContext);
  let price = 15;
  console.log(API);

  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => {
        setBasketItems(data);
      })
      .catch((err) => console.log(err));
  }, [pay]);

  console.log(basketItems);
  console.log(pay);
  // useEffect(() => setPay((prev) => prev + price), [basketItems]);

  //ustawianie liczby itemów
  // const [quantity, setQuantity] = useState(1);

  // const handleQuantity = (e) => {
  //   e.preventDefault();
  //   setQuantity(e.target.value);
  // };
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => {
    setVisibility((prev) => !prev);
  };
  if (itemsToShow.length > 0) {
    //jak wyczyscic ustawienia po ponownym wyrenderowaniu?

    return (
      <SearchedItems
        onList={itemsToShow}
        imageToShow={imageToShow}
        onBuy={onBuy}
      ></SearchedItems>
    );
  } else if (basketItems && visibility === false && user) {
    return (
      <>
        <h1>Twój koszyk:</h1>
        <div>
          <ul>
            {basketItems.map((item, index) => {
              return (
                <li key={index}>
                  <ItemToBuy
                    itemToBuy={item}
                    index={index}
                    price={price}
                    // pay={pay}
                    // quantity={quantity}
                    changeQuantityAdd={changeQuantityAdd}
                    changeQuantitySubstract={changeQuantitySubstract}
                    remove={remove}
                  />
                </li>
              );
            })}
          </ul>
          <div>Kwota do zapłaty :{pay} zł</div>
          <button onClick={handleVisibility}>Kupuję</button>
        </div>
      </>
    );
  } else if (visibility && user) {
    return <OnBuy />;
  } else if (user === null) {
    return <Log />;
  } else {
    return <h1>Trwa ładowanie strony..</h1>;
  }
};

export default Basket;
