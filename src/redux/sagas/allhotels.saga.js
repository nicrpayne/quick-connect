import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getHotels() {
    try {
        const response = yield axios.get('/api/allHotels/');
        // console.log('getHotelsSaga response.data', response.data);
        yield put({ type: 'SET_ALL_HOTELS', payload: response.data });
    } catch (error) {
        console.log('Error in getHotels', error);
    }
}


function* allHotelsSaga() {
  yield takeLatest('GET_HOTELS', getHotels);
  yield takeLatest('GET_TEMPLATES_GUESTS_HOTELS', getHotels);
}

export default allHotelsSaga;