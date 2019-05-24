import React from 'react';
import './Bet.css';



class Bet extends React.Component {

  
    render () {
    return (
        <div className="card" >
            <div className="card-body" >
                <h5 className="card-title">Team 1 vs. Team 2</h5>
                <h6 className="card-subtitle mb-2 text-muted"> Sacramento, CA</h6>
                <p className="card-text">The big rematch.</p>
            </div>
        </div>
    );
}
}
export default Bet;