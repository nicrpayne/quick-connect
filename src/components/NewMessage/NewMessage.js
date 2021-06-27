import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GenerateMessage from "../GenerateMessage/GenerateMessage";
import GetGreeting from "../GetGreeting/GetGreeting";
import NewMessageList from "../NewMessageList/NewMessageList";

class NewMessage extends Component {
  state = {
    newMessage: {
      templateId: "",
      guestId: "",
      companyId: "",
      roomNumber: "",
    },
  };

  async componentDidMount() {
    console.log("in component didmount new message");
    this.props.dispatch({ type: "GET_TEMPLATES_GUESTS_HOTELS" });
  }

  handleChangeFor = (event, propertyValue) => {
    // console.log('handlechangefor')
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
    let guestName = '';
    this.props.store.allGuestsReducer.map((guest) => {
      if (guest.id == id) {
        guestName = guest.first_name + " " + guest.last_name;
      }
    });
    return guestName;
  } 

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
                // type="text"
                // name="select template"
                // label="Template Name"
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
              <NewMessageList
                newMessageList={this.props.store.allGuestsReducer}
              />
              <p>
                {" "}
                "<GenerateMessage /> {this.getGuestNameById(this.state.newMessage.guestId)}, and welcome to{" "}
                {this.state.newMessage.companyId}! Room # is now ready you.
                Enjoy your stay, and let us know if you need anything."
              </p>
              // Date:
              {/* {JSON.stringify(this.props.store.allGuestsReducer)} */}
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
