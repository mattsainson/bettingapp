import React from 'react';
import './Summary.css';
import { Pie } from 'react-chartjs-2';


const Summary = (props) => {
    return (
        <div className="container sumContainer">
            <div className="row headerrow">Summary</div>
            <div className="row">
                <div className="col-sm">
                    <div className="row datarow tablerow">
                        <div className="col-6">
                            Balance
                        </div>
                        <div className="col-6">
                            {props.balance}
                        </div>
                    </div>
                    <div className="row datarow tablerow">
                        <div className="col-6">
                            Outstanding
                        </div>
                        <div className="col-6">
                            {props.outstanding}
                        </div>
                    </div>
                    <div className="row datarow tablerow">
                        <div className="col-6">
                            YTD Wins
                        </div>
                        <div className="col-6">
                            {props.ytdWins}
                        </div>
                    </div>
                    <div className="row datarow tablerow">
                        <div className="col-6">
                            YTD Losses
                        </div>
                        <div className="col-6">
                            {props.ytdLosses}
                        </div>
                    </div>
                    <div className="row datarow tablerow">
                        <div className="col-6">
                            Last Bet
                        </div>
                        <div className="col-6">
                            {props.lastBet}
                        </div>
                    </div>

                    <div className="row datarow tablerow">
                        <div className="col-6">
                            First Bet
                        </div>
                        <div className="col-6">
                            {props.firstBet}
                        </div>
                    </div>

                    <div className="row datarow tablerow">
                        <div className="col-6">
                            Biggest Bet
                        </div>
                        <div className="col-6">
                            {props.biggestBet}
                        </div>
                    </div>

                    <div className="row datarow tablerow">
                        <div className="col-6">
                            Avg. Bet
                        </div>
                        <div className="col-6">
                            {props.avgBet}
                        </div>
                    </div>
                </div>
            </div>
            <Pie
            data={props.state}
            width={100}
            height={50}
            options={props.options}
            legend={props.legend}
        />
        </div>
    );
}

export default Summary;