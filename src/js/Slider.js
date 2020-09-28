import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxWidth: "700px", maxHeight: "350px" }}
              src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="natural cosmetics"
            />
            <Carousel.Caption style={{ color: "#590202" }}>
              <h1>30% rabatu</h1>
              <h2>Na wybrane kosmetyki firmy Pharmaceris.</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxWidth: "700px", maxHeight: "350px" }}
              src="https://images.pexels.com/photos/51929/medications-cure-tablets-pharmacy-51929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="pink tablets"
            />

            <Carousel.Caption>
              <h1>Sprawdź już dziś!</h1>
              <h2>Ponad 6000 tysięcy produktów dostępnych w naszej aptece</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ maxWidth: "700px", maxHeight: "350px" }}
              className="d-block w-100"
              src="https://images.pexels.com/photos/2383010/pexels-photo-2383010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940"
              alt="green leaf with healthcare sign"
            />

            <Carousel.Caption>
              <h1>Masz wątpliwości?</h1>
              <h2>Napisz do Nas! Na pewno Ci pomożemy.</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ maxWidth: "650px", maxHeight: "350px" }}
              className="d-block w-100"
              src="https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bottle with tablets"
            />

            <Carousel.Caption style={{ color: " #d9042b" }}>
              <h2>Zrealizuj u nas swoją e-receptę!</h2>
              <h2>Łatwy i szybki sposób, bez czekania na zamówienie.</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
