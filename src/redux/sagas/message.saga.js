import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';




function* sendMessage(action) {
    try {
       const response = yield axios.post('/api/message/', action.payload);
        
       console.log('SEND MESSAGE SAGA', response)

       if(response.status >= 200){
          return true;
       };
       return false;
       //yield put (loading status false)loading state if response is 200
      } catch (error) {
        console.log('Error sending message:', error);
        return false;
      }
}

function* MessageSaga() {
  yield takeLatest("NEW_MESSAGE", sendMessage);
}

export default MessageSaga;


