import React, { Component } from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
// import { Image } from "semantic-ui-react";


class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
<>
<Header />
<Nav />
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>

      </div>
      
      </>
      
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
