import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <section>
          <div className="pr">
            <h2>Random stuff</h2>
            <p>
              Etiam feugiat condimentum Aliquam imperdiet suscipit odio Sed
              porttitor cras in erat nec Felis varius pellentesque potenti
              Nullam scelerisque blandit leo
            </p>
          </div>
          <div className="footerVisibility pr">
            <h2>Random stuff</h2>
            <p>
              Etiam feugiat condimentum Aliquam imperdiet suscipit odio Sed
              porttitor cras in erat nec Felis varius pellentesque potenti
              Nullam scelerisque blandit leo
            </p>
          </div>
        </section>
        <section>
          <div className="pr">
            <h2>Random stuff</h2>
            <p>
              Etiam feugiat condimentum Aliquam imperdiet suscipit odio Sed
              porttitor cras in erat nec Felis varius pellentesque potenti
              Nullam scelerisque blandit leo
            </p>
          </div>
          <div className="footerVisibility">
            <h2>Contact Us</h2>
            <div className="footer__media">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
            </div>
            <p>1234 Fictional Road Nashville, TN 00000 (800) 555-0000</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
