import { put } from 'redux-saga/effects';
import Endpoint, { urlFactory } from '../../../constants/Endpoint';
import postData from '../../../utils/fetchMethod/postData';
import EndpointStatus from '../../../constants/EndpointStatus';
import RegisterErrorCode from '../constants/RegisterErrorCode';
import postRegisterSuccessActionCreator from '../actionCreator/postRegisterSuccessActionCreator';
import ErrorCode from '../../../constants/ErrorCode';
import postRegisterErrorActionCreator from '../actionCreator/postRegisterErrorActionCreator';
import Error from '../../../../entities/Error';
import postLoginActionCreator from '../../login/actionCreator/postLoginActionCreator';

function* postRegisterWorker(action) {
  const {
    username,
    password,
    email,
    firstName,
    lastName,
  } = action?.payload || {};

  const response = yield postData({
    url: urlFactory(Endpoint.REGISTER),
    data: {
      username,
      password,
      firstname: firstName,
      lastname: lastName,
      email,
      photo: 'null',
    },
  });

  const {
    data,
    status,
  } = response || {};

  if (status === EndpointStatus.ERROR) {
    return yield put(postRegisterErrorActionCreator([new Error({
      message: data?.message,
      code: RegisterErrorCode.WRONG_PARAMS,
    })]));
  }

  if (status === EndpointStatus.SUCCESS) {
    yield put(postLoginActionCreator(username, password));
    // In order to stop fetch into register view
    return yield put(postRegisterSuccessActionCreator());
  }

  // Generic errorCode
  return yield put(postRegisterErrorActionCreator([new Error({
    code: ErrorCode.DEFAULT,
  })]));
}

export default postRegisterWorker;
