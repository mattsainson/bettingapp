import React from 'react';
import './Game.css';
import Moment from 'react-moment';

const Game = (props) => {
    return (
        <div className="row" id="{ props.key }">
            <div className="col-3">{ props.key }-{ props.sport }</div>
            <div className="col-3">{ props.league }</div>
            <div className="col-3"><Moment format="hh:mm A">{ props.gameAt }</Moment></div>
            <div className="col-3">{ props.state }</div>
        </div>
    );
}

export default Game;
