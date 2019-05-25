import React from 'react';
import './BettingForm.css';

const BettingForm = (props) => {
    return (
        <form>
            <div className="form-group">
                <label for="teamSelect">Team</label>
                <select className="form-control" id="teamSelect">
                    <option>Team 1</option>
                    <option>Team 2</option>
                </select>
            </div>
            <div className="form-group">
                <label for="betTypeSelect">Bet Type</label>
                <select className="form-control" id="betTypeSelect">
                    <option>Spread</option>
                    <option>Moneyline</option>
                </select>
            </div>
            <div className="form-group">
                <label for="wager">Email address</label>
                <input type="text" className="form-control" id="wager" placeholder="100" />
            </div>
        </form>
    );
}

export default BettingForm;
