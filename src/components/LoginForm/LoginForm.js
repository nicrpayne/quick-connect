import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { Form, Image, Segment, Message } from "semantic-ui-react";

import "./LoginForm.css";

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

const colors = ["#e967a5", "#1d949c", "#d31459", "#92196c", "#c0165f"];
class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    } 
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    
    return (
      
      <>
        <div className="log-in-page">
          <div className="login-form-container">
            <div className="login-section">
              <div className="login-form">
                <div>
                  <header className="bell-container" as="h2" textAlign="center">
                    <Image
                      className="check-in-bell"
                      src="/Assets/WhiteBell.png"
                    />
                    <h1 style={{ color: "#c0165f" }} className="welcome-text">
                      welcome! check-in
                    </h1>
                  </header>

                  <Form size="large">
                    <Segment stacked>
                      {this.props.store.errors.loginMessage && (
                        <h3 className="alert" role="alert">
                          {this.props.store.errors.loginMessage}
                        </h3>
                      )}
                      <Form.Input
                        fluid
                        placeholder="username"
                        type="text"
                        name="username"
                        required
                        value={this.state.username}
                        onChange={this.handleInputChangeFor("username")}
                      />
                      <Form.Input
                        fluid
                        placeholder="password"
                        type="password"
                        required
                        value={this.state.password}
                        onChange={this.handleInputChangeFor("password")}
                      />

                      <button
                        onClick={(event) => this.login(event)}
                        fluid
                        size="large"
                        type="submit"
                        name="submit"
                        style={buttonStyle}
                        className="ui button"
                        value="Log In"
                      >
                        login
                      </button>
                    </Segment>
                  </Form>

                  <Message style={{ textAlign: "center" }}>
                    new to us?{" "}
                    <a style={{ color: "#e06da3" }} href="#/registration">
                      sign up
                    </a>
                  </Message>
                </div>
              </div>
            </div>
          </div>
          <div className="photo-section">
            <img className="photo" src="/Assets/hotel-image.jpeg"></img>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
