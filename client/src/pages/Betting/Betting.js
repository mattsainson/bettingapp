import React, { Component } from 'react';
import Teams from '../../components/Teams/Teams';
import './Betting.css';
import API from '../../utils/API';
import Team from '../../components/Team/Team';
// import UserContext from '../../utils/UserContext';

class Betting extends Component {
    // static contextType = UserContext;
    constructor(props) {
        super(props);
        // const { user } = this.context;
        this.state = {
            betIsValid: false,
            teams: [{ id: 1, name: 'team1' }, { id: 2, name: 'team2' }],
            user: { id: 1, name: 'Matt' },
            game: { id: 1 },
            teamId: 1,
            betType: 'Spread',
            wager: 0,
            gameId: 1
        }
        // console.log(user)
        this.onChangeWager = this.onChangeWager.bind(this);
        this.placeBet = this.placeBet.bind(this);
        this.validateBet = this.validateBet.bind(this);
    }

    componentDidMount() {
        const gameid = this.props.match.params.gameid;
        this.setState({ gameId: gameid });
        // console.log('gameid', gameid); // ok
        API.getGame(gameid)
            .then(res => {
                console.log('getGame', res.data);
                this.setState({ game: res.data });
                this.getTeamsForGame(gameid);
            })
            .catch(err => console.log(err));
    }

    getTeamsForGame = (id) => {
        console.log('getTeamsForGame', id);
        API.getTeamsForGame(id)
            .then(res => {
                console.log('getTeamsForGame', res.data);
                this.setState({ teams: res.data });
            })
            .catch(err => console.log(err));
    };

    placeBet = e => {
        e.preventDefault();
        if (!this.state.betIsValid) {
            var bet = {
                userId: this.state.user.id,
                gameId: this.state.game.id,
                teamId: this.state.teamId,
                betType: this.state.betType,
                wager: this.state.wager
            }
            console.log('bet', bet);
            API.placeBet(bet)
                .then(res =>
                    this.props.history.push('/dashboard')
                )
                .catch(err => {
                    console.log(err);
                    this.props.history.push('/dashboard')
                });
        }
    };

    cancel = e => {
        e.preventDefault();
        this.props.history.push('/dashboard');
    };

    onChange = key => e => {
        console.log('onchange');
        this.setState({ [key]: e.target.value });
        this.validateBet();
    };

    onChangeWager = event => {
        console.log('onchangeWager');
        this.setState({ wager: event.target.value });
        this.validateBet();
    };

    validateBet = () => {
        var proceed = false;
        proceed = this.state.wager > 0;
        console.log('wager', proceed);
        proceed = proceed && this.state.teamId !== 0;
        console.log('teamId', proceed);
        proceed = proceed && this.state.betType !== '';
        console.log('betType', proceed);
        this.setState.betIsValid = proceed;
    }

    render(props) {
        return (
            <div className="bettingform">
                <Teams>
                    {this.state.teams.map(t => (
                        <Team
                            key={t.id}
                            name={t.name}
                            spread={t.spread}
                            spreadPayout={t.spreadPayout}
                            moneylinePayout={t.moneylinePayout}
                            score={t.score}
                        />
                    ))}
                </Teams>
                <div className="formWrapper">
                <form className="bettingForm">
                    <div className="form-group">
                        <label htmlFor="teamSelect" className="formLabel">Team</label>
                        <select className="form-control" id="teamSelect" value={this.state.teamId} onChange={this.onChange('teamId')}>
                            <option value={this.state.teams[0].name}>{this.state.teams[0].name}</option>
                            <option value={this.state.teams[1].name}>{this.state.teams[1].name}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="betTypeSelect" className="formLabel">Bet Type</label>
                        <select className="form-control" id="betTypeSelect" value={this.state.betType} onChange={this.onChange('betType')}>
                            <option value="Spread">Spread</option>
                            <option value="Moneyline">Moneyline</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="wager" className="formLabel">Wager</label>
                        <input type="text" className="form-control" id="wager" value={this.state.wager} placeholder="100" onChange={this.onChangeWager} />
                    </div>
                    <button type="submit" className="btn btn-danger btn-bet" onClick={this.cancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary btn-bet" disabled={this.state.betIsValid} onClick={this.placeBet}>Place Bet</button>
                </form>
                </div>
            </div>
        );
    }
}

export default Betting;