import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



class GenerateMessage extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    let guest = this.props.store.allGuestsReducer
console.log('in generatemessage props=', guest);

    return (
<>
<div></div>

      <div>
        {/* <h2>{this.state.heading}</h2> */}
        {/* {this.props.getGreeting}  */}
        {this.props.store.allGuestsRecucer}, 
        {/* and welcome to {this.props.store.hotel.company_name}.  */}
        {/* Room {props.props.store.reservationtable.roomNumber}  */}
{/* //       is now ready for you. Enjoy your stay, and let us know if you need anything.
//       Pleased to meet you! */}
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(GenerateMessage);
// "Good morning Ethan, and welcome to Hotel California! Room 304 is now ready you. Enjoy your stay, and let us know if you need anything."



// return () {
//   <div>
//     <SomeComponent key={`some-${someVariable}`} />
//     <AnotherComponent />
//   </div>
// }

// render(
//   return (){
//     <p>
//       {/* {GetGreeting} {this.props.store.guest.name_id}, and welcome to {this.props.store.hotel.company_name}. Room {props.props.store.reservationtable.roomNumber} 
//       is now ready for you. Enjoy your stay, and let us know if you need anything.
//       Pleased to meet you! */}
//       welcome to `{this.props.allHotelsReducer.company_name}`
//     </p>
//     }
// }
// )}

// return (<
  
  
//   Greeting name="Nathan" age={27} occupation="Software Developer" />);



// let newGreeting = 'Good Morning';
// // const message = `some string ${greeting}`;
// function Greeting(props) {


