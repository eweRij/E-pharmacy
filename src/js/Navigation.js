import React, { useState } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const Navigation = () => {
  const [trigger, setTrigger] = useState(false);

  const handleTrigger = () => {
    setTrigger((prev) => !prev);
  };
  return (
    <>
      <header className="container">
        <div className="header">
          <div className="header__logoAndsearch">
            <div className="header__logoAndSearch__logo">
              <span className="logo__title">Logo Apteki</span>
            </div>
            <form className="header__logoAndSearch__form">
              <input type="text"></input>
              <input type="submit" value="Szukaj"></input>
            </form>
            <Link className="basket" to="./basket">
              <i
                style={{ color: "#034C8C", fontSize: "1.5rem" }}
                className="fas fa-shopping-basket"
              ></i>
            </Link>
          </div>
          <nav className={trigger ? "mobile-section opened" : "mobile-section"}>
            <button onClick={handleTrigger} id="menu-trigger">
              <i className="fa fa-hamburger"></i>
            </button>
            <ul className="menu">
              <li>
                <Link className="links" to="/otc">
                  Bez recepty
                </Link>
              </li>
              <li>
                <Link className="links" to="/drugs">
                  Na receptę
                </Link>
              </li>
              <li>
                <Link className="links" to="/prescriptions">
                  Zrealizuj receptę!
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
