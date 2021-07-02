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

import "./LoginForm.css";

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
      <div className="login-form-container">
        <div className="login-section">
          <div className="login-form">
              <div>
                <Header as="h2" color="blue" textAlign="center">
                  <Image src="/assets/WhiteBell.png" /> Welcome! Log in
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
                      color="blue"
                      fluid
                      size="large"
                      type="submit"
                      name="submit"
                      className="btn"
                      value="Log In"
                    >
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message style={{ textAlign: "center" }}>
                  New to us? <a href="#">Sign Up</a>
                </Message>
              </div> 
              </div>
            
          </div>

          <div className="photo-section">

            <div className="hotel-image">
              {/* <h1>hotel picture</h1> */}
            </div>





          
        </div>
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);

            // <Grid
            //   columns="two"
            //   divided
            //   textAlign="left"
            //   style={{ height: "100vh" }}
            //   verticalAlign="middle"
            // >
            //   <Grid.Column style={{ maxWidth: 450 }}>
            //     <Header as="h2" color="teal" textAlign="center">
            //       <Image src="/assets/WhiteBell.png" /> Welcome! Log in
            //     </Header>
            //     <Form size="large">
            //       <Segment stacked>
            //         {this.props.store.errors.loginMessage && (
            //           <h3 className="alert" role="alert">
            //             {this.props.store.errors.loginMessage}
            //           </h3>
            //         )}
            //         <Form.Input
            //           fluid
            //           icon="user"
            //           iconPosition="left"
            //           placeholder="username"
            //           type="text"
            //           name="username"
            //           required
            //           value={this.state.username}
            //           onChange={this.handleInputChangeFor("username")}
            //         />
            //         <Form.Input
            //           fluid
            //           icon="lock"
            //           iconPosition="left"
            //           placeholder="Password"
            //           type="password"
            //           required
            //           value={this.state.password}
            //           onChange={this.handleInputChangeFor("password")}
            //         />

            //         <Button
            //           onClick={(event) => this.login(event)}
            //           color="teal"
            //           fluid
            //           size="large"
            //           type="submit"
            //           name="submit"
            //           className="btn"
            //           value="Log In"
            //         >
            //           Login
            //         </Button>
            //       </Segment>
            //     </Form>
            //     <Message style={{ textAlign: "center" }}>
            //       New to us? <a href="#">Sign Up</a>
            //     </Message>
            //   </Grid.Column> 

