import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


import RegisterForm from '../RegisterForm/RegisterForm';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div>
        <RegisterForm />
        <center>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
