import React, { useEffect, useState } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const Navigation = ({ onClick, trigger, showList, inBasket, howMany }) => {
  // działa przenoszenie
  const [drugs, setDrugs] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  // const [filteredDrugs, setFilteredDrugs] = useState("");
  const handleSearchItem = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };
  const API = `http://localhost:8080/api/drugs`;
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => setDrugs(data)) // cos nie tak z serverem
      .catch((err) => console.log(err));
    console.log(drugs);
  };

  const handleClearHistory = () => {
    setDrugs([]);
    console.log("czyszcze");
  }; //czysci historie wyszukiwania łopatologicznie, da się lepiej??
  console.log(searchItem);
  useEffect(() => {
    showList(drugs, searchItem);
  }, [drugs]);
  // console.log(filteredDrugs);
  return (
    <>
      <header className="container">
        <div className="header">
          <div className="header__logoAndSearch">
            <div className="header__logoAndSearch__logo">
              <span className="logo__title">Logo Apteki</span>
            </div>
            <form
              onSubmit={handleSearch}
              className="header__logoAndSearch__form"
            >
              <input
                id="input-search"
                onChange={handleSearchItem}
                type="text"
                value={searchItem}
                name="search drug"
              ></input>
              <input id="btn-search" type="submit" value="Szukaj"></input>
            </form>
            <Link className="basket" to="./basket">
              <i
                onClick={handleClearHistory}
                style={{ color: "#034C8C", fontSize: "2.3rem" }}
                className="fas fa-shopping-basket"
              ></i>
            </Link>
            <span className="badge">{howMany}</span>
          </div>
          <nav className={trigger ? "mobile-section opened" : "mobile-section"}>
            <button onClick={onClick} id="menu-trigger">
              <i class="fas fa-bars"></i>
            </button>
            <ul className="menu">
              <li>
                <Link onClick={handleClearHistory} className="links" to="/">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link onClick={handleClearHistory} className="links" to="/otc">
                  Bez recepty
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClearHistory}
                  className="links"
                  to="/drugs"
                >
                  Na receptę
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClearHistory}
                  className="links"
                  to="/prescriptions"
                >
                  Zrealizuj receptę!
                </Link>
              </li>
              <li>
                <Link className="links" to="/log">
                  Zaloguj się
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
