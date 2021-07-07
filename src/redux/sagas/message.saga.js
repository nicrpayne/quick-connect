import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';




function* sendMessage(action) {
    try {


        const response = yield axios.get('/api/message/');
        
       console.log('SEND MESSAGE SAGA', response.data)

        yield axios.post('api/message', action.payload)
        // console.log('sendMessage saga', response.data, action.payload)
      } catch (error) {
        console.log('Error sending message:', error);
      }
}

function* MessageSaga() {
  yield takeLatest("NEW_MESSAGE", sendMessage);
}

export default MessageSaga;


