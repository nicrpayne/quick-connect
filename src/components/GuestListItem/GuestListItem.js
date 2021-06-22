import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";


class GuestListItem extends Component {
  render() {

    let guest = this.props.guest;
    // console.log(this.props.guest);
    // {JSON.stringify(this.props.guestItem)}
    return (
      <>
        <div>
        <ul>
          <li key={guest.id}> {guest.id}, {guest.first_name}, {guest.last_name}</li>
        </ul>
      </div>
        <div>

        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(GuestListItem);
