import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // const user = await generateUserDocument(userAuth);
        // console.log(user);
        this.setState({ user: userAuth });
      } else {
        this.setState({ user: null });
      }
    });
  };

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
