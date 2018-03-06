import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class ChooseLogin extends Component {
  render() {
    return (
      <div>
        <p>choose login</p> 
        <Link to="/account-overview">Account Overview</Link>
      </div>
    );
  }
}

export default ChooseLogin;
