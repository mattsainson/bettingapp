import React from 'react';
import './Transactions.css';
import Transaction from '../Transaction/Transaction'
const Transactions = (props) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-sm">User</div>
        <div class="col-sm">Bet</div>
        <div class="col-sm">Date/Time</div>
        <div class="col-sm">Amount</div>
      </div>
      {props.transactions.map(t => (
      <Transaction
        userId={t.userId}
        betId={t.betId}
        transactionAt={t.transactionAt}
        transactionAmount={t.transactionAmount}
      />
      ))}
    </div>
  );
}

export default Transactions;
