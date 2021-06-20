import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// import { withRouter } from 'react-router-dom';

class TemplateListItem extends Component {
  render() {

    let template = this.props.item;
    // console.log('TemplateListItem', template.template_id, template.template_content)
    return (
      <>
        <div>
        <ul>
          {/* <li key={template.index} id={template.template_id}></li> */}
          {/* <li key={template.template_content}></li> */}
          <li key={template.id}> {template.template_id}</li>
        </ul>
        {/* <h1 key={template.template_content}>Template Content</h1> */}
      </div>
        <div>
            {/* <p>Click Use</p> */}
          {/* <p>{this.props.template.template_id}</p>
          <p>{this.props.template.template_content}</p> */}
          {/* <button onClick={() => {this.handleClick(template);}}>
            {this.props.item.template_content}
          </button> */}
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(TemplateListItem);
