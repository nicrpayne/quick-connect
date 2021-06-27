import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import moment from "moment";
// import GenerateMessage from "../GenerateMessage/GenerateMessage"

class GetGreeting extends Component {
  state = {
    currentTime: new Date().toLocaleString(),
  };

  render() {
    // set unix_timestamp to variable from reduxstore
    const unix_timestamp = 1486832543;
    const date = new Date(unix_timestamp * 1000);
    const momentFormattedTime = moment(date).format("L");
    console.log(momentFormattedTime);

    //convert local time to greeting
    const currentHour = moment(this.state.currentTime).format("H");

    let greeting;
    if ((currentHour >= 0 && currentHour <= 3) || currentHour >= 18) {
      greeting = "Good evening";
    } else if (currentHour >= 4 && currentHour <= 11) {
      greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour <= 17) {
      greeting = "Good afternoon";
    }
    return <div>{greeting}</div>;
  }
}

export default connect(mapStoreToProps)(GetGreeting);
