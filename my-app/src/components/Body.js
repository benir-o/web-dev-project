import React from 'react';

const Body = () => {
    return (
      <><div class="dashboard">
        <div class="card">
          <h2>Balance</h2>
          <h3>50</h3>
          <form action="https://httpbin.org/get" method="GET">
            <span id="userId">
              <input
                type="text"
                name="userId"
                placeholder="Enter User ID"
                required />
            </span>
            <button type="submit" id="checkBalance">Check Balance</button>
          </form>
        </div>
        <div class="card">
          <h2>Buy Tokens</h2>

          <form action="payment_options.html">
            <input
              id="userId"
              type="text"
              name="userId"
              placeholder="Enter User ID"
              required />

            <input
              id="kenyanAmount"
              type="number"
              name="amount"
              placeholder="Payment in Ksh"
              required />

            <button id="buyTokens">Buy Tokens</button>
          </form>
        </div>

        <div class="card">
          <h2>Payment History</h2>
          <form action="payment_history.html" method="">
            <span id="userId">
              <input
                type="text"
                name="userId"
                placeholder="Enter User ID"
                required />
            </span>

            <button type="submit" id="viewHistory">View History</button>
          </form>
        </div>
        <div class="card">
          <form action="" method="">
            <h2>Token Usage</h2>
            <input type="text" placeholder="Enter User ID" required />
            <button id="ViewUsage">View Usage</button>
          </form>
        </div>
        <div class="card">
          <h2>Top-Up Methods</h2>
          <select>
            <option>Select Method</option>
            <option>M-Pesa</option>
            <option>Credit Card</option>
            <option>PayPal</option>
          </select>
          <button id="setasDefault">Set as Default</button>
        </div>
        <div class="card">
          <form action="">
            <h2>Token Transfer</h2>
            <input
              id="transfer-to-id"
              type="text"
              placeholder="Recipient User ID"
              required />
            <input id="transfer-amount" type="number" placeholder="Amount" />
            <button id="sendTokens">Send Tokens</button>
          </form>
        </div>
      </div><script src='test.js'></script></>
    );
};

export default Body;