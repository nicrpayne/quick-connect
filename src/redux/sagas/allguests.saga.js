import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getGuests() {
    try {
        const response = yield axios.get('/api/allGuests/');
        // console.log('getGuestsSaga response.data', response.data);
        yield put({ type: 'SET_ALL_GUESTS', payload: response.data });
    } catch (error) {
        console.log('Error in getGuests', error);
    }
}


function* allGuestsSaga() {
  yield takeLatest('GET_GUESTS', getGuests);
  yield takeLatest('GET_TEMPLATES_GUESTS_HOTELS', getGuests);
}

export default allGuestsSaga;