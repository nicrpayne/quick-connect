import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addTemplate(action) {
  try {
    yield axios.post('/api/newTemplate', action.payload);

  } catch (error) {
    console.log('Error adding New Template:', error);
  }
}


function* newTemplateSaga() {
  yield takeLatest('POST_NEW_TEMPLATE', addTemplate);
}

export default newTemplateSaga;