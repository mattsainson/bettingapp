import React from 'react';
import './Team.css';

const Team = (props) => {
    return (
        <div className="row">
            <div className="col-sm">{ props.gameId }</div>
            <div className="col-sm">{ props.name }</div>
            <div className="col-sm">{ props.home }</div>
            <div className="col-sm">{ props.spread }</div>
            <div className="col-sm">{ props.spreadPayout }</div>
            <div className="col-sm">{ props.moneylinePayout }</div>
            <div className="col-sm">{ props.score }</div>
        </div>
    );
}

export default Team;
