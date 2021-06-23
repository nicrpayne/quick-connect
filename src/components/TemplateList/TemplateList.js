// import { json } from "express";
import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import TemplateListItem from "../TemplateListItem/TemplateListItem";

class TemplateList extends Component {


  render() {
 
    const templateItem = this.props.templateList.map((template, index) => {
            return <TemplateListItem key={index} template={template}/>
    });
    // console.log('TemplatesList contains:', this.props.list);
    return (
      <div> 
        <ul>
            {templateItem}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(TemplateList);
