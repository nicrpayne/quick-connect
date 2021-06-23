import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewHotelList from "../NewHotelList/NewHotelList";
// import NewMessage from "../NewMessage/NewMessage";

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class NewHotel extends Component {
  state = {
    newHotel: {
      company_name: "",
      company_city: "",
      company_timezone: "",
    },
  };

  async componentDidMount() {
    this.props.dispatch({
      type: "GET_HOTELS",
    });
  }

  handleInputChangeFor = (event, propertyName) => {
    this.setState({
      newHotel: {
        ...this.state.newHotel,
        [propertyName]: event.target.value,
      },
    });
  };
  // console.log(templateName, "made it to handle input change!");

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.props.dispatch({
        type: "POST_NEW_HOTEL",
        payload: this.state.newTemplate,
      });
      alert("New Template Added!");

      //this.props.history.push('/messageDisplayPage')
    } catch {}
  };

  render() {
    let hotel = this.state.newHotel;
    // console.log('brooooo!', template);
    return (
      <>
        <div>
          <h2>{this.state.heading}</h2>
        </div>
        <form>
          <div>
            <input
              // className=""
              type="text"
              name="templateName"
              placeholder="New Hotel Name"
              // label="Hotel Name"
              value={hotel.company_name}
              onChange={(event) =>
                this.handleInputChangeFor(event, "company_name")
              }

            ></input>
            <input
              // className=""
              type="text"
              name="body"
              placeholder="New Hotel Address"
              // label="Hotel Address"
              value={hotel.company_address}
              onChange={(event) =>
                this.handleInputChangeFor(event, "company_address")
              }

            ></input>
            <input
              // className=""
              type="text"
              name="body"
              placeholder="New Hotel Timezone"
              // label="Hotel Timezone"
              value={hotel.company_timezone}
              onChange={(event) =>
                this.handleInputChangeFor(event, "company_timezone")
              }

            ></input>
            hello
            <button
              // className=""
              onClick={this.handleClick}
              size={"large"}
              variant={"outlined"}
            >
              Add
            </button>
            <NewHotelList newHotelList={this.props.store.allHotelsReducer} />
            {/* {JSON.stringify(this.props.store.allHotelsReducer)} */}
          </div>
        </form>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewHotel);
