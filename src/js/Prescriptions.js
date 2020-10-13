import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SearchedItems from "./SearchedItems";
import Log from "./Log";
import { UserContext } from "../providers/UserProvider";

const Prescriptions = ({ itemsToShow, onBuy, imageToShow }) => {
  const user = useContext(UserContext);
  const [prescription, setPrescription] = useState({
    pesel: "",

    info: "",
  });
  const handlePrescription = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setPrescription((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send(
        "service_83i8snr",
        templateId,
        variables,
        "user_n3xoIvObZaxG1DfOfz5nX"
      )
      .then((res) => {
        alert("Wiadomość została wysłana");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        alert(
          "Coś poszło nie tak! Spróbuj jeszcze raz lub skontakruj się z nami",
          err
        )
      );
  };
  console.log(prescription);
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_ln0w1h2";
    sendFeedback(templateId, {
      message_html: prescription.pesel,
      from_name: user.displayName,
      reply_to: user.email,
      message: prescription.info,
    });
  };
  if (itemsToShow.length > 0) {
    //jak wyczyscic ustawienia po ponownym wyrenderowaniu?

    return (
      <SearchedItems
        onList={itemsToShow}
        imageToShow={imageToShow}
        onBuy={onBuy}
      ></SearchedItems>
    );
  } else if (user) {
    return (
      <>
        <h1>Zrealizuj receptę</h1>
        <h2>Wyślij nam swoje kody, a my zrobimy resztę:)</h2>
        <form onSubmit={handleSubmit}>
          <label>Twój pesel:</label>
          <input
            onChange={handlePrescription}
            type="number"
            name="pesel"
            value={prescription.pesel}
          ></input>
          <label>Twoje kody recept(napisane po przecinku):</label>
          <label>
            Kody redept oraz dodatkowe informacje dotyczące ich realizacji:
          </label>
          <textarea
            onChange={handlePrescription}
            rows="4"
            cols="50"
            name="info"
            value={prescription.info}
          ></textarea>
          <input type="submit" value="Wyślij"></input>
        </form>
        <Link to="/log/profilePage">Twój profil</Link>
      </>
    );
  } else if (user === null) {
    return (
      <>
        <h1>
          Musisz być zalogowanym użytkownikiem, żeby wysłać do nas swoje
          e-recepty.
        </h1>
        <Log />
      </>
    );
  } else {
    return <h1>Trwa ładowanie strony..</h1>;
  }
};

export default Prescriptions;
