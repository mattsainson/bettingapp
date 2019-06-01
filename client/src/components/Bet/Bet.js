import React from 'react';
import './Bet.css';
import Moment from 'react-moment';

const newBet = (props) => {
    return (
        <div className="row tablerow" id="{props.key}">
            <div className="col-sm">{ props.userId }</div>
            <div className="col-sm">{ props.gameId }</div>
            <div className="col-sm">{ props.teamId }</div>
            <div className="col-sm">{ props.betType }</div>
            <div className="col-sm">{ props.wager }</div>
            <div className="col-sm">{ props.result }</div>
            <div className="col-sm"><Moment format="hh:mm A">{ props.placedAt }</Moment></div>
        </div>
    );
}

export default newBet;
