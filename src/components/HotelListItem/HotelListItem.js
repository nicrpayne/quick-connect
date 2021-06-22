import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";


class HotelListItem extends Component {
  render() {

    let hotel = this.props.hotel;
    // console.log('hotel:',this.props.hotel);
    // {JSON.stringify(this.props.guestItem)}
    return (
      <>
        <div>
        <ul>
          <li key={hotel.id}> {hotel.id}, {hotel.company_name}, {hotel.company_city}, {hotel.company_timezone}</li>
        </ul>
      </div>
        <div>

        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(HotelListItem);
