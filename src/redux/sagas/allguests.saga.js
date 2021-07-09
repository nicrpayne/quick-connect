import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { response } from 'express';


function* getGuests() {
    try {
        const response = yield axios.get('/api/allGuests/');
        // console.log('getGuestsSaga response.data', response.data);
        yield put({ type: 'SET_ALL_GUESTS', payload: response.data });
    } catch (error) {
        console.log('Error in getGuests', error);
    }
}

function* addGuest(action) {
    console.log('in addGuestsaga', action.payload)
    try {  
        yield axios.post('/api/allGuests/', action.payload)

        // yield put ({type: 'SET_SUCCESS', payload: response.data})
    }   catch (error) {
        console.log('Error in postGuest saga: ', error);
    }
}


function* allGuestsSaga() {
  yield takeLatest('GET_GUESTS', getGuests);
  yield takeLatest('POST_NEW_GUEST', addGuest);
  yield takeLatest('GET_TEMPLATES_GUESTS_HOTELS', getGuests);
}

export default allGuestsSaga;