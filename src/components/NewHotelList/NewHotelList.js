import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewHotelListItem from "../NewHotelListItem/NewHotelListItem";

class NewHotelList extends Component {
  render() {
    const NewHotelItem = this.props.newHotelList.map((newHotel) => {
      return <NewHotelListItem key={newHotel.id} newHotel={newHotel} />;
    });

    return (
      <div>
        <ul>{NewHotelItem}</ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewHotelList);
