import React, { Component } from 'react';
import './Teams.css';
import Team from '../Team/Team'

class Teams extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [{ id: 1, name: 'team1' }, { id: 2, name: 'team2' }]
    }
  }

  componentDidMount() {
    console.log('this.props.gameId', this.props.gameId)
    this.setState({ gameId: this.props.gameId })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">Name</div>
          <div className="col-sm">Home</div>
          <div className="col-sm">Spread</div>
          <div className="col-sm">Spread Payout</div>
          <div className="col-sm">Moneyline Payout</div>
          <div className="col-sm">Score</div>
        </div>
        {this.props.teams.map(t => (
          <Team
            key={t.id}
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
}

export default Teams;
