import React, { Component } from 'react';
import './Admin.css';
import API from '../../utils/API';

class Admin extends Component {

    state = {
        userId: 0,
        status: ''
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    getGames = (e) => {
        e.preventDefault();
        API.getGames()
        .then(res =>
            this.setState({ status: res.data })
        )
        .catch(err => console.log(err));
    }

    loadGames = (e) => {
        e.preventDefault();
        API.loadGames()
        .then(res =>
            this.setState({ status: res.data })
        )
        .catch(err => console.log(err));
    }

    loadBets = (e) => {
        e.preventDefault();
        API.loadBets()
        .then(res =>
            this.setState({ status: res.data })
        )
        .catch(err => console.log(err));
    }

    playGames = (e) => {
        e.preventDefault();
        API.playGames()
        .then(res =>
            this.setState({ status: res.data })
        )
        .catch(err => console.log(err));
    }

    payBets = (e) => {
        e.preventDefault();
        API.payBets()
        .then(res =>
            this.setState({ status: res.data })
        )
        .catch(err => console.log(err));
    }

    render(props) {
        return (
            <div className="admin">
                <button type="button" className="btn btn-primary btn-admin" onClick={this.getGames}>Get Games</button>
                <button type="button" className="btn btn-primary btn-admin" onClick={this.loadGames}>Load Games</button>
                <button type="button" className="btn btn-primary btn-admin" onClick={this.loadBets}>Load Bets</button>
                <button type="button" className="btn btn-primary btn-admin" onClick={this.playGames}>Play Games</button>
                <button type="button" className="btn btn-primary btn-admin" onClick={this.payBets}>Pay Bets</button>
            </div>
        );
    }
}

export default Admin;