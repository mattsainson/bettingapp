import React from 'react';
import './Bet.css';

const Bets = (props) => {
    return (
        <div class="row">
            <div class="col-sm">{ props.userId }</div>
            <div class="col-sm">{ props.gamesId }</div>
            <div class="col-sm">{ props.teamsId }</div>
            <div class="col-sm">{ props.betType }</div>
            <div class="col-sm">{ props.wager }</div>
            <div class="col-sm">{ props.result }</div>
            <div class="col-sm">{ props.placedAt }</div>
        </div>
    );
}

export default Bets;
