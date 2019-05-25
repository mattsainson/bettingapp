import React from 'react';
import './Games.css';
import Game from '../Game/Game'

const Games = (props) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-sm">Sport</div>
        <div class="col-sm">League</div>
        <div class="col-sm">Game Time</div>
        <div class="col-sm">State</div>
      </div>
      {props.games.map(g => (
      <Game
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
