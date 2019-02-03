import React, { Component } from "react";
import friends from "./friends.json";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let friendList = this.state.friends.map(listF => <Main key={listF.id} {...listF} />)
    return (
      <React.Fragment>
        <Nav />
        <Header />
        {friendList}
        <Footer />
      </React.Fragment>
    )};
}

export default App;
