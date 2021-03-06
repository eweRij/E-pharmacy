import React, { useEffect, useState } from "react";
import SearchedItems from "./SearchedItems";

const Drugs = ({ itemsToShow }) => {
  const [rxDrugs, setRxDrugs] = useState(false); //stan leków na receptę
  const API = "http://localhost:8080/api/drugs";
  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then(
        (data) =>
          setRxDrugs(
            data.filter((item) => {
              return item.katDostOpak === "Rpz" || "Rp";
            })
          ) //filtruje po API za Rpz--> analogicznie bedzie w OTC
      )
      .catch((err) => console.log(err));
  }, []);
  console.log(rxDrugs);

  if (itemsToShow.length > 0) {
    return <SearchedItems onList={itemsToShow}></SearchedItems>;
  } else if (rxDrugs) {
    return (
      <>
        <div className="container">
          <h1>Leki na receptę dostępne w naszaj Aptece:</h1>
          <ul>
            {rxDrugs.map((item, index) => {
              return (
                <li
                  className="basket-container__items__item"
                  style={{ width: "85vw", marginTop: "2rem" }}
                  key={index}
                >
                  {item.nazwa} ({item.nazPowStos}), {item.dawka}, {item.postac},{" "}
                  {item.podmOdpow}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else {
    return <h1>Trwa ładowanie strony...</h1>;
  }
  //działa!
};
export default Drugs;
