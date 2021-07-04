import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import moment from "moment";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import { Card, Icon, Image, Grid, Column, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "../App/App.css";

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
        <Header />
        <Nav />
        <div className="ui container">
          <div className="ui grid">
            <div className="one column row">
              <div className="twelve wide column">
                <div className="title icon container">
                  <h2 className="ui center aligned header">
                    <i aria-hidden="true" class="users circular icon"></i>
                    <div className="content">send a message</div>
                  </h2>
                </div>
              </div>
            </div>
            <form>
          <Grid columns='equal'>
            
              <Grid.Column>
                <Segment>1
                  <Card>
            {/* <div className="ui cards">
                   <div className="ui card"> */}
                     <div className="select container template">
                       Select Template
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
                       </select>
                    </div>
                    {/* </div>
                    </div> */}
                    </Card>
            </Segment>
          </Grid.Column>
    


                <Grid.Column>
            <Segment>2
            
                {/* <div className="four wide column"> */}
                <div className="ui cards">
            <div className="ui card">
                    <div className="select container guest">
                      Select Guest
                      <select
                        className="ui dropdown"
                        type="text"
                        name="select guest"
                        value={newMessage.guestId}
                        onChange={(event) =>
                          this.handleChangeFor(event, "guestId")
                        }
                      >
                        {this.props.store.allGuestsReducer.map((guest) => (
                          <option key={guest.id} value={guest.id}>
                            {guest.first_name}
                            {guest.last_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  </div>
                {/* </div> */}
                </Segment>
          </Grid.Column>


                <Grid.Column>
            <Segment>3
                {/* <div className="four wide column"> */}
                <div className="ui cards">
                  <div className="ui card">
                    <div className="select container company">
                      Select Hotel
                      <select
                        defaultValue={{ label: "Hotel" }}
                        className="ui dropdown"
                        type="text"
                        name="select hotel"
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
                      </select>
                    </div>
                  </div>
                </div>
                </Segment>
          </Grid.Column>
              

              {/* <div className="one column row">
                <div className="column">
                  <button onClick={this.handleClick}>Generate Message</button>
                </div>
              </div> */}
              {/* </div>
              </div> */}
            
            </Grid>
            </form>
          </div>
        </div>

        {/* <Grid columns='equal'> */}
          {/* <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>2</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>4</Segment>
          </Grid.Column> */}




        {/* </Grid> */}
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewMessage);
