import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
// import { navigate } from "@reach/router";
import { auth } from "../firebase";
const ProfilePage = () => {
  const user = useContext(UserContext);

  console.log(user);

  return (
    <div className="">
      <div className="">
        <div
          style={{
            background: `url(
              ${user.photoURL}
            )  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
          className=""
        ></div>
        <div className="">
          <h2 className="">{user.displayName}</h2>
          <h3 className="">{user.email}</h3>
        </div>
      </div>
      <button
        className=""
        onClick={() => {
          auth.signOut();
        }}
      >
        Wyloguj się
      </button>
    </div>
  );
};

export default ProfilePage;
//ok
