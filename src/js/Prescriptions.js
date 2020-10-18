import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
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
    setPrescription({ pesel: "", info: "" });
  };
  if (itemsToShow.length > 0) {
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
        <div className="container wraper">
          <h1>Zrealizuj receptę</h1>
          <h2>Wyślij nam swoje kody, a my zrobimy resztę:)</h2>
          <form id="prescription" onSubmit={handleSubmit}>
            <div className="prescription__pesel">
              <label>Twój pesel:</label>
              <input
                className="log-input"
                style={{ backgroundColor: "white" }}
                onChange={handlePrescription}
                type="number"
                name="pesel"
                value={prescription.pesel}
              ></input>
            </div>
            <div className="prescription__info">
              <label>
                Kody recept oraz dodatkowe informacje dotyczące ich realizacji:
              </label>
              <textarea
                className="log-input"
                onChange={handlePrescription}
                style={{
                  width: "30rem",
                  height: "10rem",
                  backgroundColor: "white",
                }}
                name="info"
                value={prescription.info}
              ></textarea>
            </div>

            <input className="btn log" type="submit" value="Wyślij"></input>
          </form>
        </div>
      </>
    );
  } else if (user === null) {
    return (
      <>
        <div className="container">
          {" "}
          <h1>Musisz się zalogować!</h1>
          <Log className="log__container" />
        </div>
      </>
    );
  } else {
    return <h1>Trwa ładowanie strony..</h1>;
  }
};

export default Prescriptions;
