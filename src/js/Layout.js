import React, { useState } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Basket from "./Basket";
import Footer from "./Footer";
import Otc from "./Otc";
import Prescriptions from "./Prescriptions";
import Drugs from "./Drugs";
import "../scss/layout.scss";

const Layout = () => {
  const [visibility, setVisibility] = useState(false);
  const [menu, setMenu] = useState(false);
  const [filteredDrugs, setFilteredDrugs] = useState("");
  // let handleVisibility;
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
    setVisibility((prev) => !prev);
    setMenu((prev) => !prev);
    console.log("test hamburgera");
  };
  const handleFilteredDrugs = (drugs, searchItem) => {
    const newDrugs = drugs.filter((drug) => {
      return drug.nazwa.toLowerCase().includes(searchItem.toLowerCase());
    }); //działa wyszukuje po nazwie
    setFilteredDrugs(newDrugs);
  };
  console.log(filteredDrugs);

  const NotFound = () => {
    return <h1>Coś poszło nie tak, nie odnazleżliśmy strony:(</h1>;
  };

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
              <Main {...props} searchedDrugs={filteredDrugs} />
            )}
          />
          <Route path="/basket" component={Basket} />
          <Route path="/otc" component={Otc} />
          <Route path="/prescriptions" component={Prescriptions} />
          <Route path="/drugs" component={Drugs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
};
export default Layout;
