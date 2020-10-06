import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";
//wartosc null to wartosc domyslna dla consumera, wykorzystywana kiedy w jego poblizu nie bedzie zadnego providera
export const UserContext = createContext({ user: null }); //tworze kontekst--> w rzeczywistosci to obiekt kroy składa sie z 2 komponentów : provider i consumer
class UserProvider extends Component {
  state = {
    user: null,
  };

  // componentDidMount = () => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     this.setState({ user: userAuth });
  //   });
  //   console.log(this.state.user);
  // };
  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
