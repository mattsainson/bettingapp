import React from 'react';
import './Games.css';
import Game from '../Game/Game'
// import Moment from 'react-moment'

const Games = (props) => {
  return (
    <div className="container game">
      <h1>Games</h1>
      <div className="row">
        <div className="col-3"><h5>Sport</h5></div>
        <div className="col-3"><h5>League</h5></div>
        <div className="col-3"><h5>Game Time</h5></div>
        <div className="col-3"><h5>State</h5></div>
      </div>
      {props.games.map(g => (
      <Game
        key={g.id.toString()}
        sport={g.sport}
        league={g.league}
        gameAt={g.gameAt}
        state={g.state}></Game>
      ))}
    </div>
  );
}

export default Games;
