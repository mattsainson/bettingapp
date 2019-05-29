import React from 'react';
import './Game.css';

const Game = (props) => {
    return (
        <div className="row" id="{ props.key }">
            <div className="col-sm">{ props.key }-{ props.sport }</div>
            <div className="col-sm">{ props.league }</div>
            <div className="col-sm">{ props.gameAt }</div>
            <div className="col-sm">{ props.state }</div>
        </div>
    );
}

export default Game;
