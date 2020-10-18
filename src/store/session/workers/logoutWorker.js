import { put, select } from 'redux-saga/effects';
import PathAPI, { urlFactory } from '../../../constants/PathAPI';
import deleteData from '../../utils/fetchMethod/deleteData';
import SessionActionType from '../SessionActionType';
import sessionSelector from '../selectors/sessionSelector';

function* logoutWorker() {
  try {
    const { username } = yield select(sessionSelector);

    yield deleteData({
      url: urlFactory(PathAPI.LOGOUT),
      data: { username },
    });

    // yield deleteLogout({ username });

    return yield put({ type: SessionActionType.POST_LOGOUT });
  } catch (e) { console.log(e); }

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
