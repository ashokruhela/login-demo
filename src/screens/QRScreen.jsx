import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import qr from '../qr_code.png';

class ScanQR extends Component {
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
        this.props.history.push(`/account-overview`);
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
      <p>This option to login when a customer has the app and would like to login in desktop</p>
      <p>Scan the QR code from your mobile app</p>
      <p>
      <img src={qr} className="qr-code" alt="qr code" />
      </p>
        {/* <TextField
          onChange={this.handleTextChange}
          value={this.state.oneTimePassword}
          hintText="OTP"
          floatingLabelText="One time password"/> */}
          <div>
            <RaisedButton label="Submit" onClick={this.handleSubmit} primary={true} style={{marginTop:'20px', marginBottom:'20px'}} />
          </div>
          <div>
          <Link to="/">Back to Login</Link>
          </div>
        
      </div>
    );
  }
}

export default ScanQR;
