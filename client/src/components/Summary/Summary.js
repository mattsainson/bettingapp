import React from 'react';
import './Summary.css';

const Summary = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-6">
                            Balance
                        </div>
                        <div className="col-sm-6">
                            {props.balance}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            Outstanding
                        </div>
                        <div className="col-sm-6">
                            {props.outstanding}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            YTD Wins
                        </div>
                        <div className="col-sm-6">
                            {props.ytdWins}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            YTD Losses
                        </div>
                        <div className="col-sm-6">
                            {props.ytdLosses}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-6">
                            Last Bet
                        </div>
                        <div className="col-sm-6">
                            {props.lastBetAt}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            First Bet
                        </div>
                        <div className="col-sm-6">
                            {props.firstBetAt}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            Biggest Bet
                        </div>
                        <div className="col-sm-6">
                            {props.biggestBet}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            Avg. Bet
                        </div>
                        <div className="col-sm-6">
                            {props.avgBet}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;
