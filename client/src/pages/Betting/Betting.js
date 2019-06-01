import React, { Component } from 'react';
import Teams from '../../components/Teams/Teams';
import BettingForm from '../../components/BettingForm/BettingForm';
import './Betting.css';

class Betting extends Component {

    state = {
        teams: [],
        userId: 0,
        gameId: 0 
    }

    componentDidMount () {
        const { userId, gameId } = this.props.location.state
        this.setState({userId, gameId});
      }

    render(props) {
        return (
            <div className="bettingform">
                <Teams teams={this.state.teams}/>
                <BettingForm userId={this.state.userId} gameId={this.state.gameId}/>
            </div>
        );
    }
}

export default Betting;