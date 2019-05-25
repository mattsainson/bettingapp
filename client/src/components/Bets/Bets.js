import React from 'react';
import './Bets.css';
import Bet from '../Bet/Bet'

const Bets = (props) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-sm">User</div>
        <div class="col-sm">Game</div>
        <div class="col-sm">Team</div>
        <div class="col-sm">Bet Type</div>
        <div class="col-sm">Wager</div>
        <div class="col-sm">Result</div>
        <div class="col-sm">Placed</div>
      </div>
      {props.bets.map(b => (
      <Bet
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
