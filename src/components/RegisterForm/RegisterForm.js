import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { Button, Form, Segment, Select } from "semantic-ui-react";

class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: "REGISTER",
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const imageStyle = {
      background: "url(/Assets/hotelUnsplashTest.jpeg)",
      display: "flex !important",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      flexWrap: "wrap",
      height: "100vh",
      // width: "100vw",
      margin: "0",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "absolute",
      top: "-30px",
      left: "-30px",
      width: "calc(100vw + 60px)",
      height: "calc(100vh + 60px)",
      zIndex: "-1",
      filter: "blur(0px)",
    };

    return (
      <div className="register-ui-grid" style={imageStyle}>
        <form className="formPanel" onSubmit={this.registerUser}>
          <h2>Register User</h2>
          {this.props.store.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.registrationMessage}
            </h3>
          )}
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                required
                onChange={this.handleInputChangeFor("username")}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                required
                onChange={this.handleInputChangeFor("password")}
              />
            </label>
          </div>
          <div>
            <Button
              className="btn"
              type="submit"
              name="submit"
              value="Register"
            ></Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
