import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LoginForm from "../LoginForm/LoginForm";
import { Grid, Divider, Image } from "semantic-ui-react";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <Divider hidden />
        <div className="hotelImageContainer">
        <Image
          className="ui massive right floated image"
          src="/Assets/HotelSketch.png"
          fluid
        />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
