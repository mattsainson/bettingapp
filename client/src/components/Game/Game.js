import React, { Component } from 'react';
// import { Route , withRouter} from 'react-router-dom';
import './Game.css';
import Moment from 'react-moment';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameId: this.props.id
        }
    }

    // componentDidMount() {

    // }

    onClick = id => e => {
        e.preventDefault();
        console.log('gameid-clicked', id);
        this.props.history.push('/betting/' + id);
    }

    render() {
        return (
            <div className="row tablerow">
                <div className="col-3">
                    <div className="row datarow">
                        <Moment format="MM/DD/YYYY">{this.props.gameAt}</Moment>
                        <Moment format="hh:mm A">{this.props.gameAt}</Moment>
                    </div>
                    <div className="row datarow">{this.props.state}</div>
                </div>
                <div className="col-7">
                    <div className="row datarow">
                        <div className="col-6">{this.props.team[0].name}</div>
                        <div className="col-2">{this.props.team[0].spread}</div>
                        <div className="col-2">{this.props.team[0].spreadPayout}</div>
                        <div className="col-2">{this.props.team[0].moneylinePayout}</div>
                    </div>
                    <div className="row datarow">
                        <div className="col-6">{this.props.team[1].name}</div>
                        <div className="col-2">{this.props.team[1].spread}</div>
                        <div className="col-2">{this.props.team[1].spreadPayout}</div>
                        <div className="col-2">{this.props.team[1].moneylinePayout}</div>
                    </div>
                </div>
                <div className="col-2">
                    <button onClick={this.onClick(this.props.id)} type="button" className="btn btn-primary btn-game">
                        Bet
                    </button>
                </div>
            </div >
        );
    }
}

export default Game;
