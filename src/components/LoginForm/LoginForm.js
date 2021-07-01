import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Message,
} from "semantic-ui-react";

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
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/assets/LogoCropped.png" /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment stacked>
              {this.props.store.errors.loginMessage && (
                <h3 className="alert" role="alert">
                  {this.props.store.errors.loginMessage}
                </h3>
              )}
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="username"
                type="text"
                name="username"
                required
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                required
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
              />

              <Button
              onClick={(event) => this.login(event)}
                color="teal"
                fluid
                size="large"
                type="submit"
                name="submit"
                className="btn"
                value="Log In"
              >
                Login
              </Button>

              {/* <div>
                <label htmlFor="username">
                  Username:
                  <input
                    type="text"
                    name="username"
                    required
                    value={this.state.username}
                    onChange={this.handleInputChangeFor("username")}
                  />
                </label>
              </div> */}
              {/* <div>
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleInputChangeFor("password")}
                  />
                </label>
              </div> */}
              {/* <div>
                <input
                  className="btn"
                  type="submit"
                  name="submit"
                  value="Log In"
                />
              </div> */}
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
