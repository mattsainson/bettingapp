import React from 'react';
import './Teams.css';
import Team from '../Team/Team'

const Teams = (props) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-sm">Game</div>
        <div class="col-sm">Name</div>
        <div class="col-sm">Home</div>
        <div class="col-sm">Spread</div>
        <div class="col-sm">Spread Payout</div>
        <div class="col-sm">Moneyline Payout</div>
        <div class="col-sm">Score</div>
      </div>
      {props.teams.map(t => (
      <Team
        gamesId={t.gamesId}
        name={t.name}
        home={t.home}
        spread={t.spread}
        spreadPayout={t.spreadPayout}
        moneylinePayout={t.moneylinePayout}
        score={t.score}
      />
      ))}
    </div>
  );
}

export default Teams;
