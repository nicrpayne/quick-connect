import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import phone from "phone";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import { Button, Form, Segment } from "semantic-ui-react";

class NewGuest extends Component {
  state = {
    newGuest: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      companyId: "",
    },
    allowLandLine: false,
    showSuccessHelp: false,
    showDangerHelp: false,
    result: [],
    mobile: ""
  };

 

  async componentDidMount() {
    this.props.dispatch({
      type: "GET_TEMPLATES_GUESTS_HOTELS",
    });
    this.validate();
  }

  handleInputChangeFor = (event, propertyName) => {
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        [propertyName]: event.target.value,
      },
    });
    
  };

  validate() {
    const { mobile, allowLandline } = this.state;
    const result = phone(mobile, "", allowLandline);
    if (result.length) {
      this.setState({
        result,
        showDangerHelp: false,
        showSuccessHelp: true,
      });
    } else {
      this.setState({
        result,
        showDangerHelp: true,
        showSuccessHelp: false,
      });
    }
  }

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.props.dispatch({
        type: "POST_NEW_GUEST",
        payload: this.state.newGuest,
      });
      this.notify();
      this.setState({
        newGuest: {
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          companyId: "",
        },
      });
      setTimeout(() => {
        this.props.history.push("/home");
      }, 3500);
    } catch {}
  };
  notify() {
    return toast.success("new guest added!");
  }


  render() {
    let guest = this.state.newGuest;

    const showSuccessHelp = this.state.showSuccessHelp
    const showDangerHelp = this.state.showDangerHelp
    const phoneInput = this.state.newGuest.mobile
    const result = this.state.result


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
                    type="text"
                    name="guestFirstName"
                    placeholder="First Name"
                    value={guest.first_name}
                    onChange={(event) =>
                      this.handleInputChangeFor(event, "firstName")
                    }
                  />
                  <Form.Input
                    type="text"
                    name="guestLastName"
                    placeholder="Last name"
                    value={guest.last_name}
                    onChange={(event) =>
                      this.handleInputChangeFor(event, "lastName")
                    }
                  />
                  <Form.Input
                    id="mobile"
                    className={`input ${
                      showSuccessHelp ? "is-success" : "is-danger"
                    }`}
                    type="text"
                    name="body"
                    placeholder="Mobile"
                    value={guest.mobile}
                    onChange={(event) =>
                      this.handleInputChangeFor(event, "mobile")
                    }
                  />
                  
                  <Form.Input
                    type="text"
                    name="guestEmail"
                    placeholder="Email"
                    value={guest.email}
                    onChange={(event) =>
                      this.handleInputChangeFor(event, "email")
                    }
                  />
                </Form.Group>
                  <p> *Please format mobile number with "+", country code, 10 digit number (+11234567890)</p>
                <select
                  className="guest-ui-dropdown-selection"
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
                  disabled={
                    !guest.firstName ||
                    !guest.lastName ||
                    !guest.mobile ||
                    !guest.email ||
                    !guest.companyId
                  }
                  className="guest-button"
                  onClick={this.handleClick}
                  size={"large"}
                  variant={"outlined"}
                >
                  Add
                </Button>
                <div></div>
              </Form>
            </Segment>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewGuest);
