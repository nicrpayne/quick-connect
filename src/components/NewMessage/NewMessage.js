import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GenerateMessage from "../GenerateMessage/GenerateMessage";


class NewMessage extends Component {
  state = {
    newMessage: {
      templateId: "",
      guestId: "",
      companyId: "",
    },
  };

  componentDidMount() {
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
        type: 'NEW_MESSAGE',
        payload: this.state.newMessage,
      });

      //this.props.history.push('/messageDisplayPage')
    } catch {}
  };

  render() {
    const newMessage = this.state.newMessage;
    console.log(this.state);
    // const greeting = props or redux from get greeting
    const name = this.state.newMessage.guest_id;
    // console.log('brooooo!', this.props.store)
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
                    {template.template_name}, {template.id}
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
                    {guest.last_name},{guest.id}
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
                    {company.company_name}, {company.id}
                  </option>
                ))}
              </select>
              <br></br>
              <br></br>
              
              <button onClick={this.handleClick}>Generate Message</button>
              <br></br>
              <br></br>
              Your Message: Good Morning 
              <GenerateMessage />
              <br></br>
              {JSON.stringify(this.props.store.messageReducer)}
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewMessage);

// #index.js
// var generateMessage = require('./generateMessage'); // Parameters: templateID, guestID, hotelID
// var fs = require('fs'); //Read data from files
// var readline = require('readline');   //Read input from console
// var sendText = require('./sendText');

// //Used to read input from the console.
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// //Get lists of Available Templates, Guests and Hotels
// var templateList = JSON.parse(fs.readFileSync('./data/templates.json'));
// var guestsList = JSON.parse(fs.readFileSync('./data/Guests.json'));
// var hotelsList = JSON.parse(fs.readFileSync('./data/Companies.json'));
// var phoneNumber = JSON.parse(fs.readFileSync('./data/phoneNumber.json')).phoneNumber;

//___________________________________________________
//THESE ARE MY TEMPLATE INPUTS/OPTIONS****
// logTemplates(templateList);
// rl.question('Enter a choice for Template (1, 2 or 3) : ', function(templateID) {
//   console.log(" ");
//   logGuests(guestsList);
//   rl.question('Enter a choice for Guest (1, 2, 3, 4, 5 or 6) : ', function(guestID){
//     console.log(" ");
//     logHotels(hotelsList);
//     rl.question('Enter a choice for Hotel (1, 2, 3, 4 or 5) : ', function(hotelID){
//       console.log(" ");
//       console.log("Your message: ");
//       console.log(generateMessage(templateID, guestID, hotelID)); //Generate message
//       sendText(generateMessage(templateID, guestID, hotelID), phoneNumber); //Send Text through Twilio
//     });
//   });
// });

//_____________________________________________________
//_____________________________________________________
//SEND THIS AND THE BELOW TO STATE*****
//THIS WILL BE A "CONFIRMATION" LIKE FEEDBACK ASSIGNMENT ACCUMULATING STATE AND SENDING IT TO REDUX
// //Print choices of Templates to the console.
// function logTemplates(list){
//   console.log(" ");
//   console.log(" ");
//   console.log('Pick a Template: ');
//   console.log(" ");
//   for (var i = 0; i < list.length; i++) {
//     console.log(list[i].id + "  " + "Example: " + list[i].sample);
//   }
// }

// //Print choices of Hotels to the console.
// function logHotels(list){
//   console.log(" ");
//   console.log(" ");
//   console.log('Pick a Hotel: ');
//   console.log(" ");
//   for (var i = 0; i < list.length; i++) {
//     console.log(list[i].id + "  " + list[i].company);
//   }
// }

// //Print choices of Guests to the console.
// function logGuests(list){
//   console.log(" ");
//   console.log(" ");
//   console.log('Pick a guest: ');
//   console.log(" ");
//   for (var i = 0; i < list.length; i++) {
//     console.log(list[i].id + "  " + list[i].firstName + " " + list[i].lastName);
//   }
// }
//____________________________________________
//____________________________________________

// state = {
//   expanded: false,
//   open: false,
//   address: {
//       id: this.props.org.id,
//       url: this.props.org.url,
//       logo: this.props.org.logo,
//       address_number: this.props.org.address_number,
//       address_street: this.props.org.address_street,
//       address_unit: this.props.org.address_unit,
//       city: this.props.org.city,
//       state: this.props.org.state,
//       zip: this.props.org.zip,
//       county_id: this.props.org.county_id,
//       notes: this.props.org.notes || '',
//   },
//   demographics: {
//       age_0_3: this.props.org.age_0_3,
//       age_4_7: this.props.org.age_4_7,
//       age_8_12: this.props.org.age_8_12,
//       age_13_18: this.props.org.age_13_18,
//       white: this.props.org.white,
//       black_or_african_american: this.props.org.black_or_african_american,
//       american_indian_or_alaska_native: this.props.org.american_indian_or_alaska_native,
//       asian: this.props.org.asian,
//       native_hawaiian_or_pacific_islander: this.props.org.native_hawaiian_or_pacific_islander,
//       percentage_NSLP: this.props.org.percentage_NSLP
//   }
// }

// setDetailsAddress = (event, type) => {
//   // This updates state with the details submitted
//   this.setState({
//       address: {
//           ...this.state.address,
//           [type]: event.target.value
//       }
//   })
// }

// {
/* <FormControl >
<Select
    defaultValue={this.Companies}
    native className={this.props.classes.dropdownItem}
    onChange={(event) => this.setDetailsAddress(event, 'county_id')}>
    {this.props.reduxStore.counties.map(county =>
        <option key={county.county_id} value={county.county_id} className={this.props.classes.dropdownMenu}>{county.county_name}</option>
    )}
</Select>
</FormControl> */
// }
