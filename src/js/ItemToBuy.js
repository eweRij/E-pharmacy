import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

const ItemToBuy = ({
  itemToBuy,
  // quantity,
  changeQuantityAdd,
  changeQuantitySubstract,
  // index,
  price,
}) => {
  return (
    <>
      <span>
        {itemToBuy.name} {itemToBuy.dose} {itemToBuy.form}
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
          changeQuantitySubstract(price, itemToBuy, event);
        }}
      >
        -
      </button>
      <span>{itemToBuy.howMany}</span>
      <button
        onClick={(event) => {
          changeQuantityAdd(price, itemToBuy, event);
          console.log(itemToBuy.howMany);
        }}
      >
        +
      </button>
    </>
  );
};
export default ItemToBuy;
