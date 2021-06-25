import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";


class NewTemplateListItem extends Component {
  render() {

    let template = this.props.template;
    // console.log('props template', template)
    return (
      <>
        <div>
        <ul>

          <li key={template.id}> {template.template_id}, {template.template_name}, {template.template_body}</li>
          
        </ul>
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewTemplateListItem);
