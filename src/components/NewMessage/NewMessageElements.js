

            Your Message:
            <p>
              "{this.getGreeting()}{" "}
              {this.getGuestNameById(this.state.newMessage.guestId)} and welcome
              to
              {this.getCompanyById(this.state.newMessage.companyId)}! Room
              number{" "}
              {this.getRoomNumberByGuestId(this.state.newMessage.guestId)} is
              now ready you. Enjoy your stay, and let us know if you need
              anything."
            </p>
            Date:
            <br></br>
            <button>Send Message</button>




            // import React, { Component } from "react";
// import { connect } from "react-redux";
// import mapStoreToProps from "../../redux/mapStoreToProps";
// import Typewriter from "typewriter-effect";

// class TypeWriter extends Component {
//   render() {


//     return (
//         <div></div>
    //     <>
      <div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("test").pauseFor(2000).deleteAll().start();
          }}
        />
      </div>
//     //   </>
//     )
//   }
// }

// export default connect(mapStoreToProps)(TypeWriter);

//UNIX

  // functionConvertUnix({
  //       // set unix_timestamp to variable from reduxstore
  //       const unix_timestamp = {1486832543};
  //       const date = new Date(unix_timestamp * 1000);
  //       const momentFormattedTime = moment(date).format("L");
  //       console.log(momentFormattedTime);
  // })