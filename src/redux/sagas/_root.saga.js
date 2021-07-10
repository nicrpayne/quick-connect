import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import newTemplateSaga from './newtemplate.saga';
import allTemplatesSaga from './alltemplates.saga';
import selectedTemplateSaga from './selectedtemplate.saga';
import allGuestsSaga from './allguests.saga';
import allHotelsSaga from './allhotels.saga';
import MessageSaga from './message.saga';


export default function* rootSaga() {
  yield all([
    loginSaga(), 
    registrationSaga(),
    userSaga(),
    newTemplateSaga(),
    allTemplatesSaga(),
    selectedTemplateSaga(),
    allGuestsSaga(),
    allHotelsSaga(),
    MessageSaga()
  ]);
}
