import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import { Button, Form, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.props.dispatch({
        type: "POST_NEW_HOTEL",
        payload: this.state.newHotel,
      });
      this.notify();
      this.setState({
        newHuest: {
          company_name: "",
          company_city: "",
          company_timezone: ""
        },
      });
      setTimeout(() => {
        this.props.history.push("/home");
      }, 4500);
    } catch {}
  };
  notify() {
    return toast.success("new hotel added!");
  }

  render() {
    let hotel = this.state.newHotel;

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
                  Add a new hotel for assignment to new added guests
                </h2>
              </div>
            </div>
          </div>

          <div>
            <Segment inverted>
              <Form inverted>
                <Form.Input
                  name="company_name"
                  placeholder="Hotel Name"
                  // label="Hotel Name"
                  value={hotel.company_name}
                  onChange={(event) =>
                    this.handleInputChangeFor(event, "company_name")
                  }
                />
                <Form.Input
                  type="text"
                  name="company_address"
                  placeholder="Hotel City"
                  value={hotel.company_city}
                  onChange={(event) =>
                    this.handleInputChangeFor(event, "company_city")
                  }
                />
                <Form.Input
                  type="text"
                  name="company_timezone"
                  placeholder="Timezone"
                  value={hotel.company_timezone}
                  onChange={(event) =>
                    this.handleInputChangeFor(event, "company_timezone")
                  }
                />
                <Button
                  disabled={
                    !hotel.company_name ||
                    !hotel.company_city ||
                    !hotel.company_timezone
                  }
                  className="hotel-button"
                  onClick={this.handleClick}
                  size={"large"}
                  variant={"outlined"}
                >
                  Add
                </Button>
              </Form>
            </Segment>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewHotel);
