import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";


class NewHotelListItem extends Component {
  render() {

    let hotel = this.props.newHotel;
    console.log('props hotel', hotel)
    return (
      <>
        <div>
        <ul>

          <li key={hotel.company_id}> Hotel Name:{hotel.company_name}, 
          <br></br>
          Hotel City:{hotel.company_city},
          <br></br> 
          Hotel Timezone:{hotel.company_timezone}</li>
        </ul>
      </div>
        <div>

        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewHotelListItem);
