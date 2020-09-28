import React, { useEffect, useState } from "react";
import Image from "./Image";
const imageSearch = require("image-search-google");

const SearchedItems = ({ onList, imageToShow }) => {
  console.log(onList);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(false);

  useEffect(() => {
    setPrice(Math.floor(Math.random() * (100 - 0, 50 + 1)) + 0, 50);

    const client = new imageSearch(
      "396fd837a67ea9f46",
      "AIzaSyBSSvTFqPxkcI5mz9suctBy5ab3h583C4s"
    ); //moje dane do google search
    const options = { page: 1 };
    console.log(imageToShow);
    client
      .search(`${imageToShow}`, options)
      .then((images) => {
        /*
        [{
            'url': item.link,
            'thumbnail':item.image.thumbnailLink,
            'snippet':item.title,
            'context': item.image.contextLink
        }]
         */
        setImage(images);
      })
      .catch((error) => console.log(error));
  }, [imageToShow]);

  if (onList && image) {
    console.log(image[5].url);
    return (
      <>
        <h2 className="container" style={{ textAlign: "center" }}>
          Wyszukano dla Ciebie:
        </h2>
        <ul className="item-list ">
          {onList.map((item, index) => {
            return (
              <li key={index}>
                <div className="item">
                  <Image imageUrl={image[8].url} />
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
    return null;
  }
};

export default SearchedItems;
