import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import './Modal.css';

class NewMessageModal extends Component {
  render() {
    return (
      <div>
        <button className="open ">open me</button>

        <div className="modal-container">
            <div className="modal">
                <h1 className="modal-text">
                    modal this certainly is quite the model lorem ipsom
                </h1>
                <br></br>
                <button className="close">
                    Close Modal
                </button>
            </div>

        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewMessageModal);
