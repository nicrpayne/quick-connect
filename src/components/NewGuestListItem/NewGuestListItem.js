import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";


class NewGuestListItem extends Component {
  render() {

    let newGuest = this.props.newGuest;
    // console.log('props newGuest', newGuest)
    // console.log(`hi, I'm ${newGuest.first_name}`)
    return (
      <>
        <div>
        <ul>

          <li key={newGuest.guest_id}> Guest:{newGuest.first_name}, {newGuest.last_name}, 
          <br></br>
          Room Number:{newGuest.room_number}, 
          <br></br>
          Mobile:{newGuest.mobile},
          <br></br>
          email:{newGuest.email},
          <br></br>
          Reservation Number:{newGuest.reservation_id}</li>
        </ul>
        
      </div>
        <div>

        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewGuestListItem);
