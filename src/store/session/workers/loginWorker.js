import { put } from 'redux-saga/effects';
import Severity from '../../message/constants/Severity';
import actionCreator from '../../utils/actionCreator';
import MessageActionType from '../../message/MessageActionType';
import postData from '../../utils/fetchMethod/postData';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';
import SessionActionType from '../SessionActionType';

function* loginWorker(action) {
  const {
    username,
    password,
  } = action?.payload || {};

  const response = yield postData({ url: urlFactory(PathAPI.LOGIN), data: { username, password } });

  const {
    data,
    status,
  } = response || {};

  // console.log(status);
  // // console.log(response.response.data)
  //
  // console.log(data);

  // Stop fetching
  // if(!response){
  //   return yield put({type: LOGIN});
  // }
  console.log(response)

  if (status === 404) {
    // yield put(snackbarActionCreator('User not found', Severity.ERROR));
    yield put(actionCreator(MessageActionType.SNACKBAR, {
      text: 'User not found',
      severity: Severity.ERROR,
    }));
    return yield put({ type: SessionActionType.POST_LOGIN });
  }

  if (status === 200) {
    // yield put(loginSuccess(username, data.code));
    yield put(actionCreator(SessionActionType.POST_LOGIN, { username, session: data.code }));
  }

  return yield put({ type: SessionActionType.POST_LOGIN });
}

export default loginWorker;
