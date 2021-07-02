import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import {
  Button,
  Form,
  Grid,
  Image,
  Segment,
  Message,
  Divider
} from "semantic-ui-react";
import "./Header.css";
import LogOutButton from "../LogOutButton/LogOutButton";


function Header() {

  return (

    <div className="header-container" >
     
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
        <LogOutButton style={{float: 'right'}}className="item link grey"/>
        
        
        </div>
      </div>
 
    </div>

  );
}

export default connect(mapStoreToProps)(Header);

// style={{height: '100vh'}}