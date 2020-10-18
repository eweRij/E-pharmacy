import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Basket from "./Basket";
import Footer from "./Footer";
import Otc from "./Otc";
import Prescriptions from "./Prescriptions";
import Drugs from "./Drugs";
import Log from "./Log";
import onBuy from "./OnBuy";
import "../scss/layout.scss";
import ProfilePage from "../Login/ProfilePage";
import PasswordReset from "../Login/PasswordReset";
import SignUp from "../Login/SignUp";

const Layout = () => {
  const [visibility, setVisibility] = useState(false); //widocznosc hamburgera
  const [menu, setMenu] = useState(false); // widocznosc rozwijanego menu na mobilkach
  const [filteredDrugs, setFilteredDrugs] = useState([]); // wyszukiwarka leków dopracowac w innych oknach!
  const [searchedItem, setSearchedItem] = useState("");
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
  const [quantity, setQuantity] = useState(0);
  const [pay, setPay] = useState(0);
  const [inBasket, setInBasket] = useState(0);

  const API = "http://localhost:8000/basket";

  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => {
        setInBasket(data);
      })
      .catch((err) => console.log(err));
  }, [pay]);
  const handleBasket = (e, item, price) => {
    // tworzymy dopiero teraz obiekt na podstaie zminianych przez inputy danych!!
    e.preventDefault();
    const newBasket = {
      name: item.nazwa,
      dose: item.dawka,
      form: item.postac,
      producer: item.podmOdpow,
      howMany: 1,
      // prize: price,
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
    setQuantity((prev) => prev + 1);
    setPay((prev) => prev + price);
  };
  const handleQuantityAdd = (price, item, ref, event) => {
    let counter = parseFloat(ref.current.innerText) + 1;
    const data = {
      howMany: counter,
    };
    fetch(`${API}/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
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
    console.log(counter);
    setPay((prev) => prev + price);
    setQuantity((prev) => prev + 1);
  };
  const handleQuantitySubstract = (price, item, ref, event) => {
    let counter = parseFloat(ref.current.innerText) - 1;

    const data = {
      howMany: counter,
    };
    fetch(`${API}/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
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
    console.log(quantity);
    setQuantity((prev) => prev - 1);
    setPay((prev) => prev - price);
  };

  const handleRemove = (item) => {
    fetch(`${API}/${item.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response.ok);
      })
      .catch((error) => {
        console.log(error);
      });
    setPay((prev) => prev - 15 * item.howMany);
    setQuantity((prev) => prev - item.howMany);
  };
  const zeroQuantityBadge = () => {
    setQuantity(0);
    setPay(0);
  };

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
          inBasket={inBasket}
          howMany={quantity}
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
          <Route
            exact
            path="/basket"
            render={(props) => (
              <Basket
                {...props}
                itemsToShow={filteredDrugs}
                imageToShow={searchedItem}
                onBuy={handleBasket}
                pay={pay}
                quantity={quantity}
                changeQuantityAdd={handleQuantityAdd}
                changeQuantitySubstract={handleQuantitySubstract}
                remove={handleRemove}
                zeroHandle={zeroQuantityBadge}
              />
            )}
          />
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
          <Route
            exact
            path="/prescriptions"
            render={(props) => (
              <Prescriptions
                {...props}
                itemsToShow={filteredDrugs}
                imageToShow={searchedItem}
                onBuy={handleBasket}
              />
            )}
          />
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
          {/* <Route path="/log/profilePage" component={ProfilePage} />
          <Route path="/log/signUp" component={SignUp} />
          <Route path="/log/passwordReset" component={PasswordReset} />
          <Route path="/log/onBuy" component={onBuy} /> */}
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
};
export default Layout;
//ok
