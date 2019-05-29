import React from 'react';
import './Bets.css';
import Bet from '../Bet/Bet'

const Bets = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">User</div>
        <div className="col-sm">Game</div>
        <div className="col-sm">Team</div>
        <div className="col-sm">Bet Type</div>
        <div className="col-sm">Wager</div>
        <div className="col-sm">Result</div>
        <div className="col-sm">Placed</div>
      </div>
      {props.bets.map(b => (
      <Bet
        key={b.id.toString()}
        userId={b.userId}
        gamesId={b.gamesId}
        teamsId={b.teamsId}
        betType={b.betType}
        wager={b.wager}
        result={b.result}
        placedAt={b.placedAt}
      />
      ))}
    </div>
  );
}

export default Bets;
