import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// import { withRouter } from 'react-router-dom';

class TemplateListItem extends Component {
  render() {

    let template = this.props.item;

    return (
      <>
        <div>
        <ul>

          <li key={template.id}> {template.id}, {template.template_name}, {template.template_body}</li>
        </ul>
      </div>
        <div>

        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(TemplateListItem);
