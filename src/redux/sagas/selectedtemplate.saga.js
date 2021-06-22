import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* selectTemplate(action) {
    try {
        const details = yield axios.get(`'/api/selectedTemplate/${action.payload}`);
        //console.log('selectedTemplateSaga details.data[0]: ', details.data[0]);
        yield put({ type: "SET_SELECTED_TEMPLATE", payload: details.data[0] });
    } catch (error) {
        console.log('Error in selectTemplate', error);
    }
}


function* selectedTemplateSaga() {
  yield takeLatest("SELECTED_TEMPLATE", selectTemplate);
}

export default selectedTemplateSaga;