// import { json } from "express";
import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import TemplateListItem from "../TemplateListItem/TemplateListItem";

class TemplateList extends Component {


  render() {
      
    //   console.log(Array.isArray(this.props.list))
    // const templates = this.props.list.map((item, index) => {
    //     return <li key={index}>{item.id}</li>
    //     // console.log(item)
    // });
    //    for (const [key, value] in Object.entries(this.props.list)) {
    // let parse = (this.props.list[template]);
    // console.log(`${key}: ${value}`);

    // {this.props.store.templates.map(template =>
    //     <TemplateListItem key={template.id} template={template}/>
    // )};
    const templateItem = this.props.list.map((item, index) => {
            return <TemplateListItem key={index} item={item}/>
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
