import React from 'react';
import './Bets.css';
import Bet from '../Bet/Bet'

const Bets = (props) => {
  return (
    <div className="container">
      <h1>Bets</h1>
      <div className="row headerrow">
        <div className="col-sm"><h6>Game</h6></div>
        <div className="col-sm"><h6>Team</h6></div>
        <div className="col-sm"><h6>Bet Type</h6></div>
        <div className="col-sm"><h6>Wager</h6></div>
        <div className="col-sm"><h6>Result</h6></div>
        <div className="col-sm"><h6>Placed At</h6></div>
      </div>
      {props.bets.map(b => (
      <Bet
        key={b.id.toString()}
        userId={b.userId}
        gameId={b.gameId}
        teamId={b.teamId}
        betType={b.betType}
        wager={b.wager}
        result={b.result}
        placedAt={b.placedAt}>
        </Bet>
      ))}
    </div>
  );
}

export default Bets;
