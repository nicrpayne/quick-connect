import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// import GetGreeting from "../GetGreeting/GetGreeting";
// import moment from "moment";

class FillMessage extends Component {
  //   state = {
  //     newMessage: {
  //       template: ''
  //     }
  //   }

  render() {
    // console.log("in FillMsg", );


    return (
    <div>
        {/* {greeting}, {this.props.variables.guest_id} */}
    </div>
    );

  

    // let newMessage = this.state.newMessage
    // const timeOfDay =
    // const greeting = 'Hello';
    // const who = 'World';
    // const timeOfDay = 'Morning';
    // const name = this.state.newMessage.guest.id
    // const hotel = this.state.newMessage.hotel.id
    // const room = this.state.newMessage.guest.room_number

    // const message = `Good ${timeOfDay}, ${name}, and welcome to ${hotel}! Room ${room}
    // is now ready for you. Enjoy your stay, and let us know if you need anything.`;
    // return (
    // <div>

    // </div>
    // );
  }
}

export default connect(mapStoreToProps)(FillMessage);

