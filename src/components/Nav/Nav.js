import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
// import {Menu} from "semantic-ui-react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./Nav.css";

const Nav = (props) => {
  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };

  if (props.store.user.id != null) {
    loginLinkData.path = "/user";
    loginLinkData.text = "Home";
  }

  return (
    <>
      <div >
        <a href="/home">
          {/* <img src="/Assets/ColorNoBackground.png" /> */}
        </a>
        <Link to="/home"></Link>
        <div>
          <Link to={loginLinkData.path}>
            {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
            {loginLinkData.text}
          </Link>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {props.store.user.id && (
            <>
              <Link className="nav-link" to="/newtemplate">
                New Template
              </Link>
              <Link className="nav-link" to="/newmessage">
                New Message
              </Link>
              <Link className="nav-link" to="/newguest">
                Add a Guest
              </Link>
              <Link className="nav-link" to="/newhotel">
                Add a Company
              </Link>
              <LogOutButton className="nav-link" />
            </>
          )}
          {/* Always show this link since the about page is not protected */}
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </div>
      {/* </NavLayout> */}
    </>
  );
};

export default connect(mapStoreToProps)(Nav);
{/* <div class="ui inverted vertical menu"><a class="active item">Home</a><a class="item">Messages</a><a class="item">Friends</a></div> */}