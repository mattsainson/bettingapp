import React from 'react';
import './Game.css';
import Moment from 'react-moment';

const Game = (props) => {
    return (
        <div className="row tablerow" id="{ props.key }">
            
            <div className="col-2">
            <div className="row"><Moment format="MM/DD/YYYY">{props.gameAt}</Moment></div>
            <div className="row"><Moment format="hh:mm A">{props.gameAt}</Moment></div>
            <div className="row">{props.state}</div>
            </div>
           {console.log(props)}
            <div className="col-10">
                <div className="row">
                    <div className="col-6">{props.team[0].name}</div>
                    <div className="col-2">{props.team[0].spread}</div>
                    <div className="col-2">{props.team[0].spreadPayout}</div>
                    <div className="col-2">{props.team[0].moneylinePayout}</div>
                </div>
                <div className="row">
                    <div className="col-6">{props.team[1].name}</div>
                    <div className="col-2">{props.team[1].spread}</div>
                    <div className="col-2">{props.team[1].spreadPayout}</div>
                    <div className="col-2">{props.team[1].moneylinePayout}</div>
                </div> 
            </div>
            
            
        </div>
    );
}

export default Game;
