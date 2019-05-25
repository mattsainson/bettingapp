import React from 'react';
import './Transaction.css';

const Transaction = (props) => {
    return (
        <div class="row">
            <div class="col-sm">{ props.userId }</div>
            <div class="col-sm">{ props.betId }</div>
            <div class="col-sm">{ props.transactionAt }</div>
            <div class="col-sm">{ props.transactionAmount }</div>
        </div>
    );
}

export default Transaction;
