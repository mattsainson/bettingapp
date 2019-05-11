import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid myHeader">
                <div className="container">
                    <h1 className="display-4">Place your bets!</h1>
                    <p className="lead">Pick a game and place a bet.</p>
                </div>
            </div>
        );
    }
}

export default Header;