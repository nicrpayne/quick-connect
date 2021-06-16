import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* addTemplate(action) {
  try {

    console.log('in saga!');
    yield axios.post('/api/newTemplate', action.payload);
    // // passes the username and password from the payload to the server
    // yield axios.post('/api/user/register', action.payload);

    // automatically log a user in after registration
    yield put({ type: 'TEST_REDUCER', payload: action.payload });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    // yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    // console.log('Error with user registration:', error);
    // yield put({ type: 'REGISTRATION_FAILED' });
  }
}


function* newTemplateSaga() {
  yield takeLatest('TEST', addTemplate);
}

export default newTemplateSaga;