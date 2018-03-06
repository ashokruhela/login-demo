import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleQRClick = this.handleQRClick.bind(this)
        this.handleOTPClick = this.handleOTPClick.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.state = {
            username: ''
          }
    }

    handleTextChange(e) {
        this.setState({
            username: e.target.value
          })
        
    }
    handleQRClick() {
        this.props.history.push(`/scanqr`);

    }
    handleOTPClick() {
        alert('One time password sent to registered mobile. Click okay to proceed')
            this.props.history.push(`/enterotp`);
        
    }
  render() {
    return (
      <div className='login-lloyds'>
        {/* <TextField
          onChange={this.handleTextChange}
          value={this.state.username}
          hintText="username"
          floatingLabelText="Enter Username"/> */}
          <div>
            <RaisedButton label="Use QR code" onClick={this.handleQRClick} primary={true} style={{margin:'20px'}} />
          </div>
          <div>
            <RaisedButton label="Use OTP" onClick={this.handleOTPClick} primary={true} style={{margin:'20px'}} />
          </div>
          {/* <div>
          <Link to="/">Forgotten your login detils</Link>
          </div> */}
          <div>
          <Link to="/">Back to Login</Link>
          </div>
        
      </div>
    );
  }
}

export default Login;
