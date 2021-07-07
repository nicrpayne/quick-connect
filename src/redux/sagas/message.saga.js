import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';




function* sendMessage(action) {
    try {
        yield axios.post('/api/message', action.payload);
       console.log('sendMessage saga payload:', action.payload)
      } catch (error) {
        console.log('Error sending message:', error);
      }
}

function* MessageSaga() {
  yield takeLatest("NEW_MESSAGE", sendMessage);
}

export default MessageSaga;


