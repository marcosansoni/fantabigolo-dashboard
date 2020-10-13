import { put } from 'redux-saga/effects';
import { snackbarActionCreator } from '../../message/messageActionCreator';
import Severity from '../../message/constants/Severity';
import getFriends from '../method/getFriends';
import { userInfoSuccess } from '../friendsActionCreator';

function* friendsListWorker(action) {
  const {
    username,
  } = action?.payload || {};

  console.log('here', username);

  const response = yield getFriends({ username });

  const {
    data,
    status,
  } = response || {};

  if (status === 404) {
    // yield put(snackbarActionCreator('User not found', Severity.ERROR));
    // return yield put(userInfoSuccess());
  }

  if (status === 200) {
    console.log(response);
    // const {
    //   firstname,
    //   lastname,
    //   email,
    // } = data;
    // return yield put(userInfoSuccess(firstname, lastname, email));
  }

  // return yield put(userInfoSuccess());
}

export default friendsListWorker;
