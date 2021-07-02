import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


import Footer from "../Footer/Footer";
import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import NewTemplate from "../NewTemplate/NewTemplate";
import NewMessage from "../NewMessage/NewMessage";
import NewGuest from "../NewGuest/NewGuest";
import NewHotel from "../NewHotel/NewHotel";

import './App.css';

import "semantic-ui-css/semantic.min.css"

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <>
        <Router>
          <div>

            {/* <Nav /> */}
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Visiting localhost:3000/about will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/about"
                component={AboutPage}
              />

              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute
                // logged in shows UserPage else shows LoginPage
                exact
                path="/user"
                component={UserPage}
              />

              <ProtectedRoute
                // logged in shows New Template Page else shows LoginPage
                exact
                path="/newtemplate"
                component={NewTemplate}
              />

              <ProtectedRoute
                // logged in shows Template List else shows LoginPage
                exact
                path="/newmessage"
                component={NewMessage}
              />

              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/newguest"
                component={NewGuest}
              />
              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/newhotel"
                component={NewHotel}
              />

              {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LoginPage at /login
                exact
                path="/login"
                component={LoginPage}
                authRedirect="/user"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows RegisterPage at "/registration"
                exact
                path="/registration"
                component={RegisterPage}
                authRedirect="/user"
              />
              <ProtectedRoute
                // with authRedirect:
                // - if logged in, redirects to "/user"
                // - else shows LandingPage at "/home"
                exact
                path="/home"
                component={LandingPage}
                authRedirect="/user"
              />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            {/* <GetGreeting /> */}
            <Footer />
          </div>
        </Router>
        <div></div>
      </>
    );
  }
}

export default connect()(App);
