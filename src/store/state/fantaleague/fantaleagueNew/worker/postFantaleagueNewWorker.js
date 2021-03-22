import { put } from 'redux-saga/effects';
import Endpoint, { urlFactory } from '../../../../constants/Endpoint';
import postData from '../../../../utils/fetchMethod/postData';
import EndpointStatus from '../../../../constants/EndpointStatus';
import FantaleagueNewErrorCode from '../constants/FantaleagueNewErrorCode';
import ErrorCode from '../../../../constants/ErrorCode';
import postFantaleagueNewErrorActionCreator from '../actionCreator/postFantaleagueNewErrorActionCreator';
import Error from '../../../../../entities/Error';
import postFantaleagueNewSuccessActionCreator from '../actionCreator/postFantaleagueNewSuccessActionCreator';

function* postFantaleagueNewWorker(action) {
  const {
    fantateam,
    fantaleague,
    visibility,
    competition,
    participants,
  } = action?.payload || {};

  const paramsRequest = {
    leagueName: fantaleague,
    teamName: fantateam,
    inviteVisibility: visibility,
    competition,
    partecipants: participants,
  };

  const response = yield postData({ url: urlFactory(Endpoint.FANTALEAGUE.NEW), data: paramsRequest});

  const {
    data,
    status,
  } = response || {};

  console.log(data);

  if (status === EndpointStatus.NOT_FOUND) {
    return yield put(postFantaleagueNewErrorActionCreator([new Error({
      message: 'Fantaleague not found',
      code: FantaleagueNewErrorCode.NOT_FOUND,
    })]));
  }

  if (status === EndpointStatus.SUCCESS) {
    return yield put(postFantaleagueNewSuccessActionCreator());
  }

  // Generic errorCode
  return yield put(postFantaleagueNewErrorActionCreator([new Error({
    code: ErrorCode.DEFAULT,
  })]));
}

export default postFantaleagueNewWorker;
