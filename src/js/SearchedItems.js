import React, { useEffect, useState } from "react";
import Image from "./Image";
const imageSearch = require("image-search-google");

const SearchedItems = ({ onList, imageToShow, onBuy }) => {
  console.log(onList.length);
  const price = 15;
  const [image, setImage] = useState(false);

  useEffect(() => {
    const client = new imageSearch(
      "396fd837a67ea9f46",
      "AIzaSyBSSvTFqPxkcI5mz9suctBy5ab3h583C4s"
    ); //moje dane do google search
    const options = { page: 1 };

    client
      .search(`${imageToShow}`, options)
      .then((images) => {
        setImage(images);
      })
      .catch((error) => console.log(error));
  }, [imageToShow]);

  if (onList && image && typeof onBuy === "function") {
    return (
      <>
        <div className="wraper container">
          <h2 className="container" style={{ textAlign: "center" }}>
            Wyszukano dla Ciebie:
          </h2>
          <ul className="item-list ">
            {onList.map((item, index) => {
              return (
                <li key={index}>
                  <div className="item">
                    <Image imageUrl={image[1].url} />
                    <div className="item__name">
                      <h5 style={{ fontWeight: "600", color: "#d9042b" }}>
                        {item.nazwa}
                      </h5>
                      <span>({item.nazPowStos}),</span> {item.dawka},
                      {item.postac}
                    </div>
                    <div
                      className="item__producer"
                      style={{ textAlign: "center" }}
                    >
                      {item.podmOdpow}
                    </div>
                    <div className="item__manager">
                      <div className="item__manager__price">
                        <h5
                          style={{
                            color: "#d9042b",
                            fontWeight: "600",
                          }}
                        >
                          {price} zł
                        </h5>
                      </div>
                      <div className="item__manager__buy">
                        <button
                          className="btn-buy"
                          onClick={(event) => {
                            onBuy(event, item, price);
                          }}
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else if (!onList) {
    return (
      <div className="container">
        <h2>Przykro nam, ale nie znaleźliśmy tego,czego szukasz.</h2>
      </div>
    );
  } else {
    return <h1>Trwa ładownie...</h1>;
  }
};

export default SearchedItems;
