import React, { Component } from 'react';
import './Teams.css';
// import Team from '../Team/Team'

class Teams extends Component {

  render(props) {
    return (
      <div className="container teams">
        <div className="row headerrow">
          <div className="col-sm">Name</div>
          <div className="col-sm">Spread</div>
          <div className="col-sm">Spread Payout</div>
          <div className="col-sm">Moneyline Payout</div>
          <div className="col-sm">Score</div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Teams;
