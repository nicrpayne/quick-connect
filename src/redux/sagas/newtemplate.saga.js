import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addTemplate(action) {
  try {

    console.log('in saga!');
    //passes new template from dom to server
    yield axios.post('/api/newTemplate', action.payload);


    // automatically log a user in after registration
    yield put({ type: 'NEW_TEMP_REDUCER', payload: action.payload });
    

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    // yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    // console.log('Error with user registration:', error);
    // yield put({ type: 'REGISTRATION_FAILED' });
  }
}


function* newTemplateSaga() {
  yield takeLatest('NEW_TEMPLATE', addTemplate);
}

export default newTemplateSaga;