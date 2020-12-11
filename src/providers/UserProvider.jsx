import React, {createContext,useState, useEffect } from "react";
import { auth} from "../firebase";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (userAuth) {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}; 

export default UserProvider;
