import React, { Component } from 'react';
import Teams from '../../components/Teams/Teams';
import BettingForm from '../../components/BettingForm/BettingForm';
import './Betting.css';

class Betting extends Component {

    state = {
        teams: [], 
    }

    render(props) {
        return (
            <div className="bettingform">
                <Teams teams={this.state.teams}/>
                <BettingForm />
            </div>
        );
    }
}

export default Betting;