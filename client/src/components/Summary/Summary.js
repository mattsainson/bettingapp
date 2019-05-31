import React from 'react';
import './Summary.css';

const Summary = (props) => {
    return (
        <div className="container">
            <h1>Summary</h1>
            <div className="row">

                <div className="col-sm">
                
                    <div className="row">
                        <div className="col-sm">
                            Balance
                        </div>
                        <div className="col-sm">
                            {props.balance}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm">
                            Outstanding
                        </div>
                        <div className="col-sm">
                            {props.outstanding}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm">
                            YTD Wins
                        </div>
                        <div className="col-sm">
                            {props.ytdWins}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm">
                            YTD Losses
                        </div>
                        <div className="col-sm">
                            {props.ytdLosses}
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    
                    <div className="row">
                        <div className="col-sm">
                            Last Bet
                        </div>
                        <div className="col-sm">
                            {props.lastBetAt}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm">
                            First Bet
                        </div>
                        <div className="col-sm">
                            {props.firstBetAt}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm">
                            Biggest Bet
                        </div>
                        <div className="col-sm">
                            {props.biggestBet}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm">
                            Avg. Bet
                        </div>
                        <div className="col-sm">
                            {props.avgBet}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Summary;