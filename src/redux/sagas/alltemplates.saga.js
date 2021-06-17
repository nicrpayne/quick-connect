import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getAllTemplates(action) {
  try {
    let response =  axios.get('/api/allTemplates', action.payload);
    yield put({ type: 'SET_TEMPLATES', payload: response.data });
    console.log('broooo!', action.payload)
  } catch (error) {
    console.log('Error displaying templates:', error);
  }
}

function* allTemplatesSaga() {
  yield takeLatest('GET_TEMPLATES', getAllTemplates);
}

export default allTemplatesSaga;