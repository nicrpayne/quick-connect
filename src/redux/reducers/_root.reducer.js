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


const rootReducer = combineReducers({
  errors,
  loginMode, 
  user,
  templates,
  newTemplate,
  selectedTemplateReducer,
  allGuestsReducer,
  allHotelsReducer,
  messageReducer
});

export default rootReducer;
