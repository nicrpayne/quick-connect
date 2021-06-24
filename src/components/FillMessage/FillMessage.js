import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// // import fillTemplate from "../";


// //(GENERATE MESSAGE) will display query results of selections from NewMessage, GetGreeting, and fillTemplate

class FillMessage extends Component {

//   state = {
//     newMessage: {
//       template: ''
//     }
//   }
  render() {
      const variables = this.props.variables
      console.log('in FillMsg', variables);

    
    // let newMessage = this.state.newMessage
    
    // const greeting = 'Hello';
    // const who = 'World';
    // const timeOfDay = 'Morning';
    // const name = this.state.newMessage.guest.id
    // const hotel = this.state.newMessage.hotel.id
    // const room = this.state.newMessage.guest.room_number

    // const message = `Good ${timeOfDay}, ${name}, and welcome to ${hotel}! Room ${room} is now ready for you. Enjoy your stay, and let us know if you need anything.`;
    
    // //MOVE FROM NEW MESSAGE TO IT'S OWN COMPONENT
    //CONNECT VARIABLES TO DATA BASE (INPUT[onChange(handleInput)], STATE[dispatch BIG_DISPATCH],
    //  REDUX[saga-to-router-to-pg-saga-reduxstore], GENERATEMESSAGE pulls it off the store  ${})
    //ONE GET QUERY WITH EVERYTHING, THIS COMPONENT DRILLS DOWN INTO EACH THINGZ
    //GET TIME OF DAY FOR FIRST VARIABLE FROM GET GREETING


    return (
      
      <>
      
      <div>

      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(FillMessage);