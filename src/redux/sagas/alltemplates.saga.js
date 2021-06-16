import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// function* addTemplate(action) {
//   try {
//     let response = yield axios.post('/api/newTemplate', action.payload);
//     yield put({ type: 'NEW_TEMP_REDUCER', payload: response.data });
//   } catch (error) {
//     console.log('Error adding New Template:', error);
//   }
// }

function* getAllTemplates(action) {
  try {
    let response =  axios.get('/api/newTemplate', action.payload);
    yield put({ type: 'DISPLAY_TEMPLATES', payload: response.data });
  } catch (error) {
    console.log('Error displaying templates:', error);
  }
}

function* allTemplatesSaga() {
  yield takeLatest('GET_TEMPLATES', getAllTemplates);
}

export default allTemplatesSaga;