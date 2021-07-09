import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import loginMode from './loginMode.reducer';
import templates from './allTemplates.reducer';
import newTemplate from './newTemplate.reducer';
import selectedTemplateReducer from './selectedTemplate.reducer';
import allGuestsReducer from './allGuests.reducer';
import allHotelsReducer from './allHotels.reducer';
import messageReducer from './message.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  templates,
  newTemplate,
  selectedTemplateReducer,
  allGuestsReducer,
  allHotelsReducer,
  messageReducer
});

export default rootReducer;
