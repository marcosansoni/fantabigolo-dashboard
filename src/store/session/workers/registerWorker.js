import { put } from 'redux-saga/effects';
import Severity from '../../message/constants/Severity';
import actionCreator from '../../utils/actionCreator';
import MessageActionType from '../../message/MessageActionType';
import postData from '../../utils/fetchMethod/postData';
import Endpoint, { urlFactory } from '../../constants/Endpoint';
import SessionActionType from '../SessionActionType';

function* registerWorker(action) {
  const {
    username,
    password,
    email,
    firstName,
    lastName,
    photo = 'null',
  } = action?.payload || {};

  const response = yield postData({
    url: urlFactory(Endpoint.REGISTER),
    data: {
      username,
      password,
      firstname: firstName,
      lastname: lastName,
      email,
      photo,
    },
  });

  // const response = yield postRegister({
  //   username,
  //   password,
  //   firstname: firstName,
  //   lastname: lastName,
  //   email,
  //   photo,
  // });

  const {
    status,
  } = response || {};

  if (status === 500) {
    yield put(actionCreator(MessageActionType.SNACKBAR, {
      text: 'Wrong parameter',
      severity: Severity.ERROR,
    }));
    // yield put(snackbarActionCreator('Wrong parameter', Severity.ERROR));
    return yield put({ type: SessionActionType.POST_REGISTER });
  }

  if (status === 200) {
    yield put(actionCreator(MessageActionType.SNACKBAR, {
      text: 'Utente creato con successo',
      severity: Severity.ERROR,
    }));
    // yield put(snackbarActionCreator('Utente creato con successo', Severity.ERROR));
    //
    // const responseLogin = yield postLogin({ username, password });
    const responseLogin = yield postData({ url: urlFactory(Endpoint.LOGIN), data: { username, password } });

    const {
      status: statusLogin,
      data: dataLogin,
    } = responseLogin || {};

    const { code: session } = dataLogin || {};

    if (statusLogin === 200) {
      return yield put(actionCreator(SessionActionType.POST_REGISTER, {
        username, lastName, firstName, email, session, photo,
      }));

      // return yield put(registerSuccess({
      //   username, lastName, firstName, email, session, photo,
      // }));
    }
  }

  return yield put({ type: SessionActionType.POST_REGISTER });
}

export default registerWorker;
