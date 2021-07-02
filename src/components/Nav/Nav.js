import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
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
    <div className="ui inverted vertical menu"     
     >
      <div >
        {/* <a href="/home">
        </a> */}
        {/* <Link className="item" to="/home">Home</Link> */}
        <div>
          <Link className="item"to={loginLinkData.path}>
            {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
            {loginLinkData.text}
          </Link>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {props.store.user.id && (
            <>
              <Link className="item" to="/newtemplate">
                Add a Template
              </Link>
              <Link className="item" to="/newmessage">
                Send a Message
              </Link>
              <Link className="item" to="/newguest">
                Add a Guest
              </Link>
              <Link className="item" to="/newhotel">
                Add a Company
              </Link>
              
            </>
          )}
          {/* Always show this link since the about page is not protected */}

        </div>
      </div>
      </div>
      <LogOutButton className="item link grey" />
    </>
  );
};

export default connect(mapStoreToProps)(Nav);
{/* <div class="ui inverted vertical menu"><a class="active item">Home</a><a class="item">Messages</a><a class="item">Friends</a></div> */}