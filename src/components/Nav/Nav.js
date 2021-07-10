import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./Nav.css";

const Nav = (props) => {
  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };

  if (props.store.user.id != null) {
    loginLinkData.path = "/home";
    loginLinkData.text = "Home";
  }

  return (
    <>
      <div className="inverted-vertical-container">
        <div className="ui inverted vertical menu">
          <div>
            <div>
              <Link className="item" to={loginLinkData.path}>
                {loginLinkData.text}
              </Link>
              {props.store.user.id && (
                <>
                  <Link className="item" to="/newguest">
                    Add a Guest
                  </Link>
                  <Link className="item" to="/newhotel">
                    Add a Hotel
                  </Link>
                  <Link className="item" to="/newtemplate">
                    Add a Template
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStoreToProps)(Nav);