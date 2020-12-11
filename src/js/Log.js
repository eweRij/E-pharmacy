import React from "react";
import LoggIn from "../Login/LoggIn";
import UserProvider from "../providers/UserProvider";
const Log = () => {
  return (
    <UserProvider>
      <LoggIn />
    </UserProvider>
  );
};
export default Log;
//ok
