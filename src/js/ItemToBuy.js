import React, { useRef } from "react";
import ReactDOM from "react-dom";

const ItemToBuy = ({
  itemToBuy,
  // quantity,

  changeQuantityAdd,
  changeQuantitySubstract,
  // index,
  price,
  remove,
}) => {
  const API = "http://localhost:8000/basket";
  console.log(API.length);
  const spanQuantity = useRef(null);
  const currentButtonAdd = useRef(null);
  const currentButtonSubstract = useRef(null);
  // const handleRemove = (index, pay) => {
  //   fetch(`${API}/${index}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       console.log(response.ok);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <>
      <div item__name>
        <span>{itemToBuy.name}</span>
      </div>

      <span>{price} zł</span>
      {/* <input
    onChange={(e) => {
      changeQuantity(e);
    }}
    type="number"
    value={quantity}
    name="quantity"
  ></input> */}
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
