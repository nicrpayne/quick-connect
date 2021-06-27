import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import moment from "moment";

class NewMessage extends Component {
  state = {
    newMessage: {
      templateId: "",
      guestId: "",
      companyId: "",
      roomNumber: "",
    },
    currentTime: new Date().toLocaleString(),
  };

  async componentDidMount() {
    console.log("in component didmount new message");
    this.props.dispatch({ type: "GET_TEMPLATES_GUESTS_HOTELS" });
  }

  handleChangeFor = (event, propertyValue) => {
    this.setState({
      newMessage: {
        ...this.state.newMessage,
        [propertyValue]: event.target.value,
      },
    });
  };

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.props.dispatch({
        type: "NEW_MESSAGE",
        payload: this.state.newMessage,
      });

      //this.props.history.push('/messageDisplayPage')
    } catch {}
  };

  getGuestNameById(id) {
    let guestName = "";
    this.props.store.allGuestsReducer.map((guest) => {
      if (guest.id == id) {
        guestName = guest.first_name + " " + guest.last_name;
      }
    });
    return guestName;
  }

  getRoomNumberByGuestId(id) {
    let roomNumber = "";
    this.props.store.allGuestsReducer.map((guest) => {
      if (guest.id == id) {
        roomNumber = guest.room_number;
      }
    });
    return roomNumber;
  }

  getCompanyById(id) {
    let companyName = "";
    this.props.store.allHotelsReducer.map((company) => {
      if (company.id == id) {
        companyName = " " + company.company_name;
      }
    });
    return companyName;
  }

  getGreeting() {
    const currentHour = moment(this.state.currentTime).format("H");

    let greeting;
    if ((currentHour >= 0 && currentHour <= 3) || currentHour >= 18) {
      greeting = "Good evening";
    } else if (currentHour >= 4 && currentHour <= 11) {
      greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour <= 17) {
      greeting = "Good afternoon";
    }
    return greeting;
  }

  // functionConvertUnix({
  //       // set unix_timestamp to variable from reduxstore
  //       const unix_timestamp = {1486832543};
  //       const date = new Date(unix_timestamp * 1000);
  //       const momentFormattedTime = moment(date).format("L");
  //       console.log(momentFormattedTime);
  // })

  render() {
    const newMessage = this.state.newMessage;
    console.log(this.state);

    return (
      <>
        <div>
          <h2>Create a New Message</h2>
          <form>
            <div>
              Select Template
              <select
                value={newMessage.templateId}
                onChange={(event) => this.handleChangeFor(event, "templateId")}
              >
                {this.props.store.templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.template_name}
                  </option>
                ))}
              </select>
              <br></br>
              Select Guest
              <select
                type="text"
                name="select guest"
                value={newMessage.guestId}
                onChange={(event) => this.handleChangeFor(event, "guestId")}
              >
                {this.props.store.allGuestsReducer.map((guest) => (
                  <option key={guest.id} value={guest.id}>
                    {guest.first_name}
                    {guest.last_name}
                  </option>
                ))}
              </select>
              <br></br>
              Select Hotel
              <select
                type="text"
                name="select hotel"
                value={newMessage.companyId}
                onChange={(event) => this.handleChangeFor(event, "companyId")}
              >
                {this.props.store.allHotelsReducer.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.company_name}
                  </option>
                ))}
              </select>
              <br></br>
              <br></br>
              <button onClick={this.handleClick}>Generate Message</button>
              <br></br>
              <br></br>
              Your Message:
              <p>
                {" "}
                "{this.getGreeting()}{" "}
                {this.getGuestNameById(this.state.newMessage.guestId)}, and
                welcome to{this.getCompanyById(this.state.newMessage.companyId)}
                {this.state.newMessage.companyId}! Room number{" "}
                {this.getRoomNumberByGuestId(this.state.newMessage.guestId)} is
                now ready you. Enjoy your stay, and let us know if you need
                anything."
              </p>
              Date:
              <br></br>
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewMessage);
