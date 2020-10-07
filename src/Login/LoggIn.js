// import React, { useContext } from "react";
// import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import ProfilePage from "./ProfilePage";
// import PasswordReset from "./PasswordReset";
// import { UserContext } from "../providers/UserProvider";
// const LoggIn = () => {
//   const user = useContext(UserContext);
//   return user ? (
//     <ProfilePage />
//   ) : (
//     <>
//       <Link to="./signUp">Zaloguj się</Link>
//       <Link to="./signIn">Zarejestruj się</Link>
//       <Link to="./passwordReset">Zapomniałeś hasła?</Link>
//       <Link to="./profilePage">Zapomniałeś hasła?</Link>
//     </>
//   );
// };
// export default LoggIn;

import React, { useContext } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
const LoggIn = () => {
  const user = useContext(UserContext);
  return user ? (
    <ProfilePage />
  ) : (
    <>
      <HashRouter>
        <Switch>
          <Route path="/log/signIn" component={SignIn} />
          <Route path="/log/signUp" component={SignUp} />
          <Route path="/log/passwordReset" component={PasswordReset} />
        </Switch>
      </HashRouter>
      <Link to="/log/signIn">Zaloguj się</Link>
      <Link to="/log/signUp">Zarejestruj się</Link>
      <Link to="/log/passwordReset">Zapomniałeś hasła?</Link>
    </>
  );
};

export default LoggIn;
//prawie ok sprobowac z rutami ok
