import React from 'react';
import './Team.css';

const Team = (props) => {
    return (
        <div class="row">
            <div class="col-sm">{ props.gameId }</div>
            <div class="col-sm">{ props.name }</div>
            <div class="col-sm">{ props.home }</div>
            <div class="col-sm">{ props.spread }</div>
            <div class="col-sm">{ props.spreadPayout }</div>
            <div class="col-sm">{ props.moneylinePayout }</div>
            <div class="col-sm">{ props.score }</div>
        </div>
    );
}

export default Team;
