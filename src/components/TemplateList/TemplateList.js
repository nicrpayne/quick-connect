// import { json } from "express";
import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import TemplateListItem from "../TemplateListItem/TemplateListItem";

class TemplatesList extends Component {
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

    return (
      <div>
        <ul>{/* {templates} */}</ul>
        <div>
          {this.props.store.templates.map((template) => (
            <TemplateListItem key={template.id} template={template} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(TemplatesList);
