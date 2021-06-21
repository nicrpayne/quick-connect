import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import TemplateList from "../TemplateList/TemplateList";

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class NewTemplate extends Component {
  state = {
    newTemplate: {
      name: '',
      body: ''

    }
  }

  async componentDidMount() {
    this.props.dispatch({
      type: "GET_TEMPLATES",
    });
  }

  handleInputChangeFor = (event, propertyName) => {
    this.setState({
        newTemplate: {
            ...this.state.newTemplate,
            [propertyName]: event.target.value
        }
    })
}
    // console.log(templateName, "made it to handle input change!");
  

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.props.dispatch({
        type: "POST_NEW_TEMPLATE",
        payload: this.state.newTemplate
      });
      alert("New Template Added!");

      //this.props.history.push('/messageDisplayPage')
    } catch {}
  }

  render() {
    let template = this.state.newTemplate
    console.log('brooooo!', template);
    return (
      <>
        <div>
          <h2>{this.state.heading}</h2>
        </div>
        <form>
          <div>
            <input
              type="text"
              name="templateName"
              // label="Template Name"
              value={template.name}
              onChange={(event) => this.handleInputChangeFor(event, 'name')}
              // onChange={this.handleInputChangeFor("templateName")}
            ></input>
            <input
              type="text"
              name="body"
              // label="Template Body"
              value={template.body}
              onChange={(event) => this.handleInputChangeFor(event, 'body')}
              // onChange={this.handleInputChangeFor("templateName")}
            ></input>
            hello
            <button
              // className={this.props.classes.submitButton}
              onClick={this.handleClick}
              size={"large"}
              variant={"outlined"}
            >
              Add
            </button>
            <TemplateList list={this.props.store.templates} />
            {/* {JSON.stringify(this.props.store.templates)} */}
          </div>
        </form>
      </>
    );
  }
}

// const mapStoreToProps = (reduxStore) => ({
//   reduxStore
// })

export default connect(mapStoreToProps)(NewTemplate);