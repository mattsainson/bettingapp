import React from 'react';
import './Summary.css';

const Summary = (props) => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm-6">
                            Balance
                        </div>
                        <div class="col-sm-6">
                            {props.balance}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            Outstanding
                        </div>
                        <div class="col-sm-6">
                            {props.outstanding}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            YTD Wins
                        </div>
                        <div class="col-sm-6">
                            {props.ytdWins}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            YTD Losses
                        </div>
                        <div class="col-sm-6">
                            {props.ytdLosses}
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm-6">
                            Last Bet
                        </div>
                        <div class="col-sm-6">
                            {props.lastBetAt}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            First Bet
                        </div>
                        <div class="col-sm-6">
                            {props.firstBetAt}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            Biggest Bet
                        </div>
                        <div class="col-sm-6">
                            {props.biggestBet}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            Avg. Bet
                        </div>
                        <div class="col-sm-6">
                            {props.avgBet}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;
