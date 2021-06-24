// import React, { Component } from "react";
// import { connect } from "react-redux";
// import mapStoreToProps from "../../redux/mapStoreToProps";
// // import fillTemplate from "../";
// import GetGreeting from "../GetGreeting/GetGreeting";

// //(GENERATE MESSAGE) will display query results of selections from NewMessage, GetGreeting, and fillTemplate

// class GenerateMessage extends Component {

//   state = {
//     newMessage: {
//       template: ''
//     }
//   }
//   render() {
//     let newMessage = this.state.newMessage
    
//     const greeting = 'Hello';
//     const who = 'World';
//     const timeOfDay = 'Morning';
//     const name = this.state.newMessage.guest.id
//     const hotel = this.state.newMessage.hotel.id
//     const room = this.state.newMessage.guest.room_number

//     const message = `Good ${timeOfDay}, ${name}, and welcome to ${hotel}! Room ${room} is now ready for you. Enjoy your stay, and let us know if you need anything.`;
    
//     //MOVE FROM NEW MESSAGE TO IT'S OWN COMPONENT
//     //CONNECT VARIABLES TO DATA BASE (INPUT[onChange(handleInput)], STATE[dispatch BIG_DISPATCH],
//     //  REDUX[saga-to-router-to-pg-saga-reduxstore], GENERATEMESSAGE pulls it off the store  ${})
//     //ONE GET QUERY WITH EVERYTHING, THIS COMPONENT DRILLS DOWN INTO EACH THINGZ
//     //GET TIME OF DAY FOR FIRST VARIABLE FROM GET GREETING


//     return (
      
//       <>
      
//       <div>
//         {/* <GetGreeting timeGreeting = GetGreeting/> */}
//         {/* <p>Generate New Message</p> */}
//       </div>
//       </>
//     );
//   }
// }

// export default connect(mapStoreToProps)(GenerateMessage);

// // import fillTemplate from "../";
// // import getGreeting from "../";
// // module.exports =

// // function(templateID, guestID, hotelID) {

// //   var greeting = getGreeting(); //Pick a greeting
// //   var hotel = JSON.parse(fs.readFileSync('./data/Companies.json'))[hotelID - 1].company;  //Get Hotel Name from ID
// //   var guest = JSON.parse(fs.readFileSync('./data/Guests.json'))[guestID - 1].firstName;  //Get Guest Name from ID
// //   var template = JSON.parse(fs.readFileSync('./data/templates.json'))[templateID - 1].body;  //Get Template from ID
// //   var room = JSON.parse(fs.readFileSync('./data/Guests.json'))[guestID - 1].reservation.roomNumber;  //Get Room number from Guest details
// //   var timeZone = JSON.parse(fs.readFileSync('./data/Guests.json')) [hotelID - 1].timeZone; //Get TimeZone from Hotel details

// //   return fillTemplate(template, greeting, hotel, guest, room);

// // }
