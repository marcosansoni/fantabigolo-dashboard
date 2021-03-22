import { put, select } from 'redux-saga/effects';
import Endpoint, { urlFactory } from '../../../../constants/Endpoint';
import EndpointStatus from '../../../../constants/EndpointStatus';
import UserErrorCode from '../constants/UserErrorCode';
import getUserSuccessActionCreator from '../actionCreator/getUserSuccessActionCreator';
import ErrorCode from '../../../../constants/ErrorCode';
import getUserErrorActionCreator from '../actionCreator/getUserErrorActionCreator';
import Error from '../../../../../entities/Error';
import getData from '../../../../utils/fetchMethod/getData';
import User from '../../../../../entities/User';
import sessionSelector from '../../../common/selectors/sessionSelector';

function* getUserWorker() {
  const session = yield select(sessionSelector);

  const response = yield yield getData({
    url: urlFactory(Endpoint.USER.ALL),
    data: { username: session.username },
  });

  const {
    data,
    status,
  } = response || {};

  if (status === EndpointStatus.NOT_FOUND) {
    return yield put(getUserErrorActionCreator([new Error({
      message: 'User not found',
      code: UserErrorCode.NOT_FOUND,
    })]));
  }

  if (status === EndpointStatus.SUCCESS) {
    const user = new User();
    user.mapApi(data);
    return yield put(getUserSuccessActionCreator(user));
  }

  // Generic errorCode
  return yield put(getUserErrorActionCreator([new Error({
    code: ErrorCode.DEFAULT,
  })]));
}

export default getUserWorker;
