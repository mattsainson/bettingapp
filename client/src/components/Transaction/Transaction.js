import React from 'react';
import './Transaction.css';

const Transaction = (props) => {
    return (
        <div className="row">
            <div className="col-sm">{ props.userId }</div>
            <div className="col-sm">{ props.betId }</div>
            <div className="col-sm">{ props.transactionAt }</div>
            <div className="col-sm">{ props.transactionAmount }</div>
        </div>
    );
}

export default Transaction;
