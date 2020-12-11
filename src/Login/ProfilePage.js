import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { auth } from "../firebase";
const ProfilePage = () => {
  const user = useContext(UserContext);

  const handleLogout = () => {
    auth
      .signOut()
      .then(function () {
        console.log("wylogowano");
      })
      .catch(function (error) {
        console.log("błąd wylogowania");
      });
  };

  return (
    <div className="container wraper profile">
      <div className="profile__info">
        <div
          style={{
            background: `url(
              ${user.photoURL}
            )  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
            border: "2px solid black",
          }}
        ></div>
        <div style={{ paddingLeft: "2rem" }}>
          <h2>{user.displayName}</h2>
          <h3>{user.email}</h3>
        </div>
      </div>
      <button className="btn log" onClick={handleLogout}>
        Wyloguj się
      </button>
    </div>
  );
};

export default ProfilePage;
//ok
