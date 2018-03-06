import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './lbg_logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Home from './screens/Home.jsx';
import ChooseLogin from './screens/ChooseLogin.jsx'
import AccountOverview from './screens/AccountOverview.jsx';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App">
        <div>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Internet Banking</h1>
          </header>
          <Router>
            <div>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/choose-auth" component={ChooseLogin}></Route>
              <Route exact path="/account-overview" component={AccountOverview}></Route>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
