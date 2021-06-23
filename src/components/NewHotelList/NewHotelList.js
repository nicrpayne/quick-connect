// import { json } from "express";
import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewHotelListItem from "../NewHotelListItem/NewHotelListItem";

class NewHotelList extends Component {


  render() {
 
    const newHotelItem = this.props.newHotelList.map((newHotel, index) => {
            return <NewHotelListItem key={index} newHotel={newHotel}/>
    });
    
    return (
      <div> 
        <ul>
            {newHotelItem}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewHotelList);
