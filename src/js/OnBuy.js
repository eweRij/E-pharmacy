import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const OnBuy = ({ items, zeroHandle }) => {
  const API = "http://localhost:8000/basket";

  useEffect(() => {
    // fetch(`${API}/${items.map((el) => el.id).join(",")}`, {
    //   method: "DELETE",
    // })
    Promise.all(
      items.map((el) => {
        return fetch(`${API}/${el.id}`, { method: "DELETE" });
      }) //rozkminic dalej
    )
      .then((response) => {
        console.log(response.ok);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("kasuję");
    zeroHandle();
  }, []);
  return (
    <>
      <h1>
        Brawo ! udało Ci się dokonać zakupu w naszym sklepie. Oczekuj na
        wiadomość od nas, kiedy towar będzie dostępny do odbioru w wybranej
        placówce.
      </h1>
      <Link to="/">
        Powrót do sklepu<i class="fas fa-arrow-circle-right"></i>
      </Link>
    </>
  );
};
export default OnBuy;
