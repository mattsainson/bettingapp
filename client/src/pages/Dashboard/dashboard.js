import React, { Component } from 'react';
import Games from '../../components/Games/Games';
import Bets from '../../components/Bets/Bets';
import Summary from '../../components/Summary/Summary';
import './Dashboard.css';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';
import { Link, Redirect } from "react-router-dom";



class Dashboard extends Component {
    static contextType = UserContext;
    state = {
        userId: 1,
        games: [],
        bets: [],
        balance: 0,
        outstanding: 0,
        ytdWins: 0,
        ytdLosses: 0,
        lastBet: '',
        firstBet: '',
        biggestBet: 0,
        avgBet: 0
    }

    componentDidMount() {
        const { user } = this.context;
        console.log('componentDidMount');
        this.getGames();
        this.getUserBets(this.state.userId);
    }

    getGames = () => {
        const { user } = this.context;
        console.log(user.token)
        API.getGames(user.token)
            .then(res =>
                this.setState({ games: res.data })
            )
            .catch(err => console.log(err));
    };

    getUserBets = (userId) => {
        const { user } = this.context;
        API.getUserBets(userId, user.token)
            .then(res =>
                this.setState({ bets: res.data })
            )
            .catch(err => console.log(err));
    };

    render(props) {
        const { user } = this.context;
        return user 
         ? (
            <div className="dashboard">

                <div className="row">
                    <div className="col-8">
                        <Games games={this.state.games} />
                    </div>
                    <div className="col-4">
                    <div className="row">
                        <h6>Welcome, {user.name} your bets are listed below.  Current Balance: {user.balance}</h6>
                        <Summary
                            balance={this.state.balance}
                            outstanding={this.state.outstanding}
                            ytdWins={this.state.ytdWins}
                            ytdLosses={this.state.ytdLosses}
                            lastBet={this.state.lastBet}
                            firstBet={this.state.firstBet}
                            biggestBet={this.state.biggestBet}
                            avgBet={this.state.avgBet}
                        />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Bets bets={this.state.bets} />
                </div>
            </div>
        )
        : <Redirect to="/login" />
    }
}

export default Dashboard;