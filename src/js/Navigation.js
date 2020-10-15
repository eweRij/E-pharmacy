import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const Navigation = ({ onClick, trigger, showList, inBasket, howMany }) => {
  // działa przenoszenie
  const user = useContext(UserContext);
  const [drugs, setDrugs] = useState([]);
  const [searchItem, setSearchItem] = useState("");
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

  useEffect(() => {
    showList(drugs, searchItem);
  }, [drugs]);

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
            <span className="user-name">
              <h3>{user && `Witaj ${user.displayName}!`}</h3>
            </span>
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
              <li className="menu__element">
                <Link onClick={handleClearHistory} className="links" to="/">
                  Strona główna
                </Link>
              </li>
              <li className="menu__element">
                <Link onClick={handleClearHistory} className="links" to="/otc">
                  Bez recepty
                </Link>
              </li>
              <li className="menu__element">
                <Link
                  onClick={handleClearHistory}
                  className="links"
                  to="/drugs"
                >
                  Na receptę
                </Link>
              </li>
              <li className="menu__element">
                <Link
                  onClick={handleClearHistory}
                  className="links"
                  to="/prescriptions"
                >
                  Zrealizuj receptę!
                </Link>
              </li>
              <li
                style={{
                  minWidth: "26vw",
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: "0px",
                }}
                className="menu__element"
              >
                <Link
                  style={{ textAlign: "center" }}
                  className="links"
                  to="/log"
                >
                  {user ? "Twój profil" : "Zaloguj się"}
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
//ok
