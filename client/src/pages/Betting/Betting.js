import React, { Component } from 'react';
import Teams from '../../components/Teams/Teams';
import './Betting.css';
import API from '../../utils/API';
import Team from '../../components/Team/Team';

class Betting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            betIsValid: false,
            teams: [{ id: 1, name: 'team1' }, { id: 2, name: 'team2' }],
            user: { id: 1, name: "Matt" },
            game: { id: 1 },
            teamId: 0,
            betType: '',
            wager: 0,
            gameId: 0
        }
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
        if (this.state.betIsValid) {
            API.placeBet({
                userId: this.state.user.id,
                gameId: this.state.game.id,
                teamId: this.state.teamId,
                betType: this.state.betType,
                wager: this.state.wager
            })
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
        this.setState({ [key]: e.target.value });
        this.validateBet();
    };

    validateBet = () => {
        var proceed = false;
        proceed = this.state.wager > 0;
        proceed = proceed && this.state.teamId !== 0;
        proceed = proceed && this.state.betType !== '';
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
                            home={t.home}
                            spread={t.spread}
                            spreadPayout={t.spreadPayout}
                            moneylinePayout={t.moneylinePayout}
                            score={t.score}
                        />
                    ))}
                </Teams>
                <form>
                    <div className="form-group">
                        <label htmlFor="teamSelect">Team</label>
                        <select className="form-control" id="teamSelect" onChange={this.onChange('teamId')}>
                            <option value={this.state.teams[0].name}>{this.state.teams[0].name}</option>
                            <option value={this.state.teams[1].name}>{this.state.teams[1].name}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="betTypeSelect">Bet Type</label>
                        <select className="form-control" id="betTypeSelect" onChange={this.onChange('betType')}>
                            <option value="Spread">Spread</option>
                            <option value="Moneyline">Moneyline</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="wager">Wager</label>
                        <input type="text" className="form-control" id="wager" placeholder="100" onChange={this.onChange('wager')} />
                    </div>
                    <button type="submit" className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary" disabled={!this.state.betIsValid} onClick={this.placeBet}>Place Bet</button>
                </form>
            </div>
        );
    }
}

export default Betting;