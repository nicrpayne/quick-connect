import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class NewMessageListItem extends Component {
  


//   handleClick = (guest) => {


  render() {
    // Define "guest" as param passed from NewGuestList
    let message = this.props.message;
    console.log(message)
    return (
      <>
        <div>
          <div key={message.id}>
            <div id={message.id} key={message.id}>
                {message.room_number}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewMessageListItem);
