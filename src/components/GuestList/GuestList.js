import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GuestListItem from "../GuestListItem/GuestListItem"

class GuestList extends Component {


  render() {
      
    const GuestItem = this.props.guestList.map((guest, index) => {
            return <GuestListItem key={index} guest={guest}/>
    });
    console.log('guestList', this.props.guestList);
    return (
      <div> 
        <ul>
            {GuestItem}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GuestList);
