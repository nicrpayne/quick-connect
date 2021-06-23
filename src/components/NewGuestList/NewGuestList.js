// import { json } from "express";
import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewGuestListItem from "../NewGuestListItem/NewGuestListItem";

class NewGuestList extends Component {


  render() {
    // const newGuestListItem = this.props.newGuestList
    const newGuestListItem = this.props.newGuestList.map((newGuest, index) => {
            return <NewGuestListItem key={index} newGuest={newGuest}/>
    });
    console.log('newGuestList contains:', this.props.newGuestList);
    // {JSON.stringify(this.props)}
    return (
      <div> 
        <ul>
            {newGuestListItem}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewGuestList);
