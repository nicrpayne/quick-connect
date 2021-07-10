import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewTemplateList from "../NewTemplateList/NewTemplateList";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Form, Segment, Select } from "semantic-ui-react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
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
  // console.log(templateName, "made it to handle input change!");

  handleClick = async (event) => {
    event.preventDefault();
    try {
      await this.props.dispatch({
        type: "POST_NEW_TEMPLATE",
        payload: this.state.newTemplate,
      });
      alert("New Template Added!");

      //this.props.history.push('/messageDisplayPage')
    } catch {}
  };

  render() {
    let template = this.state.newTemplate;
    // console.log('brooooo!', template);
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
              // className=""
              type="text"
              name="templateName"
              placeholder="New Template Name"
              // label="Template Name"
              value={template.name}
              onChange={(event) => this.handleInputChangeFor(event, "name")}
              // onChange={this.handleInputChangeFor("templateName")}
            />
            <Form.Input
              // className=""
              type="text"
              name="body"
              placeholder="New Template Message"
              // label="Template Body"
              value={template.body}
              onChange={(event) => this.handleInputChangeFor(event, "body")}
              // onChange={this.handleInputChangeFor("templateName")}
            />
            
            <Button
              // className=""
              onClick={this.handleClick}
              size={"large"}
              variant={"outlined"}
              disabled={!template.name|| !template.body}
            >
              Add
            </Button>
            </Form>
            </Segment>
            {/* <NewTemplateList newTemplateList={this.props.store.templates} />
            {/* {JSON.stringify(this.props.store.templates)} */}
          </div> 
        </div>

        <Footer />
      </>
    );
  }
}

export default connect(mapStoreToProps)(NewTemplate);
