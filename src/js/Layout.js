import React, { useEffect, useState } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Basket from "./Basket";
import Footer from "./Footer";
import Otc from "./Otc";
import Prescriptions from "./Prescriptions";
import Drugs from "./Drugs";
import Log from "./Log";
import "../scss/layout.scss";
// import LoggIn from "../Login/LoggIn";
// import SignIn from "../Login/SignIn";
// import SignUp from "../Login/SignUp";
// import ProfilePage from "../Login/ProfilePage";
// import PasswordReset from "../Login/PasswordReset";

const Layout = () => {
  const [visibility, setVisibility] = useState(false); //widocznosc hamburgera
  const [menu, setMenu] = useState(false); // widocznoscr rozwijanego menu na mobilkach
  const [filteredDrugs, setFilteredDrugs] = useState([]); // wyszukiwarka leków dopracowac w innych oknach!
  const [searchedItem, setSearchedItem] = useState("");
  // let handleVisibility;// doczytac co z mediaqueries!!
  // const mql = window.matchMedia("screen and (max-width:650px)");
  // mql.addListener(function (mql) {
  //   if (mql.matches) {
  //     console.log("działa"); //cos trzeba zmienic!!!!!!!!!!!
  //     handleVisibility = () => {
  //       setVisibility((prev) => !prev);
  //       setMenu((prev) => !prev);
  //       console.log("test hamburgera");
  //     };
  //   } else {
  //     setVisibility(false);
  //     setMenu(false);
  //   }
  // });
  const handleVisibility = () => {
    //do mediqueries dla małego ekranu
    //klikanie zmienia widocznosc przekazujemy jako props do nava
    setVisibility((prev) => !prev);
    setMenu((prev) => !prev);
  };
  const handleFilteredDrugs = (drugs, searchItem) => {
    setFilteredDrugs(
      drugs.filter((drug) => {
        return drug.nazwa.toLowerCase().includes(searchItem.toLowerCase());
      })
    );
    setSearchedItem(searchItem);
  }; //filtrowanie leków

  console.log(filteredDrugs);

  //basket
  // const [basket, setBasket] = useState([]);
  // const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [pay, setPay] = useState(0);
  const API = "http://localhost:3001/basket";

  // const handleBasket = (event, item, price) => {
  //   setBasket((prev) => {
  //     return [...prev, item];
  //   });
  //   setPrice(price * quantity);
  //   setPay((prev) => prev + price);
  //   console.log(basket);
  //   console.log(event.target);
  // };

  const handleBasket = (e, item, price) => {
    // tworzymy dopiero teraz obiekt na podstaie zminianych przez inputy danych!!
    e.preventDefault();
    const newBasket = {
      name: item.nazwa,
      dose: item.dawka,
      form: item.postac,
      producer: item.podmOdpow,
      prize: price,
    };
    console.log(newBasket);

    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(newBasket),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleQuantityAdd = (price) => {
  //   setQuantity((prev) => prev + 1);
  //   setPay((prev) => prev + price);
  // };
  // const handleQuantitySubstract = (price) => {
  //   setQuantity((prev) => prev - 1);
  //   setPay((prev) => prev - price);
  // };
  // useEffect(() => {

  //   setPay((prev) => prev + price);
  // }, [quantity]); //poprawić z buttonami

  // const handleQuantity = (e) => {
  //   e.preventDefault();
  //   setQuantity(e.target.value);
  // };

  const NotFound = () => {
    return <h1>Coś poszło nie tak, nie odnazleżliśmy strony:(</h1>;
  }; //wiadomo

  return (
    <div className={visibility ? "body moved" : "body"}>
      <HashRouter>
        <Navigation
          onClick={handleVisibility}
          trigger={menu}
          showList={handleFilteredDrugs}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Main
                {...props}
                itemsToShow={filteredDrugs}
                imageToShow={searchedItem}
                onBuy={handleBasket}
              />
            )}
          />
          {/* <Route
            path="/searchedItems"
            render={(props) => (
              <SearchedItems {...props} itemsToShow={filteredDrugs} />
            )}
          /> */}
          <Route
            exact
            path="/basket"
            render={(props) => (
              <Basket
                {...props}
                itemsToShow={filteredDrugs}
                imageToShow={searchedItem}
                // showBasket={basket}
                onBuy={handleBasket}
                pay={pay}
                quantity={quantity}
                // price={price}
                // changeQuantityAdd={handleQuantityAdd}
                // changeQuantitySubstract={handleQuantitySubstract}
              />
            )}
          />
          {/* <Route path="/otc" component={Otc} /> */}
          <Route
            exact
            path="/otc"
            render={(props) => (
              <Otc
                {...props}
                itemsToShow={filteredDrugs}
                imageToShow={searchedItem}
              />
            )}
          />
          <Route path="/prescriptions" component={Prescriptions} />
          {/* <Route path="/drugs" component={Drugs} /> */}
          <Route
            exact
            path="/drugs"
            render={(props) => (
              <Drugs
                {...props}
                itemsToShow={filteredDrugs}
                imageToShow={searchedItem}
              />
            )}
          />
          <Route path="/log" component={Log} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
};
export default Layout;
