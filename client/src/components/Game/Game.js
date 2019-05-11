import React from 'react';
import './Game.css';

const Game = (props) => {
    return (
        <div className="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">{props.team1} vs. {props.team2}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.location} {props.playAt}</h6>
                <p className="card-text">The big rematch.</p>
                <h2>{props.sport}</h2>
                <h2>{props.league}</h2>
            </div>
        </div>
    );
}

export default Game;