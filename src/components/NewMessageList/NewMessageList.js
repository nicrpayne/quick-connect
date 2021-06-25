import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewMessageListItem from "../NewMessageListItem/NewMessageListItem";

class NewMessageList extends Component {


    //gets list of all guests on page load
    componentDidMount() {
        // console.log('in NewMessageList - ComponentDidMount');

        // this.props.dispatch({ type: 'GET_GUESTS' })
    };
  render() {

    const GuestListItem = this.props.newGuestList.map(Guest => {
            return <NewMessageListItem key={Guest.id} newGuest={Guest}/>
            
    });

    // console.log('new guest list! newGuestList contains:', this.props.newGuestList);
    // {JSON.stringify(this.props)}
    return (
      <div> 
        <ul>
            
            {GuestListItem}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewMessageList);