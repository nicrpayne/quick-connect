import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { response } from 'express';


function* getHotels() {
    try {
        const response = yield axios.get('/api/allHotels/');
        // console.log('getHotelsSaga response.data', response);
        yield put({ type: 'SET_ALL_HOTELS', payload: response.data });
    } catch (error) {
        console.log('Error in getHotels', error);
    }
}

function* addHotel(action) {
    // console.log('in addHotel saga', action.payload)
    try {  
        yield put({ type: 'SET_LOADING_TRUE'})

        const response = yield axios.post('/api/allHotels/', action.payload)
        console.log("post hotel saga response:", response.data)

        yield put({ type: 'SET_HOTEL_RESPONSE', payload: response.data})

        setTimeout(() => { 
        }, 3000)

        yield put({ type: 'SET_LOADING_FALSE'})

    }   catch (error) {
        console.log('Error in postHotel saga: ', error);
    }
}

function* allHotelsSaga() {
  yield takeLatest('GET_HOTELS', getHotels);
  yield takeLatest('GET_TEMPLATES_GUESTS_HOTELS', getHotels);
  yield takeLatest('POST_NEW_HOTEL', addHotel);
}

export default allHotelsSaga;