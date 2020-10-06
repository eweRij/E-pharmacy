import React, { useEffect, useState } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Basket from "./Basket";
import Footer from "./Footer";
import Otc from "./Otc";
import Prescriptions from "./Prescriptions";
import Drugs from "./Drugs";
import "../scss/layout.scss";
import LoggIn from "../Login/LoggIn";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import ProfilePage from "../Login/ProfilePage";
import PasswordReset from "../Login/PasswordReset";

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
    //klikanie zmienia widocznosc przekazujemy jako props do nava
    setVisibility((prev) => !prev);
    setMenu((prev) => !prev);
  };
  const handleFilteredDrugs = (drugs, searchItem) => {
    // przekazujemy jako props do podstron //jak zrobic zeby tablica sie czyscila w nowym oknie??
    // const newDrugs = drugs.filter((drug) => {
    //   return drug.nazwa.toLowerCase().includes(searchItem.toLowerCase());
    // }); //działa wyszukuje po nazwie
    setFilteredDrugs(
      drugs.filter((drug) => {
        return drug.nazwa.toLowerCase().includes(searchItem.toLowerCase());
      })
    );
    setSearchedItem(searchItem);
  };

  console.log(filteredDrugs);

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
              />
            )}
          />
          {/* <Route
            path="/searchedItems"
            render={(props) => (
              <SearchedItems {...props} itemsToShow={filteredDrugs} />
            )}
          /> */}
          <Route path="/basket" component={Basket} />
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
          <Route path="/loggIn" component={LoggIn} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/passwordReset" component={PasswordReset} />
          <Route path="/profilePage" component={ProfilePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
};
export default Layout;
