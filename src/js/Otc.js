import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SearchedItems from "./SearchedItems";

const Otc = ({ itemsToShow }) => {
  const [otcDrugs, setOtcDrugs] = useState(false); //stan leków na receptę
  const API = "http://localhost:8080/api/drugs";
  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then(
        (data) =>
          setOtcDrugs(
            data.filter((item) => {
              return item.katDostOpak === "Rpw"; //fejk, to by było dopiero ;P
            })
          ) //jak w RPZ
      )
      .catch((err) => console.log(err));
  }, []);
  console.log(otcDrugs);

  if (itemsToShow.length > 0) {
    console.log(itemsToShow);
    return <SearchedItems onList={itemsToShow}></SearchedItems>;
  } else if (otcDrugs) {
    return (
      <>
        <h1>Leki na receptę dostępne w naszaj Aptece:</h1>
        <ul>
          {otcDrugs.map((item, index) => {
            return (
              <li key={index}>
                {item.nazwa} ({item.nazPowStos}), {item.dawka}, {item.postac},{" "}
                {item.podmOdpow}
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return <h1>Trwa ładowanie strony...</h1>;
  }

  // if (otcDrugs) {
  //   return (
  //     <>
  //       <h1>Preparaty bez recepty dostępne w naszej Aptece:</h1>
  //       <ul>
  //         {otcDrugs.map((item, index) => {
  //           return (
  //             <li key={index}>
  //               {item.nazwa} ({item.nazPowStos}), {item.dawka}, {item.postac},{" "}
  //               {item.podmOdpow}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </>
  //   );
  // } else {
  //   return <h1>Trwa ładowanie strony...</h1>;
  // }
};

export default Otc;
