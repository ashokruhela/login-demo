import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountOverview extends Component {
  render() {
    return (
      <div className="account-overview">
        <h3>Account overview</h3>
        <p><span>Account Balance : </span> <span><b>£ 1280</b></span></p>
        <div>
        <Link to="/">Back to Login page</Link>
        </div>
      </div>
    );
  }
}

export default AccountOverview;
