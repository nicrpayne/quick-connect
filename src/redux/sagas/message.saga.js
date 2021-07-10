import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendMessage(action) {
    try {
       const response = yield axios.post('/api/message/', action.payload);     
       yield put({ type: 'MESSAGE_SUCCESS', payload: response.data});
      } catch (error) {
        console.log('Error sending message:', error);
        return false;
      }
}

function* MessageSaga() {
  yield takeLatest("NEW_MESSAGE", sendMessage);
}

export default MessageSaga;


