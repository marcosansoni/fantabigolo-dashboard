import postLogin from '../method/postLogin';
import { LOGIN, loginSuccess } from '../sessionActionCreator';
import { put } from 'redux-saga/effects';
import { snackbarActionCreator } from '../../message/messageActionCreator';
import Severity from '../../message/constants/Severity';

function* loginWorker(action) {

  const{
    username,
    password,
  } = action?.payload || {};

  const {
    data,
    status,
  } = yield postLogin({username, password});

  console.log(status)
  // console.log(response.response.data)

  console.log(data)

  // Stop fetching
  // if(!response){
  //   return yield put({type: LOGIN});
  // }

  if(status === 404){
    yield put(snackbarActionCreator("User not found", Severity.ERROR))
    return yield put({type: LOGIN});
  }

  if(status === 200){
    yield put(loginSuccess(username, data.code));
  }

  return yield put({type: LOGIN});

}

export default loginWorker;
