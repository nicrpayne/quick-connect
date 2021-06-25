// import React, { Component } from "react";
// import { connect } from "react-redux";
// import mapStoreToProps from "../../redux/mapStoreToProps";

// class NewGuestListItem extends Component {
  


//   handleClick = (guest) => {
//     // console.log('guest clicked with id: ', emotion);

//     // this.props.dispatch({
//     //   type: "FETCH_SECONDARY_EMOTIONS",
//     //   payload: guest.id,
//     // });
//     // this.props.dispatch({
//     //   type: "PRIMARY_EMOTION_ENTRY",
//     //   payload: guest,
//     // });
//     // this.props.history.push(`/emotions2/${emotion.id}`);
//   };

//   render() {
//     // Define "guest" as param passed from NewGuestList
//     let guest = this.props.guest;
//     return (
//       <>
//         <div>
//           <div key={guest.id}>
//             <div id={guest.id} key={guest.id}>
//               <button
//                 onClick={() => {
//                   this.handleClick(guest);
//                 }}
//                 aria-label={guest.first_name(guest.last_name)}
//               >
//                 {(guest.first_name, guest.last_name)}
//               </button>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default connect(mapStoreToProps)(NewGuestListItem);
