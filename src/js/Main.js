import React from "react";
import SearchedItems from "./SearchedItems";
import Slider from "./Slider";

const Main = ({ itemsToShow, imageToShow, onBuy }) => {
  if (itemsToShow.length > 0) {
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
