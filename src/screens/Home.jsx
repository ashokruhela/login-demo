import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Login from './Login.jsx';
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
    this.handleFacebookFailure = this.handleFacebookFailure.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.selectedValue = '';
    this.state = {
      username: '',
      errorText: 'username is required'
    }

  }
  handleFacebookFailure(e) {
    e.preventDefault();
  }

  handleUsername(e){
    this.setState({
      username: e.target.value,
      errorText: e.target.value && e.target.value.length <= 0 ? 'Username is required' : ''
    })
    
  }

  handleGoogleFailure() {

  }

  handleFacebookLogin(e) {
    if(this.state.username === null || this.state.username.length <= 0) {
      e.preventDefault();
      alert('Enter username')
      
    }
  }

  handleGoogleResponse(){
    this.props.history.push(`/account-overview?source=google`);
  }

  handleFacebookResponse() {
    this.props.history.push(`/account-overview?source=facebook`);
  }

  handleOptionChange(e) {
    // if(e.target !=null && e.target.value) {
    //   this.setState({selectedValue: e.target.value})
    // }
    
  }

  onContinueClick(e) {
    if(this.state.username) {
      this.props.history.push(`/login`);
      
    } else {
      alert('Enter username to procced')
    }
  }
  render() {
    return (
      <div className="home">
        <h3>How would you like to log on</h3>
        <TextField
          onChange={this.handleUsername}
          value={this.state.username}
          hintText="username"
          errorText = {this.state.errorText}
          floatingLabelText="Enter your username"/>
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
         
         <div style={{marginTop:'30px'}}>
         <FacebookLogin
            cssClass="loginBtn loginBtn--facebook"
            appId="121848738575409"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.handleFacebookLogin}
            onFailure = {this.handleFacebookFailure}
            callback={this.handleFacebookResponse} />
        </div>
        <div style={{marginTop:'20px'}}>
          <GoogleLogin
            className="loginBtn loginBtn--google"
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
         <div style={{marginTop:'20px'}}>
        <RaisedButton label="Lloyds Login service" onClick={this.onContinueClick} primary={true}/>
        </div>
        <div style={{marginTop:'30px' }} className = "register-link" >
          <Link to='/'>Forgotten your userid ></Link>
        </div>
        <div style={{marginTop:'30px' }} className = "register-link" >
          <Link to='/'>Register to Internet banking ></Link>
        </div>
       
      </div>
    );
  }
}

export default Home;
