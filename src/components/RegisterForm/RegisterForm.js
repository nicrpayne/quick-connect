import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

const buttonStyle = {
  backgroundColor: "#c0165s",
  color: "white",
  position: "relative",
  display: "flex !important",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  flexWrap: "wrap",
  marginLeft: "5.75rem",
};
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
      margin: "0",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // position: "absolute",
      // top: "-30px",
      // left: "-30px",
      // zIndex: "-1",
    };

    return (
      <div className="register-ui-grid" style={imageStyle}>
        <form className="formPanel" onSubmit={this.registerUser}>
          <h2>Register Here</h2>
          {this.props.store.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.registrationMessage}
            </h3>
          )}

          <div>
            <label htmlFor="username">
              Username:
              <input
                className="register-input"
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
                className="register-input"
                type="password"
                name="password"
                value={this.state.password}
                required
                onChange={this.handleInputChangeFor("password")}
              />
            </label>
          </div>
          <div>
            <input
              // className="register-input"
              type="submit"
              name="submit"
              value="Register"
              fluid
              size="large"
              type="submit"
              name="submit"
              style={buttonStyle}
              className="ui button"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
