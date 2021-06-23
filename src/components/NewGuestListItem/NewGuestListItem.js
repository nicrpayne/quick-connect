import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";


class NewGuestListItem extends Component {
  render() {

    let newGuest = this.props.newGuest;
    // console.log('props newGuest', newGuest)
    return (
      <>
        <div>
        <ul>

          <li key={newGuest.id}> {newGuest.first_name}, {newGuest.last_name}</li>
        </ul>
      </div>
        <div>

        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewGuestListItem);
