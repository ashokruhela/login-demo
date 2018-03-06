import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class AccountOverview extends Component {
  constructor(props) {
    super(props);
    console.log(queryString.parse(this.props.location.search))
  }
  render() {
    const queryParams = queryString.parse(this.props.location.search);
    let source = 'Lloyds login service';
    let mandate = 'Full IB'
    if(queryParams && queryParams.source) {
      source = queryParams.source;
      if(source === 'google') {
        mandate = "Full IB no payment"
      } else if(source === 'facebook') {
        mandate = "lite"
      }
    }
    return (
      <div className="account-overview">
        <h3>Account overview</h3>
        <p><span>Account Balance : </span> <span><b>£ 1280</b></span></p>
        <p>Logged in via {source}. The customer mandate is <b> {mandate}</b> </p>
        <div>
        <Link to="/">Back to Login page</Link>
        </div>
      </div>
    );
  }
}

export default AccountOverview;
