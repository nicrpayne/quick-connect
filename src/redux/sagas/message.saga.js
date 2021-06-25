import { put, takeLatest } from "redux-saga/effects";
// import axios from "axios";

function* addMessage(action) {
  yield put({ type: "SET_NEW_MESSAGE", payload: action.payload });
}
// console.log('in addMessageSaga. payload:', action.payload)

function* MessageSaga() {
  yield takeLatest("NEW_MESSAGE", addMessage);
}

export default MessageSaga;
