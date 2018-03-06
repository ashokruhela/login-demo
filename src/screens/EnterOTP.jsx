import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EnterOTP extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOTPClick = this.handleOTPClick.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.state = {
            oneTimePassword: ''
          }
    }
    handleSubmit() {
      if(this.state.oneTimePassword === "1234") {
        this.props.history.push(`/account-overview`);
      } else {
        alert('One time password is not correct.')
      }
    }
    handleOTPClick() {
        alert('One time password sent to registered mobile')
    }
    handleTextChange(e) {
      this.setState({
        oneTimePassword: e.target.value
      })
      
    }
  render() {
    return (
      <div className='login-lloyds'>
      <p>Enter the one time password sent to you mobile</p>
        <TextField
          onChange={this.handleTextChange}
          value={this.state.oneTimePassword}
          hintText="OTP"
          floatingLabelText="One time password"/>
          <div>
            <RaisedButton label="Submit" onClick={this.handleSubmit} primary={true} style={{margin:'20px'}} />
          </div>
          <div>
          <Link to="/login">Back to Login</Link>
          </div>

          <div>
          <Link to="/">Back to Home</Link>
          </div>
        
      </div>
    );
  }
}

export default EnterOTP;
