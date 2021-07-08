import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewGuestList from "../NewGuestList/NewGuestList";

import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Form, Segment, Select } from "semantic-ui-react";

import { input } from "semantic-ui-react";

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
        <div className="ui grid">
          <div className="row">
            <div className="ui fluid column">
              <div className="title icon container">
                <h2 className="ui center aligned header">
                  <img src="/Assets/checklist.png" className="checklist" />
                  Add a new Guest to connect with below
                </h2>
              </div>
            </div>
          </div>

          <div>
            <Segment inverted>
              <Form inverted>
                <Form.Group widths="equal">
                  <Form.Input
                    // className=""
                    type="text"
                    name="guestFirstName"
                    placeholder="First Name"
                    // label="Guest First Name"
                    value={guest.first_name}
                    onChange={(event) =>
                      this.handleInputChangeFor(event, "firstName")
                    }
                  />
                  <Form.Input
                    // className=""
                    type="text"
                    name="guestLastName"
                    placeholder="Last name"
                    // label="Guest Last Name"
                    value={guest.last_name}
                    onChange={(event) =>
                      this.handleInputChangeFor(event, "lastName")
                    }
                  />
                  <Form.Input
                    // className=""
                    type="text"
                    name="body"
                    placeholder="Mobile"
                    // label="Guest Mobile"
                    value={guest.mobile}
                    onChange={(event) =>
                      this.handleInputChangeFor(event, "mobile")
                    }
                  />
                  <Form.Input
                    // className=""
                    type="text"
                    name="guestEmail"
                    placeholder="Email"
                    // label="Guest Email"
                    value={guest.email}
                    onChange={(event) =>
                      this.handleInputChangeFor(event, "email")
                    }
                  />
                  </Form.Group>


                  <select className="guest-ui-dropdown-selection"
                    
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
                    <option value="" disabled selected hidden>
                      Select Hotel
                    </option>
                  </select>
                
                
                <Button
                  disabled={!guest.firstName || !guest.lastName || !guest.mobile || !guest.email || !guest.companyId}
                  className="guest-button"
                  onClick={this.handleClick}
                  size={"large"}
                  variant={"outlined"}
                >
                  Add
                </Button>
                {/* <NewGuestList
                  newGuestList={this.props.store.allGuestsReducer}
                /> */}
                <div></div>
              </Form>
            </Segment>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewGuest);
