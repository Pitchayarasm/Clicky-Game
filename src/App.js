import React, { Component } from "react";
import friends from "./friends.json";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score : 0,
    highScore : 0,
    isClick : []
  };

  handleClick = (id) => {
    if (!this.state.isClick.includes(id)) {
      let pickedId = this.state.isClick.slice();    
          pickedId.push(id);   
      let newFriends = this.state.friends.sort(() => Math.random() - 0.5);
      this.setState({
        isClick : pickedId,
        score : this.state.score + 1,
        friends : newFriends
      },() => {
        if (this.state.score < this.state.highScore) {
          this.setState({
            highScore : this.state.highScore
          })
        } else {
          this.setState({
            highScore : this.state.score
          })
        }
      })
    } else {
        this.setState({
          isClick : [],
          score : 0,
          highScore : this.state.highScore
        })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Nav score={this.state.score} highScore={this.state.highScore}/>
        <Header />
        <div className="container">
        {this.state.friends.map(friend => (
          <Main
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleClick={this.handleClick}
          />
        ))}
        </div>
        <Footer />
      </React.Fragment>
    )};

}

export default App;
