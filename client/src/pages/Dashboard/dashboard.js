import React, { Component } from 'react';
import Games from '../../components/Games/Games';
import Bets from '../../components/Bets/Bets';
import Summary from '../../components/Summary/Summary';
import './Dashboard.css';
import API from '../../utils/API';

class Dashboard extends Component {

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
        console.log('componentDidMount-dashboard');
        this.getGames();
        this.getUserBets(this.state.userId);
    }

    getGames = () => {
        API.getGames()
            .then(res =>
                this.setState({ games: res.data })
            )
            .catch(err => console.log(err));
    };

    getUserBets = (userId) => {
        API.getUserBets(userId)
            .then(res =>
                this.setState({ bets: res.data })
            )
            .catch(err => console.log(err));
    };

    render(props) {
        return (
            <div className="dashboard">

                <div className="row">
                    <div className="col-8">
                        <Games games={this.state.games} history={this.props.history}/>
                    </div>
                    <div className="col-4">
                    <div className="row">
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
        );
    }
}

export default Dashboard;