import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addMessage(action) {
    try {
      yield axios.post('/api/newMessage', action.payload);
      // yield put({ type: 'NEW_TEMP_REDUCER', payload: response.data });
    } catch (error) {
      console.log('Error adding New Message:', error);
    }
  }



function* generateMessageSaga() {
  yield takeLatest('GENERATE_MESSAGE', addMessage);
//   yield takeLatest('GET_TEMPLATES_GUESTS_HOTELS', getAllTemplates);
}

export default generateMessageSaga;