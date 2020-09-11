import { put, select } from 'redux-saga/effects';
import { LOGOUT } from '../sessionActionCreator';
import { getUsername } from '../sessionSelector';
import deleteLogout from '../method/deleteLogout';

function* logoutWorker() {
  const username = yield select(getUsername);

  yield deleteLogout({ username });

  return yield put({ type: LOGOUT });

  // console.log(response)
  //
  // // Stop fetching
  // if(!response){
  //   return yield put({type: LOGIN});
  // }
  //
  // if(response?.message === "User not found"){
  //   yield put(snackbarActionCreator("User not found", Severity.ERROR))
  //   return yield put({type: LOGIN});
  // }
  //
  // if(response?.code){
  //   yield put(loginSuccess(username, response.code));
  // }
}

export default logoutWorker;
