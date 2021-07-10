import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getGuests() {
    try {
        const response = yield axios.get('/api/allGuests/');
        yield put({ type: 'SET_ALL_GUESTS', payload: response.data });
    } catch (error) {
    }
}

function* addGuest(action) {
    try {  
        yield axios.post('/api/allGuests/', action.payload)
    }   catch (error) {
    }
}


function* allGuestsSaga() {
  yield takeLatest('GET_GUESTS', getGuests);
  yield takeLatest('POST_NEW_GUEST', addGuest);
  yield takeLatest('GET_TEMPLATES_GUESTS_HOTELS', getGuests);
}

export default allGuestsSaga;