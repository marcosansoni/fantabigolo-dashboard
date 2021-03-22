import { takeLatest } from 'redux-saga/effects';
import { actionStatusRequest } from '../../../constants/ActionStatus';
import { POST_FANTALEAGUE_NEW } from './actionCreator/postFantaleagueNewActionCreator';
import postFantaleagueNewWorker from './worker/postFantaleagueNewWorker';

const fantaleagueNewWatcher = [
  takeLatest(actionStatusRequest(POST_FANTALEAGUE_NEW), postFantaleagueNewWorker),
];

export default fantaleagueNewWatcher;
