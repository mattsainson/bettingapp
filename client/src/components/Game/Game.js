import React from 'react';
import './Game.css';
import Moment from 'react-moment';

const newGames = (props) => {
    return (
        <div className="row tablerow" id="{ props.key }">
            
            <div className="col-4">
            <div className="row"><Moment format="MM/DD/YYYY">{props.gameAt}</Moment></div>
            <div className="row"><Moment format="hh:mm A">{props.gameAt}</Moment></div>
            <div className="row">{props.state}</div>
            </div>
           {console.log(props)}
            <div className="col-8">
                <div className="row">
                    {/* <div className="col-3">{props.team0.team0.name}</div> */}
                    {/* <div className="col-3">{props.team0.spread}</div> */}
                    {/* <div className="col-3">{props.team0.spreadPayout}</div> */}
                    {/* <div className="col-3">{props.team0.moneylinePayout}</div> */}
                </div>
                {/* <div className="row">
                    <div className="col-3">{props.team.name}</div>
                    <div className="col-3">{props.team.spread}</div>
                    <div className="col-3">{props.team.spreadPayout}</div>
                    <div className="col-3">{props.team.moneylinePayout}</div>
                </div> */}
            </div>
            
            
        </div>
    );
}

export default newGames;
