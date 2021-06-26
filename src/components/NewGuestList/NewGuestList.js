import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewGuestListItem from "../NewGuestListItem/NewGuestListItem";

class NewGuestList extends Component {
  render() {
    // const newGuestListItem = this.props.newGuestList
    const GuestListItem = this.props.newGuestList.map((guest) => {
      return <NewGuestListItem key={guest.id} newGuest={guest} />;
    });

    console.log(
      "new guest list! newGuestList contains:",
      this.props.newGuestList
    );

    return (
      <div>
        <ul>
          {GuestListItem}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewGuestList);
