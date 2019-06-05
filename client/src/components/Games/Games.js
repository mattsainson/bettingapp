import React from 'react';
import './Games.css';
import Game from '../Game/Game'

const Games = (props) => {
  return (
    <div className="container">
      <h1>Games</h1>
      <div className="row headerrow">
        <div className="col-3">Schedule</div>
        <div className="col-7">
          <div className="row">
            <div className="col-6">Teams</div>
            <div className="col-2">Spread</div>
            <div className="col-2">Spread Payout</div>
            <div className="col-2">Moneyline Payout</div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      {props.games.map(g => (
        <Game
          key={g.id}
          id={g.id}
          sport={g.sport}
          league={g.league}
          gameAt={g.gameAt}
          history={props.history}
          state={g.state}
          team={g.teams}>
          onClick=(() => this.onClick({g.id}))
        </Game>
      ))}
    </div>
  );
}

export default Games;