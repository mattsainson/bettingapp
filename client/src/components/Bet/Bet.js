import React from 'react';
import './Bet.css';

const Bet = (props) => {
    return (
        <div className="row" id="{props.key}">
            <div className="col-sm">{ props.userId }</div>
            <div className="col-sm">{ props.gamesId }</div>
            <div className="col-sm">{ props.teamsId }</div>
            <div className="col-sm">{ props.betType }</div>
            <div className="col-sm">{ props.wager }</div>
            <div className="col-sm">{ props.result }</div>
            <div className="col-sm">{ props.placedAt }</div>
        </div>
    );
}

export default Bet;
