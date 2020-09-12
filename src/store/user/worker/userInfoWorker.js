import { put } from 'redux-saga/effects';
import { snackbarActionCreator } from '../../message/messageActionCreator';
import Severity from '../../message/constants/Severity';
import getUser from '../method/getUser';
import { userInfoSuccess } from '../userActionCreator';

function* userInfoWorker(action) {
  const {
    username,
  } = action?.payload || {};

  const response = yield getUser({ username });

  const {
    data,
    status,
  } = response || {};

  if (status === 404) {
    yield put(snackbarActionCreator('User not found', Severity.ERROR));
    return yield put(userInfoSuccess());
  }

  if (status === 200) {
    const {
      firstname,
      lastname,
      email,
    } = data;
    return yield put(userInfoSuccess(firstname, lastname, email));
  }

  return yield put(userInfoSuccess());
}

export default userInfoWorker;
