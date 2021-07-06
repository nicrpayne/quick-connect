import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewGuestList from "../NewGuestList/NewGuestList";
import NewHotelList from "../NewHotelList/NewHotelList";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class NewGuest extends Component {
  state = {
    newGuest: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      companyId: "",
    },
  };

  async componentDidMount() {
    this.props.dispatch({
      type: "GET_TEMPLATES_GUESTS_HOTELS",
    });
  }

  handleInputChangeFor = (event, propertyName) => {
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        [propertyName]: event.target.value,
      },
    });
  };
  // console.log(guestName, "made it to handle input change!");

  handleClick = async (event) => {
    event.preventDefault();
    // console.log('yo', this.state.newGuest)
    try {
      await this.props.dispatch({
        type: "POST_NEW_GUEST",
        payload: this.state.newGuest,
      });
      // alert("New Guest Added!");

      //this.props.history.push('/messageDisplayPage')
    } catch {}
  };

  render() {
    let guest = this.state.newGuest;
    console.log("brooooo! guest variable:", guest);
    return (
      <>
      <Header />
      <Nav />
        <div>
          <h2>{this.state.heading}</h2>
        </div>
        <form>
          <div>
            <input
              // className=""
              type="text"
              name="guestFirstName"
              placeholder="First Name"
              // label="Guest First Name"
              value={guest.first_name}
              onChange={(event) =>
                this.handleInputChangeFor(event, "firstName")
              }
            ></input>
            <input
              // className=""
              type="text"
              name="guestLastName"
              placeholder="Last name"
              // label="Guest Last Name"
              value={guest.last_name}
              onChange={(event) => this.handleInputChangeFor(event, "lastName")}
            ></input>
            <input
              // className=""
              type="text"
              name="body"
              placeholder="Mobile"
              // label="Guest Mobile"
              value={guest.mobile}
              onChange={(event) => this.handleInputChangeFor(event, "mobile")}
            ></input>
            <input
              // className=""
              type="text"
              name="guestEmail"
              placeholder="Email"
              // label="Guest Email"
              value={guest.email}
              onChange={(event) => this.handleInputChangeFor(event, "email")}
            ></input>
            <select
              type="text"
              name="select hotel"
              placeholder="Select Hotel"
              value={guest.companyId}
              onChange={(event) =>
                this.handleInputChangeFor(event, "companyId")
              }
            >
              {this.props.store.allHotelsReducer.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.company_name}, {company.id}
                </option>
              ))}
            </select>
            <br></br>
            <button
              // className=""
              onClick={this.handleClick}
              size={"large"}
              variant={"outlined"}
            >
              Add
            </button>
            <NewGuestList newGuestList={this.props.store.allGuestsReducer} />
            <div></div>
          </div>
        </form>
        <Footer />
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewGuest);
