import React, { Component } from 'react';
import Games from '../../components/Games/Games';
import Bets from '../../components/Bets/Bets';
import Summary from '../../components/Summary/Summary';
import { Pie, Bar } from 'react-chartjs-2';
import './Dashboard.css';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';
import { Redirect } from "react-router-dom";



class Dashboard extends Component {
    static contextType = UserContext;
    state = {
        userId: 1,
        games: [],
        bets: [],
        balance: 180,
        outstanding: 250,
        ytdWins: 5,
        ytdLosses: 7,
        lastBet: "Fri, April 2, 2019",
        firstBet: "Mon, June 23, 2017",
        biggestBet: 250,
        avgBet: 60
    };

    pieData = {
        labels: [
            "Wins",
            "Losses"
        ],
        datasets: [{
            data: [this.state.ytdWins, this.state.ytdLosses],
            backgroundColor: [
                '#FF6384',
                '#008000',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
            ]
        }]
    };

    barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Wins by Month',
                backgroundColor: 'rgba(255,99,132,0.2',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    componentDidMount() {
        console.log('componentDidMount');
        this.getGames();
        this.getUserBets(this.state.userId);
        console.log(this.chartReference); // returns a Chart.js instance reference
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
                    <h6 className="welcome">Welcome {user.name}, Your Current Balance is $ {user.balance}</h6>
                    <div className="row">
                        <div className="col-8">
                            <Games games={this.state.games} history={this.props.history} />
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
                            <div className="row">
                                <h6>Your betting stats</h6>
                                <Pie data={this.pieData} />
                            </div>
                            <div className="row">
                                <h6></h6>
                                <Bar data={this.barData} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Bets bets={this.state.bets} />
                    </div>

                </div>
            ) : ( <Redirect to="/login" />
            )
    }
}

export default Dashboard;