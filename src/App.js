import React, { Component } from "react";
import LandCard from "./components/LandCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import landscapes from "./landscapes.json";
import "./App.css";

class App extends Component {
  state = {
    landscapes: landscapes,
    clickedImg: [],
    score: 0,
    highscore: 0
  };

  cardClick = id => {
    const gameScore = [];
    //game lost
    if (this.state.clickedImg.includes(id)) {
      this.setState({ score: 0, clickedImg: [] })
      alert ('Duplicate clicked!')
    // Game continues
    } else {
        this.state.clickedImg.push(id);
        this.state.score++;
      // Rewriting highscore
      if (this.state.score > this.state.highscore) {
        this.setState({ 
          highscore: this.state.score,
        });
      }
    }

    for (let idx=0; idx<12; idx++) { //ramdonly looping throught landscape array and migrating each chosen index 
      gameScore.push(this.state.landscapes.splice(Math.floor(Math.random()*this.state.landscapes.length),1)[0])
    }
    this.setState({ landscapes: gameScore });
  };

  render() {
    return (
      <Wrapper>
        <Title
          title= "LandsClicky Game"
          instructions="Click only once on your next dreamed trip!!"
          score={this.state.score}
          highscore={this.state.highscore}
        />
        {this.state.landscapes.map(student => (
          <LandCard
            cardClick={this.cardClick}
            id={student.id}
            key={student.id}
            image={student.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
