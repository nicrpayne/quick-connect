import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Typewriter from "typewriter-effect";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import moment from "moment";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "semantic-ui-css/semantic.min.css";

import "../App/App.css";

toast.configure()
class NewMessage extends Component {
  state = {
    newMessage: {
      templateId: "",
      guestId: "",
      mobile: "",
      companyId: "",
      roomNumber: "",
      loading: false,
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
        payload: {
          message: this.newMessage(),
          mobile: this.getMobileByGuestId(this.state.newMessage.guestId),
        },
      }); this.notify();
      this.setState ({
        newMessage: {
          templateId: "",
          guestId: "",
          mobile: "",
          companyId: "",
          roomNumber: "",
          loading: false,
        },
      }); 
    } catch {}
  };

  getGuestNameById(id) {
    let guestName = "";
    this.props.store.allGuestsReducer.map((guest) => {
      if (guest.id == id) {
        guestName = guest.first_name;
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

  getMobileByGuestId(id) {
    let mobile = "";
    this.props.store.allGuestsReducer.map((guest) => {
      if (guest.id == id) {
        mobile = guest.mobile;
      }
    });
    console.log("mobile=", mobile);
    return mobile;
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
notify() {
  return toast('text message sent!');
};

  newMessage(guestId, companyId, roomNumber) {
    return `${this.getGreeting()} ${this.getGuestNameById(
      this.state.newMessage.guestId
    )}, and welcome to${this.getCompanyById(
      this.state.newMessage.companyId
    )}! Room number ${this.getRoomNumberByGuestId(
      this.state.newMessage.guestId
    )} is now ready you. Enjoy your stay, and let us know if you need anything.`;
  }

  render() {
    const newMessage = this.state.newMessage;
    // const notify = () => toast('Here is your toast.');
    // const notify = () => {
    //   toast('basic notification!')
    // }
    return (
      <>
      
        <Header />
        <Nav />

        <div className="ui grid">
          <div className="row">
            <div className="ui fluid column">
              <div className="title icon container">
                <h2 className="ui center aligned header">
                  <img src="/Assets/checklist.png" className="checklist" />
                  Craft a personal, unforgettable guest experience in three
                  steps
                </h2>
              </div>
            </div>
          </div>

          <div className="three column row">
            <div className="four wide column">
              <div className="card-content">
                <div className="step-text">step 1.</div>
                <div className="ui card">
                  <select
                    className="ui selection dropdown"
                    value={newMessage.templateId}
                    onChange={(event) =>
                      this.handleChangeFor(event, "templateId")
                    }
                  >
                    {this.props.store.templates.map((template) => (
                      <option key={template.id} value={template.id}>
                        {template.template_name}
                      </option>
                    ))}
                    <option value="" disabled selected hidden>
                      template
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="vl"></div>

            <div className="four wide column">
              <div className="card-content">
                <div className="step-text">step 2.</div>
                <div className="ui card">
                  <select
                    name="guest name"
                    className="ui selection dropdown"
                    value={newMessage.guestId}
                    onChange={(event) => this.handleChangeFor(event, "guestId")}
                  >
                    {this.props.store.allGuestsReducer.map((guest) => (
                      <option key={guest.id} value={guest.id}>
                        {guest.first_name} {guest.last_name}
                      </option>
                    ))}
                    <option value="" disabled selected hidden>
                      guest name
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="vl2"></div>

            <div className="four wide column">
              <div className="card-content">
                <div className="step-text">step 3.</div>
                <div className="ui card">
                  <select
                    className="ui dropdown selection"
                    value={newMessage.companyId}
                    onChange={(event) =>
                      this.handleChangeFor(event, "companyId")
                    }
                  >
                    {this.props.store.allHotelsReducer.map((company) => (
                      <option key={company.id} value={company.id}>
                        {company.company_name}
                      </option>
                    ))}
                    <option value="" disabled selected hidden>
                      hotel
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="one column row">
            <div className="column">
              <div className="message-display">
                <div className="message-text">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 30,
                      strings: [
                        `${this.getGreeting()} <strong>${this.getGuestNameById(
                          this.state.newMessage.guestId
                        )}</strong>,
                      and welcome to <strong>${this.getCompanyById(
                        this.state.newMessage.companyId
                      )}</strong>.
                      Room number <strong>${this.getRoomNumberByGuestId(
                        this.state.newMessage.guestId
                      )}</strong> is now ready for you.
                      Enjoy your stay, and let us know if you need anything.`,
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="one column row">
            <div className="column">
              <button
                id="open"
                className="ui button"
                disabled={
                  !newMessage.guestId ||
                  !newMessage.companyId ||
                  !newMessage.templateId ||
                  this.state.newMessage.loading
                }
                onClick={this.handleClick}
                
              >
                Send Text Message
              </button>
              {/* {JSON.stringify(this.props.store.messageReducer)} */}
              {/* {JSON.stringify(this.props.store.response)} */}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewMessage);
