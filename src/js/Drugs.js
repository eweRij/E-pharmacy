import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const Drugs = () => {
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

  if (rxDrugs) {
    return (
      <>
        <h1>Leki na receptę dostępne w naszaj Aptece:</h1>
        <ul>
          {rxDrugs.map((item, index) => {
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
};
export default Drugs;
