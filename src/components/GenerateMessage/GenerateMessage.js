import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// import fillTemplate from "../";
// import getGreeting from "../";

//(GENERATE MESSAGE) will display query results of selections from NewMessage, GetGreeting, and fillTemplate

class GenerateMessage extends Component {
  render() {
    let templateText;







    function messageParts(templateID, guestID, hotelID) {
      const greeting = getGreeting(); //Pick a greeting

      const hotel = JSON.parse(fs.readFileSync("./Companies.json"))[
        hotelID - 1
      ].company; //Get Hotel Name from ID

      const guest = JSON.parse(fs.readFileSync("./Guests.json"))[
        guestID - 1
      ].firstName; //Get Guest Name from ID

      const template = JSON.parse(fs.readFileSync("./templates.json"))[
        templateID - 1
      ].body; //Get Template from ID

      const room = JSON.parse(fs.readFileSync("./Guests.json"))[
        guestID - 1
      ].reservation.roomNumber; //Get Room number from Guest details

      const timeZone = JSON.parse(fs.readFileSync("./Guests.json"))[
        hotelID - 1
      ].timeZone; //Get TimeZone from Hotel details

        return fillTemplate(template, greeting, hotel, guest, room, timeZone);
    }
    console.log(messageParts());
    return (
      
      <>
      
      <div>
        
        <p>Generate New Message</p>
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(GenerateMessage);

// import fillTemplate from "../";
// import getGreeting from "../";
// module.exports =

// function(templateID, guestID, hotelID) {

//   var greeting = getGreeting(); //Pick a greeting
//   var hotel = JSON.parse(fs.readFileSync('./data/Companies.json'))[hotelID - 1].company;  //Get Hotel Name from ID
//   var guest = JSON.parse(fs.readFileSync('./data/Guests.json'))[guestID - 1].firstName;  //Get Guest Name from ID
//   var template = JSON.parse(fs.readFileSync('./data/templates.json'))[templateID - 1].body;  //Get Template from ID
//   var room = JSON.parse(fs.readFileSync('./data/Guests.json'))[guestID - 1].reservation.roomNumber;  //Get Room number from Guest details
//   var timeZone = JSON.parse(fs.readFileSync('./data/Guests.json')) [hotelID - 1].timeZone; //Get TimeZone from Hotel details

//   return fillTemplate(template, greeting, hotel, guest, room);

// }
