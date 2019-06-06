import React from 'react';
import './Transactions.css';
import Transaction from '../Transaction/Transaction'



const Transactions = (props) => {

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">User</div>
        <div className="col-sm">Bet</div>
        <div className="col-sm">Date/Time</div>
        <div className="col-sm">Amount</div>
      </div>
      {/* {props.transactions.map(t => (
      <Transaction
        userId={t.userId}
        betId={t.betId}
        transactionAt={t.transactionAt}
        transactionAmount={t.transactionAmount}
      />
      ))} */}
    </div>
  );
}

export default Transactions;
