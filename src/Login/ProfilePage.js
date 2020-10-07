import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
// import { navigate } from "@reach/router";
import { auth } from "../firebase";
const ProfilePage = () => {
  const user = useContext(UserContext);
  // const { displayName, email } = user;
  console.log(user);

  return (
    <div className="">
      <div className="">
        <div
          style={{
            background: `url(
              "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
            )  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
          className=""
        ></div>
        <div className="">
          <h2 className="">b</h2>
          <h3 className="">f</h3>
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
