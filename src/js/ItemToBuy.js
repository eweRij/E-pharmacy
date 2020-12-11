import React, { useRef } from "react";

const ItemToBuy = ({
  itemToBuy,
  changeQuantityAdd,
  changeQuantitySubstract,
  price,
  remove,
}) => {
  const spanQuantity = useRef(null);
  const currentButtonAdd = useRef(null);
  const currentButtonSubstract = useRef(null);

  return (
    <>
      <div item__name>
        <span>{itemToBuy.name}</span>
      </div>

      <span>{price} zł</span>
      <div className="item__btn">
        <button
          style={{ marginRight: "1rem" }}
          className="buy-btn"
          ref={currentButtonSubstract}
          onClick={(event) => {
            changeQuantitySubstract(price, itemToBuy, spanQuantity, event);
          }}
        >
          -
        </button>
        <span ref={spanQuantity}>{itemToBuy.howMany}</span>
        <button
          style={{ marginLeft: "1rem" }}
          className="buy-btn"
          onClick={(event) => {
            changeQuantityAdd(price, itemToBuy, spanQuantity, event);
            console.log(itemToBuy.howMany);
          }}
        >
          +
        </button>
        <button
          style={{ backgroundColor: "red" }}
          className="buy-btn"
          ref={currentButtonAdd}
          onClick={() => {
            remove(itemToBuy);
          }}
        >
          <i class="far fa-times-circle"></i>
        </button>
      </div>
    </>
  );
};
export default ItemToBuy;
