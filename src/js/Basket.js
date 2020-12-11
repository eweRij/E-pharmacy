import React, { useEffect, useState, useContext } from "react";
import SearchedItems from "./SearchedItems";
import ItemToBuy from "./ItemToBuy";
import OnBuy from "./OnBuy";
import Log from "./Log";
import { UserContext } from "../providers/UserProvider";

const Basket = ({
  itemsToShow,
  imageToShow,
  onBuy,
  pay,
  quantity,
  remove,
  changeQuantityAdd,
  changeQuantitySubstract,
  zeroHandle,
}) => {
  const API = "http://localhost:8000/basket";

  const [basketItems, setBasketItems] = useState(false);
  const user = useContext(UserContext);

  let price = 15;

  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => {
        setBasketItems(data);
      })
      .catch((err) => console.log(err));
  }, [pay]);

  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => {
    setVisibility((prev) => !prev);
  };
  if (itemsToShow.length > 0) {
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
        <div className="container wraper">
          <h1>Twój koszyk:</h1>
          <h1 style={{ margin: "5rem 0 5rem", opacity: "0.5" }}>
            {basketItems.length === 0 && "Ten koszyk jest pusty"}
          </h1>
          <div className="basket-container">
            <ul className="basket-container__items">
              {basketItems.map((item, index) => {
                return (
                  <li className="basket-container__items__item" key={index}>
                    <ItemToBuy
                      itemToBuy={item}
                      index={index}
                      price={price}
                      quantity={quantity}
                      changeQuantityAdd={changeQuantityAdd}
                      changeQuantitySubstract={changeQuantitySubstract}
                      remove={remove}
                    />
                  </li>
                );
              })}
            </ul>
            <div className="basket-container__price">
              Kwota do zapłaty :{pay} zł
            </div>
            <button className="btn bsk" onClick={handleVisibility}>
              Kupuję
            </button>
          </div>
        </div>
      </>
    );
  } else if (visibility && user) {
    return <OnBuy items={basketItems} zeroHandle={zeroHandle} />;
  } else if (user === null) {
    return <Log />;
  } else {
    return <h1>Trwa ładowanie strony..</h1>;
  }
};

export default Basket;
