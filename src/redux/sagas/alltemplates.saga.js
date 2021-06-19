import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getAllTemplates() {
  try {
    const response = yield axios.get('/api/allTemplates');
    yield put({ type: 'SET_TEMPLATES', payload: response.data });

  } catch (error) {
    console.log('Error displaying templates:', error);
  }
}

function* allTemplatesSaga() {
  yield takeLatest('GET_TEMPLATES', getAllTemplates);
}

export default allTemplatesSaga;