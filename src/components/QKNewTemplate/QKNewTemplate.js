import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import TemplatesList from "../TemplatesList/TemplatesList";

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class QKNewTemplate extends Component {
  state = {
    newName: "",
  };

  async componentDidMount() {
    this.props.dispatch({
      type: "GET_TEMPLATES",
    });
  }

  handleInputChangeFor = (templateName) => (event) => {
    this.setState({
      newName: {
        ...this.state.newName,
        [templateName]: event.target.value,
      },
    });
    console.log(templateName, "made it to handle input change!");
  };

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.props.dispatch({
        type: "NEW_TEMPLATE",
        payload: this.state.newName,
      });
      alert("New Template Added!");
    } catch {}
  };

  render() {
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
              value={this.state.templatename}
              // onChange={(event) => this.handleInputChangeFor(event, 'templateName')}
              onChange={this.handleInputChangeFor("templateName")}
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
            <TemplatesList list={this.props.store.templates} />
            {/* {JSON.stringify(this.list)} */}
          </div>
        </form>
      </>
    );
  }
}

// const mapStoreToProps = (reduxStore) => ({
//   reduxStore
// })

export default connect(mapStoreToProps)(QKNewTemplate);
