import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js';
import Game from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';
import Games from './components/games.json'

class App extends Component {

  state = {
    user: 'Matt',
    games: Games
  }

  // endGame() {
  //   if (this.state.totalClicks > this.state.highScore) {
  //     this.setState ({
  //       highScore: this.state.totalClicks
  //     })
  //   }
  //   this.setState ({
  //     images: this.state.images.sort(() => Math.random() - 0.5),
  //     totalClicks: 0,
  //     clickedImages: []
  //   })
  // }

  handleShuffle(id) {
    if (!this.state.user) {
      // this.setState({
      //   totalClicks: this.state.totalClicks + 1,
      //   clickedImages: [...this.state.clickedImages, id],
      // });
      // if (this.state.totalClicks === 12) {
      //   this.endGame();
      // } else {
      //   this.setState({
      //     images: this.state.images.sort(() => Math.random() - 0.5)
      //   })
      // }
    } else {
      // this.endGame();
    }
  }

  render() {
    return (
      <div className="App">
        <Nav user={this.state.user} />
        <Header />
        <Main>
          {this.state.games.map(i => (
            <Game
              key={i.id}
              team1={i.team1}
              team2={i.team2}
              location={i.location}
              playAt={i.playAt}
              sport={i.sport}
              league={i.league}
              state={i.state}
            />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
