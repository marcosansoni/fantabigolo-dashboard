import postLogin from '../method/postLogin';
import { LOGIN, loginSuccess, REGISTER, registerSuccess } from '../sessionActionCreator';
import { put } from 'redux-saga/effects';
import { snackbarActionCreator } from '../../message/messageActionCreator';
import Severity from '../../message/constants/Severity';
import postRegister from '../method/postRegister';

function* registerWorker(action) {

  const{
    username,
    password,
    email,
    firstName,
    lastName,
    photo = 'null'
  } = action?.payload || {};

  const { data, status } = yield postRegister({
      username,
      password,
      firstname: firstName,
      lastname: lastName,
      email,
      photo,
  });


  console.log(status)
  // console.log(response.response.data)

  console.log(data)

  // Stop fetching
  // if(!response){
  //   return yield put({type: LOGIN});
  // }

  if(status === 500){
    yield put(snackbarActionCreator("Wrong parameter", Severity.ERROR))
    return yield put({type: REGISTER});
  }
  //
  if(status === 200){
    const {
      status: statusLogin,
      data: dataLogin,
    } = yield postLogin({username, password});

    const {code: session} = dataLogin;

    console.log(session)
    console.log(statusLogin)

    if(statusLogin === 200){
      yield put(registerSuccess({username, lastName, firstName, email, session, photo}));
      return yield put(snackbarActionCreator("Utente creato con successo", Severity.ERROR))
    }
  }
  //
  return yield put({type: REGISTER});

}

export default registerWorker;
