import { put } from 'redux-saga/effects';
import Severity from '../../message/constants/Severity';
import getData from '../../utils/fetchMethod/getData';
import Endpoint, { urlFactory } from '../../constants/Endpoint';
import actionCreator from '../../utils/actionCreator';
import UserActionType from '../UserActionType';
import MessageActionType from '../../message/MessageActionType';

function* getUserInfoWorker(action) {
  const {
    username,
  } = action?.payload || {};

  const response = yield yield getData({
    url: urlFactory(Endpoint.USER.ALL),
    data: { username },
  });

  const {
    data,
    status,
  } = response || {};

  if (status === 404) {
    yield put(actionCreator(MessageActionType.SNACKBAR, {
      text: 'User not found',
      severity: Severity.ERROR,
    }));
    // yield put(snackbarActionCreator('User not found', Severity.ERROR));
    // Stop fetching
    return yield put(actionCreator({ type: UserActionType.GET_USER_INFO }));
  }

  // console.log(data);

  if (status === 200) {
    const {
      firstname: firstName,
      lastname: lastName,
      email,
    } = data;
    // return yield put(userInfoSuccess(firstname, lastname, email));
    return yield put(actionCreator(UserActionType.GET_USER_INFO, { firstName, lastName, email }));
  }

  return yield put(actionCreator(UserActionType.GET_USER_INFO));
}

export default getUserInfoWorker;
