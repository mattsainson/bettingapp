import React from 'react';
import './Teams.css';
import Team from '../Team/Team'

const Teams = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">Game</div>
        <div className="col-sm">Name</div>
        <div className="col-sm">Home</div>
        <div className="col-sm">Spread</div>
        <div className="col-sm">Spread Payout</div>
        <div className="col-sm">Moneyline Payout</div>
        <div className="col-sm">Score</div>
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
