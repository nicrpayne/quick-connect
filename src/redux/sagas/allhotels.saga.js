import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getHotels() {
  try {
    const response = yield axios.get("/api/allHotels/");

    yield put({ type: "SET_ALL_HOTELS", payload: response.data });
  } catch (error) {
  }
}

function* addHotel(action) {
  try {
    yield put({ type: "SET_LOADING_TRUE" });

    const response = yield axios.post("/api/allHotels/", action.payload);
  } catch (error) {
  }
}

function* allHotelsSaga() {
  yield takeLatest("GET_HOTELS", getHotels);
  yield takeLatest("GET_TEMPLATES_GUESTS_HOTELS", getHotels);
  yield takeLatest("POST_NEW_HOTEL", addHotel);
}

export default allHotelsSaga;
