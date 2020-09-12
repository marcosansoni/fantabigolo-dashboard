import { put } from 'redux-saga/effects';
import postLogin from '../method/postLogin';
import { REGISTER, registerSuccess } from '../sessionActionCreator';
import { snackbarActionCreator } from '../../message/messageActionCreator';
import Severity from '../../message/constants/Severity';
import postRegister from '../method/postRegister';

function* registerWorker(action) {
  const {
    username,
    password,
    email,
    firstName,
    lastName,
    photo = 'null',
  } = action?.payload || {};

  const response = yield postRegister({
    username,
    password,
    firstname: firstName,
    lastname: lastName,
    email,
    photo,
  });

  const {
    status,
  } = response || {};

  if (status === 500) {
    yield put(snackbarActionCreator('Wrong parameter', Severity.ERROR));
    return yield put({ type: REGISTER });
  }

  if (status === 200) {
    yield put(snackbarActionCreator('Utente creato con successo', Severity.ERROR));

    const responseLogin = yield postLogin({ username, password });

    const {
      status: statusLogin,
      data: dataLogin,
    } = responseLogin || {};

    const { code: session } = dataLogin || {};

    if (statusLogin === 200) {
      return yield put(registerSuccess({
        username, lastName, firstName, email, session, photo,
      }));
    }
  }

  return yield put({ type: REGISTER });
}

export default registerWorker;
