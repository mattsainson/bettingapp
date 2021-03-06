import React from 'react';
import './Bet.css';
import Moment from 'react-moment';

const Bet = (props) => {
    return (
        <div className="row datarow tablerow">
            <div className="col-sm">{ props.gameId }</div>
            <div className="col-sm">{ props.teamId }</div>
            <div className="col-sm">{ props.betType }</div>
            <div className="col-sm">{ props.wager }</div>
            <div className="col-sm">{ props.result }</div>
            <div className="col-sm"><Moment format="hh:mm A">{ props.placedAt }</Moment></div>
        </div>
    );
}

export default Bet;
