import React from "react";
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
  return (
    <HashRouter>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/basket" component={Basket} />
        <Route path="/otc" component={Otc} />
        <Route path="/prescriptions" component={Prescriptions} />
        <Route path="/drugs" component={Drugs} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};
export default Layout;
