import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewGuestListItem from "../NewGuestListItem/NewGuestListItem";


class NewGuestList extends Component {


  render() {
    // const newGuestListItem = this.props.newGuestList
    const GuestListItem = this.props.newGuestList.map(guest => {
            return <NewGuestListItem key={guest.id} newGuest={guest}/>
            
    });
//     const NewHotelItem = this.props.newHotelList.map(newHotel => {
//       return <NewHotelListItem key={newHotel.id} newHotel={newHotel}/>
// });

    console.log('new guest list! newGuestList contains:', this.props.newGuestList);
    // {JSON.stringify(this.props)}
    return (
      <div> 
        <ul>
            {GuestListItem}
            {/* {NewHotelItem} */}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewGuestList);
