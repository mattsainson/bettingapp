import React from 'react';
import './Games.css';
import Game from '../Game/Game'

const Games = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">Sport</div>
        <div className="col-sm">League</div>
        <div className="col-sm">Game Time</div>
        <div className="col-sm">State</div>
      </div>
      {props.games.map(g => (
      <Game
        key={g.id.toString()}
        sport={g.sport}
        league={g.league}
        gameAt={g.gameAt}
        state={g.state}
      />
      ))}
    </div>
  );
}

export default Games;
