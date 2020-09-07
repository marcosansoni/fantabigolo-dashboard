import postLogin from '../method/postLogin';
import { LOGIN } from '../sessionActionCreator';
import { put } from 'redux-saga/effects';
import { snackbarActionCreator } from '../../message/messageActionCreator';
import Severity from '../../message/constants/Severity';

function* loginWorker(action) {

  const{
    username,
    password,
  } = action?.payload || {};

  const response = yield postLogin({username, password});

  // Stop fetching
  if(!response){
    return yield put({type: LOGIN});
  }

  if(response.message === "User not found"){
    yield put(snackbarActionCreator("User not found", Severity.ERROR))
    return yield put({type: LOGIN});
  }

}

export default loginWorker;
