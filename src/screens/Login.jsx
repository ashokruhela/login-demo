import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 16,
    },
  };

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleQRClick = this.handleQRClick.bind(this)
        this.handleOTPClick = this.handleOTPClick.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.state = {
            username: '',
            checked:false
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
         
          <div>
            <RaisedButton label="Use QR code" onClick={this.handleQRClick} primary={true} style={{margin:'20px'}} />
          </div>
          <div>
              <p>How would you like to receive OTP</p>
          <div style={styles.block}>
            <Checkbox
            checked="true"
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="Whatsapp"
            style={styles.checkbox}
            />
            <Checkbox
            label="in email"
            style={styles.checkbox}
            />
            <Checkbox
            label="Text"
            style={styles.checkbox}
            />
            </div>
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
