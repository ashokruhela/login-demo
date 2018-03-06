import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
// import { GoogleLogin } from 'react-google-login-component';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const options = {
  facebook: 'facebook',
  paypal: 'paypal',
  traditional: 'traditional'
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.onContinueClick = this.onContinueClick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
    this.handleFacebookResponse = this.handleFacebookResponse.bind(this);
    this.handleGoogleResponse = this.handleGoogleResponse.bind(this);
    this.handleGoogleFailure = this.handleGoogleFailure.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.selectedValue = '';
    this.state = {
      username: ''
    }

  }

  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handleGoogleFailure() {

  }

  handleFacebookLogin(e) {
    if(this.state.username === null || this.state.username.length <= 0) {
      alert('Enter username')
      e.preventDefault();
    }
  }

  handleGoogleResponse(){
    this.props.history.push(`/account-overview`);
  }

  handleFacebookResponse() {
    this.props.history.push(`/account-overview?option`);
  }

  handleOptionChange(e) {
    // if(e.target !=null && e.target.value) {
    //   this.setState({selectedValue: e.target.value})
    // }
    
  }

  onContinueClick() {
    // if(this.state.selectedValue) {
    //   if(options.facebook === this.state.selectedValue) {
    //     // implement facebook
    //   } else {
    //     this.props.history.push(`/account-overview?option=${this.state.selectedValue}`);
    //   }
      
    // }
  }
  render() {
    return (
      <div className="home">
        <h3>How would you like to log on</h3>
        <TextField
          onChange={this.handleUsername}
          value={this.state.username}
          hintText="username"
          floatingLabelText="Username"/>
          {/* <RadioButtonGroup onChange={this.handleOptionChange} name="shipSpeed">
            <RadioButton
              value={options.facebook}
              label="Using Facebook"
              style={styles.radioButton}
              
            />
            <RadioButton
              value={options.paypal}
              label="Using PayPal"
              style={styles.radioButton}
              
            />
            <RadioButton
              value={options.traditional}
              label="Traditional"
              style={styles.radioButton}
              
            />
         </RadioButtonGroup> */}
         
         <div style={{margin:'20px'}}>
         <FacebookLogin
            appId="121848738575409"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.handleFacebookLogin}
            callback={this.handleFacebookResponse} />
        </div>
        <div style={{margin:'20px'}}>
          <GoogleLogin
            clientId="306135960012-n2q7oim0cqsniplb01di0m7493t41qp1.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.handleGoogleResponse}
            onFailure={this.handleGoogleFailure}
          />
          </div>

          {/* <div>
            <GoogleLogin socialId="306135960012-n2q7oim0cqsniplb01di0m7493t41qp1.apps.googleusercontent.com"
                        className="google-login"
                        scope="profile"
                        fetchBasicProfile={false}
                        responseHandler={this.handleGoogleResponse}
                        buttonText="Login With Google"/>
        </div> */}
         <div style={{margin:'20px'}}>
        <RaisedButton label="Traditional login" onClick={this.onContinueClick} primary={true} style={{margin:'20px'}} />
        </div>
       
      </div>
    );
  }
}

export default Home;
