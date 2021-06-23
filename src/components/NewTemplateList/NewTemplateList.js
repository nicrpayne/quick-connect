// import { json } from "express";
import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewTemplateListItem from "../NewTemplateListItem/NewTemplateListItem";

class NewTemplateList extends Component {


  render() {
 
    const NewTemplateItem = this.props.newTemplateList.map((template, index) => {
            return <NewTemplateListItem key={index} template={template}/>
    });
    console.log('NewTemplatesList contains:', this.props.newTemplateList);
    return (
      <div> 
        <ul>
            {NewTemplateItem}
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewTemplateList);
