import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./Header.css"

function Header() {

  return (

    <div className="header-container" >
     
      <div className="ui top inverted attached menu">
        {/* <span className="item link grey" >Log Out</span> */}
        <img
          src="/Assets/whiteLogoNoBackground.png"
          className="ui medium image"
        ></img>
      </div>
 
    </div>

  );
}

export default connect(mapStoreToProps)(Header);

// style={{height: '100vh'}}
