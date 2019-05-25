import React from 'react';
import './Game.css';

const Game = (props) => {
    return (
        <div class="row">
            <div class="col-sm">{ props.sport }</div>
            <div class="col-sm">{ props.league }</div>
            <div class="col-sm">{ props.gameAt }</div>
            <div class="col-sm">{ props.state }</div>
        </div>
    );
}

export default Game;
