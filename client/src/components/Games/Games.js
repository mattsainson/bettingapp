import React from 'react';
import './Games.css';
import Game from '../Game/Game'

const Games = (props) => {
  return (
    <div className="container">
      <h1>Games</h1>
      <div className="row tablerow">
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
      </div>
      {props.games.map(g => (
      <Game
        key={g.id.toString()}
        sport={g.sport}
        league={g.league}
        gameAt={g.gameAt}
        state={g.state}
        team={g.teams}>
        </Game>
      ))}
      {console.log(props)}
    </div>
  );
}

export default Games;