import postLogin from '../method/postLogin';
import { LOGIN, loginSuccess } from '../sessionActionCreator';
import { put, select } from 'redux-saga/effects';
import { snackbarActionCreator } from '../../message/messageActionCreator';
import Severity from '../../message/constants/Severity';
import { getSession, getUsername } from '../sessionSelector';
import deleteLogout from '../method/deleteLogout';

function* logoutWorker() {

  const username = yield select(getUsername);
  console.log(username)

  const response = yield deleteLogout({username});

  console.log(response)

  // Stop fetching
  if(!response){
    return yield put({type: LOGIN});
  }

  if(response?.message === "User not found"){
    yield put(snackbarActionCreator("User not found", Severity.ERROR))
    return yield put({type: LOGIN});
  }

  if(response?.code){
    yield put(loginSuccess(username, response.code));
  }

}

export default logoutWorker;
