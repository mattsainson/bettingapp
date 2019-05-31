import React from 'react';
import './Bets.css';
import Bet from '../Bet/Bet'

const Bets = (props) => {
  return (
    <div className="container containerBG">
      <h1>Bets</h1>
      <div className="row">
        <div className="col-sm"><h6>User</h6></div>
        <div className="col-sm"><h6>Game</h6></div>
        <div className="col-sm"><h6>Team</h6></div>
        <div className="col-sm"><h6>Bet Type</h6></div>
        <div className="col-sm"><h6>Wager</h6></div>
        <div className="col-sm"><h6>Result</h6></div>
        <div className="col-sm"><h6>Placed At</h6></div>
      </div>
      {props.bets.map(b => (
      <Bet
        userId={b.userId}
        gamesId={b.gameId}
        teamsId={b.teamId}
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
