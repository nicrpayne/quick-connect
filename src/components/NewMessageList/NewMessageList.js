import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewMessageListItem from "../NewMessageListItem/NewMessageListItem";

class NewMessageList extends Component {


    //gets list of all guests on page load
    // componentDidMount() {
    //     console.log('in NewMessageList - ComponentDidMount');

    //     this.props.dispatch({ type: 'GET_TEMPLATES_GUESTS_HOTELS' })
  
    // };
  render() {

    const NewMessageList = this.props.newMessageList.map(message => {
            return <NewMessageListItem key={message.id} message={message}/>
            
    });

    return (
      <div> 
        <ul>
            
            {NewMessageList}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewMessageList);