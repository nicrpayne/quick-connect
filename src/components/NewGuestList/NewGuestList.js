import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewGuestListItem from "../NewGuestListItem/NewGuestListItem";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";

class NewGuestList extends Component {
  render() {
    // const newGuestListItem = this.props.newGuestList
    const GuestListItem = this.props.newGuestList.map((guest) => {
      return <NewGuestListItem key={guest.id} newGuest={guest} />;
    });

    console.log(
      "new guest list! newGuestList contains:",
      this.props.newGuestList
    );

    return (
      <>
      <Header />
      <Nav />
      <div>
        <ul>
          {GuestListItem}
        </ul>
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewGuestList);


{/* <form class="ui fluid form">
  <div class="field">
    <input type="text" placeholder="First name">
    <div class="ui pointing label">
      Please enter a value
    </div>
  </div>
  <div class="ui divider"></div>
  <div class="field" placeholder="Last Name">
    <div class="ui pointing below label">
      Please enter a value
    </div>
    <input type="text">
  </div>
  <div class="ui divider"></div>
  <div class="inline field">
    <input type="text" placeholder="Username">
    <div class="ui left pointing label">
      That name is taken!
    </div>
  </div>
  <div class="ui divider"></div>
  <div class="inline field">
    <div class="ui right pointing label">
      Your password must be 6 characters or more
    </div>
    <input type="password">
  </div>
</form> */}