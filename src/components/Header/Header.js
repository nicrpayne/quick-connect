import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import UserPageName from "../UserPage/UserPage";
import "./Header.css";
import LogOutButton from "../LogOutButton/LogOutButton";

function Header() {
  return (
    <div className="header-container">
      <div className="ui top inverted attached menu">
        <img
          src="/Assets/whiteLogoNoBackground.png"
          className="ui medium image"
          href="#/home"
        ></img>
        {/* <div className="ui-vertical-divider-container">
        <div className="ui vertical divider"></div>
        </div> */}
        <div className="container-item-link">
          {/* <span style={{float: 'right'}}className="item link grey" >Log Out</span> */}
          {/* style={{marginRight: "1rem;"}} */}
          {/* <div><h1 id="welcome">{this.props.store.user.username}</h1></div> */}

          <LogOutButton className="item link grey" />
        </div>
      </div>
      <div className="username-styling">
        <UserPageName />
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(Header);
