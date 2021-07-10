import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import { Button, Form, Segment, } from "semantic-ui-react";
import 'react-toastify/dist/ReactToastify.css'
class NewTemplate extends Component {
  state = {
    newTemplate: {
      name: "",
      body: "",
    },
  };

  async componentDidMount() {
    this.props.dispatch({
      type: "GET_TEMPLATES",
    });
  }

  handleInputChangeFor = (event, propertyName) => {
    this.setState({
      newTemplate: {
        ...this.state.newTemplate,
        [propertyName]: event.target.value,
      },
    });
  };

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.props.dispatch({
        type: "POST_NEW_TEMPLATE",
        payload: this.state.newTemplate,
      });
      alert("New Template Added!");

    } catch {}
  };

  render() {
    let template = this.state.newTemplate;

    return (
      <>
        <Header />
        <Nav />
        <div className="ui grid">
          <div className="row">
            <div className="ui fluid column">
              <div className="title icon container">
                <h2 className="ui center aligned header">
                  <img src="/Assets/checklist.png" className="checklist" />
                  Adding your own customized template will be coming soon!          
                </h2>
              </div>
            </div>
          </div>

          <div>
            <Segment inverted>
              <Form inverted>
            <Form.Input
              type="text"
              name="templateName"
              placeholder="New Template Name"
              value={template.name}
              onChange={(event) => this.handleInputChangeFor(event, "name")}
            />
            <Form.Input
              type="text"
              name="body"
              placeholder="New Template Message"
              value={template.body}
              onChange={(event) => this.handleInputChangeFor(event, "body")}
            />
            
            <Button
              onClick={this.handleClick}
              size={"large"}
              variant={"outlined"}
              disabled={!template.name|| !template.body}
            >
              Add
            </Button>
            </Form>
            </Segment>
          </div> 
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewTemplate);
