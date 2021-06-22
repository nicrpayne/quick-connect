import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import HotelListItem from "../HotelListItem/HotelListItem";

class HotelList extends Component {


  render() {
    // {JSON.stringify(this.props.hotelList)}
    
    const HotelItem = this.props.store.allHotelsReducer.map((hotel, index) => {
            return <HotelListItem key={index} hotel={hotel}/>
    });
    // console.log('hotelList', this.props.hotelList);
    return (
      
      <div> 
        <ul>
        {/* {JSON.stringify(this.props.store.allHotelsReducer)} */}
        {/* {JSON.stringify(this.props.hotelList)} */}
            {HotelItem}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HotelList);
