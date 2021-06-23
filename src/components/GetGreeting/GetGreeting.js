import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import moment from "moment";

class GetGreeting extends Component {
  state = {
    currentTime: new Date().toLocaleString(),
  };

  render() {
    const currentHour = moment(this.state.currentTime).format("H");

    let greeting;
    if ((currentHour >= 0 && currentHour <= 3) || currentHour >= 18) {
      greeting = "Good evening";
    } else if (currentHour >= 4 && currentHour <= 11) {
      greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour <= 17) {
      greeting = "Good afteroon";
    }
    return <div>{greeting}</div>;
  }
}
export default connect(mapStoreToProps)(GetGreeting);
